const express = require("express");

const app = express();

module.exports = () => {
  app.get("/", (req, res, next) => {
    res.send("Up and running");
  });

  return app;
};
