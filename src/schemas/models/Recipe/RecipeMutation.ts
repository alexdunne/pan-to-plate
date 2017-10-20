import { GraphQLNonNull, GraphQLID } from "graphql";

import { Recipe, RecipeInput } from "./RecipeSchema";
import { Ingredient } from "../Ingredient/IngredientSchema";
import { Context } from "../../../context";
import { RecipeModel } from "../../../models/RecipeModel";
import { RecipeIngredientModel } from "../../../models/RecipeIngredientModel";
import { RecipeStepModel } from "../../../models/RecipeStepModel";

interface ICreateRecipeMutationArguments {
  name: string;
  description: string;
  ingredients: [
    {
      id: string;
      quantity: number;
    }
  ];
  steps: [ICreateStepArgument];
}

interface IUpdateRecipeMutationArguments {
  id: string;
  updatedRecipe: {
    name: string;
    description: string;
    ingredients: [
      {
        id: string;
        quantity: number;
      }
    ];
    steps: [IUpdateStepArgument];
  };
}

interface ICreateStepArgument {
  description: string;
  orderNumber: number;
}

interface IUpdateStepArgument {
  id?: string;
  description: string;
  orderNumber: number;
}

export default {
  createRecipe: {
    type: Recipe,
    description: "Create a new recipe",
    args: {
      newRecipe: {
        type: new GraphQLNonNull(RecipeInput),
        description: "The new recipe name, description, steps and ingredients with the required quantity"
      }
    },
    async resolve(source: any, { newRecipe }: { newRecipe: ICreateRecipeMutationArguments }, context: Context) {
      const recipeModel = new RecipeModel().setName(newRecipe.name).setDescription(newRecipe.description);

      if (!recipeModel.validate()) {
        throw new Error("Invalid Recipe");
      }

      const recipe = await context.services.RecipeService.create(recipeModel);

      await Promise.all(
        newRecipe.ingredients.map(async (recipeIngredient): Promise<void> => {
          const model = new RecipeIngredientModel()
            .setRecipeId(recipe.getId())
            .setIngredientId(recipeIngredient.id)
            .setQuantity(recipeIngredient.quantity);

          await context.services.RecipeIngredientService.create(model);
        })
      );

      await Promise.all(
        newRecipe.steps.map(async (recipeStep: ICreateStepArgument): Promise<void> => {
          const model = new RecipeStepModel()
            .setRecipeId(recipe.getId())
            .setDescription(recipeStep.description)
            .setOrderNumber(recipeStep.orderNumber);

          await context.services.RecipeStepService.create(model);
        })
      );

      return recipe.toJson();
    }
  },
  updateRecipe: {
    type: Recipe,
    description: "Update an existing recipe",
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
        description: "The id of the recipe to update"
      },
      updatedRecipe: {
        type: new GraphQLNonNull(RecipeInput),
        description: "The updated recipes fields"
      }
    },
    async resolve(source: any, { id, updatedRecipe }: IUpdateRecipeMutationArguments, context: Context) {
      const recipeModel = new RecipeModel()
        .setId(id)
        .setName(updatedRecipe.name)
        .setDescription(updatedRecipe.description);

      if (!recipeModel.validate()) {
        throw new Error("Invalid recipe");
      }

      const recipe = await context.services.RecipeService.update(recipeModel);

      await context.services.RecipeIngredientService.deleteForRecipe(recipe.getId());

      await Promise.all(
        updatedRecipe.ingredients.map(async (recipeIngredient): Promise<void> => {
          const model = new RecipeIngredientModel()
            .setRecipeId(recipe.getId())
            .setIngredientId(recipeIngredient.id)
            .setQuantity(recipeIngredient.quantity);

          await context.services.RecipeIngredientService.create(model);
        })
      );

      const existingSteps = await context.services.RecipeStepService.findByRecipe(recipe.getId());

      const stepChangeSet = updatedRecipe.steps.reduce((acc: any, step: IUpdateStepArgument): Object => {
        if (step.id == null) {
          acc.newSteps.push(step);
          acc.stepIdsToKeep = step.id;
          return acc;
        }

        const foundStep = existingSteps.filter((step: RecipeStepModel) => step.getId() == step.id);

        if (foundStep.length == 1) {
          acc.updatedSteps.push(step);
          acc.stepIdsToKeep = step.id;
          return acc;
        }

        return acc;
      }, {});

      const removedStepIds = existingSteps
        .map((step: RecipeStepModel) => step.getId())
        .filter(stepId => !stepChangeSet.stepIdsToKeep.includes(stepId));

      await Promise.all(
        stepChangeSet.newSteps.map(async (recipeStep: IUpdateStepArgument): Promise<void> => {
          const model = new RecipeStepModel()
            .setRecipeId(recipe.getId())
            .setDescription(recipeStep.description)
            .setOrderNumber(recipeStep.orderNumber);

          await context.services.RecipeStepService.create(model);
        })
      );

      await Promise.all(
        stepChangeSet.updatedSteps.map(async (recipeStep: IUpdateStepArgument): Promise<void> => {
          const model = new RecipeStepModel()
            .setId(recipeStep.id)
            .setRecipeId(recipe.getId())
            .setDescription(recipeStep.description)
            .setOrderNumber(recipeStep.orderNumber);

          await context.services.RecipeStepService.update(model);
        })
      );

      await Promise.all(
        removedStepIds.map(async (recipeStepId): Promise<void> => {
          await context.services.RecipeStepService.delete(recipeStepId);
        })
      );

      return recipe.toJson();
    }
  }
};
