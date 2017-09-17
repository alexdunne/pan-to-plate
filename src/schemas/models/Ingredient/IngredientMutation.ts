import { GraphQLNonNull } from "graphql";

import { Ingredient, IngredientInput } from "./IngredientSchema";
import { IngredientService } from "../../../services";
import { Context } from "../../../context";
import { IngredientModel } from "../../../models/IngredientModel";

export interface ICreateIngredientMutationArguments {
  name: string;
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
  }
};
