
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patientId: {
    type: String, 
    required: true,
  },
  doctorId: {
    type: String, 
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['booked', 'cancelled'],
    default: 'booked',
  },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
