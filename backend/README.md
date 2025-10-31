# Backend - The Breezy Day

This is the backend server for The Breezy Day web application.

## Features

- RESTful API for weather and allergy data
- SQL database integration for data storage and analysis
- LINE Bot integration for user notifications
- User preferences management
- CORS enabled for frontend communication

## Technology Stack

- Node.js & Express.js
- MySQL/MySQL2
- LINE Bot SDK
- dotenv for environment configuration

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

3. Set up the database:
```bash
# Run the schema.sql file in your MySQL database
mysql -u your_user -p breezy_day < database/schema.sql
```

4. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Weather
- `GET /api/weather/current?location=Taipei` - Get current weather
- `GET /api/weather/forecast?location=Taipei&days=7` - Get weather forecast

### Allergy
- `GET /api/allergy/current?location=Taipei` - Get current allergy data
- `GET /api/allergy/forecast?location=Taipei&days=7` - Get allergy forecast

### Users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id/preferences` - Update user preferences

### LINE Bot
- `POST /api/linebot/webhook` - LINE Bot webhook endpoint
- `POST /api/linebot/send` - Send message to user

## Environment Variables

See `.env.example` for required environment variables.

## Database Schema

The database schema is located in `database/schema.sql`.

## Development

Run the server in development mode with auto-reload:
```bash
npm run dev
```

## Production

Start the production server:
```bash
npm start
```
