import React from "react";
import "./Friends.css";
import Friend from "./Friend";
import friendData from "../data/friends.json";
import { FriendData } from "@/app/Interfaces/friendDataInterface";

export default function Friends() {
  const friend_data: FriendData[] = friendData;
  const sortedFriends = friend_data.sort((a: FriendData, b: FriendData) => {
    const onlineComparison =
      (b.status === "online" ? 1 : 0) - (a.status === "online" ? 1 : 0);
    const ingameComparison =
      (b.status === "ingame" ? 1 : 0) - (a.status === "ingame" ? 1 : 0);
    return onlineComparison || ingameComparison;
  });

  return (
    <div className="friends_container">
      {sortedFriends.map((e) => (
        <Friend friend={e} key={e.uid} />
      ))}
    </div>
  );
}
