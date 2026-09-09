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
