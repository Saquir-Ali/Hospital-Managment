import Patient from '../models/patientModel.js';

// Create a new patient
export const createPatient = async (req, res) => {
  const { name, email, phone, gender, dateOfBirth, address, medicalHistory } = req.body;

  try {
    const patient = new Patient({
      name,
      email,
      phone,
      gender,
      dateOfBirth,
      address,
      medicalHistory
    });

    await patient.save();
    res.status(201).json(patient);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create patient', error: error.message });
  }
};

// Get all patients
export const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch patients', error: error.message });
  }
};

// Get a patient by ID
export const getPatientById = async (req, res) => {
  const { id } = req.params;

  try {
    const patient = await Patient.findById(id);

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch patient', error: error.message });
  }
};

// Update a patient by ID
export const updatePatient = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, gender, dateOfBirth, address, medicalHistory } = req.body;

  try {
    const updatedPatient = await Patient.findByIdAndUpdate(
      id,
      { name, email, phone, gender, dateOfBirth, address, medicalHistory },
      { new: true }
    );

    if (!updatedPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.status(200).json(updatedPatient);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update patient', error: error.message });
  }
};

// Delete a patient by ID
export const deletePatient = async (req, res) => {
  const { id } = req.params;

  try {
    const patient = await Patient.findByIdAndDelete(id);

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.status(200).json({ message: 'Patient deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete patient', error: error.message });
  }
};
