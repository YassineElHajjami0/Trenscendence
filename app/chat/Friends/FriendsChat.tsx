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

      setMyFriends((prev: any) =>
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
  // newRole>>> { id: 131, channelID: 66, userID: 13, blocked: true, role: 'USER' }
  useEffect(() => {
    const handleBlockedFriend = (friend: any) => {
      setMyFriends((prev: any) => {
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
    myFriends.sort((a: any, b: any) => {
      return new Date(b.sendAT).getTime() - new Date(a.sendAT).getTime();
    });
  }, [myFriends]);

  useEffect(() => {
    const updateFriends = (friend: any) => {
      if (friend.length === 0) return;

      const whichUID = friend.roles.some((user: any) => user.uid === UID);
      if (whichUID) {
        setMyFriends((prev: any) => [...prev, friend]);
      }
    };

    socket.on("update_friend_list", updateFriends);
    return () => {
      socket.off("update_friend_list");
    };
  });

  const getMyFriends = async () => {
    try {
      const response = await fetch(`http://localhost:3000/channels/dm/${UID}`, {
        headers: {
          Authorization: `Bearer ${userTok}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setMyFriends(data);
    } catch (error) {
      console.log("Error111");
    }
  };
  useEffect(() => {
    getMyFriends();
  }, []);

  return (
    <div className="friends_chat_container">
      {myFriends.length > 0 &&
        myFriends.map((f: any) => <FriendChat key={f.id} friendData={f} />)}
    </div>
  );
}
