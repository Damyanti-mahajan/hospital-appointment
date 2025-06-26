const Appointment = require("../models/Appointment");

exports.book = async (req, res) => {
  const { doctorId, patientId, date } = req.body;
  const appointment = await Appointment.create({ doctor: doctorId, patient: patientId, date });
  res.json(appointment);
};

exports.cancel = async (req, res) => {
  const { id } = req.params;
  const appointment = await Appointment.findByIdAndUpdate(id, { status: "cancelled" }, { new: true });
  res.json(appointment);
};

exports.getAll = async (req, res) => {
  const appointments = await Appointment.find().populate("doctor").populate("patient");
  res.json(appointments);
};
