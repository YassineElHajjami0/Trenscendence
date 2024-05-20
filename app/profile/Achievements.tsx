import React, { useEffect, useState } from "react";
import Achievement from "./Achievement";
import playerData from "../data/player-info.json";
import "./Achievements.css";
import { PlayerInfo } from "@/app/Interfaces/playerInfoInterface";
import { useRecoilValue } from "recoil";
import { userToken } from "../Atoms/userToken";
export default function Achievements({ whichProfile }: { whichProfile: any }) {
  const player_data: PlayerInfo = playerData;

  const sortedAchievements = player_data.achievements.sort(
    (a: any, b: any) => b.unlicked - a.unlicked
  );
  const userTok = useRecoilValue(userToken);

  const [userAchievement, setUserAchievement] = useState<any[]>([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/user-achievement/${whichProfile}`,
          {
            headers: {
              Authorization: `Bearer ${userTok}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        setUserAchievement(data);
        // console.log("userData-->>>", data);
      } catch (error: any) {
        console.log("--->>>", error.message);
      }
    };
    getUserData();
  }, [whichProfile]);
  return (
    <div className="achievements_container">
      {userAchievement.map((e, i) => (
        <Achievement achievement={e} key={e.name} />
      ))}
    </div>
  );
}
