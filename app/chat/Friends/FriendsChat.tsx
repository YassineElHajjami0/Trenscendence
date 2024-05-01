import React, { useEffect, useState } from "react";
import "./FriendsChat.css";
import FriendChat from "./FriendChat";
import friendData from "../../data/friends.json";
import { FriendData } from "@/app/Interfaces/friendDataInterface";
import { useRecoilState, useRecoilValue } from "recoil";
import { loggedUser } from "@/app/Atoms/logged";
import { slctdFriend } from "@/app/Atoms/friendAtom";
import { mheaders } from "@/app/util/headers";
import { userToken } from "@/app/Atoms/userToken";
import { socket } from "@/app/sockets/socket";

export default function FriendsChat() {
  const loggedUserUID = useRecoilValue(loggedUser);
  const userTok = useRecoilValue(userToken);
  const [myFriends, setMyFriends] = useState<any[]>([]);

  useEffect(() => {
    const updateFriends = (friend: any) => {
      const currFriend =
        friend.usersSendThem.uid === loggedUserUID
          ? friend.usersSendMe
          : friend.usersSendThem;
      if (loggedUserUID === friend.user1Id || loggedUserUID === friend.user2Id) {

        setMyFriends((prev: any) => [...prev, currFriend]);
      }
    };

    socket.on("update_friend_list", updateFriends);
    return () => {
      socket.off("update_friend_list");
    };
  }, []);
  console.log("------->my friends", myFriends);

  const getMyFriends = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/friends/${loggedUserUID}`,
        {
          headers: {
            Authorization: `Bearer ${userTok}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

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
      {myFriends.length > 0 &&
        myFriends.map((f: any) => <FriendChat key={f?.uid} friendData={f} />)}
    </div>
  );
}
