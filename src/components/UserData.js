import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';

export const UserData = () => (
    <Query
        query={gql`
            {
                user(login: "seancrater") {
                    login
                    name
                    bio
                    avatarUrl
                }
            }
        `}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error</p>;

            const { avatarUrl, bio, name } = data.user;

            return (
                <div>
                    <img alt={name} src={avatarUrl} />
                    <h1>{name}</h1>
                    <h2>{bio}</h2>
                </div>
            );
        }}
    </Query>
);