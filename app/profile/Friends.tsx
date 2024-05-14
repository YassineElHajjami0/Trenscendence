import React, { useEffect, useState } from "react";
import "./Friends.css";
import Friend from "./Friend";
import friendData from "../data/friends.json";
import { FriendData } from "@/app/Interfaces/friendDataInterface";
import { useRecoilValue } from "recoil";
import { loggedUser } from "../Atoms/logged";
import { userToken } from "../Atoms/userToken";
import AddFriendSection from "../chat/Friends/AddFriendSection";
import "../chat/chat.css";
import "../chat/Friends/AddFriend.css";
import { socket } from "../sockets/socket";

export default function Friends({ whichProfile }: { whichProfile: any }) {
  const UID = useRecoilValue(loggedUser);

  const userTok = useRecoilValue(userToken);
  const [userFriends, setUserFriends] = useState<any[]>([]);

  useEffect(() => {
    const updateFriends = (friend: any) => {
      console.log(">>>>>>>>>>>>>>>>>>>>>>.", friend);

      if (friend.length === 0) return;
      if (typeof friend.users === "undefined") return;

      const whichUID = friend.roles.some((user: any) => user.uid === UID);
      if (whichUID) {
        setUserFriends((prev: any) => [...prev, friend]);
      }
    };

    socket.on("update_friend_list", updateFriends);
    return () => {
      socket.off("update_friend_list");
    };
  }, []);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/channels/dm/${whichProfile}`,
          {
            headers: {
              Authorization: `Bearer ${userTok}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        setUserFriends(data);
        // console.log("userData-->>>", data);
      } catch (error: any) {
        console.log("--->>>", error.message);
      }
    };
    getUserData();
  }, [whichProfile]);

  return (
    <div className="friends_container">
      {userFriends?.length > 1 ? (
        userFriends?.map((e: any) => (
          <Friend whichProfile={whichProfile} friend={e} key={e.id} />
        ))
      ) : (
        <AddFriendSection />
      )}
    </div>
  );
}
