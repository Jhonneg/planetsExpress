import express from "express";
import { getAllLaunches } from "./launches.router.js";

export const launcherRouter = express.Router();

launcherRouter.get("/launches", getAllLaunches);

