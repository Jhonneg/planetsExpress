import express from "express";
import { friendsRouter } from "./routes/friends.router.js";
import { messagesRounter } from "./routes/messages.router.js";

const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/friends", friendsRouter);
app.use("/messages", messagesRounter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
