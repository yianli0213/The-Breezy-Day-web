import { Client } from '@line/bot-sdk';
import dotenv from 'dotenv';

dotenv.config();

const config = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN || 'dummy-token-for-development',
  channelSecret: process.env.LINE_CHANNEL_SECRET || 'dummy-secret-for-development'
};

// Only initialize client if proper credentials are provided
let client = null;
if (process.env.LINE_CHANNEL_ACCESS_TOKEN && process.env.LINE_CHANNEL_SECRET) {
  client = new Client(config);
  console.log('✅ LINE Bot client initialized');
} else {
  console.log('⚠️  LINE Bot credentials not configured. LINE Bot features will be disabled.');
}

export { client, config };
