import { GraphQLObjectType } from "graphql";

import ingredient from "./models/Ingredient/IngredientMutation";

export default new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    ...ingredient
  })
});
