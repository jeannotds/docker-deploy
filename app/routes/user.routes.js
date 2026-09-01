import express from "express";
import { createUser, getUsers } from "../controllers/user.controller";

const router = express.Router();

router.get("/", getUsers);
router.get("/", createUser);

export default router;
