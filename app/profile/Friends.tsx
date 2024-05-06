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

export default function Friends({ whichProfile }: { whichProfile: any }) {
  const loggedU = useRecoilValue(loggedUser);
  const userTok = useRecoilValue(userToken);
  const [userFriends, setUserFriends] = useState<any[]>([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/friends/${whichProfile}`,
          {
            headers: {
              Authorization: `Bearer ${userTok}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        setUserFriends(data);
        console.log("userData-->>>", data);
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
          userFriends?.map((e: any) => <Friend friend={e} key={e.uid} />)

        //  : (
        //   <AddFriendSection className='add_friend_in_profile'/>
        // )
      }
    </div>
  );
}
