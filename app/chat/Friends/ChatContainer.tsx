import React from "react";
import { FriendMSG } from "./FriendMSG";
import "./ChatContainer.css";

export const ChatContainer = ({ messages }) => {
  console.log("----------->", messages);

  const options = { month: "long", day: "numeric", year: "numeric" };
  const date = new Date(messages?.date * 1000).toLocaleString(
    "en-US",
    options as Intl.DateTimeFormatOptions
  );
  return (
    <div className="chat_container">
      <div className="date_container">
        <h1 className="chat_todays_date">{date}</h1>
      </div>
      {messages?.messages?.map((m) => (
        <FriendMSG message={m} />
      ))}
    </div>
  );
};
