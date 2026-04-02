import { useState } from 'react';

const getUser = () => {
  let session;
  try {
    session = JSON.parse(localStorage.getItem('activeSession'));
  } catch {
    session = null;
  }
  let users;
  try {
    users = JSON.parse(localStorage.getItem('users') || '[]');
  } catch {
    users = [];
  }

  if (session) {
    const user = users.find(u => u.email === session.email);
    if (user) {
      return { name: user.name, email: user.email };
    }
  }

  return { name: 'User', email: 'user@example.com' };
};

export const useUser = () => {
  const [user, setUser] = useState(getUser());
  return { ...user, refreshUser: () => setUser(getUser()) };
};
