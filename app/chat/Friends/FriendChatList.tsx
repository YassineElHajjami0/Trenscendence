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
import { userToken } from "@/app/Atoms/userToken";

import { RiEmojiStickerFill } from "react-icons/ri";

import Picker from "emoji-picker-react";

import { socket } from "@/app/sockets/socket";
import { loadingMsg } from "@/app/Atoms/loadingMsg";
import ChatLoading from "./ChatLoading";

const FriendChatList = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const loggedU = useRecoilValue(loggedUser);
  const userTok = useRecoilValue(userToken);

  const [selectedFriend, setSelectedFriend] = useRecoilState(slctdFriend);
  const [friendChat, setFriendChat] = useState<any>([]);
  const [friend, setFriend] = useRecoilState(currentFriend);
  const [inputMSG, setInputMSG] = useState<string>("");
  const [channelID, setChannelID] = useState(-1);
  const [showEmoji, setShowEmoji] = useState(false);
  const [loadingAnimation, setLoadingAnimation] = useRecoilState(loadingMsg);

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
    setTimeout(() => {
      setFriendChat(data);
      setLoadingAnimation(false);
    }, 1000);
  };

  useEffect(() => {
    if (selectedFriend === -1) return;
    console.log();

    /*----------------------------get my friend data------------------------------- */
    const getMyFriendData = async () => {
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
      setChannelID(dataC);
      getAllMSG(dataC);
      setInputMSG("");
    };
    getMyFriendData();
  }, [selectedFriend]);

  const sendMSG = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputMSG.length === 0) return;
    const channelData = {
      userID: loggedU,
      channelID: channelID,
      content: inputMSG,
    };
    await fetch("http://localhost:3000/message", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userTok}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(channelData),
    });
    setInputMSG("");
    setShowEmoji(false);
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [friendChat]);

  return loadingAnimation ? (
    <ChatLoading />
  ) : (
    <div className="friend_chat_msg">
      <div className="friend_chat_msg_header">
        <IoArrowBackOutline
          className="arrow_back"
          onClick={() => setSelectedFriend(-1)}
        />

        <Image
          className="my_chat_msg_avatar"
          src={`http://localhost:3000/${friend?.avatar}`}
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

          <textarea
            rows={1}
            value={inputMSG}
            onChange={(e) => setInputMSG(e.target.value)}
            className="input_msg"
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
