import 'graphql';
import ApolloClient from 'apollo-boost';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { hot } from 'react-hot-loader';

import { GITHUB_ENDPOINT } from '../constants';

import { UserData } from '../components/UserData';

const client = new ApolloClient({
    uri: GITHUB_ENDPOINT,
    request: operation => {
        const token = process.env.GIT_TOKEN;
        operation.setContext({
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
});

const App = () => (
    <ApolloProvider client={client}>
        <UserData />
    </ApolloProvider>
);

export default hot(module)(App)