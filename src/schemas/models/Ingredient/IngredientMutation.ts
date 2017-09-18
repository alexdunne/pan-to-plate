import { GraphQLNonNull, GraphQLID } from "graphql";

import { Ingredient, DeletedIngredient, IngredientInput } from "./IngredientSchema";
import { IngredientService } from "../../../services";
import { Context } from "../../../context";
import { IngredientModel } from "../../../models/IngredientModel";

interface ICreateIngredientMutationArguments {
  name: string;
}

interface IUpdateIngredientMutationArguments {
  id: string;
  updatedIngredient: {
    name: string;
  };
}

interface IDeleteIngredientMutationArguments {
  id: string;
}

export default {
  createIngredient: {
    type: Ingredient,
    description: "Create a new ingredient",
    args: {
      newIngredient: {
        type: new GraphQLNonNull(IngredientInput),
        description: "The new ingredient including a name"
      }
    },
    async resolve(source: any, { newIngredient }: { newIngredient: ICreateIngredientMutationArguments }, context: Context) {
      const model = new IngredientModel().setName(newIngredient.name);

      if (!model.validate()) {
        throw new Error("Invalid ingredient");
      }

      const ingredient = await context.services.IngredientService.create(model);
      return ingredient.toJson();
    }
  },
  updateIngredient: {
    type: Ingredient,
    description: "Update an existing ingredient",
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
        description: "The id of the ingredient to update"
      },
      updatedIngredient: {
        type: new GraphQLNonNull(IngredientInput),
        description: "The updated ingredients field"
      }
    },
    async resolve(source: any, { id, updatedIngredient }: IUpdateIngredientMutationArguments, context: Context) {
      const model = new IngredientModel().setId(id).setName(updatedIngredient.name);

      if (!model.validate()) {
        throw new Error("Invalid ingredient");
      }

      const ingredient = await context.services.IngredientService.update(model);
      return ingredient.toJson();
    }
  },
  deleteIngredient: {
    type: DeletedIngredient,
    description: "Delete an existing ingredient",
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
        description: "The id of the ingredient to delete"
      }
    },
    async resolve(source: any, { id }: IDeleteIngredientMutationArguments, context: Context) {
      await context.services.IngredientService.delete(id);

      const ingredient = await context.services.IngredientService.findById(id);
      return ingredient.toJson();
    }
  }
};
