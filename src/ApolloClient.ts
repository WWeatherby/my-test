import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache({
  typePolicies: {
    query_root: {
      queryType: true,
    },
  },
});
const httpLink: ApolloLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
  headers: { 'Content-Type':'application/json', authorization: 'Bearer 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' },
});

async function getClient() {
  return new ApolloClient({
    cache,
    link: httpLink,
  });
}

export default getClient;
