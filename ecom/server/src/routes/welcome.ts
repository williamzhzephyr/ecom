import express, { Router } from "express";
import { welcome } from "../controller/welcome";

const router: Router = express.Router();

router.get("/welcome", welcome);

export default router;

