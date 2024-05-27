import React from "react";
import "./Achievement.css";
import Image from "next/image";
// import paddler from "../../public/achievement/Precision_Paddler.png";

export default function Achievement({ achievement }: { achievement: any }) {
  const date = () => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    if (achievement.createdAT === null) return null;
    const date = new Date(achievement.createdAT).toLocaleString(
      "en-US",
      options as Intl.DateTimeFormatOptions
    );
    return date;
  };
  return (
    <div
      className={`achievement_container ${
        !achievement.unlocked && "locked_achievement"
      }`}
    >
      <Image
        src={`http://localhost:3000/${achievement.uri}`}
        width={1000}
        height={1000}
        className={`friend_achievement_badge  `}
        alt="achievement"
      />

      <div className="achievement_name">
        <div className="achievement_desc">
          <h1>{achievement.name}</h1>
          <h4 className="unlocked_at">{date()}</h4>
        </div>
        <h5>{achievement.description}</h5>
      </div>
    </div>
  );
}