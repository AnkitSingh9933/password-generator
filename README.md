# 🔐 Password Generator

A modern, responsive password generator built with **React, JavaScript, and Tailwind CSS**. Generate passwords with customizable options, evaluate password strength, and copy passwords to the clipboard with a single click.

## ✨ Features

- 🔑 Generate random passwords
- 📏 Customize password length
- 🔠 Include uppercase and lowercase letters
- 🔢 Include numbers
- 🔣 Include special characters
- 💪 Dynamic password strength indicator
- 📋 Copy generated passwords to the clipboard
- ✅ Copy-success feedback message
- 📱 Responsive user interface
- 🧩 Reusable React components and custom hooks

## 🖥️ Live Demo

**Live Demo:** Add your deployed project URL here.

**GitHub Repository:** Add your GitHub repository URL here.

## 🛠️ Tech Stack

- **React.js** — Component-based UI development
- **JavaScript (ES6+)** — Application logic
- **Tailwind CSS** — Styling and responsive design
- **Vite** — Development server and build tool
- **Clipboard API** — Copy passwords to the clipboard

## 🧠 Concepts Used

- React Functional Components and Props
- React State with `useState`
- Custom React Hooks
- Reusable JavaScript Functions
- Object Destructuring
- Conditional Rendering
- Array Methods (`map`)
- Regular Expressions (Regex)
- Asynchronous JavaScript (`async/await`)
- Error Handling (`try...catch`)
- Clipboard API
- Component-Based Architecture

## 📁 Project Structure

```text
password-generator/
├── public/
├── src/
│   ├── components/
│   │   ├── CharacterOptions.jsx
│   │   ├── GenerateButton.jsx
│   │   ├── Header.jsx
│   │   ├── PasswordCard.jsx
│   │   ├── PasswordDisplay.jsx
│   │   ├── PasswordLength.jsx
│   │   ├── passwordStrength.js
│   │   └── SecurityTips.jsx
│   ├── hooks/
│   │   └── useCopyPassword.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

### 📂 Key Files

- **`App.jsx`** — Main application component.
- **`Header.jsx`** — Displays the application header.
- **`PasswordCard.jsx`** — Organizes the password generator interface.
- **`CharacterOptions.jsx`** — Provides character-type selection options.
- **`PasswordLength.jsx`** — Controls the desired password length.
- **`GenerateButton.jsx`** — Triggers password generation.
- **`PasswordDisplay.jsx`** — Displays the password, copy button, and strength indicator.
- **`passwordStrength.js`** — Calculates the password strength score and label.
- **`useCopyPassword.jsx`** — Custom hook for clipboard copying and copy-status feedback.
- **`SecurityTips.jsx`** — Displays password security tips.
- **`index.css`** — Contains global styles and Tailwind CSS setup.
- **`main.jsx`** — Mounts the React application.

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js
- npm
- Git

### Installation

**1. Clone the repository**

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

**2. Navigate to the project directory**

```bash
cd password-generator
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal to use the application.

## 🔒 Security Note

This project is intended for learning and generating passwords in the browser. Password strength indicators are heuristic estimates and do not guarantee password security. Avoid storing or sharing generated passwords insecurely.

## 📚 What I Learned

Building this project helped me practice React state management, reusable components, custom hooks, asynchronous clipboard operations, conditional rendering, and separating application logic from UI components.

## 🔮 Future Improvements

- Add password-strength accessibility improvements.
- Improve clipboard feedback and timer cleanup.
- Add automated tests for password generation and strength evaluation.
- Improve keyboard accessibility.
- Add an option to exclude similar-looking characters.

## 👨‍💻 Author

**Ankit Singh**

- GitHub: [@AnkitSingh9933](https://github.com/AnkitSingh9933)

---

*Built as part of my React and frontend development learning journey.*