import React from "react";
import "./FriendsChat.css";
import FriendChat from "./FriendChat";
import friendData from "../../data/friends.json";

export default function FriendsChat() {
  const friend_data: any = friendData["friends"];
  const sortedFriends = friend_data.sort((a: any, b: any) => {
    return (b.status === "online" ? 1 : -1) - (a.status === "online" ? 1 : -1);
  });
  // console.log(sortedFriends);

  return (
    <div className="friends_chat_container">
      {sortedFriends.map((f: any) => (
        <FriendChat key={f.uid} friendData={f} />
      ))}
    </div>
  );
}
