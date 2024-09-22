const express = require("express");
const path = require("path");
const cors = require("cors");
const { planetsRouter } = require("./routes/planets/planets.router");
const morgan = require("morgan");
const { launcherRouter } = require("./routes/launches/launches.router");


const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("combined"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use("/planets", planetsRouter);
app.use("/launches", launcherRouter);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
