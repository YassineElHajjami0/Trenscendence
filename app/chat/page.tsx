"use client";
import React, { useState } from "react";
import "./chat.css";
import Image from "next/image";
import { HiDotsVertical } from "react-icons/hi";
import FriendsChat from "./Friends/FriendsChat";
import ChannelChat from "./Channels/channelChat";
import SelectedChannelChat from "./Channels/SelectedChannelChat";
import { MdOutlineCancel } from "react-icons/md";
import FriendChatList from "./Friends/FriendChatList";
import { slctdFriend } from "../Atoms/friendAtom";
import { useRecoilState } from "recoil";
const Chat = () => {
  const [dotsIcon, setDotsIcone] = useState(true);
  const [hide, setHide] = useState(false);
  const [mode, setMode] = useState("friends");
  const [selectedFriend, setSelectedFriend] = useRecoilState(slctdFriend);
  const [selectedChannel, setSelectedChannel] = useState(-1);

  return (
    <div className="chat_channels_container">
      <div className="chat_channels_sub_container">
        <div
          className={`col1 ${selectedFriend !== "none" && "hideCol1"}  ${
            hide && "blurCols"
          }`}
        >
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
            <div className="channelsList">
              <ChannelChat setSelectedChannel={setSelectedChannel} />
            </div>
          )}
        </div>
        <div
          className={`col2 ${selectedFriend !== "none" && "showCol2"} ${
            hide && "blurCols"
          } `}
        >
          {/* show selected friend chat or selected channel chat */}
          {mode == "friends" && selectedFriend != "none" ? (
            <div className="selectedFriendChat">
              <FriendChatList />
            </div>
          ) : mode == "channels" && selectedChannel > 0 ? (
            <div className="selectedChannelChat">
              <SelectedChannelChat selectedChannel={selectedChannel} />
            </div>
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
        <div className={`col3 ${hide && "show_col3"}`}>col3</div>
        <div
          onClick={() => {
            setHide((prev) => !prev);
            setDotsIcone((prev) => !prev);
          }}
          className="chat_channel_details"
        >
          {dotsIcon ? (
            <HiDotsVertical className="dots_hide" />
          ) : (
            <MdOutlineCancel className="dots_hide" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
