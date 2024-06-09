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
  console.log("friend array>>>", userFriends);

  useEffect(() => {
    const handleBlockedFriend = (friend: any) => {
      setUserFriends((prev: any) => {
        return prev.map((channel: any) => {
          if (channel.id === friend.channelID) {
            const updatedRoles = channel.roles.map((role: any) => {
              if (role.uid === friend.userID) {
                return { ...role, blocked: friend.blocked };
              }
              return role;
            });
            return { ...channel, roles: updatedRoles };
          }
          return channel;
        });
      });
    };

    socket.on("update_blocked_friend", handleBlockedFriend);
    return () => {
      socket.off("update_blocked_friend");
    };
  });

  useEffect(() => {
    const handleNewFriendStatus = (friend: any) => {
      setUserFriends((prev: any) => {
        return prev.map((channel: any) => {
          const updatedRoles = channel.roles.map((role: any) => {
            if (role.uid === friend.uid) return friend;
            return role;
          });
          return { ...channel, roles: updatedRoles };
        });
      });
    };

    socket.on("update_friend_status", handleNewFriendStatus);
    return () => {
      socket.off("update_friend_status");
    };
  });

  useEffect(() => {
    const updateFriends = (friend: any) => {
      if (friend.length === 0) return;

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
    } catch (error: any) {
      console.log("--->>>", error.message);
    }
  };
  useEffect(() => {
    getUserData();
  }, [whichProfile]);

  return (
    <div className="friends_container">
      {userFriends?.length > 0 &&
        userFriends?.map((e: any) => (
          <Friend whichProfile={whichProfile} friend={e} key={e.id} />
        ))}
    </div>
  );
}
