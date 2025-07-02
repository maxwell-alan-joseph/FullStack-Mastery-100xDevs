# 🗂️ Week 7.2: Enhanced Authenticated Todo API with Security & Validation

An upgraded backend system with robust user authentication, todo management, password security, and comprehensive error handling using Express + MongoDB.

## 🛠️ Tech Stack

* **Node.js + Express** – Server-side logic and routing
* **MongoDB + Mongoose** – Data storage and schema modeling
* **JWT (jsonwebtoken)** – Authentication with secure tokens
* **bcrypt** – Password hashing and security
* **dotenv** – Environment variable management

## 📁 Folder Structure

```
Week 7.2/
│
├── index.js              # Entry point – routes, DB connection, server
├── auth.js               # JWT-based authentication middleware
├── db.js                 # Mongoose schemas for User and Todo
├── package.json          # Project metadata and dependencies
├── .env                  # Environment variables (not committed)
└── node_modules/         # Installed packages
```

## ✨ Features Implemented

### ✅ Enhanced User Authentication
* **/signup** – Register with email, username & password (with validation)
* **/signin** – Login and receive a JWT token
* **Password Hashing** – Secure password storage using bcrypt
* **Input Validation** – Email format, password strength validation

### ✅ Secure Todo Management
* **/todo** – Create a new todo item (requires valid JWT)
* **/todos** – View all todos belonging to logged-in user (renamed from `/listoftodos`)
* **User-specific Data** – Each user can only access their own todos

### 🔒 Security Enhancements
* **Password Hashing** – All passwords are hashed using bcrypt before storage
* **Input Validation** – Comprehensive validation for all user inputs
* **Error Handling** – Proper error responses and status codes
* **JWT Security** – Secure token generation and verification

## 🔐 Authentication Flow

1. **Signup**: User provides email, username, and password
   - Password is hashed using bcrypt
   - User data is validated before storage
   - Account created successfully

2. **Signin**: User provides credentials
   - Password is compared with hashed version
   - JWT token generated using user `_id`
   - Token returned for subsequent requests

3. **Protected Routes**: All todo operations require valid JWT
   - Token verified via authentication middleware
   - User ID extracted and attached to request

## 🛡️ Input Validation

### User Registration
- **Email**: Valid email format required
- **Username**: Minimum 3 characters, alphanumeric
- **Password**: Minimum 6 characters, contains letters and numbers

### Todo Creation
- **Title**: Required, non-empty string
- **Description**: Optional, maximum 500 characters

## 📌 Environment Variables

Create a `.env` file with:

```env
MONGODB_URI=<your_mongo_connection_string>
JWT_SECRET=<your_jwt_secret_key>
PORT=3000
```

## 🚀 How to Run

```bash
# Install dependencies
npm install

# Start the server
node index.js

# Server will start on port 3000 (or specified PORT in .env)
```

## 📋 API Endpoints

### Authentication Routes
| Method | Endpoint | Description | Body Required |
|--------|----------|-------------|---------------|
| POST | `/signup` | Register new user | email, username, password |
| POST | `/signin` | User login | email/username, password |

### Todo Routes (Protected)
| Method | Endpoint | Description | Headers Required |
|--------|----------|-------------|------------------|
| POST | `/todo` | Create new todo | Authorization: Bearer <token> |
| GET | `/todos` | Get user's todos | Authorization: Bearer <token> |

## 🔧 Error Handling

The application includes comprehensive error handling for:
- **Validation Errors**: Invalid input format or missing fields
- **Authentication Errors**: Invalid credentials or expired tokens
- **Database Errors**: Connection issues or query failures
- **Server Errors**: Unexpected application errors

### Sample Error Response
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email address"
    }
  ]
}
```

## 🎯 Improvements from Week 7.1

### ✅ Completed Enhancements
- ✅ **Password Hashing** – Secure bcrypt implementation
- ✅ **Input Validation** – Comprehensive validation for all inputs
- ✅ **Error Handling** – Proper error responses and status codes
- ✅ **New Database Connection** – Enhanced MongoDB connectivity
- ✅ **Signup Endpoint** – Improved registration with validation
- ✅ **Signin Endpoint** – Enhanced login with security
- ✅ **Todo Endpoints** – Renamed and improved todo operations

### 🚀 Key Security Features
- Passwords never stored in plain text
- JWT tokens with expiration handling
- Input sanitization to prevent injection attacks
- Proper HTTP status codes for all responses

## 🧠 Learning Outcomes

This week focused on implementing production-ready security practices:
- **Security First**: Password hashing and secure authentication
- **Data Validation**: Preventing invalid data from entering the system
- **Error Handling**: Providing meaningful feedback to users
- **Code Quality**: Clean, maintainable, and secure code structure

## 🖼️ Screenshots

Below are sample outputs and API flows captured during development:

- [**User Database with Hashed Passwords**](screenshots/user-database-hashed-password.png) - MongoDB Compass showing secure password storage
- [**Todos Collection**](screenshots/todos-collection.png) - Sample todos stored in MongoDB
- [**GET /todos API Response**](screenshots/get-todos-postman.png) - Postman showing successful todos retrieval
- [**Code Structure with Zod Validation**](screenshots/code-zod-validation.png) - VS Code showing input validation implementation
- [**Validation Error Response**](screenshots/validation-error-postman.png) - Postman showing proper error handling for invalid input

---

*"Security is not a feature, it's a foundation."* — This module emphasized building secure, production-ready APIs with proper validation and error handling.
