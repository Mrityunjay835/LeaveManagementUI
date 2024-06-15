import React from 'react';
import { logoutEmployee } from '../api';

const Logout = ({ setUser }) => {
  const handleLogout = async () => {
    try {
      await logoutEmployee();
      setUser(null);
      alert('Logged out successfully');
    } catch (error) {
      alert('Error logging out');
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
