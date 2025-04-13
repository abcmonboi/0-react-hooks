"use client";

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_APIS, // <-- dùng biến môi trường,
  cache: new InMemoryCache(),
});

export const ApolloClientProvider = ({ children }: React.PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export const GET_LOCATIONS = gql`
  query ($locale: String!, $search: String!) {
    pages {
      search(locale: $locale, search: $search) {
        results {
          title
          path
        }
      }
    }
  }
`;

export const GET_LOCATION = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;
