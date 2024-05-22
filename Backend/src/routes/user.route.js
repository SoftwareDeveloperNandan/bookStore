import { Router } from "express";
import { registerUser, userLogin, userLogout } from "../controllers/user.controller.js";
import { verifyJwt } from "../middleware/auth.middleware.js"

const router = Router()

// userRoutes available here.
router.route("/register").post(registerUser)
router.route("/login").post(userLogin)
router.route("/logout").post(verifyJwt, userLogout)

export default router;