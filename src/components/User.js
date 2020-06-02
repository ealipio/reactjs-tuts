import React, { useContext } from 'react';
import UserContext from '../context/userContext';

const User = () => {
  const currentUser = useContext(UserContext);
  console.log(currentUser);
  return <h2>{currentUser.username}</h2>;
};

export default User;
