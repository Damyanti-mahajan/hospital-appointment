import React, { useEffect, useState } from 'react';
import { getAppointments, cancelAppointment } from '../services/api';

export default function AppointmentsList() {
  const [appointments, setAppointments] = useState([]);

  const loadAppointments = async () => {
    const res = await getAppointments();
    setAppointments(res.data);
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  const handleCancel = async (id) => {
    await cancelAppointment(id);
    loadAppointments();
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Appointments</h2>
      <ul className="space-y-4">
        {appointments.map((apt) => (
          <li key={apt._id} className="p-4 border rounded bg-gray-100">
            <strong>{apt.date}</strong> — Doctor: {apt.doctor.name}, Patient: {apt.patient.name}, Status: {apt.status}
            {apt.status === 'booked' && (
              <button onClick={() => handleCancel(apt._id)} className="ml-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                Cancel
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

