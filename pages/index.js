import fetch from 'isomorphic-unfetch';
import React from 'react';

import Link from 'next/link';
import Head from '../components/Head';
import Nav from '../components/Nav';
import UserData from '../components/UserData';

import { GITHUB_ENDPOINT } from '../constants';
import { getBaseUrl } from '../utils';

const Home = ({ user }) => (
  <div>
    <Head ogImage={user.avatarUrl} />
    <Nav />
    <UserData user={user} />
  </div>
);

Home.getInitialProps = async ({ req }) => {
  const base = getBaseUrl(req);
  const response = await fetch(base + GITHUB_ENDPOINT);
  const { data: { user } } = await response.json();
  return {
    user
  };
};

export default Home;
