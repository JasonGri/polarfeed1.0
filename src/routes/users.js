const express = require("express");
const router = express.Router();
const UserRepo = require("../repositories/users");
const logger = require("../utils/logger");
const bcrypt = require("bcrypt");

const { validationRules, validate } = require("../middlewares/validator");

router.get("/", (req, res, next) => {
  res.send("This is the users page");
});

router.post("/signUp", validationRules(), validate, async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // Create hashed password
    const salt = await bcrypt.genSalt();
    const hashedPwd = await bcrypt.hash(password, salt);

    // Create new User
    const newUser = (await UserRepo.createUser(username, email, hashedPwd))[0];
    console.log(newUser);

    res.redirect("/");
  } catch (e) {
    console.log(e);
    logger.error(e);
  }
});

module.exports = router;
