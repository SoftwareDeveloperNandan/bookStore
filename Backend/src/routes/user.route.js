import { Router } from "express";
import { registerUser, userLogin, userLogout } from "../controllers/user.controller.js";
import { verifyJwt, verifyAdminJwt } from "../middleware/auth.middleware.js"
import { adminLogin, adminLogout, adminRegister } from "../controllers/admin.controller.js";

const router = Router()

// userRoutes available here.
router.route("/register").post(registerUser)
router.route("/login").post(userLogin)
router.route("/logout").post(verifyJwt, userLogout)

// Admin routes
router.route("/admin/register").post(adminRegister)
router.route("/admin/login").post(adminLogin)
router.route("/admin/logout").post(verifyAdminJwt, adminLogout)

export default router;