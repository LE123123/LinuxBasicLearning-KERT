const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../layout/enter.html"));
});

router.post("/", (req, res) => {
  const io = req.app.get("io");
  io.of("/room").emit("newUser", req.body.name);
  res.status(302).redirect("/enter/success");
});

router.get("/success", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "../layout/success.html")
  );
});

module.exports = router;
