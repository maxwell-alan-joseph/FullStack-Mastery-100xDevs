# 🗂️ Week 7.1: Authenticated Todo API using Express + MongoDB

Build and tested a backend system that handles user authentication and todo management with JWT and MongoDB.

## 🛠️ Tech Stack
- **Node.js + Express** – Server-side logic and routing
- **MongoDB + Mongoose** – Data storage and schema modeling
- **JWT (jsonwebtoken)** – Authentication with secure tokens
- **dotenv** – Environment variable management

## 📁 Folder Structure
```
Week 7.1/
│
├── index.js              # Entry point – routes, DB connection, server
├── auth.js               # JWT-based authentication middleware
├── db.js                 # Mongoose schemas for User and Todo
├── package.json          # Project metadata and dependencies
└── node_modules/         # Installed packages
```

## ✨ Features Implemented

### ✅ User Auth
- **/signup** – Register with email, username & password
- **/signin** – Login and receive a JWT token

### ✅ Todo Management (Authenticated)
- **/todo** – Create a new todo item (requires valid JWT)
- **/listoftodos** – View todos belonging to logged-in user

## 🔐 Authentication Flow
- On login, a JWT token is generated using user `_id`
- All protected routes (`/todo`, `/listoftodos`) require a valid token via `cookie` header
- Middleware in `auth.js` verifies the token and attaches `userId` to the request

## 📌 Environment Variables
Set up a `.env` file with:
```env
MONGODB_URI=<your_mongo_connection_string>
```

## 🚀 How to Run
```bash
npm install         # Install dependencies
node index.js       # Start the server on port 3000
```

> “Secure the basics before scaling the system.” — This module emphasized the foundations of secure API design and MongoDB integration.

---

🧠 Next Step: Add update/delete functionality, input validation, and hash passwords with bcrypt.
