import { client, config } from '../config/lineBot.js';
import { middleware } from '@line/bot-sdk';

// LINE Bot webhook handler
export const handleWebhook = async (req, res) => {
  try {
    if (!client) {
      return res.status(503).json({
        success: false,
        error: 'LINE Bot is not configured. Please set LINE_CHANNEL_ACCESS_TOKEN and LINE_CHANNEL_SECRET environment variables.'
      });
    }

    const events = req.body.events;
    
    // Process each event
    const results = await Promise.all(
      events.map(async (event) => {
        if (event.type === 'message' && event.message.type === 'text') {
          const userMessage = event.message.text.toLowerCase();
          
          let replyMessage = '';
          
          if (userMessage.includes('weather') || userMessage.includes('天氣')) {
            replyMessage = '☀️ Current weather is sunny with 22°C. Have a great day!';
          } else if (userMessage.includes('allergy') || userMessage.includes('過敏')) {
            replyMessage = '🌸 Pollen level is moderate today. Remember to take your medication!';
          } else if (userMessage.includes('help') || userMessage.includes('幫助')) {
            replyMessage = '🌤️ The Breezy Day Bot\n\nI can help you with:\n- Weather information\n- Allergy alerts\n- Daily reminders\n\nJust ask me!';
          } else {
            replyMessage = 'Hello! I\'m The Breezy Day Bot. Type "help" for assistance.';
          }
          
          return client.replyMessage(event.replyToken, {
            type: 'text',
            text: replyMessage
          });
        }
      })
    );
    
    res.json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Send message to specific user
export const sendMessage = async (req, res) => {
  try {
    if (!client) {
      return res.status(503).json({
        success: false,
        error: 'LINE Bot is not configured. Please set LINE_CHANNEL_ACCESS_TOKEN and LINE_CHANNEL_SECRET environment variables.'
      });
    }

    const { userId, message } = req.body;
    
    if (!userId || !message) {
      return res.status(400).json({
        success: false,
        error: 'userId and message are required'
      });
    }
    
    await client.pushMessage(userId, {
      type: 'text',
      text: message
    });
    
    res.json({
      success: true,
      message: 'Message sent successfully'
    });
  } catch (error) {
    console.error('Send message error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
