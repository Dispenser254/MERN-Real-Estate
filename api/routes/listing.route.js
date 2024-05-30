import express from "express";
import { createlisting } from "../controllers/listing.controller.js";
import { verifyUser } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyUser,createlisting)

export default router;