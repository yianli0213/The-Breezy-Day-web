# The Breezy Day 🌤️

網際網路概論黑客松提案 - 提高幸福感預防過敏的功能型網站

A comprehensive web application designed to improve happiness and prevent allergies by providing real-time weather information, allergy tracking, and personalized notifications through LINE Bot.

## 🎯 Project Goals

This project aims to:
- Practice **Human-Computer Interaction (HCI)** principles
- Improve **frontend-backend integration** skills
- Create a user-friendly interface for health and wellness
- Provide actionable information to prevent allergy triggers

## 🛠️ Technology Stack

### Frontend
- **React** - Modern UI library for building interactive interfaces
- **Vite** - Fast build tool and development server
- **GSAP** - Professional-grade animation library
- **HTML/CSS/JavaScript** - Core web technologies

### Backend
- **Node.js & Express** - Server-side JavaScript runtime and framework
- **MySQL** - Relational database for data storage
- **LINE Bot SDK** - Integration with LINE messaging platform
- **RESTful API** - Clean API design for frontend-backend communication

### Development Tools
- **npm** - Package manager
- **ESLint** - Code quality and consistency
- **Git** - Version control

## 📁 Project Structure

```
The-Breezy-Day-web-/
├── frontend/              # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── services/      # API service layer
│   │   ├── utils/         # Utility functions
│   │   └── styles/        # Global styles
│   └── package.json
├── backend/               # Node.js backend server
│   ├── src/
│   │   ├── routes/        # API routes
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # Data models
│   │   ├── config/        # Configuration files
│   │   └── utils/         # Utility functions
│   ├── database/          # Database schemas and migrations
│   └── package.json
├── docs/                  # Documentation
│   ├── DESIGN.md         # Figma design documentation
│   └── LINE_BOT.md       # LINE Bot integration guide
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- MySQL (v8 or higher)
- LINE Developer Account (for LINE Bot features)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yianli0213/The-Breezy-Day-web-.git
cd The-Breezy-Day-web-
```

2. **Set up the frontend**
```bash
cd frontend
npm install
npm run dev
```

3. **Set up the backend**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
npm run dev
```

4. **Set up the database**
```bash
# Create the database and tables
mysql -u your_user -p < backend/database/schema.sql
```

## 💻 Development

### Frontend Development
```bash
cd frontend
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend Development
```bash
cd backend
npm run dev      # Start with nodemon (auto-reload)
npm start        # Start production server
```

## 🎨 Design Philosophy

The application follows modern UX/UI principles with a focus on:

- **Clear Visual Hierarchy**: Important information is prominently displayed
- **Responsive Design**: Works seamlessly across devices
- **Smooth Animations**: GSAP-powered transitions for better UX
- **Color-Coded Information**: Quick visual understanding of conditions
- **Accessibility**: High contrast, large touch targets, semantic HTML

See [DESIGN.md](./docs/DESIGN.md) for detailed design documentation.

## 🤖 LINE Bot Integration

The application integrates with LINE Bot to send:
- Daily weather updates
- Allergy level alerts
- Personalized reminders
- Interactive responses to user queries

See [LINE_BOT.md](./docs/LINE_BOT.md) for setup instructions.

## 📊 Features

### Current Features
- ✅ Real-time weather display
- ✅ Allergy level tracking
- ✅ Responsive design
- ✅ GSAP animations
- ✅ LINE Bot integration
- ✅ RESTful API
- ✅ MySQL database support

### Planned Features
- 📅 7-day forecast
- 📊 Data analytics dashboard
- 👤 User profiles and preferences
- 🔔 Customizable notifications
- 📈 Historical data visualization
- 🌍 Multi-location support

## 🎓 Learning Outcomes

This project demonstrates:
- Modern React development with hooks
- GSAP animation techniques
- RESTful API design
- Database design and integration
- Third-party API integration (LINE Bot)
- Responsive web design
- HCI principles in practice

## 📝 License

This project is developed as a learning exercise for Internet Technologies course.

## 👥 Contributing

This is an educational project. Feedback and suggestions are welcome!

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

Built with ❤️ for better health and happiness
