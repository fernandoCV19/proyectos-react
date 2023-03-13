import React from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
  const formatUsername = (username) => `@${username}`;
  const users = [
    {
      username: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true,
    },
    {
      username: 'pheralb',
      name: 'Pablo H.',
      isFollowing: false,
    },
    {
      username: 'PacoHdezs',
      name: 'Paco Hdez',
      isFollowing: true,
    },
    {
      username: 'TMChein',
      name: 'Tomas',
      isFollowing: false,
    },
  ];

  return (
    <section className='App'>
      {users.map((user, i) => {
        const { username, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={i}
            username={username}
            name={name}
            isFollowingInitialValue={isFollowing}
            formatUsername={formatUsername}
          />
        );
      })}
    </section>
  );
}
