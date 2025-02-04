import express from "express";
import passport from "passport";
import { googleAuthRedirect, logout } from "../controllers/authController.js";

const router = express.Router();

/**
 * @swagger
 * /auth/google:
 *   get:
 *     summary: Authenticate with Google
 *     description: Redirects to Google for authentication.
 *     responses:
 *       302:
 *         description: Redirects to Google's OAuth login.
 */
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

/**
 * @swagger
 * /auth/google/callback:
 *   get:
 *     summary: Google OAuth callback
 *     description: Handles Google's OAuth response.
 *     responses:
 *       200:
 *         description: Successfully authenticated and redirected.
 *       401:
 *         description: Unauthorized access.
 */
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  googleAuthRedirect
);

/**
 * @swagger
 * /auth/logout:
 *   get:
 *     summary: Logout user
 *     description: Logs out the authenticated user and ends the session.
 *     responses:
 *       200:
 *         description: Successfully logged out.
 */
router.get("/logout", logout);

export default router;
