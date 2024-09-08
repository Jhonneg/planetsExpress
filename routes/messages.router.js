import express from "express";

import { postMessages } from "../controllers/messages.controller.js";

export const messagesRounter = express.Router();

messagesRounter.post("/", postMessages);
