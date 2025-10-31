import express from 'express';
import { getAllergyData, getAllergyForecast } from '../controllers/allergyController.js';

const router = express.Router();

// Get allergy data
router.get('/current', getAllergyData);

// Get allergy forecast
router.get('/forecast', getAllergyForecast);

export default router;
