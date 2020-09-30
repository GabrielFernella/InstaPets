import React from 'react';
import Token from './endpoint/Token';
import UserPost from './endpoint/UserPost';

const Api = () => {
  return (
    <div>
      <h2>User Post</h2>
      <UserPost />
      <h2>Token</h2>
      <Token />
    </div>
  );
};

export default Api;

// aula 05
