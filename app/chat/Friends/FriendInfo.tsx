import React from "react";
import "./FriendInfo.css";
import { currentFriend } from "@/app/Atoms/currentFriend";
import { useRecoilState, useRecoilValue } from "recoil";
import Image from "next/image";
import { MdBlock } from "react-icons/md";
import { CgUnblock } from "react-icons/cg";
import { FriendData } from "@/app/Interfaces/friendDataInterface";
import { loadingMsg } from "@/app/Atoms/loadingMsg";
import ProfileLoading from "./ProfileLoading";
import axios from "axios";
import { userToken } from "@/app/Atoms/userToken";
export const FriendInfo = () => {
  const [friend, setFriend] = useRecoilState(currentFriend);
  const loadingAnimation = useRecoilValue(loadingMsg);
  const userTok = useRecoilValue(userToken);

  const handleSwitch = (e: any) => {
    e.preventDefault();

    const body = {
      channelID: friend.id,
      friendId: friend.uid,
      blocked: !friend.blocked,
    };
    try {
      axios.patch("http://localhost:3000/channels/dm", body, {
        headers: {
          Authorization: `Bearer ${userTok}`,
        },
      });
    } catch (error) {
      console.log("3a", error);
    }
  };

  return loadingAnimation ? (
    <ProfileLoading />
  ) : (
    <div className="current_friend_info_container">
      <div className="current_friend_info">
        <Image
          className="current_friend_avatar"
          src={`http://localhost:3000/${friend?.avatar}`}
          // src={`http://localhost:3000${friend?.avatar}`}
          width={5000}
          height={5000}
          alt="avatar"
        />
        <h1>{friend?.username}</h1>
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
          {friend?.achievements?.map((a: any) => {
            if (a?.unlocked)
              return (
                <div key={a?.name} className="current_friend_achievement">
                  <Image
                    className="current_friend_achievement_badge"
                    src={a?.uri || ""}
                    width={5000}
                    height={5000}
                    alt="achievement_badge"
                  />

                  <span>{a?.name}</span>
                </div>
              );
          })}
        </div>
      </div>
      <div className="current_friend_block">
        <button
          onClick={handleSwitch}
          className={`block_current_friend ${
            friend?.blocked && "unblock_current_friend"
          }`}
        >
          {friend?.blocked ? (
            <>
              <CgUnblock />
              Unblock
            </>
          ) : (
            <>
              <MdBlock />
              block
            </>
          )}{" "}
          {friend?.username}
        </button>
      </div>
    </div>
  );
};
