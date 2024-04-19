import React from "react";
import "./notification.css";
import Image from "next/image";
import TimeAgo from "react-timeago";

function Notification({ notif }: { notif: any }) {
  const timestamp = "2024-04-18T15:00:00Z";

  return (
    <div className="notification_container">
      <Image
        className="notification_avatar"
        src="/avatar1.png"
        width={50}
        height={50}
        alt="avatar"
      />
      <div className="notification_section">
        <p>
          <span className="notification_frind_name">Yahya taqsi</span>
          sent you a friend request
        </p>
        <span className="time_ago">
          <TimeAgo date={timestamp} />
        </span>
        <div className="notification_accept">
          <button className="notification_btns">accept</button>
          <button className="notification_btns">deny</button>
        </div>
      </div>
    </div>
  );
}

export default Notification;
