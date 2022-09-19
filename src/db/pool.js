const pg = require("pg");
require("dotenv").config();

const pool = pg.Pool({
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  user: process.env.PG_USER,
  password: process.env.PG_PASS,
  url: process.env.PG_URL,
});

module.exports = pool;
