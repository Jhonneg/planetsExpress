import express from "express";
import {
  getFriend,
  getFriends,
  postFriend,
} from "../controllers/friends.controller.js";

export const friendsRouter = express.Router();

friendsRouter.post("/", postFriend);
friendsRouter.get("/", getFriends);
friendsRouter.get("/:friendId", getFriend);
