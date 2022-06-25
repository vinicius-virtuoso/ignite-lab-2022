import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4oetb9z255g01xi9vvd4ubm/master",
  cache: new InMemoryCache(),
});
