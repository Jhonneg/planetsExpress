import express from "express";
import { postMessages } from "./controllers/messages.controller.js";
import {
  getFriend,
  getFriends,
  postFriend,
} from "./controllers/friends.controller.js";

const app = express();

const PORT = 3000;


app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/friends", postFriend);
app.get("/friends", getFriends);
app.get("/friends/:friendId", getFriend);


app.post("/messages", postMessages);


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
