import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from '@apollo/client';

import Router from './routes';
import client from './services/grapqhl';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
