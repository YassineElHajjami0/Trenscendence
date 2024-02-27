"use client";
import React, { useState } from "react";
import "./chat.css";
import Image from "next/image";
import { HiDotsVertical } from "react-icons/hi";
import FriendsChat from "./Friends/FriendsChat";

const Chat = () => {
  const [hide, setHide] = useState(false);
  const [mode, setMode] = useState("friends");
  const [selectedFriend, setSelectedFriend] = useState("none");
  const [selectedChannel, setSelectedChannel] = useState("none");
  console.log(hide);

  return (
    <div className="chat_channels_container">
      <div className="chat_channels_sub_container">
        <div className="col1">
          <div className="switcher">
            <span
              className={`selectedColor ${
                mode === "friends" ? "toleft" : "toright"
              }`}
            ></span>
            <button
              onClick={() => {
                setMode("friends");
              }}
            >
              Friends
            </button>
            <button
              onClick={() => {
                setMode("channels");
              }}
            >
              Channels
            </button>
          </div>
          {/* show friends list or channels list */}
          {mode == "friends" ? (
            <div className="friendsList">
              <FriendsChat />
            </div>
          ) : (
            <div className="channelsList">channels list</div>
          )}
        </div>
        <div className="col2">
          {/* show selected friend chat or selected channel chat */}
          {mode == "friends" && selectedFriend != "none" ? (
            <div className="selectedFriendChat">friend chat</div>
          ) : mode == "channels" && selectedChannel != "none" ? (
            <div className="selectedChannelChat">channelchat</div>
          ) : (
            <div className="svgHolder">
              {/* animated svg image until u select some :) */}
              <Image
                className="svgImage"
                src={"/manageChat.svg"}
                width={300}
                height={300}
                alt="select a chat :)"
              />
              <p>all messages are end to end encrypted.</p>
            </div>
          )}

          <div
            onClick={() => {
              console.log("jjjjjjjjjj");

              setHide((prev) => !prev);
            }}
            className="chat_channel_details"
          >
            <HiDotsVertical className="dots_hide" />
          </div>
        </div>
        <div className={`col3 ${hide && "show_col3"}`}>col3</div>
      </div>
    </div>
  );
};

export default Chat;
