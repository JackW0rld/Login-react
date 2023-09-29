import { Router } from "express";
import { getAllUsers, getUser } from "../controllers/index.controller";

const router = Router();

router.get('/users', getAllUsers);
router.get('/users/:id',getUser);