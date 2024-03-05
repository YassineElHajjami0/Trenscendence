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
import ChannelInfo from "./Channels/channelInfo";

const Chat = () => {
  const [dotsIcon, setDotsIcone] = useState(true);
  const [hide, setHide] = useState(false);
  const [mode, setMode] = useState("friends");
  const [selectedFriend, setSelectedFriend] = useRecoilState(slctdFriend);
  const [selectedChannel, setSelectedChannel] = useState(-1);
  const selectedBtn = mode === "friends" ? "toleft" : "toright";
  return (
    <div className="chat_channels_container">
      <div className="chat_channels_sub_container">
        <div
          className={`col1 ${
            (selectedFriend !== "none" || selectedChannel > 0) && "hideCol1"
          }  ${hide && "blurCols"}`}
        >
          <div className="switcher">
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
            <span className={`selectedColor ${selectedBtn}`}></span>
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
          className={`col2 ${
            (selectedFriend !== "none" || selectedChannel > 0) && "showCol2"
          } ${hide && "blurCols"} `}
        >
          {/* show selected friend chat or selected channel chat */}
          {mode == "friends" && selectedFriend != "none" ? (
            <div className="selectedFriendChat">
              <FriendChatList />
            </div>
          ) : mode == "channels" && selectedChannel > 0 ? (
            <div className="selectedChannelChat">
              <SelectedChannelChat
                selectedChannel={selectedChannel}
                setSelectedChannel={setSelectedChannel}
              />
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
        <div className={`col3 ${hide && "show_col3"}`}>
          {mode == "friends" && selectedFriend != "none" ? (
            <div>friends</div>
          ) : mode == "channels" && selectedChannel > 0 ? (
            <ChannelInfo selectedChannel={selectedChannel} />
          ) : (
            ""
          )}
        </div>
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
