import express from 'express';
import { createUser ,} from '../controllers/userController.js';
import { bookAppointment } from '../controllers/appointmentController.js';
import { createPatient, deletePatient, getAllPatients, getPatientById, updatePatient } from '../controllers/patientController.js';

const router = express.Router();

router.post('/users', createUser);
router.post('/appointments', bookAppointment);
router.post('/patients', createPatient);
router.get('/patients', getAllPatients);
router.get('/patients/:id', getPatientById);
router.put('/patients/:id', updatePatient);
router.delete('/patients/:id', deletePatient);

export default router;
