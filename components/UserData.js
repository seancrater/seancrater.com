/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';

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
  
    &:first-of-type {
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
        <header>
          <Text type="h1">{name}</Text>
          <Text type="h2">{bio}</Text>
        </header>
      </div>
    );
  }
};

export default UserData;