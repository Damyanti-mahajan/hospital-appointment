import React, { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import BookAppointment from './pages/BookAppointment';
import AppointmentsList from './pages/AppointmentsList';


function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-gray-50 rounded shadow">
      {!user ? (
        <>
          <Login onLogin={setUser} />
          <Register />
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">Welcome, {user.name} ({user.role})</h2>

          {user.role === 'patient' && (
            <>
              <BookAppointment user={user} />
              <AppointmentsList />
            </>
          )}

          {user.role === 'doctor' && (
            <>
              <AppointmentsList />
              {/* Optional: Add a 'MyPatientsList' or 'DoctorDashboard' component here */}
            </>
          )}
        </>
      )}
    </div>
  );
}


export default App;

