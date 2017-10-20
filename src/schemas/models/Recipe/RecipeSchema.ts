import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString, GraphQLList, GraphQLInputObjectType } from "graphql";

import GraphQLISO8601Type from "../../types/GraphQLISO8601Type";
import { RecipeIngredient, RecipeIngredientInput } from "../RecipeIngredient/RecipeIngredientSchema";
import { RecipeStep, RecipeStepInput } from "../RecipeStep/RecipeStepSchema";
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
    recipeIngredients: {
      type: new GraphQLList(RecipeIngredient),
      description: "The recipe ingredients required for the recipe",
      resolve(parent: any, args: any, context: Context) {
        return context.services.RecipeIngredientService.findByRecipe(parent.id);
      }
    },
    steps: {
      type: new GraphQLList(RecipeStep),
      description: "The steps for the recipe",
      resolve(parent: any, args: any, context: Context) {
        return context.services.RecipeStepService.findByRecipe(parent.id);
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

export const RecipeInput = new GraphQLInputObjectType({
  name: "RecipeInput",
  description: "An input schema for a recipe",
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The name of the recipe"
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The description of the recipe"
    },
    ingredients: {
      type: new GraphQLList(RecipeIngredientInput),
      description: "A list of ingredient ids and their quantities for the recipe"
    },
    steps: {
      type: new GraphQLList(RecipeStepInput),
      description: "A list of steps for the recipe"
    }
  })
});
