import React, { useEffect, useState } from "react";
import "./notifications.css";

import Notification from "./Notification";
import { userNotifications } from "../Atoms/notifications";
import { useRecoilState, useRecoilValue } from "recoil";
import { userToken } from "../Atoms/userToken";
import { loggedUser } from "../Atoms/logged";
import { io } from "socket.io-client";
const socket = io("http://localhost:3001");

function Notifications({ showNotif }: { showNotif: boolean }) {
  const userTok = useRecoilValue(userToken);
  const loggedU = useRecoilValue(loggedUser);

  const [myNotifications, setMyNotifications] =
    useRecoilState(userNotifications);

  useEffect(() => {
    const handleReceivedNotification = (notif: any) => {
      if (notif.ruserId === loggedU)
        setMyNotifications((prevNotif: any) => [...prevNotif, notif]);
    };
    socket.on("notification", handleReceivedNotification);
    return () => {
      socket.off("notification");
    };
  }, []);

  const addFriend = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/notifications/${loggedU}`,
        {
          headers: {
            Authorization: `Bearer ${userTok}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setMyNotifications(data);
    } catch (error: any) {
      console.log("error>>>", error.message);
    }
  };
  useEffect(() => {
    addFriend();
  }, []);

  return (
    <div
      className={`notifications_container ${
        showNotif && "show_notifications_container"
      }`}
    >
      <div className="notifications_container_header">Notificatons</div>
      <div className="notifications">
        {myNotifications.map((notif: any) => (
          <Notification notif={notif} />
        ))}
      </div>
    </div>
  );
}

export default Notifications;
