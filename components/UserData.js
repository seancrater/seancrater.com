import React, { Component } from 'react';

const UserData = ({ user }) => {
  if (user) {
    const { avatarUrl, bio, name } = user;

    return (
      <div>
        <img alt={name} src={avatarUrl} />
        <h1>{name}</h1>
        <h2>{bio}</h2>
      </div>
    );
  }
};

export default UserData;