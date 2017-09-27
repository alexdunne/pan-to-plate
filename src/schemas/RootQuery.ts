import { GraphQLObjectType } from "graphql";

import ingredient from "./models/Ingredient/IngredientQuery";
import recipe from "./models/Recipe/RecipeQuery";

export default new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    ...ingredient,
    ...recipe
  })
});
