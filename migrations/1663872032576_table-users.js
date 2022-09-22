/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
        CREATE TABLE users(
            id serial PRIMARY KEY,
            fname VARCHAR(30),
            lname VARCHAR(30),
            username VARCHAR(50) NOT NULL,
            email VARCHAR(50) NOT NULL,
            password VARCHAR(300) NOT NULL,
            phone VARCHAR(15),
            bio VARCHAR(400),
            avatar_url VARCHAR(300),
            is_verified BOOLEAN DEFAULT FALSE,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
    `);
};

exports.down = (pgm) => {
  pgm.sql(`
    DROP TABLE users;`);
};
