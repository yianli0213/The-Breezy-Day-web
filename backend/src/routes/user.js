import express from 'express';
import { getUser, createUser, updateUserPreferences } from '../controllers/userController.js';

const router = express.Router();

// Get user by ID
router.get('/:id', getUser);

// Create new user
router.post('/', createUser);

// Update user preferences
router.put('/:id/preferences', updateUserPreferences);

export default router;
