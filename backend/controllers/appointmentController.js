import Appointment from '../models/appointmentModel.js';
import Patient from '../models/patientModel.js';
import Doctor from '../models/doctorModel.js';

export const bookAppointment = async (req, res) => {
  const { patientName, doctorName, date, time, reason } = req.body;

  // console.log(patientId)

  try {
    // const patient = await Patient.findById(patientId);
    // const doctor = await Doctor.findById(doctorId);

    // console.log(patient)
    // console.log(doctor)
    // if (!patient || !doctor) {
    //   return res.status(404).json({ message: 'Patient or Doctor not found' });
    // }

    const appointment = await Appointment.create({
      patientName,
      doctorName,
      date,
      time,
      reason
    });

    res.status(201).json(appointment);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
