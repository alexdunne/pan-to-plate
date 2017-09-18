import { GraphQLObjectType, GraphQLInputObjectType, GraphQLNonNull, GraphQLID, GraphQLString } from "graphql";

import GraphQLISO8601Type from "../../types/GraphQLISO8601Type";

export const Ingredient = new GraphQLObjectType({
  name: "Ingredient",
  description: "An individual ingredient",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: "The unique ingredient Id"
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The name of the ingredient"
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLISO8601Type),
      description: "The datetime the ingredient was first created at"
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLISO8601Type),
      description: "The datetime the ingredient was last updated at"
    },
    deletedAt: {
      type: GraphQLISO8601Type,
      description: "The datetime the ingredient was deleted at"
    }
  })
});

export const IngredientInput = new GraphQLInputObjectType({
  name: "IngredientInput",
  description: "An input schema for an ingredient",
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The name of the ingredient"
    }
  })
});
