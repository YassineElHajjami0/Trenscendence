import React from "react";
import Achievement from "./Achievement";
import playerData from "../data/player-info.json";
import "./Achievements.css";

export default function Achievements() {
  const player_data: any = playerData["my-data"];

  const sortedAchievements = player_data.achievements.sort(
    (a: any, b: any) => b.unlicked - a.unlicked
  );

  return (
    <div className="achievements_container">
      {sortedAchievements.map((e) => (
        <Achievement achievement={e} key={e.name} />
      ))}
    </div>
  );
}
