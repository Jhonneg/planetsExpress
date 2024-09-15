import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import { planetsRouter } from "./routes/planets/planets.router.js";
import morgan from "morgan";
import { launcherRouter } from "./routes/launches/launches.controller.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan("combined"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(planetsRouter);
app.use(launcherRouter);
app.get("/", (req, res) => {
  res.sendFile(__dirname, "..", "public", "index.html");
});
