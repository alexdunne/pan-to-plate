import { GraphQLNonNull, GraphQLID } from "graphql";

import { Ingredient } from "./IngredientSchema";
import { IngredientService } from "../../../services";
import { Context } from "../../../context";

export default {
  ingredient: {
    type: Ingredient,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
        description: "The id of the ingredient"
      }
    },
    async resolve(source: any, { id }: { id: string }, context: Context) {
      return context.services.IngredientService.findById(id);
    }
  }
};
