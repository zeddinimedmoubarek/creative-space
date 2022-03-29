import express from "express";
import User from "../models/user.model.js";
import {
  getUsers,
  createUser,
  getUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllAdmins,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/admins", getAllAdmins);
router.get("/:id", getUserById);
router.get("/", getUser);
router.post("/add", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.delete("/", deleteUser);

export default router;
