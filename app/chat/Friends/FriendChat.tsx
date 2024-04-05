import React from "react";
import "./FriendChat.css";
import Image from "next/image";

import { slctdFriend } from "../../Atoms/friendAtom";
import { useRecoilState } from "recoil";

interface FriendChatProps {
  friendData: any;
}

const FriendChat: React.FC<FriendChatProps> = ({ friendData }) => {
  const [selectedFriend, setSelectedFriend] = useRecoilState(slctdFriend);

  return (
    <div
      onClick={() => setSelectedFriend(friendData.uid)}
      className="friend_chat_container"
    >
      <div className="chat_list_avatar_container">
        <Image
          className="chat_list_avatar"
          src={friendData?.avatar}
          width={2000}
          height={2000}
          alt="avatar"
        />
        <span
          className={`status_dot ${
            friendData?.status === "online" && "logged"
          }  ${friendData?.status === "ingame" && "ingame"}`}
        ></span>
      </div>
      <div className="chat_list_name">
        <h1>{friendData?.name}</h1>
        <h4>{friendData?.lastMSG}</h4>
      </div>
    </div>
  );
};
export default FriendChat;
