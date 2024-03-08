import React from "react";
import { FriendMSG } from "./FriendMSG";
import "./ChatContainer.css";
import { FriendChatMSG } from "@/app/Interfaces/friendChat";
export const ChatContainer = ({ messages }: { messages: FriendChatMSG }) => {
  const options = { month: "long", day: "numeric", year: "numeric" };
  const date = new Date(messages?.date).toLocaleString(
    "en-US",
    options as Intl.DateTimeFormatOptions
  );

  return (
    <div className="chat_container">
      <h1 className="chat_todays_date">{date}</h1>

      {messages?.messages?.map((m) => (
        <FriendMSG key={m.time} message={m} />
      ))}
    </div>
  );
};
