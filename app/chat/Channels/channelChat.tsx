import React from "react";
import ChannelsList from "../../data/channels_list.json";
import Image from "next/image";
import "./channelChat.css";

const channelChat = ({ setSelectedChannel }) => {
  console.log(">>>>>>>>>>", ChannelsList);
  return (
    <div className="channelsList">
      {ChannelsList.map((e) => {
        return (
          <div
            key={e.channel_name}
            className="channelContainer"
            onClick={() => {
              setSelectedChannel();
            }}
          >
            <div className="imageContainer">
              <Image
                className="channelImage"
                src={e.avatar}
                width={80}
                height={80}
                alt="avatar"
              />
            </div>
            <div className="name_lastmsg">
              <p> {e.channel_name}</p>
              <span>{e.lastmsg}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default channelChat;
