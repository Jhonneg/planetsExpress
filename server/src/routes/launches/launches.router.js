import express from "express";
import {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
} from "./launches.controller.js";

export const launcherRouter = express.Router();

launcherRouter.get("/", httpGetAllLaunches);
launcherRouter.post("/", httpAddNewLaunch);
launcherRouter.delete("/:id", httpAbortLaunch);
