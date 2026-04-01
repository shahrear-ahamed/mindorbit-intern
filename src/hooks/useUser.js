import { useState } from 'react';

const getUser = () => {
  const stored = JSON.parse(localStorage.getItem('registeredUser'));
  return {
    name: stored?.name || 'User',
    email: stored?.email || 'user@example.com',
  };
};

export const useUser = () => {
  const [user, setUser] = useState(getUser());
  return { ...user, refreshUser: () => setUser(getUser()) };
};
