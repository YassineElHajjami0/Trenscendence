import React from "react";
import "./notification.css";
import Image from "next/image";
import TimeAgo from "react-timeago";
import { useRecoilState, useRecoilValue } from "recoil";
import { userNotifications } from "../Atoms/notifications";
import { userToken } from "../Atoms/userToken";
import { loggedUser } from "../Atoms/logged";

function Notification({ notif }: { notif: any }) {
  const userTok = useRecoilValue(userToken);
  const loggedU = useRecoilValue(loggedUser);

  const [myNotifications, setMyNotifications] =
    useRecoilState(userNotifications);

  const deleteNotificatio = async () => {
    try {
      await fetch(`http://localhost:3000/notifications/${notif?.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${userTok}`,
          "Content-Type": "application/json",
        },
      });
      setMyNotifications((prevNotifications) =>
        prevNotifications.filter((ntfc) => ntfc.id !== notif?.id)
      );
    } catch (error: any) {
      console.log("Error deleting notification:", error.message);
    }
  };

  return (
    <div className="notification_container">
      <Image
        className="notification_avatar"
        src={notif?.suser?.avatar}
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
          <button className="notification_btns">accept</button>
          <button onClick={deleteNotificatio} className="notification_btns">
            deny
          </button>
        </div>
      </div>
    </div>
  );
}

export default Notification;
