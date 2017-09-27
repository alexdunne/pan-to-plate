import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString, GraphQLList } from "graphql";

import GraphQLISO8601Type from "../../types/GraphQLISO8601Type";
import { Ingredient } from "../Ingredient/IngredientSchema";
import { Context } from "../../../context";

export const Recipe = new GraphQLObjectType({
  name: "Recipe",
  description: "A recipe for a meal",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: "The unique recipe Id"
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The name of the recipe"
    },
    description: {
      type: GraphQLString,
      description: "The description of the recipe"
    },
    ingredients: {
      type: new GraphQLList(Ingredient),
      description: "The ingredients required for the recipe",
      resolve(parent: any, args: any, context: Context) {
        return context.services.IngredientService.findByRecipe(parent.id);
      }
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLISO8601Type),
      description: "The datetime the recipe was first created at"
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLISO8601Type),
      description: "The datetime the recipe was last updated at"
    },
    deletedAt: {
      type: GraphQLISO8601Type,
      description: "The datetime the recipe was deleted at"
    }
  })
});
