import express from 'express';
import {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor
} from '../controllers/doctorController.js';

const router = express.Router();

router.post('/doctors', createDoctor);
router.get('/doctors', getAllDoctors);
router.get('/doctors/:id', getDoctorById);
router.put('/doctors/:id', updateDoctor);
router.delete('/doctors/:id', deleteDoctor);

export default router;
