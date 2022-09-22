/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`CREATE TABLE comments(
      id serial PRIMARY KEY,
      contents VARCHAR(200) NOT NULL,
      user_id INTEGER NOT NULL,
      post_id INTEGER NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

      CONSTRAINT FK_comment_user FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

      CONSTRAINT FK_comment_post FOREIGN KEY (post_id)
        REFERENCES posts(id)
        ON DELETE CASCADE
  )`);
};

exports.down = (pgm) => {
  pgm.sql(`DROP TABLE comments`);
};
