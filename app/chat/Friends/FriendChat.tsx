import React from "react";
import "./FriendChat.css";
import Image from "next/image";

import { slctdFriend } from "../../Atoms/friendAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { loadingMsg } from "@/app/Atoms/loadingMsg";
import { currentFriend } from "@/app/Atoms/currentFriend";
import { channelId } from "@/app/Atoms/channelId";
import { loggedUser } from "@/app/Atoms/logged";

interface FriendChatProps {
  friendData: any;
}

const FriendChat: React.FC<FriendChatProps> = ({ friendData }) => {
  const UID = useRecoilValue(loggedUser);
  const myFriend = friendData.roles.find((role: any) => role.uid !== UID);

  const [selectedFriend, setSelectedFriend] = useRecoilState(slctdFriend);
  const [loadingAnimation, setLoadingAnimation] = useRecoilState(loadingMsg);
  const [friend, setFriend] = useRecoilState(currentFriend);
  const [dmID, setDMID] = useRecoilState(channelId);

  return (
    <div
      onClick={() => {
        if (myFriend.uid !== selectedFriend) {
          setLoadingAnimation(true);
          setDMID(friendData.id);
          setFriend(myFriend);
          setSelectedFriend(myFriend.uid);
        }
      }}
      className="friend_chat_container"
    >
      <div className="chat_list_avatar_container">
        <Image
          className="chat_list_avatar"
          src={`http://localhost:3000/${myFriend.avatar}`}
          width={2000}
          height={2000}
          alt="avatar"
        />
        <span
          className={`status_dot ${myFriend.status === "online" && "logged"}  ${
            myFriend.status === "ingame" && "ingame"
          }`}
        ></span>
      </div>
      <div className="chat_list_name">
        <h1>{myFriend.username}</h1>
        <h4>{friendData?.lastMSG}</h4>
      </div>
    </div>
  );
};
export default FriendChat;
