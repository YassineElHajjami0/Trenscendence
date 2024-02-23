import React from "react";
import "./Achievement.css";
import Image from "next/image";
import paddler from "../../public/achievement/Precision_Paddler.png";

export default function Achievement() {
  return (
    <div className="achievement_container">
      <Image
        src={paddler}
        width={1000}
        height={1000}
        className="friend_avatar ach"
        alt="achievement"
      />

      <div className="achievement_name">
        <h1>Achievement</h1>
        <div className="achievement_desc">
          <h5>jhjgberg rhg uehrgkj enrgkej brgbbej rg</h5>
          <h4 className="unlocked_at">Unlocked sept 4, 2024</h4>
        </div>
      </div>
    </div>
  );
}
