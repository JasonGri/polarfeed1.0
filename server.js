const app = require("./src/app");
require("dotenv").config();
const logger = require("./src/utils/logger");

const port = process.env.PORT || 8000;

app().listen(port, () => logger.info(`Listening on port ${port}`));
