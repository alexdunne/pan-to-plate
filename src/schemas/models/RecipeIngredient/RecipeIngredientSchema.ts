import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLFloat, GraphQLInputObjectType } from "graphql";

import { RecipeIngredientModel } from "../../../models/RecipeIngredientModel";
import { Ingredient } from "../Ingredient/IngredientSchema";
import { Context } from "../../../context";

export const RecipeIngredient = new GraphQLObjectType({
  name: "RecipeIngredient",
  description: "An ingredient that belongs to a specific recipe",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: "The unique recipe ingredient Id"
    },
    ingredientId: {
      type: new GraphQLNonNull(GraphQLID),
      description: "The unique ingredient Id",
      resolve(parent: RecipeIngredientModel, args: any, context: Context) {
        return parent.getIngredientId();
      }
    },
    recipeId: {
      type: new GraphQLNonNull(GraphQLID),
      description: "The unique recipe Id",
      resolve(parent: RecipeIngredientModel, args: any, context: Context) {
        return parent.getRecipeId();
      }
    },
    ingredient: {
      type: new GraphQLNonNull(Ingredient),
      description: "The ingredient detils",
      resolve(parent: RecipeIngredientModel, args: any, context: Context) {
        return context.services.IngredientService.findById(parent.getIngredientId());
      }
    },
    quantity: {
      type: new GraphQLNonNull(GraphQLFloat),
      description: "The quantity of the ingredient required for the recipe"
    }
  })
});

export const RecipeIngredientInput = new GraphQLInputObjectType({
  name: "RecipeIngredientInput",
  description: "An input schema for a recipe ingredient",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: "The unique ingredient Id"
    },
    quantity: {
      type: new GraphQLNonNull(GraphQLFloat),
      description: "The quantity of the ingredient required for the recipe"
    }
  })
});
