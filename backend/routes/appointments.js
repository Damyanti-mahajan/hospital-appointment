const express = require('express');
const Appointment = require('../models/Appointment');
const router = express.Router();

// Book Appointment
router.post('/book', async (req, res) => {
  const { patientId, doctorId, date } = req.body;
  console.log('📥 Booking request:', req.body); // Log input

  try {
    const appointment = new Appointment({ patientId, doctorId, date });
    await appointment.save();
    res.status(201).json({ message: 'Appointment booked successfully' });
  } catch (err) {
    console.error('❌ Error booking appointment:', err); // Log backend error
    res.status(500).json({ message: 'Booking failed', error: err.message });
  }
});
// Get list of all doctors
router.get('/doctors', async (req, res) => {
  try {
    const doctors = await User.find({ role: 'doctor' }).select('name _id');
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch doctors', error: err.message });
  }
});

// ✅ Get All Appointments
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate('doctorId', 'name')
      .populate('patientId', 'name');
    res.json(
      appointments.map((apt) => ({
        _id: apt._id,
        date: apt.date,
        status: apt.status,
        doctor: { name: apt.doctorId.name },
        patient: { name: apt.patientId.name },
      }))
    );
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch appointments', error: err.message });
  }
});

// ✅ Cancel Appointment
router.post('/cancel/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) return res.status(404).json({ message: 'Appointment not found' });

    appointment.status = 'cancelled';
    await appointment.save();

    res.json({ message: 'Appointment cancelled successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Cancellation failed', error: err.message });
  }
});

module.exports = router;
