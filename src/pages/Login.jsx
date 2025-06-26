import React, { useState } from 'react';
import { login } from '../services/api';
import { saveToken } from '../utils/auth';

export default function Login({ onLogin }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(form);
    saveToken(res.data.token);
    onLogin(res.data.user);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4 mb-6">
      <h3 className="text-xl font-semibold">Login</h3>
      <input name="email" placeholder="Email" onChange={handleChange} className="w-full border p-2 rounded" />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full border p-2 rounded" />
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Login</button>
    </form>
  );
}