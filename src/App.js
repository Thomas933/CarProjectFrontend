import React from "react";

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from "apollo-boost";
import Brand from './app/brand/brand';

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});


const App = () => (
  <ApolloProvider client={client}>
      <Brand />
  </ApolloProvider>
);

export default App;
