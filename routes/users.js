const express = require("express");

const path = require("path");

const router = express.Router();

const rootDIR = require("../utils/path");

router.get("/users", (req, res, next) => {
  res.sendFile(path.join(rootDIR, "view", "users.html"));
});

module.exports = router;
