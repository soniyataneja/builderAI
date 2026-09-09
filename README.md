# BuilderAI

BuilderAI is an AI-powered React website builder that turns
natural-language prompts into functional React projects. Users can
generate a project, preview it live, edit files, request AI-powered
revisions, save their work, and publish/download the resulting project.

## Features

-   🤖 AI-powered React project generation
-   🧩 Automatic file planning and multi-file code generation
-   ✨ AI-powered project revisions using structured operations
-   📝 In-browser code editing
-   💾 Project persistence with MongoDB
-   🔐 User registration and authentication
-   ⚡ Automatic project file saving
-   📦 Project publishing/download support
-   🛡️ Generated-code validation and normalization
-   🔄 Search/replace based deterministic file updates
-   📱 Responsive generated interfaces using React and Tailwind CSS

## Architecture

``` text
                         BuilderAI
                            │
              ┌─────────────┴─────────────┐
              │                           │
           Client                       Server
        React + Vite                 Express + Node.js
              │                           │
              │ HTTP / Axios              │
              └──────────────────────────►│
                                          │
                         ┌────────────────┼────────────────┐
                         │                │                │
                         ▼                ▼                ▼
                    MongoDB Atlas     OpenRouter       JWT/Cookies
                         │                │
                         │                ▼
                         │          AI Services
                         │
                         ▼
                    Project Data
```

The application separates the frontend, backend, database,
authentication, and AI services into clear responsibilities.

## Project Structure

``` text
builderAI/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authControllers.js
│   │   ├── chatController.js
│   │   └── projectController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── Project.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── projectRoutes.js
│   ├── services/
│   │   ├── ai.js
│   │   ├── aiSchemas.js
│   │   ├── codeValidator.js
│   │   ├── contentNormalizer.js
│   │   ├── diff.js
│   │   └── prompts.js
│   ├── package.json
│   └── server.js
│
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have:

-   Node.js installed
-   npm installed
-   A MongoDB database
-   An OpenRouter API key

### 1. Clone the repository

``` bash
git clone <your-repository-url>
cd builderAI
```

### 2. Install frontend dependencies

``` bash
cd client
npm install
```

### 3. Install backend dependencies

``` bash
cd ../server
npm install
```

## Running Locally

Open two terminals.

### Terminal 1 --- Backend

``` bash
cd server
npm run dev
```

The backend runs on the configured server port.

### Terminal 2 --- Frontend

``` bash
cd client
npm run dev
```

The frontend runs on the Vite development server.

Open the frontend URL shown by Vite in your browser.

## Author

**Soniya Taneja**

Built as an AI-powered full-stack web development project combining
React, Express, MongoDB, authentication, LLM APIs, structured AI
outputs, and live code execution.
