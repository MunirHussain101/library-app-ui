import { ApolloClient, InMemoryCache, split, HttpLink } from '@apollo/client';
import { API_BASE_URL, API_PROTOCOL, WS_PROTOCOL } from '../constants/config'
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws'

// For HTTP Calls
const httpLink = new HttpLink({
  uri: `${API_PROTOCOL}://${API_BASE_URL}/graphql`
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
      httpLink
    )
  : httpLink;

export const apolloClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
