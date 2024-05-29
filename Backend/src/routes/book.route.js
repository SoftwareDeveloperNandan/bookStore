import { Router } from "express";
import { getBook } from "../controllers/bookInfo.controller.js";

const router = Router();

// userRoutes available here.
router.route("/getbook").get(getBook);

export default router;
