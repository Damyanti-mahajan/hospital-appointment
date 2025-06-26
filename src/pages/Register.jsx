import React, { useState } from 'react';
import { register } from '../services/api';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'patient' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(form);
    alert('Registered!');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4">
      <h3 className="text-xl font-semibold">Register</h3>
      <input name="name" placeholder="Name" onChange={handleChange} className="w-full border p-2 rounded" />
      <input name="email" placeholder="Email" onChange={handleChange} className="w-full border p-2 rounded" />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full border p-2 rounded" />
      <select name="role" onChange={handleChange} className="w-full border p-2 rounded">
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
      </select>
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Register</button>
    </form>
  );
}