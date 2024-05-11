import React from "react";
import "./FriendChat.css";
import Image from "next/image";

import { slctdFriend } from "../../Atoms/friendAtom";
import { useRecoilState } from "recoil";
import { loadingMsg } from "@/app/Atoms/loadingMsg";

interface FriendChatProps {
  friendData: any;
}

const FriendChat: React.FC<FriendChatProps> = ({ friendData }) => {
  const [selectedFriend, setSelectedFriend] = useRecoilState(slctdFriend);
  const [loadingAnimation, setLoadingAnimation] = useRecoilState(loadingMsg);

  return (
    <div
      onClick={() => {
        setSelectedFriend(friendData.users.uid);
        if (friendData.uid !== selectedFriend) setLoadingAnimation(true);
      }}
      className="friend_chat_container"
    >
      <div className="chat_list_avatar_container">
        <Image
          className="chat_list_avatar"
          src={`http://localhost:3000/${friendData?.users?.avatar}`}
          width={2000}
          height={2000}
          alt="avatar"
        />
        <span
          className={`status_dot ${
            friendData?.users?.status === "online" && "logged"
          }  ${friendData?.users?.status === "ingame" && "ingame"}`}
        ></span>
      </div>
      <div className="chat_list_name">
        <h1>{friendData?.users?.username}</h1>
        <h4>{friendData?.users?.lastMSG}</h4>
      </div>
    </div>
  );
};
export default FriendChat;
