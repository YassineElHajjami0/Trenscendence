import React, { useEffect, useState } from "react";
import "./FriendsChat.css";
import FriendChat from "./FriendChat";
import friendData from "../../data/friends.json";
import { FriendData } from "@/app/Interfaces/friendDataInterface";
import { useRecoilState, useRecoilValue } from "recoil";
import { loggedUser } from "@/app/Atoms/logged";

import { mheaders } from "@/app/util/headers";
import { userToken } from "@/app/Atoms/userToken";
import { socket } from "@/app/sockets/socket";

export default function FriendsChat() {
  const UID = useRecoilValue(loggedUser);
  const userTok = useRecoilValue(userToken);
  const [myFriends, setMyFriends] = useState<any[]>([]);

  myFriends.sort((a: any, b: any) => {
    return new Date(b.sendAT).getTime() - new Date(a.sendAT).getTime();
  });
  useEffect(() => {
    const updateFriends = (friend: any) => {
      const { users, ...rest } = friend;
      const whichUser = UID === users[0].uid ? users[1] : users[0];

      console.log("socket friend>>>>>", whichUser);
      const whichUID = friend.users.some((user: any) => user.uid === UID);
      if (whichUID) {
        setMyFriends((prev: any) => [...prev, { users: whichUser, ...rest }]);
      }
    };

    socket.on("update_friend_list", updateFriends);
    return () => {
      socket.off("update_friend_list");
    };
  }, []);
  console.log("alllll users>>>>>>>>", myFriends);

  const getMyFriends = async () => {
    try {
      const response = await fetch(`http://localhost:3000/channels/dm/${UID}`, {
        headers: {
          Authorization: `Bearer ${userTok}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("friends>>>>>>>", data);

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
        myFriends.map((f: any) => <FriendChat key={f?.id} friendData={f} />)}
    </div>
  );
}
