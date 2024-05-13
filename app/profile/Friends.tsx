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
import { socket } from "../sockets/socket";

export default function Friends({ whichProfile }: { whichProfile: any }) {
  const UID = useRecoilValue(loggedUser);

  const userTok = useRecoilValue(userToken);
  const [userFriends, setUserFriends] = useState<any[]>([]);

  useEffect(() => {
    const updateFriends = (friend: any) => {
      if (friend.length === 0) return;
      if (typeof friend.users === "undefined") return;

      const { users, ...rest } = friend;
      const whichUser = UID === users[0].uid ? users[1] : users[0];
      const whichUID = friend.users.some((user: any) => user.uid === UID);
      if (whichUID) {
        setUserFriends((prev: any) => [...prev, { users: whichUser, ...rest }]);
      }
    };
    socket.on("update_friend_list", updateFriends);
    return () => {
      socket.off("update_friend_list");
    };
  });

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

  // const sortedFriends = friend_data.sort((a: FriendData, b: FriendData) => {
  //   const onlineComparison =
  //     (b.status === "online" ? 1 : 0) - (a.status === "online" ? 1 : 0);
  //   const ingameComparison =
  //     (b.status === "ingame" ? 1 : 0) - (a.status === "ingame" ? 1 : 0);
  //   return onlineComparison || ingameComparison;
  // });

  return (
    <div className="friends_container">
      {
        userFriends?.length > 0 &&
          userFriends?.map((e: any) => <Friend friend={e} key={e.id} />)

        //  : (
        //   <AddFriendSection className='add_friend_in_profile'/>
        // )
      }
    </div>
  );
}
