import React from "react";
import "./FriendMSG.css";
import { ChatMSG } from "@/app/Interfaces/friendChat";
export const FriendMSG = ({ message }: { message: ChatMSG }) => {
  const options = { hour: "2-digit", minute: "2-digit" };
  const date = new Date(message?.time).toLocaleString(
    "en-US",
    options as Intl.DateTimeFormatOptions
  );

  return (
    <div className={`chat_msg_container ${message?.recipient && "sender"}`}>
      {message?.msg}
      <span
        className={`friend_msg_time ${message?.recipient && "sender_time"}`}
      >
        {date}
      </span>
    </div>
  );
};
