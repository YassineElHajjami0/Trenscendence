import React, { useEffect, useState } from "react";
import Image from "next/image";
import ChannelData from "../../data/channels_list.json";
import { CHANNEL_DATA } from "@/app/Interfaces/channelDataInterface";
import { IoIosSend } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdBlock } from "react-icons/md";
import "./channelChat.css";
import { io } from "socket.io-client";
const socket = io("http://localhost:3001", { transports: ["websocket"] });
console.log("MMMMMM", socket);
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
  users: { avatar: string };
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
  const [msgContent, setMsgContent] = useState<string>("");
  const [myCondition, setMyCondition] = useState("NORMAL");
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
        const req = await fetch(
          `http://localhost:3000/channelss/roles?channelId=${selectedChannel}`,
          {
            headers: {
              Authorization: `Bearer ${userTok}`,
              "Content-Type": "application/json",
            },
          }
        );
        const myData = await req.json();
        const myCondition: any = myData.find((e: any) => e.user.uid == userId);
        setMyCondition(myCondition.condition);
        if (myCondition.condition == "BLOCKED") {
          const filtredMessages = data.filter(
            (e: any) => e.createdAT < myCondition.blockedSince
          );
          console.log("FILTRED MESSAGES : ", filtredMessages);
          setMessages(filtredMessages);
        } else setMessages(data);
      } catch (error) {
        console.log("Error herere");
      }
    };
    fetchMessages();
    console.log("channel to display : ", channelToDisplay);

    setChToDisplay(channelToDisplay);
  }, [selectedChannel]);

  useEffect(() => {
    const handleReceiveMessage = async (message: any) => {
      const response = await fetch(
        `http://localhost:3000/channelss/roles?channelId=${selectedChannel}`,
        {
          headers: {
            Authorization: `Bearer ${userTok}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      const myCondition = data.find((e: any) => e.user.uid == userId);
      setMyCondition(myCondition.condition);
      console.log(
        "??????I WANT HERE  , my conditon:",
        myCondition,
        " selectedChannel: ",
        selectedChannel,
        "  message?: ",
        message
      );
      if (
        (message?.channelID === selectedChannel ||
          message?.channelID === undefined) &&
        myCondition.condition != "BLOCKED"
      ) {
        const response = await fetch(
          `http://localhost:3000/message/${selectedChannel}`,
          {
            headers: {
              Authorization: `Bearer ${userTok}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log("PPLLLSSS : ", data);
        setMessages(data);
      }
    };

    const fetchMessageAfterRmBlock = async () => {
      // bring all the users in that channel
      const usersRolesInChannel = await fetch(
        `http://localhost:3000/channelss/roles?channelId=${selectedChannel}`,
        {
          headers: {
            Authorization: `Bearer ${userTok}`,
            "Content-Type": "application/json",
          },
        }
      );
      const resultOfUsersInChannel = await usersRolesInChannel.json();
      const Me = resultOfUsersInChannel.find((e: any) => e.user.uid == userId);
      var dateOfUser = new Date(Me.blockedSince);
      var unixTimestamp = dateOfUser.getTime() / 1000;
      var datenow = new Date().getTime();
      console.log("unixTimestamp : ", unixTimestamp, " datenow : ", datenow);
      if (Me.blockedSince == "BLOCKED")
        // find myData in the channel
        // if i was blocked then fetch all the messages to display them
        console.log("channel to display =>", chToDisplay, "  UID : ", userId);
      const response = await fetch(
        `http://localhost:3000/message/${chToDisplay?.id}`,
        {
          headers: {
            Authorization: `Bearer ${userTok}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(">>:>>:>>", data);
      // setMessages(data);
    };

    socket.on("message", handleReceiveMessage);
    // socket.on("updateMessagesAfterBlock", fetchMessageAfterRmBlock);
    socket.on("updateRoles", handleReceiveMessage);

    return () => {
      socket.off("message");
      socket.off("updateRoles");
    };
  }, [chToDisplay?.id]);

  const handleSendingMessage = (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<SVGElement, MouseEvent>
  ) => {
    const sendTheMessage = async () => {
      try {
        const channelData = {
          userID: userId,
          channelID: chToDisplay?.id,
          content: msgContent,
        };

        const response = await fetch(`http://localhost:3000/message`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${userTok}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(channelData),
        }).then(() => {
          setMsgContent("");
        });
      } catch (error) {
        console.log("Error herere");
      }
    };
    sendTheMessage();
  };

  const returnTime = (msgTime: string) => {
    const options = { hour: "2-digit", minute: "2-digit" };
    const date: string = new Date(msgTime).toLocaleString(
      "en-US",
      options as Intl.DateTimeFormatOptions
    );
    return date;
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
                <p className="msgTime">{returnTime(message.createdAT)}</p>
              </div>
            </div>
          ) : (
            <div className="channelMsgContainer" key={message.id}>
              {/* <Image
                className="senderOrRecieverImage"
                src={
                  `http://localhost:3000/${message.users.avatar}` ||
                  "default.png"
                }
                width={30}
                height={30}
                alt="PIC"
              /> */}
              <div className="msgAndTime">
                <p className="channelMsg">{message.content}</p>
                <p className="msgTime">{returnTime(message.createdAT)}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="channel_msg_section_input">
        <input
          disabled={myCondition == "BLOCKED"}
          type="text"
          value={msgContent}
          maxLength={100}
          minLength={1}
          onChange={(e) => setMsgContent(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              handleSendingMessage(e);
            }
          }}
        />
        {myCondition == "BLOCKED" ? (
          <MdBlock className="sendIcon" />
        ) : (
          <IoIosSend
            className="sendIcon"
            onClick={(e) => {
              handleSendingMessage(e);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default SelectedChannelChat;
