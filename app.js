const express = require("express");
const path = require("path");
const app = express();

app.set("PORT", process.env.NODE || 8080);

// router
const enterRouter = require("./routes/enter");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/enter", enterRouter);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./layout/index.html"));
});

app.get("/adminPanel", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./layout/admin.html"));
});

app.get("/");

module.exports.app = app;
