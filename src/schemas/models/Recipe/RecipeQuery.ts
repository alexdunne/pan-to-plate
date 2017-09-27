import { GraphQLNonNull, GraphQLID, GraphQLList } from "graphql";

import { Recipe } from "./RecipeSchema";
import { Context } from "../../../context";

export default {
  recipes: {
    type: new GraphQLList(Recipe),
    async resolve(source: any, args: any, context: Context) {
      return context.services.RecipeService.findAll();
    }
  },
  recipe: {
    type: Recipe,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
        description: "The id of the recipe"
      }
    },
    async resolve(source: any, { id }: { id: string }, context: Context) {
      return context.services.RecipeService.findById(id);
    }
  }
};
