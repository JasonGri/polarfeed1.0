const express = require("express");
const router = express.Router();
const logger = require("../utils/logger");

router.get("/", (req, res, next) => {
  res.send("This is the users page");
});

module.exports = router;
