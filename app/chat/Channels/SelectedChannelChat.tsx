import React, { useEffect, useState } from "react";
import Image from "next/image";
import ChannelData from "../../data/channels_list.json";
import { CHANNEL_DATA } from "@/app/Interfaces/channelDataInterface";
import { IoIosSend } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import "./channelChat.css";

interface channelInterface {
  id: number;
  name: string;
  topic: string;
  type: string;
  uri: string;
  roles: any[];
}
interface MessagesInterface {
  channelID: number;
  content: string;
  createdAT: string;
  id: number;
  userID: number;
}

const SelectedChannelChat = ({
  userId,
  userTok,
  channels,
  selectedChannel,
  setSelectedChannel,
}: {
  userId: number;
  userTok: string;
  channels: channelInterface[] | undefined;
  selectedChannel: number;
  setSelectedChannel: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [chToDisplay, setChToDisplay] = useState<
    channelInterface | undefined
  >();
  const [messages, setMessages] = useState<MessagesInterface[]>();

  useEffect(() => {
    let channelToDisplay: channelInterface | undefined = channels?.find(
      (ch) => ch.id === selectedChannel
    );

    const fetchMessages = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/message/${channelToDisplay?.id}`,
          {
            headers: {
              Authorization: `Bearer ${userTok}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log(">>>MESSAGES>>>>>", data);
        setMessages(data);
      } catch (error) {
        console.log("Error herere");
      }
    };
    fetchMessages();
    console.log("channel to display : ", channelToDisplay);

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
          src={
            `http://localhost:3000/${chToDisplay?.uri}` ??
            "http://localhost:3000/default.png"
          }
          width={100}
          height={100}
          alt="avatar"
        />
        <div>
          <h3 style={{ display: "block" }}>{chToDisplay?.name}</h3>
          <p>
            {chToDisplay?.roles.length}{" "}
            {chToDisplay?.roles.length && chToDisplay?.roles.length < 2
              ? "member"
              : "members"}
          </p>
        </div>
      </div>
      <div className="channel_msg_section_chat">
        {messages?.map((message) => {
          return message.userID == userId ? (
            <div className="channelMsgContainerRecipient" key={message.id}>
              <div className="msgAndTime">
                <p className="channelMsg">{message.content}</p>
                <p className="msgTime">{returnMsgTime(+message.createdAT)}</p>
              </div>
            </div>
          ) : (
            <div className="channelMsgContainer" key={message.id}>
              <Image
                className="senderOrRecieverImage"
                src={"message.avatar"}
                width={30}
                height={30}
                alt="PIC"
              />
              <div className="msgAndTime">
                <p className="channelMsg">{message.content}</p>
                <p className="msgTime">{returnMsgTime(+message.createdAT)}</p>
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
