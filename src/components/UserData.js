import React from 'react';

export const UserData = () => (
    ({ loading, error, data }) => {
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
    }
);