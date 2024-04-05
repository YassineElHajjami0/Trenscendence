import React from "react";
import "./FriendMSG.css";
import { ChatMSG } from "@/app/Interfaces/friendChat";
import { useRecoilValue } from "recoil";
import { loggedUser } from "@/app/Atoms/logged";
export const FriendMSG = ({ message }: { message: any }) => {
  const loggedU = useRecoilValue(loggedUser);

  const options = { hour: "2-digit", minute: "2-digit" };
  const date = new Date(message?.createdAT).toLocaleString(
    "en-US",
    options as Intl.DateTimeFormatOptions
  );


  // "id": 4,
  //       "userID": 2,
  //       "channelID": 21,
  //       "content": "wax nta f medrasa",
  //       "createdAT": "2024-03-31T13:08:33.627Z"

  return (
    <div className={`chat_msg_container ${message?.userID !== loggedU && "sender"}`}>
      {message?.content}
      <span
        className={`friend_msg_time ${message?.userID !== loggedU && "sender_time"}`}
      >
        {date}
      </span>
    </div>
  );
};
