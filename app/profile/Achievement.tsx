import React from "react";
import "./Achievement.css";
import Image from "next/image";
// import paddler from "../../public/achievement/Precision_Paddler.png";

export default function Achievement({ achievement }) {
  return (
    <div className="achievement_container">
      <Image
        src={achievement.uri}
        width={1000}
        height={1000}
        className={`friend_achievement_badge  ${
          !achievement.unlocked && "locked_achievement"
        }`}
        alt="achievement"
      />

      <div className="achievement_name">
        <div className="achievement_desc">
          <h1>{achievement.name}</h1>
          <h4 className="unlocked_at">{achievement.date}</h4>
        </div>
        <h5>{achievement.description}</h5>
      </div>
    </div>
  );
}
