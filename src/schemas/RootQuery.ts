import { GraphQLObjectType } from "graphql";

import ingredient from "./models/Ingredient/IngredientQuery";

export default new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    ...ingredient
  })
});
