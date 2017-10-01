import { GraphQLObjectType } from "graphql";

import ingredient from "./models/Ingredient/IngredientMutation";
import recipe from "./models/Recipe/RecipeMutation";

export default new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    ...ingredient,
    ...recipe
  })
});
