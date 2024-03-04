import React, { useEffect, useState } from "react";
import Image from "next/image";
import ChannelData from "../../data/channels_list.json";
import { CHANNEL_DATA } from "@/app/Interfaces/channelDataInterface";
import { IoIosSend } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";

import "./channelChat.css";

const SelectedChannelChat = ({
  selectedChannel,
  setSelectedChannel,
}: {
  selectedChannel: number;
  setSelectedChannel: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [chToDisplay, setChToDisplay] = useState<CHANNEL_DATA | undefined>();
  useEffect(() => {
    let channelToDisplay: CHANNEL_DATA | undefined = ChannelData.find(
      (ch) => ch.channel_id === selectedChannel
    );
    setChToDisplay(channelToDisplay);
  }, [selectedChannel]);

  const returnMsgTime = (time: number): string => {
    console.log(time);
    const date = new Date(time * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const result: string = "" + hours + ":" + minutes;
    return result;
  };
  return (
    <div className="channel_msg_section">
      <div className="channel_msg_section_header">
        <IoArrowBackOutline
          style={{ width: "20px", margin: "5px" }}
          className="arrow_back"
          onClick={() => setSelectedChannel(-1)}
        />
        <Image
          className="channel_msg_section_header_avatar"
          src={chToDisplay?.avatar ?? "/default.png"}
          width={100}
          height={100}
          alt="avatar"
        />
        <div>
          <h3 style={{ display: "block" }}>{chToDisplay?.channel_name}</h3>
          <p>{chToDisplay?.members_number} member</p>
        </div>
      </div>
      <div className="channel_msg_section_chat">
        {chToDisplay?.messages.map((e) => {
          return e.recipient ? (
            <div className="channelMsgContainerRecipient" key={e.id}>
              <div className="msgAndTime">
                <p className="channelMsg">{e.msg}</p>
                <p className="msgTime">{returnMsgTime(e.time)}</p>
              </div>
            </div>
          ) : (
            <div className="channelMsgContainer" key={e.id}>
              <Image
                className="senderOrRecieverImage"
                src={e.avatar}
                width={30}
                height={30}
                alt="PIC"
              />
              <div className="msgAndTime">
                <p className="channelMsg">{e.msg}</p>
                <p className="msgTime">{returnMsgTime(e.time)}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="channel_msg_section_input">
        <input
          type="text"
          onKeyDown={(e) => {
            if (e.key == "Enter") console.log("subbmitted !");
          }}
        />
        <IoIosSend className="sendIcon" />
      </div>
    </div>
  );
};

export default SelectedChannelChat;
