# Fitness App Form

A modern, professional survey form for collecting user feedback about a fitness application.

## Features

- 🎨 Modern, beautiful UI with gradient backgrounds
- 📱 Fully responsive design
- ⚡ Built with React and Vite for fast performance
- 🎯 Progress tracking with visual indicators
- 🔄 Multi-step form navigation
- ✨ Smooth animations and transitions

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
GymAppForm/
├── src/
│   ├── components/
│   │   ├── FormContainer.jsx    # Main form container with state management
│   │   ├── FormHeader.jsx       # Header with app description and progress
│   │   ├── FormQuestions.jsx    # Question rendering logic
│   │   ├── QuestionRenderer.jsx # Individual question input types
│   │   └── FormFooter.jsx       # Navigation buttons
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles with Tailwind
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Adding Questions

Questions should be added to `src/components/FormContainer.jsx` in the following format:

```javascript
const questions = [
  {
    name: 'question1',
    label: 'What is your question?',
    type: 'text', // text, textarea, select, radio, checkbox, number, email
    required: true,
    placeholder: 'Enter your answer...',
    description: 'Optional help text'
  },
  {
    name: 'question2',
    label: 'Select an option',
    type: 'select',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' }
    ],
    required: true
  }
]
```

## Technologies

- React 18
- Vite
- Tailwind CSS
- Modern CSS with gradients and animations

