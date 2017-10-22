import { GraphQLNonNull, GraphQLString, GraphQLList } from "graphql";

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
      slug: {
        type: new GraphQLNonNull(GraphQLString),
        description: "The slug of the recipe"
      }
    },
    async resolve(source: any, { slug }: { slug: string }, context: Context) {
      return context.services.RecipeService.findBySlug(slug);
    }
  }
};
