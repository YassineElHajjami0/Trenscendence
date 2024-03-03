import React, { useEffect, useState } from "react";
import "./FriendChatList.css";
import { BiSolidJoystickAlt } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import Image from "next/image";
import { FriendData } from "@/app/Interfaces/friendDataInterface";
import playerData from "../../data/friends.json";
import { IoArrowBackOutline } from "react-icons/io5";
import { slctdFriend } from "@/app/Atoms/friendAtom";
import { useRecoilState } from "recoil";

const FriendChatList = () => {
  const [selectedFriend, setSelectedFriend] = useRecoilState(slctdFriend);
  const friends: FriendData[] = playerData;
  const [friend, setFriend] = useState<FriendData | null>(null);
  useEffect(() => {
    const selectedFriendData = friends.find((f) => f.uid === selectedFriend);
    setFriend(selectedFriendData || null);
  }, [selectedFriend]);

  return (
    <div className="friend_chat_msg">
      <div className="friend_chat_msg_header">
        <IoArrowBackOutline
          className="arrow_back"
          onClick={() => setSelectedFriend("none")}
        />

        <Image
          src={friend?.avatar ?? "/default.png"}
          className="my_chat_msg_avatar"
          src={friend?.avatar || "/avatar3.png"}
          width={2000}
          height={2000}
          alt="avatar"
        />
        <div className="my_chat_msg_name">
          <h1>{friend?.name}</h1>
          <h5
            className={`online ${friend?.status === "ingame" && "ingames"}
          ${friend?.status === "offline" && "offline"}
          `}
          >
            {friend?.status === "online"
              ? "Online"
              : friend?.status === "ingame"
              ? "Playing"
              : "Offline"}
          </h5>
        </div>
      </div>
      <div className="friend_chat_msg_body"></div>
      <div className="friend_chat_msg_form">
        <input className="input_msg" type="text" placeholder="Message" />

        <div className="play_send_msg">
          <BiSolidJoystickAlt />
          <IoIosSend />
        </div>
      </div>
    </div>
  );
};

export default FriendChatList;
