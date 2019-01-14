/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { Component } from 'react';

import Text from './Text';
import { background, primary, unit } from '../styles/variables';

const styles = css`
  background-color: ${background};
  color: ${primary};

  align-items: center;
  display: flex;
  padding: ${unit};

  > div {
    width: 50%;
  
    &:first-child {
      padding-right: ${unit};
    }
  }

  img {
    border-radius: 50%;
    height: auto;
    max-width: 100%;
  }
`;

const UserData = ({ user }) => {
  if (user) {
    const { avatarUrl, bio, name } = user;

    return (
      <div css={styles}>
        <div>
          <img alt={name} src={avatarUrl} />
        </div>
        <div>
          <Text type="h1">{name}</Text>
          <h2>{bio}</h2>
        </div>
      </div>
    );
  }
};

export default UserData;