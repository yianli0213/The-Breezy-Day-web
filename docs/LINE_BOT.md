# LINE Bot Integration Guide

## Overview

The Breezy Day uses LINE Bot to send timely notifications to users about weather conditions and allergy alerts.

## Features

- Weather updates
- Allergy level alerts
- Daily reminders
- Interactive commands
- Personalized notifications based on user preferences

## Setup

### 1. Create LINE Bot

1. Go to [LINE Developers Console](https://developers.line.biz/)
2. Create a new provider (or use existing)
3. Create a Messaging API channel
4. Get your Channel Access Token and Channel Secret

### 2. Configure Environment

Add to `backend/.env`:
```
LINE_CHANNEL_ACCESS_TOKEN=your_channel_access_token
LINE_CHANNEL_SECRET=your_channel_secret
```

### 3. Set Webhook URL

Set the webhook URL in LINE Developers Console:
```
https://your-domain.com/api/linebot/webhook
```

## Bot Commands

### User Commands

- `weather` or `天氣` - Get current weather
- `allergy` or `過敏` - Get allergy information
- `help` or `幫助` - Show help message

### Automated Notifications

The bot can send automated notifications:

1. **Morning Update**: Daily weather and allergy forecast
2. **Alert Notifications**: High pollen level warnings
3. **Reminder**: Medication reminders for allergy sufferers

## Implementation

### Webhook Handler

The webhook endpoint (`/api/linebot/webhook`) processes incoming messages and replies appropriately.

### Push Messages

The `/api/linebot/send` endpoint allows the system to push messages to users.

Example:
```javascript
POST /api/linebot/send
{
  "userId": "U1234567890abcdef",
  "message": "High pollen alert! Take precautions today."
}
```

## Message Types

### Text Messages
Simple text-based updates and alerts

### Flex Messages (Future)
Rich, interactive message cards with:
- Weather visuals
- Allergy level indicators
- Action buttons

## Best Practices

1. **Keep messages concise**: Users appreciate brief, actionable information
2. **Use emojis**: Visual indicators help convey information quickly (☀️🌸💊)
3. **Personalize**: Tailor messages based on user location and preferences
4. **Timing**: Send notifications at appropriate times (morning, before outdoor activities)
5. **Frequency**: Don't overwhelm users with too many messages

## Scheduled Notifications

Implement cron jobs or scheduled tasks to send:
- Daily morning updates (7:00 AM)
- Evening forecasts (6:00 PM)
- Emergency alerts (as needed)

## Privacy & Data

- User LINE IDs are stored securely
- Users can opt-in/opt-out of notifications
- No personal data is shared with third parties
- Users can delete their data at any time
