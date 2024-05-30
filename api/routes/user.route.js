import express from "express";
import {
  deleteuser,
  getUserListings,
  test,
  updateuser,
} from "../controllers/user.controller.js";
import { verifyUser } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.post("/update/:id", verifyUser, updateuser);
router.delete("/delete/:id", verifyUser, deleteuser);
router.get("/listings/:id", verifyUser, getUserListings);

export default router;
