/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { Component } from 'react';

import { background, primary } from '../styles/variables';

const styles = css`
  background-color: ${background};
  color: ${primary};
`;

const UserData = ({ user }) => {
  if (user) {
    const { avatarUrl, bio, name } = user;

    return (
      <div css={styles}>
        <img alt={name} src={avatarUrl} />
        <h1>{name}</h1>
        <h2>{bio}</h2>
      </div>
    );
  }
};

export default UserData;