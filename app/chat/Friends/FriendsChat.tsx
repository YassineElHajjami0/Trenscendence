import React from "react";
import "./FriendsChat.css";
import FriendChat from "./FriendChat";
import friendData from "../../data/friends.json";
import { FriendData } from "@/app/Interfaces/friendDataInterface";

export default function FriendsChat() {
  const friend_data: FriendData[] = friendData;
  const sortedFriends = friend_data.sort((a: FriendData, b: FriendData) => {
    const onlineComparison =
      (b.status === "online" ? 1 : 0) - (a.status === "online" ? 1 : 0);
    const ingameComparison =
      (b.status === "ingame" ? 1 : 0) - (a.status === "ingame" ? 1 : 0);
    return onlineComparison || ingameComparison;
  });

  return (
    <div className="friends_chat_container">
      {sortedFriends.map((f: FriendData) => (
        <FriendChat key={f.uid} friendData={f} />
      ))}
    </div>
  );
}
