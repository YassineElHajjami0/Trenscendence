import React, { useState } from "react";
import "./notifications.css";

import Notification from "./Notification";

function Notifications({ showNotif }: { showNotif: boolean }) {
  const [myNotifications, setMyNotifications] = useState(Array(10).fill(null));
  return (
    <div
      className={`notifications_container ${
        showNotif && "show_notifications_container"
      }`}
    >
      <div className="notifications_container_header">Notificatons</div>
      <div className="notifications">
        {myNotifications.map((notif) => (
          <Notification notif={notif} />
        ))}
      </div>
    </div>
  );
}

export default Notifications;
