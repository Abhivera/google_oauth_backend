# Google OAuth Authentication API (Node.js)

This is a **Google OAuth 2.0 Authentication API** built with **Node.js, Express, and Passport.js**. It includes **Swagger API documentation** for easy API exploration.

## 🚀 Features
- Google OAuth authentication using **Passport.js**
- Secure **session-based authentication**
- Well-structured **folder architecture**
- API documentation with **Swagger**
- Easy-to-extend backend for **JWT authentication** or **database storage**

---

## 📁 Folder Structure
```
/google-oauth-backend
│── /config
│   ├── passport.js        # Google OAuth configuration
│   ├── swagger.js         # Swagger API documentation config
│── /routes
│   ├── authRoutes.js      # Authentication routes
│── /controllers
│   ├── authController.js  # Auth controller functions
│── /middleware
│   ├── authMiddleware.js  # Authentication middleware (optional)
│── /env
│   ├── .env               # Environment variables
│── /server.js             # Entry point
│── /package.json          # Node.js package file
│── /README.md             # Project documentation
```

---

## 🔧 Installation & Setup
### **1. Clone the repository**
```sh
git clone https://github.com/your-username/google-oauth-backend.git
cd google-oauth-backend
```

### **2. Install dependencies**
```sh
npm install
```

### **3. Configure Environment Variables**
Create a `.env` file in the root and add your Google API credentials:
```
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
GOOGLE_CALLBACK_URL=http://localhost:5000/auth/google/callback
SESSION_SECRET=randomstring
PORT=5000
```

### **4. Run the Server**
```sh
node server.js
```
Or use **nodemon** (if installed):
```sh
nodemon server.js
```

---

## 📜 API Endpoints
### **Auth Routes**
| Method | Endpoint            | Description                        |
|--------|---------------------|------------------------------------|
| GET    | `/auth/google`      | Redirects to Google login         |
| GET    | `/auth/google/callback` | Handles Google OAuth callback    |
| GET    | `/auth/logout`      | Logs out the user                 |
| GET    | `/profile`          | Retrieves authenticated user info |

### **Swagger Documentation**
Once the server is running, access the API docs at:
```
http://localhost:5000/api-docs
```

---

## 🔥 Usage
1. Open **`http://localhost:5000/`** in your browser.
2. Click on **"Login with Google"**.
3. Authenticate with Google.
4. You will be redirected to **`/profile`**.

---

## 🛠 Technologies Used
- **Node.js** & **Express.js** - Backend framework
- **Passport.js** - OAuth authentication
- **Swagger** - API documentation
- **dotenv** - Environment variable management

---
