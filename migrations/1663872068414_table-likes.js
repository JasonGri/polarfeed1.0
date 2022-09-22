/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`CREATE TABLE likes(
      id serial PRIMARY KEY,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      user_id INTEGER NOT NULL,
      post_id INTEGER NOT NULL,
      comment_id INTEGER NOT NULL,


    CONSTRAINT FK_like_user FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT FK_like_post FOREIGN KEY (post_id)
        REFERENCES posts(id)
        ON DELETE CASCADE,

    CONSTRAINT FK_like_comment FOREIGN KEY (comment_id)
        REFERENCES comments(id)
        ON DELETE CASCADE,
        
    CONSTRAINT comment_or_post_like CHECK (
        COALESCE((post_id)::BOOLEAN::INTEGER,0)+COALESCE((comment_id)::BOOLEAN::INTEGER,0)=1)
  )`);
};

exports.down = (pgm) => {
  pgm.sql(`DROP TABLE likes`);
};
