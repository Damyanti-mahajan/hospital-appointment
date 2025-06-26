
import React, { useState } from 'react';
import { bookAppointment } from '../services/api';

export default function BookAppointment({ user }) {
  const [form, setForm] = useState({ doctorId: '', date: '' });


  const doctors = [
    { _id: 'doc1', name: 'Dr. Anjali Sharma' },
    { _id: 'doc2', name: 'Dr. Rahul Mehta' },
    { _id: 'doc3', name: 'Dr. Priya Verma' },
  ];

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await bookAppointment({ ...form, patientId: user._id });
      alert('Appointment Booked!');
    } catch (err) {
      console.error(' Booking failed:', err);
      alert('Booking failed: ' + (err.message || 'Unknown error'));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md space-y-4 mt-6"
    >
      <h3 className="text-xl font-semibold">Book Appointment</h3>

      {/* Dropdown for hardcoded doctors */}
      <select
        name="doctorId"
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      >
        <option value="">Select Doctor</option>
        {doctors.map((doc) => (
          <option key={doc._id} value={doc._id}>
            {doc.name}
          </option>
        ))}
      </select>

      <input
        name="date"
        type="datetime-local"
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
      >
        Book
      </button>
    </form>
  );
}
