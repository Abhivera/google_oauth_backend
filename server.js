import express from "express";
import session from "express-session";
import passport from "passport";
import dotenv from "dotenv";
import "./config/passport.js";
import authRoutes from "./routes/authRoutes.js";
import setupSwagger from "./config/swagger.js"; // Import Swagger setup

dotenv.config();

const app = express();

// Session Middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Setup Swagger
setupSwagger(app);

// Routes
app.use("/auth", authRoutes);

// Protected Profile Route
app.get("/profile", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/");
  }
  res.json({ user: req.user });
});

/**
 * @swagger
 * /:
 *   get:
 *     summary: Homepage
 *     description: Basic homepage with Google OAuth link.
 *     responses:
 *       200:
 *         description: Returns HTML with login link.
 */
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Google OAuth API</h1><a href='/auth/google'>Login with Google</a>");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
