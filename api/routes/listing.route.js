import express from "express";
import { createlisting, deletelisting } from "../controllers/listing.controller.js";
import { verifyUser } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyUser,createlisting)
router.delete('/delete/:id', verifyUser, deletelisting )

export default router;