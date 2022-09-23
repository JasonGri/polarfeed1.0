const express = require("express");
const path = require("path");
const logger = require("./utils/logger");
const usersRouter = require("./routes/users");

const app = express();

module.exports = () => {
  app.set("views", path.join(__dirname, "/views"));
  app.set("view engine", "ejs");

  app.use("/assets", express.static(path.join(__dirname, "public")));

  app.get("/", (req, res, next) => {
    res.render("pages/homepage");
    logger.info("Homepage rendered");
  });

  app.use("/users", usersRouter);

  return app;
};
