import express from "express";
import tokenController from "../controller/token";

const router = express.Router();

router.post("/", tokenController.authenticate);

export default router;
