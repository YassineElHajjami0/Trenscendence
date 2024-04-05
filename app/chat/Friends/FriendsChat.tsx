import React, { useEffect, useState } from "react";
import "./FriendsChat.css";
import FriendChat from "./FriendChat";
import friendData from "../../data/friends.json";
import { FriendData } from "@/app/Interfaces/friendDataInterface";
import { useRecoilState, useRecoilValue } from "recoil";
import { loggedUser } from "@/app/Atoms/logged";
import { slctdFriend } from "@/app/Atoms/friendAtom";

export default function FriendsChat() {
  /// hna jib all the friends form the back of the .....
  const [selectedFriend, setSelectedFriend] = useRecoilState(slctdFriend);

  const loggedUserUID = useRecoilValue(loggedUser);
  const [myFriends, setMyFriends] = useState([]);
  const getMyFriends = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/friends/${loggedUserUID}`
      );
      if (!response.ok) {
        console.log("Error000");
      }
      const data = await response.json();
      console.log("------->my friends", data);

      setMyFriends(data);
    } catch (error) {
      console.log("Error111");
    }
  };
  useEffect(() => {
    getMyFriends();
  }, []);

  // const friend_data: FriendData[] = friendData;
  // const sortedFriends = friend_data.sort((a: FriendData, b: FriendData) => {
  //   const onlineComparison =
  //     (b.status === "online" ? 1 : 0) - (a.status === "online" ? 1 : 0);
  //   const ingameComparison =
  //     (b.status === "ingame" ? 1 : 0) - (a.status === "ingame" ? 1 : 0);
  //   return onlineComparison || ingameComparison;
  // });

  return (
    <div className="friends_chat_container">
      {myFriends.length &&
        myFriends.map((f: any) => <FriendChat key={f?.uid} friendData={f} />)}
    </div>
  );
}
