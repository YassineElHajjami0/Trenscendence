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

import Picker, { SuggestionMode, Theme } from "emoji-picker-react";

import { loadingMsg } from "@/app/Atoms/loadingMsg";
import ChatLoading from "./ChatLoading";
import { channelId } from "@/app/Atoms/channelId";
import { chatMSG } from "@/app/Atoms/chatMSG";
import { blockedMe } from "@/app/Atoms/blockedMe";

const FriendChatList = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const loggedU = useRecoilValue(loggedUser);
  const userTok = useRecoilValue(userToken);
  const channelID = useRecoilValue(channelId);
  const friend = useRecoilValue(currentFriend);

  const blockCheck = useRecoilValue(blockedMe);

  const [friendChat, setFriendChat] = useRecoilState<any[]>(chatMSG);

  const [selectedFriend, setSelectedFriend] = useRecoilState(slctdFriend);
  const [inputMSG, setInputMSG] = useState<string>("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [loadingAnimation, setLoadingAnimation] = useRecoilState(loadingMsg);

  const onEmojiClick = (event: any) => {
    setInputMSG((prevInput) => prevInput + event.emoji);
  };

  const getAllMSG = async () => {
    if (selectedFriend === -1) return;

    const selectedFriendChat = await fetch(
      `http://localhost:3000/message/${channelID}`,
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
    getAllMSG();
    setInputMSG("");
  }, [selectedFriend]);

  const sendMSG = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputMSG.length === 0) return;
    const channelData = {
      userID: loggedU,
      channelID: channelID,
      content: inputMSG,
      isBlocked: blockCheck,
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
  const handleEnter = async (e: any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMSG(e);
    }
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
            theme={Theme.DARK}
            className={`emoji_picker ${showEmoji && "show_Emoji"} `}
            searchDisabled={true}
            open={true}
            onEmojiClick={onEmojiClick}
            lazyLoadEmojis={true}
            suggestedEmojisMode={SuggestionMode.FREQUENT}
            previewConfig={{
              showPreview: false,
            }}
          />

          <textarea
            rows={1}
            value={inputMSG}
            onKeyDown={handleEnter}
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
