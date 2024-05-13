import React from "react";
import "./FriendChat.css";
import Image from "next/image";

import { slctdFriend } from "../../Atoms/friendAtom";
import { useRecoilState } from "recoil";
import { loadingMsg } from "@/app/Atoms/loadingMsg";
import { currentFriend } from "@/app/Atoms/currentFriend";
import { channelId } from "@/app/Atoms/channelId";

interface FriendChatProps {
  friendData: any;
}

const FriendChat: React.FC<FriendChatProps> = ({ friendData }) => {
  console.log("friend data >>>>>>>>", friendData);

  const [selectedFriend, setSelectedFriend] = useRecoilState(slctdFriend);
  const [loadingAnimation, setLoadingAnimation] = useRecoilState(loadingMsg);
  const [friend, setFriend] = useRecoilState(currentFriend);
  const [dmID, setDMID] = useRecoilState(channelId);

  return (
    <div
      onClick={() => {
        if (friendData.users.uid !== selectedFriend) {
          setLoadingAnimation(true);
          setDMID(friendData.id);
          setFriend(friendData.users);
          setSelectedFriend(friendData.users.uid);
        }
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
        <h4>{friendData?.lastMSG}</h4>
      </div>
    </div>
  );
};
export default FriendChat;
