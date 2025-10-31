import express from 'express';
import { getWeather, getWeatherForecast } from '../controllers/weatherController.js';

const router = express.Router();

// Get current weather
router.get('/current', getWeather);

// Get weather forecast
router.get('/forecast', getWeatherForecast);

export default router;
