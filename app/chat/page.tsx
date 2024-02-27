"use client";
import React, { useState } from "react";
import "./chat.css";
import Image from "next/image";

const Chat = () => {
  const [mode, setMode] = useState("friends");
  const [selectedFriend, setSelectedFriend] = useState("none");
  const [selectedChannel, setSelectedChannel] = useState("none");

  return (
    <div className="chat_channels_container">
      <div className="col1">
        <div className="switcher">
          <span
            className={`selectedColor ${mode ? "toleft" : "toright"}`}
            style={mode == "friends" ? { left: "10px" } : { right: "15px" }}
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
          <div className="friendsList">friends list</div>
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
      </div>
      <div className="col3">col3</div>
    </div>
  );
};

export default Chat;
