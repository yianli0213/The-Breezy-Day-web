# Development Guide

## Getting Started

This guide will help you set up and run The Breezy Day application locally.

## Prerequisites

- Node.js v18+ and npm v9+
- MySQL v8+ (optional - backend will run without it)
- LINE Developer Account (optional - for LINE Bot features)
- Git

## Quick Start

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/yianli0213/The-Breezy-Day-web-.git
cd The-Breezy-Day-web-

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### 2. Configure Environment

```bash
# Frontend configuration
cd frontend
cp .env.example .env
# Edit .env if you need to change the API URL

# Backend configuration
cd ../backend
cp .env.example .env
# Edit .env with your database and LINE Bot credentials
```

### 3. Run the Application

**Frontend (Development Server):**
```bash
cd frontend
npm run dev
# Opens at http://localhost:5173
```

**Backend (API Server):**
```bash
cd backend
npm run dev
# Runs at http://localhost:5000
```

## Project Structure

### Frontend (`/frontend`)

```
frontend/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── WeatherCard.jsx
│   │   ├── AllergyCard.jsx
│   │   └── Footer.jsx
│   ├── pages/           # Page components (future)
│   ├── hooks/           # Custom React hooks
│   │   └── useApi.js
│   ├── services/        # API service layer
│   │   └── api.js
│   ├── utils/           # Utility functions
│   ├── styles/          # Global styles
│   ├── App.jsx          # Main App component
│   ├── App.css          # App-specific styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── public/              # Static assets
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

### Backend (`/backend`)

```
backend/
├── src/
│   ├── routes/          # API route definitions
│   │   ├── weather.js
│   │   ├── allergy.js
│   │   ├── user.js
│   │   └── lineBot.js
│   ├── controllers/     # Request handlers
│   │   ├── weatherController.js
│   │   ├── allergyController.js
│   │   ├── userController.js
│   │   └── lineBotController.js
│   ├── config/          # Configuration files
│   │   ├── database.js
│   │   └── lineBot.js
│   ├── models/          # Data models (future)
│   ├── utils/           # Utility functions
│   └── index.js         # Entry point
├── database/            # Database schemas
│   └── schema.sql
└── package.json         # Dependencies and scripts
```

## Available Scripts

### Frontend

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend

- `npm run dev` - Start development server with auto-reload (nodemon)
- `npm start` - Start production server

## API Endpoints

### Weather API
- `GET /api/weather/current?location=Taipei` - Get current weather
- `GET /api/weather/forecast?location=Taipei&days=7` - Get forecast

### Allergy API
- `GET /api/allergy/current?location=Taipei` - Get current allergy data
- `GET /api/allergy/forecast?location=Taipei&days=7` - Get forecast

### User API
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id/preferences` - Update user preferences

### LINE Bot API
- `POST /api/linebot/webhook` - LINE Bot webhook (LINE platform only)
- `POST /api/linebot/send` - Send message to user

## Database Setup

1. **Create Database:**
```bash
mysql -u root -p
CREATE DATABASE breezy_day;
exit
```

2. **Run Schema:**
```bash
mysql -u root -p breezy_day < backend/database/schema.sql
```

3. **Configure Connection:**
Edit `backend/.env`:
```
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=breezy_day
```

## LINE Bot Setup

1. Create a LINE Bot at [LINE Developers Console](https://developers.line.biz/)
2. Get Channel Access Token and Channel Secret
3. Configure in `backend/.env`:
```
LINE_CHANNEL_ACCESS_TOKEN=your_access_token
LINE_CHANNEL_SECRET=your_channel_secret
```
4. Set webhook URL: `https://your-domain.com/api/linebot/webhook`

**Note:** LINE Bot features are optional. The application will run without them.

## Technology Stack Details

### Frontend Technologies

**React 19.1**
- Latest React with concurrent features
- Hooks-based component architecture
- Fast refresh for development

**Vite 7.1**
- Lightning-fast HMR
- Optimized production builds
- ES modules support

**GSAP 3.13**
- Professional-grade animations
- Timeline-based sequences
- Performance optimized

### Backend Technologies

**Express 5.1**
- Modern async/await support
- Robust routing
- Middleware architecture

**MySQL2**
- Promise-based MySQL client
- Connection pooling
- Prepared statements

**LINE Bot SDK**
- Official LINE messaging API
- Webhook handling
- Push/reply messages

## Development Workflow

### 1. Create Feature Branch
```bash
git checkout -b feature/your-feature
```

### 2. Make Changes
- Edit code in `src/` directories
- Follow existing code style
- Add comments for complex logic

### 3. Test Changes
```bash
# Frontend
cd frontend
npm run lint
npm run build

# Backend
cd backend
node src/index.js
# Test API endpoints with curl or Postman
```

### 4. Commit Changes
```bash
git add .
git commit -m "Description of changes"
git push origin feature/your-feature
```

## Troubleshooting

### Frontend Issues

**Port Already in Use:**
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

**Build Errors:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Backend Issues

**Database Connection Failed:**
- Check MySQL is running: `mysql -u root -p`
- Verify credentials in `.env`
- The app will run without database (with warnings)

**LINE Bot Not Working:**
- Verify credentials in `.env`
- Check webhook URL is publicly accessible
- The app will run without LINE Bot features

**Port Already in Use:**
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

## Performance Optimization

### Frontend
- Use React.memo() for expensive components
- Lazy load routes with React.lazy()
- Optimize images and assets
- Enable gzip compression

### Backend
- Use database connection pooling
- Cache frequent API responses
- Implement rate limiting
- Use compression middleware

## Security Best Practices

1. **Never commit `.env` files**
2. **Validate all user inputs**
3. **Use HTTPS in production**
4. **Implement authentication for sensitive endpoints**
5. **Keep dependencies updated**
6. **Use environment variables for secrets**

## Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy dist/ folder
```

### Backend (Heroku/Railway)
```bash
cd backend
# Set environment variables in platform
# Deploy with git push or platform CLI
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [GSAP Documentation](https://greensock.com/docs/)
- [Express Documentation](https://expressjs.com)
- [LINE Bot SDK](https://line.github.io/line-bot-sdk-nodejs/)

## Support

For issues or questions:
- Open an issue on GitHub
- Check existing documentation
- Review code comments

---

Happy coding! 🌤️
