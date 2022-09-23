const pool = require("../db/pool");

class UserRepo {
  static async createUser(username, email, password) {
    const { rows } = await pool.query(
      `INSERT INTO users(username, email, password) VALUES(${1}, ${2}, ${3}) RETURNING *;`,
      [username, email, password]
    );

    return rows;
  }

  static async deleteUser(id) {
    const { rows } = await pool.query(`DELETE FROM users WHERE user.id = $1;`, [
      id,
    ]);

    return rows;
  }
}

module.exports = UserRepo;
