import React from "react";
import "./FriendChat.css";
import Image from "next/image";
import { FriendData } from "@/app/Interfaces/friendDataInterface";
import { slctdFriend } from "../../Atoms/friendAtom";
import { useRecoilState } from "recoil";

interface FriendChatProps {
  friendData: FriendData;
}

const FriendChat: React.FC<FriendChatProps> = ({ friendData }) => {
  const [selectedFriend, setSelectedFriend] = useRecoilState(slctdFriend);
  return (
    <div
      onClick={() => setSelectedFriend(friendData.uid)}
      className="friend_chat_container"
    >
      <Image
        className="chat_list_avatar"
        src={friendData.avatar}
        width={2000}
        height={2000}
        alt="avatar"
      />
      <div className="chat_list_name">
        <h1>{friendData.name}</h1>
        <h4>{friendData.lastMSG}</h4>
      </div>
    </div>
  );
};
export default FriendChat;
