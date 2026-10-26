# 🔐 Password Generator

A modern, responsive password generator built with **React, JavaScript, and Tailwind CSS**. Generate passwords with customizable options, evaluate password strength, and copy passwords to the clipboard with a single click.

## 🖥️ Live Demo

**Live Demo:** [Password Generator](https://password-generator-ankitsingh.netlify.app/)

**GitHub Repository:** [View Source Code](https://github.com/AnkitSingh9933/password-generator)

## ✨ Features

- 🔑 Generate random passwords
- 📏 Customize password length
- 🔠 Include uppercase and lowercase letters
- 🔢 Include numbers
- 🔣 Include special characters
- 💪 Dynamic password strength indicator
- 📋 Copy generated passwords to the clipboard
- ✅ Copy-success feedback message
- ⚠️ Validation and error messages
- 🔄 Automatically regenerate passwords when settings change
- 📱 Responsive user interface
- 🧩 Reusable React components and custom hooks

## 🛠️ Tech Stack

- **React.js** — Component-based UI development
- **JavaScript (ES6+)** — Application logic
- **Tailwind CSS** — Styling and responsive design
- **Vite** — Development server and build tool
- **Clipboard API** — Copy passwords to the clipboard
- **Git & GitHub** — Version control and source code management
- **Netlify** — Deployment and hosting

## 🧠 Concepts Used

- React Functional Components and Props
- State management with `useState`
- Side effects with `useEffect`
- Function memoization with `useCallback`
- Custom React Hooks
- Component-based architecture
- Conditional rendering
- Event handling
- Object destructuring
- Array methods
- Regular expressions (Regex)
- Asynchronous JavaScript (`async/await`)
- Error handling (`try...catch`)
- Clipboard API integration
- Form validation and UI feedback

## ⚙️ How It Works

1. Select your desired password length.
2. Choose which character types to include.
3. Generate a password using your selected options.
4. Review the password strength indicator.
5. Copy the generated password with the copy button.

The application validates the selected character options and displays an error if no character type is selected.

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

## 📂 Key Files

| File | Description |
|---|---|
| `App.jsx` | Main application component |
| `Header.jsx` | Displays the application header |
| `PasswordCard.jsx` | Organizes the password generator interface |
| `CharacterOptions.jsx` | Handles character-type selection |
| `PasswordLength.jsx` | Controls the desired password length |
| `GenerateButton.jsx` | Triggers password generation |
| `PasswordDisplay.jsx` | Displays the password, copy button, and strength indicator |
| `passwordStrength.js` | Evaluates password strength |
| `useCopyPassword.jsx` | Handles clipboard copying and copy-status feedback |
| `SecurityTips.jsx` | Displays password security tips |
| `index.css` | Contains global styles |
| `main.jsx` | Mounts the React application |

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm
- Git

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/AnkitSingh9933/password-generator.git
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

### Production Build

To create a production build, run:

```bash
npm run build
```

To preview the production build locally, run:

```bash
npm run preview
```

## 🔒 Security Note

This project is intended for learning and password generation in the browser. The password strength indicator provides an estimate and does not guarantee security. Avoid storing or sharing generated passwords insecurely.

## 🔮 Future Improvements

- Add automated tests for password generation and strength evaluation
- Improve keyboard accessibility
- Add an option to exclude similar-looking characters
- Enhance password strength feedback
- Improve clipboard feedback and cleanup

## 👨‍💻 Author

**Ankit Singh**

- GitHub: [@AnkitSingh9933](https://github.com/AnkitSingh9933)
- Project Repository: [Password Generator](https://github.com/AnkitSingh9933/password-generator)
- Live Application: [Try it here](https://password-generator-ankitsingh.netlify.app/)

---

*Built as part of my React and frontend development learning journey.*