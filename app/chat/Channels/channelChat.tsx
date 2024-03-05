import React from "react";
import ChannelsList from "../../data/channels_list.json";
import Image from "next/image";
import "./channelChat.css";
import { IoArrowBackOutline } from "react-icons/io5";

interface channelChatProps {
  setSelectedChannel: React.Dispatch<React.SetStateAction<number>>;
}

const channelChat: React.FC<channelChatProps> = ({ setSelectedChannel }) => {
  return (
    <div className="channelsList">
      {ChannelsList.map((e) => {
        return (
          <div
            key={e.channel_id}
            className="channelContainer"
            onClick={() => {
              setSelectedChannel(e.channel_id);
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
              <p>
                {e.channel_name.length > 10
                  ? `${e.channel_name.substring(0, 10)}..`
                  : e.channel_name}
              </p>
              <span>
                {e.lastmsg.length > 10
                  ? `${e.lastmsg.substring(0, 10)}..`
                  : e.lastmsg}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default channelChat;
