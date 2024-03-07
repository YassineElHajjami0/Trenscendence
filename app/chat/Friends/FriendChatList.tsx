import React, { useEffect, useRef, useState } from "react";
import "./FriendChatList.css";
import { BiSolidJoystickAlt } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import Image from "next/image";
import { FriendData } from "@/app/Interfaces/friendDataInterface";
import playerData from "../../data/friends.json";
import myFriendsChat from "../../data/friend_chat.json";
import { IoArrowBackOutline } from "react-icons/io5";
import { useRecoilState } from "recoil";
import { ChatContainer } from "./ChatContainer";
import { slctdFriend } from "@/app/Atoms/friendAtom";
import { slctdFriendChat } from "@/app/Atoms/friendChatAtom";
import { FriendChat } from "@/app/Interfaces/friendChat";
const FriendChatList = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const friends: FriendData[] = playerData;
  const myFriendChat: FriendChat[] = myFriendsChat;

  const [selectedFriend, setSelectedFriend] = useRecoilState(slctdFriend);
  const [friendChat, setFriendChat] = useRecoilState(slctdFriendChat);
  const [friend, setFriend] = useState<FriendData | null>(null);
  const [inputMSG, setInputMSG] = useState<string>("");

  useEffect(() => {
    const selectedFriendData = friends.find((f) => f.uid === selectedFriend);
    const selectedFriendChat = myFriendChat.find(
      (f: any) => f.uid === selectedFriend
    );
    setFriend(selectedFriendData || null);
    setFriendChat(selectedFriendChat || undefined);
  }, [selectedFriend]);
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [friendChat]);

  const isSameDay = (date1: number, date2: number): boolean => {
    const getFormattedDate = (timestamp: number): string => {
      const date = new Date(timestamp);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    };

    return getFormattedDate(date1) === getFormattedDate(date2);
  };

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputMSG.length === 0) return;
    const currentDate = Date.now();
    const message = {
      time: Date.now() as number,
      msg: inputMSG,
      recipient: false,
    };
    const friendChatToUpdate: FriendChat = {
      ...friendChat,
      allmessages: friendChat?.allmessages || [],
      uid: friendChat?.uid || "",
    };
    const lastMessage =
      friendChatToUpdate?.allmessages[
        friendChatToUpdate?.allmessages.length - 1
      ];
    if (lastMessage && isSameDay(lastMessage.date, currentDate))
      lastMessage.messages.push(message);
    else {
      friendChatToUpdate?.allmessages.push({
        date: currentDate as number,
        messages: [message],
      });
    }
    setFriendChat(friendChatToUpdate);
    setInputMSG("");
  };

  return (
    <div className="friend_chat_msg">
      <div className="friend_chat_msg_header">
        <IoArrowBackOutline
          className="arrow_back"
          onClick={() => setSelectedFriend("none")}
        />

        <Image
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
      <div ref={chatContainerRef} className="friend_chat_msg_body">
        {friendChat?.allmessages.map((m) => (
          <ChatContainer key={m.date} messages={m} />
        ))}
      </div>
      <form onSubmit={sendMessage} className="friend_chat_msg_form">
        <input
          value={inputMSG}
          onChange={(e) => setInputMSG(e.target.value)}
          className="input_msg"
          type="text"
          placeholder="Message"
        />

        <div className="play_send_msg">
          <BiSolidJoystickAlt />
          <button className="submit_msg" type="submit">
            <IoIosSend />
          </button>
        </div>
      </form>
    </div>
  );
};

export default FriendChatList;
