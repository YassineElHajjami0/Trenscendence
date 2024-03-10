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
import { IoCameraReverse } from "react-icons/io5";
import { FriendInfo } from "./Friends/FriendInfo";
import { TiUserAdd } from "react-icons/ti";
import PopupCreateChannel from "./Channels/popupCreateChannel";

const Chat = () => {
  const [addFriend, setAddFriend] = useState(false);

  const [hide, setHide] = useState(false);
  const [mode, setMode] = useState("friends");
  const [selectedFriend, setSelectedFriend] = useRecoilState(slctdFriend);
  const [selectedChannel, setSelectedChannel] = useState(-1);
  const [showPopUpCreateChannel, setShowPopUpCreateChannel] = useState(false);

  const selectedBtn = mode === "friends" ? "toleft" : "toright";

  const addFriendClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleParentClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      (event.target as HTMLElement).classList.contains("clo3_sub_container")
    ) {
      return;
    }
    setHide(false);
  };

  return (
    <div className="chat_channels_container">
      <div className="chat_channels_sub_container">
        <div
          className={`createChannelPopup ${
            showPopUpCreateChannel ? "showPopup" : "hidePopUp"
          }`}
        >
          <PopupCreateChannel
            setShowPopUpCreateChannel={setShowPopUpCreateChannel}
          />
        </div>
        <div
          className={`col1 ${
            (selectedFriend !== "none" || selectedChannel > 0) && "hideCol1"
          }  `}
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
              <ChannelChat
                setSelectedChannel={setSelectedChannel}
                setShowPopUpCreateChannel={setShowPopUpCreateChannel}
              />
            </div>
          )}
        </div>
        <div
          className={`col2 ${
            (selectedFriend !== "none" || selectedChannel > 0) && "showCol2"
          }  `}
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
        <div
          onClick={handleParentClick}
          className={`col3 ${hide && "show_col3"}`}
        >
          <div className="clo3_sub_container">
            {mode == "friends" && selectedFriend != "none" ? (
              <FriendInfo />
            ) : mode == "channels" && selectedChannel > 0 ? (
              <ChannelInfo selectedChannel={selectedChannel} />
            ) : (
              ""
            )}
          </div>
        </div>

        <div
          onClick={() => {
            setHide((prev) => !prev);
          }}
          className="chat_channel_details"
        >
          {hide ? (
            <MdOutlineCancel className="dots_hide" />
          ) : (
            <HiDotsVertical className="dots_hide" />
          )}
        </div>
        {mode === "friends" && (
          <div
            onClick={() => setAddFriend((prev) => !prev)}
            className={`add_friend ${addFriend && `show_the_big_div`}`}
          >
            {addFriend ? (
              <div onClick={addFriendClick} className="add_friend_container">
                <input type="text" placeholder="Add friend" />

                <div className="searchedFriends"></div>
              </div>
            ) : (
              <TiUserAdd />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
