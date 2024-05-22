"use client"
import React, { useEffect, useState } from "react";
import "./notification.css";
import Image from "next/image";
import TimeAgo from "react-timeago";
import { useRecoilState, useRecoilValue } from "recoil";
import { userNotifications } from "../Atoms/notifications";
import { userToken } from "../Atoms/userToken";
import { loggedUser } from "../Atoms/logged";
import { socket } from "../sockets/socket";

function Notification({ notif }: { notif: any }) {
  console.log("walaaaaaa>>>>>>>>>>>>>", notif);

  const userTok = useRecoilValue(userToken);
  const loggedU = useRecoilValue(loggedUser);

  const [myNotifications, setMyNotifications] =
    useRecoilState(userNotifications);

  useEffect(() => {
    const handleDeletedNotification = (notif: any) => {
      if (notif.ruserId === loggedU)
        setMyNotifications((prevNotifications) =>
          prevNotifications.filter((ntfc) => ntfc.id !== notif?.id)
        );
    };
    socket.on("delete_notification", handleDeletedNotification);
    return () => {
      socket.off("delete_notification");
    };
  }, []);

  const deleteNotificatio = async () => {
    try {
      await fetch(`http://localhost:3000/notifications/${notif?.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${userTok}`,
          "Content-Type": "application/json",
        },
      });
    } catch (error: any) {
      console.log("Error deleting notification:", error.message);
    }
  };

  const acceptFriend = async () => {
    const friendDto = {
      user1Id: notif?.ruserId,
      user2Id: notif?.suserId,
      status: "ACCEPTED",
    };

    try {
      await fetch(`http://localhost:3000/friends`, {
        method: "POST",
        body: JSON.stringify(friendDto),
        headers: {
          Authorization: `Bearer ${userTok}`,
          "Content-Type": "application/json",
        },
      });
      deleteNotificatio();
    } catch (error: any) {
      console.log("Error deleting notification:", error.message);
    }
    console.log("pppppppppp");
  };

  return (
    <div className="notification_container">
      <Image
        className="notification_avatar"
        src={`http://localhost:3000/${notif?.suser?.avatar}`}
        width={50}
        height={50}
        alt="avatar"
      />
      <div className="notification_section">
        <p>
          <span className="notification_frind_name">
            {notif?.suser?.username}
          </span>
          {notif?.content}
        </p>
        <span className="time_ago">
          <TimeAgo date={notif?.createdAt} />
        </span>
        <div className="notification_accept">
          <button onClick={acceptFriend} className="notification_btns">
            accept
          </button>
          <button onClick={deleteNotificatio} className="notification_btns">
            deny
          </button>
        </div>
      </div>
    </div>
  );
}

export default Notification;
