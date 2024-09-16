import express from "express";
import { httpGetAllLaunches, httpAddNewLaunch } from "./launches.controller.js";

export const launcherRouter = express.Router();

launcherRouter.get("/", httpGetAllLaunches);
launcherRouter.post("/", httpAddNewLaunch);
