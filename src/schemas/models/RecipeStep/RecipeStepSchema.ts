import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLFloat, GraphQLInputObjectType, GraphQLString, GraphQLInt } from "graphql";

import { RecipeStepModel } from "../../../models/RecipeStepModel";
import { Context } from "../../../context";
import GraphQLISO8601Type from "../../types/GraphQLISO8601Type";

export const RecipeStep = new GraphQLObjectType({
  name: "RecipeStep",
  description: "A step that belongs to a specific recipe",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: "The unique recipe step Id"
    },
    recipeId: {
      type: new GraphQLNonNull(GraphQLID),
      description: "The unique recipe Id",
      resolve(parent: RecipeStepModel, args: any, context: Context) {
        return parent.getRecipeId();
      }
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The step description"
    },
    orderNumber: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "The order number for the step"
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLISO8601Type),
      description: "The datetime the step was first created at"
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLISO8601Type),
      description: "The datetime the step was last updated at"
    },
    deletedAt: {
      type: GraphQLISO8601Type,
      description: "The datetime the step was deleted at"
    }
  })
});

export const RecipeStepInput = new GraphQLInputObjectType({
  name: "RecipeStepInput",
  description: "An input schema for a recipe step",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "The unique step Id"
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The new description for the step"
    },
    orderNumber: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "The order number for the step"
    }
  })
});
