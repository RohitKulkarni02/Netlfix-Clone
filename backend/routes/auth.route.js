import express from "express";
import { authCheck, login, logout, signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/signup", signup);
router.get("/authCheck", protectRoute, authCheck);
router.post("/login", login);
router.post("/logout", logout);

export default router;
