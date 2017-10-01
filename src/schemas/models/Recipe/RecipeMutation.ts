import { GraphQLNonNull, GraphQLID } from "graphql";

import { Recipe, RecipeInput } from "./RecipeSchema";
import { Ingredient } from "../Ingredient/IngredientSchema";
import { Context } from "../../../context";
import { RecipeModel } from "../../../models/RecipeModel";
import { RecipeIngredientModel } from "../../../models/RecipeIngredientModel";

interface ICreateRecipeMutationArguments {
  name: string;
  description: string;
  ingredients: [
    {
      id: string;
      quantity: number;
    }
  ];
}

export default {
  createRecipe: {
    type: Recipe,
    description: "Create a new recipe",
    args: {
      newRecipe: {
        type: new GraphQLNonNull(RecipeInput),
        description: "The new recipe name, description, and an array of ingredients with the required quantity"
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

      return recipe.toJson();
    }
  }
};
