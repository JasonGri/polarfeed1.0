const { body, validationResult } = require("express-validator");
const pool = require("../db/pool");

const validationRules = () => {
  return [
    body("username").trim().notEmpty().withMessage("Please enter a username."),

    body("email")
      .trim()
      .notEmpty()
      .withMessage("Please enter your email.")
      .isEmail()
      .withMessage("Please enter a valid email!")
      .custom(async (value, { req }) => {
        //TODO: Remove the query outside of the middleware file
        let { rows } = await pool.query(
          `SELECT * FROM users WHERE users.email = $1;`,
          [value]
        );
        if (rows.length !== 0) {
          throw new Error("Email already exists!");
        }
        return true;
      }),

    body("password")
      .trim()
      .notEmpty()
      .withMessage("Please enter a password")
      .isLength({ min: 8 })
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{8,}$/
      )
      .withMessage(
        "Password must be at least 8 characters with at least one number, symbol and both upper and lower case."
      ),

    body("password2")
      .trim()
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("Passwords do not match!");
        }
        return true;
      }),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  //   return res.status(422).json({
  //     errors: extractedErrors,
  //   });

  //FIXME: Do not make the rerendering path hard coded
  return res.render("pages/homepage.ejs", { errors: extractedErrors });
};

module.exports = { validationRules, validate };
