CREATE TABLE chats (
  chat_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(uid),
  friend_id INT REFERENCES users(uid),
  chat_date DATE NOT NULL, -- Date of the chat
  CONSTRAINT fk_chat_user FOREIGN KEY (user_id) REFERENCES users(uid),
  CONSTRAINT fk_chat_friend FOREIGN KEY (friend_id) REFERENCES users(uid)
);

-- Messages table
CREATE TABLE messages (
  message_id SERIAL PRIMARY KEY,
  chat_id INT REFERENCES chats(chat_id),
  time TIMESTAMP NOT NULL,
  msg TEXT NOT NULL,
  recipient BOOLEAN NOT NULL,
  CONSTRAINT fk_message_chat FOREIGN KEY (chat_id) REFERENCES chats(chat_id)
);