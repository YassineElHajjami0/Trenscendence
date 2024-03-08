import React from "react";
import "./FriendInfo.css";
import { currentFriend } from "@/app/Atoms/currentFriend";
import { useRecoilState } from "recoil";
import Image from "next/image";
import { MdBlock } from "react-icons/md";
import { CgUnblock } from "react-icons/cg";
export const FriendInfo = () => {
  const [friend, setFriend] = useRecoilState(currentFriend);

  return (
    <div className="current_friend_info_container">
      <div className="current_friend_info">
        <Image
          className="current_friend_avatar"
          src={friend?.avatar || ""}
          width={5000}
          height={5000}
          alt="avatar"
        />
        <h1>{friend?.name}</h1>
        <h3>{friend?.bio}</h3>
      </div>
      <div className="current_friend_rank">
        <h1>rank</h1>
        <Image
          className="current_friend_rank_badge"
          src={friend?.rankBadge || ""}
          width={5000}
          height={5000}
          alt="rank_badge"
        />
        <h3> {friend?.rank} </h3>
      </div>
      <div className="current_friend_achievements_container">
        <h1>achievements</h1>
        <div className="current_friend_achievements">
          {friend?.achievements.map((a) => {
            if (a.unlocked)
              return (
                <div className="current_friend_achievement">
                  <Image
                    className="current_friend_achievement_badge"
                    src={a.uri || ""}
                    width={5000}
                    height={5000}
                    alt="achievement_badge"
                  />

                  <span>{a.name}</span>
                </div>
              );
          })}
        </div>
      </div>
      <div className="current_friend_block">
        <button
          className={`block_current_friend ${
            friend?.blocked ? "block_current_friend" : "unblock_current_friend"
          }`}
        >
          {friend?.blocked ? <CgUnblock /> : <MdBlock />}
        </button>
        <p>{friend?.name}</p>
      </div>
    </div>
  );
};
