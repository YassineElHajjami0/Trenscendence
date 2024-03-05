import React from "react";
import "./FriendMSG.css";
export const FriendMSG = ({ message }) => {
  return (
    <div className={`chat_msg_container ${message?.recipient && "sender"}`}>
      {message?.msg}
    </div>
  );
};
