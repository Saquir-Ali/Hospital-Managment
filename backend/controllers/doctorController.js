import Doctor from '../models/doctorModel.js';

// Create a new doctor
export const createDoctor = async (req, res) => {
  const { name, specialization, availableDays, availableTime, phone, email } = req.body;

  try {
    const doctor = new Doctor({
      name,
      specialization,
      availableDays,
      availableTime,
      phone,
      email
    });

    await doctor.save();
    res.status(201).json(doctor);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create doctor', error: error.message });
  }
};

// Get all doctors
export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch doctors', error: error.message });
  }
};

// Get a doctor by ID
export const getDoctorById = async (req, res) => {
  const { id } = req.params;

  try {
    const doctor = await Doctor.findById(id);

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch doctor', error: error.message });
  }
};

// Update a doctor by ID
export const updateDoctor = async (req, res) => {
  const { id } = req.params;
  const { name, specialization, availableDays, availableTime, phone, email } = req.body;

  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      { name, specialization, availableDays, availableTime, phone, email },
      { new: true }
    );

    if (!updatedDoctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.status(200).json(updatedDoctor);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update doctor', error: error.message });
  }
};

// Delete a doctor by ID
export const deleteDoctor = async (req, res) => {
  const { id } = req.params;

  try {
    const doctor = await Doctor.findByIdAndDelete(id);

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.status(200).json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete doctor', error: error.message });
  }
};
