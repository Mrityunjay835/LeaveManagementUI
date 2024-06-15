import React, { useState } from 'react';
import { loginAdmin } from '../api';
//{ setAdmin }
const LoginAdmin = ({ setAdmin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginAdmin(formData);
      setAdmin(response.data);
      alert('Login successful');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="username" onChange={handleChange} required />
      <input type="text" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login Admin</button>
    </form>
  );
};

export default LoginAdmin;
