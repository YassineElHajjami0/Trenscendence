import React, { useEffect, useState } from "react";
import "./FriendsChat.css";
import FriendChat from "./FriendChat";

import { useRecoilState, useRecoilValue } from "recoil";
import { loggedUser } from "@/app/Atoms/logged";

import { userToken } from "@/app/Atoms/userToken";
import { socket } from "@/app/sockets/socket";
import { channelId } from "@/app/Atoms/channelId";
import { chatMSG } from "@/app/Atoms/chatMSG";

export default function FriendsChat() {
  const UID = useRecoilValue(loggedUser);
  const userTok = useRecoilValue(userToken);
  const [myFriends, setMyFriends] = useState<any[]>([]);
  const channelID = useRecoilValue(channelId);
  const [friendChat, setFriendChat] = useRecoilState<any[]>(chatMSG);

  useEffect(() => {
    const handleReceiveMessage = (message: any) => {
      if (message?.channelID === channelID)
        setFriendChat((prevMessages: any) => [...prevMessages, message]);

      setMyFriends((prev) =>
        prev.map((f: any) =>
          f.id === message?.channelID
            ? { ...f, lastMSG: message.content, sendAT: message.createdAT }
            : f
        )
      );
    };
    socket.on("message", handleReceiveMessage);
    return () => {
      socket.off("message");
    };
  });

  useEffect(() => {
    myFriends.sort((a: any, b: any) => {
      return new Date(b.sendAT).getTime() - new Date(a.sendAT).getTime();
    });
  }, [myFriends]);

  useEffect(() => {
    const updateFriends = (friend: any) => {
      const { users, ...rest } = friend;
      const whichUser = UID === users[0].uid ? users[1] : users[0];
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
        myFriends.map((f: any) => <FriendChat key={f.id} friendData={f} />)}
    </div>
  );
}
