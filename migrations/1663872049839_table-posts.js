/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`CREATE TABLE posts(
    id serial PRIMARY KEY,
    caption VARCHAR(300) NOT NULL,
    lat REAL,
    lon REAL,
    content_url VARCHAR(300) NOT NULL,
    user_id INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT FK_post_user FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);`);
};

exports.down = (pgm) => {
  pgm.sql(`DROP TABLE posts;`);
};
