"use client";
import React, { useEffect, useRef, useState } from "react";
import "./FriendChatList.css";
import { BiSolidJoystickAlt } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import Image from "next/image";
import { IoArrowBackOutline } from "react-icons/io5";
import { useRecoilState, useRecoilValue } from "recoil";
import { ChatContainer } from "./ChatContainer";
import { slctdFriend } from "@/app/Atoms/friendAtom";

import { currentFriend } from "@/app/Atoms/currentFriend";
import { loggedUser } from "@/app/Atoms/logged";
import { channelId } from "@/app/Atoms/channelId";
import { userToken } from "@/app/Atoms/userToken";
import { io } from "socket.io-client";
import { RiEmojiStickerFill } from "react-icons/ri";

import Picker from "emoji-picker-react";

import { socket } from "@/app/sockets/socket";

const FriendChatList = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const loggedU = useRecoilValue(loggedUser);
  const userTok = useRecoilValue(userToken);

  // const friends: FriendData[] = playerData;
  // const myFriendChat: FriendChat[] = myFriendsChat;

  const [selectedFriend, setSelectedFriend] = useRecoilState(slctdFriend);
  const [friendChat, setFriendChat] = useState<any>([]);
  const [friend, setFriend] = useRecoilState(currentFriend);
  const [inputMSG, setInputMSG] = useState<string>("");
  const [channelID, setChannelID] = useState(-1);
  const [showEmoji, setShowEmoji] = useState(false);
  // const [msgSent, setMsgSent] = useState<number>(-1);

  const onEmojiClick = (event: any) => {
    setInputMSG((prevInput) => prevInput + event.emoji);
  };

  useEffect(() => {
    const handleReceiveMessage = (message: any) => {
      if (message?.channelID === channelID)
        setFriendChat((prevMessages: any) => [...prevMessages, message]);
    };

    socket.on("message", handleReceiveMessage);
    return () => {
      socket.off("message");
    };
  }, [channelID]);

  const getAllMSG = async (id: number) => {
    console.log("--------id>>>>>>>>", id);

    if (id === -1) return;
    const selectedFriendChat = await fetch(
      `http://localhost:3000/message/${id}`,
      {
        headers: {
          Authorization: `Bearer ${userTok}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await selectedFriendChat.json();
    if (data?.statusCode) return;
    // console.log("message=========>>>>", data);
    setFriendChat(data);
  };

  useEffect(() => {
    //get my friend data
    // friends.find((f) => f.uid === selectedFriend);
    const getMyFriendData = async () => {
      /*----------------------------get my friend data------------------------------- */
      const selectedFriendData = await fetch(
        `http://localhost:3000/users/${selectedFriend}`,
        {
          headers: {
            Authorization: `Bearer ${userTok}`,
            "Content-Type": "application/json",
          },
        }
      );
      const dataF = await selectedFriendData.json();
      //set my friend data
      setFriend(dataF);

      /*---------------------------create a channel or get its id------------------- */
      const channelData = {
        name: "",
        topic: "",
        id: loggedU,
        friendId: selectedFriend,
      };
      const createOrGetChannelID = await fetch(
        "http://localhost:3000/channels/dm",
        {
          method: "POST",

          headers: {
            Authorization: `Bearer ${userTok}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(channelData),
        }
      );
      const dataC = await createOrGetChannelID.json();
      if (dataC?.statusCode || dataC === -1) {
        return;
      }

      setChannelID(dataC);
      console.log("=========================errr", dataC);
      getAllMSG(dataC);
      setInputMSG("");
    };
    getMyFriendData();
  }, [selectedFriend]);

  // useEffect(() => {
  //   getAllMSG(channelID);
  // }, [msgSent]);

  const sendMSG = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputMSG.length === 0) return;
    console.log("===========================channelid", channelID);

    const channelData = {
      userID: loggedU,
      channelID: channelID,
      content: inputMSG,
    };
    const msg = await fetch("http://localhost:3000/message", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userTok}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(channelData),
    });

    // const data = await msg.json();

    setInputMSG("");
    setShowEmoji(false);
  };

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

  // const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (inputMSG.length === 0) return;
  //   const currentDate = Date.now();
  //   const message = {
  //     time: Date.now() as number,
  //     msg: inputMSG,
  //     recipient: false,
  //   };
  //   const friendChatToUpdate: FriendChat = {
  //     ...friendChat,
  //     allmessages: friendChat?.allmessages || [],
  //     uid: friendChat?.uid || "",
  //   };
  //   const lastMessage =
  //     friendChatToUpdate?.allmessages[
  //       friendChatToUpdate?.allmessages.length - 1
  //     ];
  //   if (lastMessage && isSameDay(lastMessage.date, currentDate))
  //     lastMessage.messages.push(message);
  //   else {
  //     friendChatToUpdate?.allmessages.push({
  //       date: currentDate as number,
  //       messages: [message],
  //     });
  //   }
  //   setFriendChat(friendChatToUpdate);
  //   setInputMSG("");
  // };

  return (
    <div className="friend_chat_msg">
      <div className="friend_chat_msg_header">
        <IoArrowBackOutline
          className="arrow_back"
          onClick={() => setSelectedFriend(-1)}
        />

        <Image
          className="my_chat_msg_avatar"
          src={friend?.avatar || "/avatar3.png"}
          width={2000}
          height={2000}
          alt="avatar"
        />
        <div className="my_chat_msg_name">
          <h1>{friend?.username}</h1>
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
        {friendChat.map((m: any) => (
          <ChatContainer key={m.createdAT} messages={m} />
        ))}
      </div>
      <form onSubmit={sendMSG} className="friend_chat_msg_form">
        <fieldset disabled={friend?.blocked}>
          <div
            className="closed_picker"
            onClick={() => setShowEmoji((prev) => !prev)}
          >
            <RiEmojiStickerFill />
          </div>
          <Picker
            emojiVersion="facebook"
            theme="dark"
            className={`emoji_picker ${showEmoji && "show_Emoji"} `}
            searchDisabled={true}
            open={true}
            onEmojiClick={onEmojiClick}
            lazyLoadEmojis={true}
            previewConfig={{
              showPreview: false,
            }}
          />

          <input
            value={inputMSG}
            onChange={(e) => setInputMSG(e.target.value)}
            className="input_msg"
            type="text"
            placeholder={`${
              friend?.blocked ? "You blocked this friend" : "Message"
            }`}
          />

          <div className="play_send_msg">
            <BiSolidJoystickAlt />
            <button className="submit_msg" type="submit">
              <IoIosSend />
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default FriendChatList;
