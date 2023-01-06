const path = require("path");

const express = require("express");

const rootDIR = require("../utils/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDIR, "view", "home.html"));
});

module.exports = router;
