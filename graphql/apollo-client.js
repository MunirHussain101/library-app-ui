import { ApolloClient, InMemoryCache, split, HttpLink } from '@apollo/client';
import { API_BASE_URL, API_PROTOCOL, WS_PROTOCOL } from '../constants/config'
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws'
import { LocalStorageConstants } from '@/constants/localStorageContants';
import { setContext } from 'apollo-link-context';

// For HTTP Calls
const httpLink = new HttpLink({
  uri: `${API_PROTOCOL}://${API_BASE_URL}/graphql`
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem(LocalStorageConstants.token)
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

// For Socker
const wsLink = typeof window !== "undefined" ? new WebSocketLink({
  uri: `${WS_PROTOCOL}://${API_BASE_URL}/graphql`,
  options: {
    reconnect: true
  }
}) : null;

const splitLink = typeof window !== "undefined" && wsLink != null
  ? split(
      ({ query }) => {
        const def = getMainDefinition(query);
        return (
          def.kind === "OperationDefinition" &&
          def.operation === "subscription"
        );
      },
      wsLink,
      authLink.concat(httpLink) 
    )
  : authLink.concat(httpLink) ;

export const apolloClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
