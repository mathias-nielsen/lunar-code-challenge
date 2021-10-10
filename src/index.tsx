import * as React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import 'normalize.css';
import { App } from './App';
import { createClient } from './graphql_server/mock_server';
import './index.css';

const run = async () => {
  const client = await createClient();

  ReactDOM.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

run();
