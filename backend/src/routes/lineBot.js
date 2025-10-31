import express from 'express';
import { handleWebhook, sendMessage } from '../controllers/lineBotController.js';

const router = express.Router();

// LINE Bot webhook endpoint
router.post('/webhook', handleWebhook);

// Send message to user
router.post('/send', sendMessage);

export default router;
