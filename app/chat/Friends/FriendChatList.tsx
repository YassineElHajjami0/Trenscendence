import React, { useEffect, useRef, useState } from "react";
import "./FriendChatList.css";
import { BiSolidJoystickAlt } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import Image from "next/image";
import { FriendData } from "@/app/Interfaces/friendDataInterface";
import playerData from "../../data/friends.json";
import myFriendsChat from "../../data/friend_chat.json";
import { IoArrowBackOutline } from "react-icons/io5";
import { useRecoilState, useRecoilValue } from "recoil";
import { ChatContainer } from "./ChatContainer";
import { slctdFriend } from "@/app/Atoms/friendAtom";
import { slctdFriendChat } from "@/app/Atoms/friendChatAtom";
import { FriendChat } from "@/app/Interfaces/friendChat";
import { currentFriend } from "@/app/Atoms/currentFriend";
import { loggedUser } from "@/app/Atoms/logged";
import { channelId } from "@/app/Atoms/channelId";
const FriendChatList = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const loggedU = useRecoilValue(loggedUser);

  // const friends: FriendData[] = playerData;
  // const myFriendChat: FriendChat[] = myFriendsChat;

  const [selectedFriend, setSelectedFriend] = useRecoilState(slctdFriend);
  const [friendChat, setFriendChat] = useRecoilState(slctdFriendChat);
  const [friend, setFriend] = useRecoilState(currentFriend);
  const [inputMSG, setInputMSG] = useState<string>("");
  const [channelID, setChannelID] = useRecoilState(channelId);
  const [msgSent, setMsgSent] = useState<number>(-1);


  const getAllMSG = async (id:number) => {
    const selectedFriendChat = await fetch(
      `http://localhost:3000/message/${id}`
    );
    const data = await selectedFriendChat.json();
    console.log("=========>>>>", data);
    setFriendChat(data);
  };

  
  useEffect(() => {
    //get my friend data
    // friends.find((f) => f.uid === selectedFriend);
    const getMyFriendData = async () => {
      /*----------------------------get my friend data------------------------------- */
      const selectedFriendData = await fetch(
        `http://localhost:3000/users/${selectedFriend}`
      );
      const dataF = await selectedFriendData.json();
      //set my friend data
      setFriend(dataF);

      /*---------------------------create a channel or get its id------------------- */
      const channelData = {
        name: "",
        topic: "",
        id: loggedU,
        frindId: selectedFriend,
      };
      const createOrGetChannelID = await fetch(
        "http://localhost:3000/channels/dm",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(channelData),
        }
      );
      const dataC = await createOrGetChannelID.json();
      setChannelID(dataC);
      getAllMSG(dataC);
      setInputMSG("");
    };
    getMyFriendData();
  }, [selectedFriend]);

  useEffect(() => {
    getAllMSG(channelID);
  }, [msgSent]);

  const sendMSG = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputMSG.length === 0) return;
    const channelData = {
      userID: loggedU,
      channelID: channelID,
      content: inputMSG,
    };
    const msg = await fetch("http://localhost:3000/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(channelData),
    });

    const data = await msg.json();
    setMsgSent(data.id);
    setInputMSG("");
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [friendChat]);

  const isSameDay = (date1: number, date2: number): boolean => {
    const getFormattedDate = (timestamp: number): string => {
      const date = new Date(timestamp);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    };

    return getFormattedDate(date1) === getFormattedDate(date2);
  };

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputMSG.length === 0) return;
    const currentDate = Date.now();
    const message = {
      time: Date.now() as number,
      msg: inputMSG,
      recipient: false,
    };
    const friendChatToUpdate: FriendChat = {
      ...friendChat,
      allmessages: friendChat?.allmessages || [],
      uid: friendChat?.uid || "",
    };
    const lastMessage =
      friendChatToUpdate?.allmessages[
        friendChatToUpdate?.allmessages.length - 1
      ];
    if (lastMessage && isSameDay(lastMessage.date, currentDate))
      lastMessage.messages.push(message);
    else {
      friendChatToUpdate?.allmessages.push({
        date: currentDate as number,
        messages: [message],
      });
    }
    setFriendChat(friendChatToUpdate);
    setInputMSG("");
  };

  return (
    <div className="friend_chat_msg">
      <div className="friend_chat_msg_header">
        <IoArrowBackOutline
          className="arrow_back"
          onClick={() => setSelectedFriend(-1)}
        />

        <Image
          className="my_chat_msg_avatar"
          src={friend?.choosedProfileImage || "/avatar3.png"}
          width={2000}
          height={2000}
          alt="avatar"
        />
        <div className="my_chat_msg_name">
          <h1>{friend?.username}</h1>
          <h5
            className={`online ${friend?.status === "ingame" && "ingames"}
          ${friend?.status === "offline" && "offline"}
          `}
          >
            {friend?.status === "online"
              ? "Online"
              : friend?.status === "ingame"
              ? "Playing"
              : "Offline"}
          </h5>
        </div>
      </div>
      <div ref={chatContainerRef} className="friend_chat_msg_body">
        {friendChat?.map((m: any) => (
          <ChatContainer key={m.createdAT} messages={m} />
        ))}
      </div>
      <form onSubmit={sendMSG} className="friend_chat_msg_form">
        <fieldset disabled={friend?.blocked}>
          <input
            value={inputMSG}
            onChange={(e) => setInputMSG(e.target.value)}
            className="input_msg"
            type="text"
            placeholder={`${
              friend?.blocked ? "You blocked this friend" : "Message"
            }`}
          />

          <div className="play_send_msg">
            <BiSolidJoystickAlt />
            <button className="submit_msg" type="submit">
              <IoIosSend />
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default FriendChatList;
