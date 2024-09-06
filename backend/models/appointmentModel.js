import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  patientName: {
    type: String,
    ref: 'Patient',
    required: true
  },
  doctorName: {
    type: String,
    ref: 'Doctor',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String, // '14:30'
    required: true
  },
  status: {
    type: String,
    enum: ['Scheduled', 'Completed', 'Cancelled'],
    default: 'Scheduled'
  },
  reason: {
    type: String,
    required: true
  },
  notes: {
    type: String
  }
}, { timestamps: true });

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
