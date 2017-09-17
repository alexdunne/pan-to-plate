import { GraphQLSchema } from "graphql";

import query from "./RootQuery";
import mutation from "./RootMutation";

export default new GraphQLSchema({ query });
