import express from "express";
import { createlisting, deletelisting, getlisting, updatelisting } from "../controllers/listing.controller.js";
import { verifyUser } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyUser,createlisting)
router.delete('/delete/:id', verifyUser, deletelisting )
router.post('/update/:id', verifyUser, updatelisting)
router.get('/get/:id', getlisting)

export default router;