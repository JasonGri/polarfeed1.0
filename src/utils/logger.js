// https://www.section.io/engineering-education/logging-with-winston/

const { createLogger, format, transports } = require("winston");
require("dotenv").config();

const logConfiguration = {
  transports: [
    new transports.File({
      filename: "logs/error.log",
      level: "error",
    }),
    new transports.File({
      filename: "logs/combine.log",
    }),
  ],
  format: format.combine(
    format.label({
      label: `Label🏷️`,
    }),
    format.timestamp({
      format: "MMM-DD-YYYY HH:mm:ss",
    }),
    format.printf(
      (info) =>
        `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`
    )
  ),
};

const logger = createLogger(logConfiguration);

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new transports.Console({
      format: format.simple(),
    })
  );
}

module.exports = logger;
