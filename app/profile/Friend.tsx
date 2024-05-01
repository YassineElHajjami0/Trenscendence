"use client";

import React, { useEffect, useState } from "react";
import { LuMessagesSquare } from "react-icons/lu";
import { BiSolidJoystickAlt } from "react-icons/bi";
import { MdBlock } from "react-icons/md";
import { CgUnblock } from "react-icons/cg";
import { TbUserShare } from "react-icons/tb";

import silence from "../../public/mask_avatar.png";

import "./Friend.css";
import Image from "next/image";
import { FriendData } from "@/app/Interfaces/friendDataInterface";
import { slctdFriend } from "../Atoms/friendAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { useRouter } from "next/navigation";
import { selectedFriendProfile } from "../Atoms/selectedFriendProfile";
import { loggedUser } from "../Atoms/logged";
import axios from "axios";
import { userToken } from "../Atoms/userToken";

export default function Friend({ friend }: { friend: any }) {
  console.log("frieeeeeend>>>>>>", friend);

  const loggedU = useRecoilValue(loggedUser);

  const [selectedProfile, setSelectedProfile] = useRecoilState(
    selectedFriendProfile
  );
  const [selectedFriend, setSelectedFriend] = useRecoilState(slctdFriend);
  const route = useRouter();

  const [logged, setLogged] = useState(
    friend?.status === "online" || friend?.status === "ingame"
  );
  const [inGame, setInGame] = useState(friend?.status === "ingame");
  const [blocked, setBlocked] = useState<boolean>(
    friend?.fsStatus === "BLOCKED"
  );
  const [burgerM, setBurgerM] = useState(false);

  const handleSwitch = () => {
    setBlocked((prev) => !prev);
  };
  const handleBurgerM = () => {
    setBurgerM((prev) => !prev);
  };

  const test = () => {
    setSelectedFriend(friend?.uid);
    route.push("/chat");
    console.log("-------->>>>>>>");
  };

  return (
    <div className="friend_container">
      <div className="friend_name_photo">
        <Image
          src={`/${friend?.avatar}`}
          width={2000}
          height={2000}
          className={`friend_avatar ${blocked && "blocked_friend_avatar"}`}
          alt="avatar"
        />

        <label
          htmlFor={friend.uid}
          className={`profile_name ${blocked && "blocked_friend"}  ${
            burgerM && "hideName"
          }`}
        >
          <div
            className={`dot ${logged && "logged"}  ${
              logged && inGame && "ingame"
            }`}
          ></div>
          {friend?.username}
        </label>

        <div className={`btn_conatiner ${burgerM && "showParam"}`}>
          <button
            id={friend.uid}
            onClick={() => setSelectedProfile(friend?.uid)}
            className="friend_component_btn view_profile"
          >
            <TbUserShare className="go_to_profile" />
          </button>
          {(selectedProfile === -1 || selectedProfile === loggedU) && (
            <>
              <button
                className={`friend_component_btn friend_msg ${
                  (blocked || !logged) && "disable_btns"
                }`}
                onClick={test}
                disabled={blocked || !logged}
              >
                <LuMessagesSquare />
              </button>
              <button
                className={`friend_component_btn friend_play ${
                  (blocked || !logged || (logged && inGame)) && "disable_btns"
                }
                    `}
                onClick={test}
                disabled={blocked || !logged || (logged && inGame)}
              >
                <BiSolidJoystickAlt />
              </button>
              <MdBlock
                onClick={handleSwitch}
                className={`friend_block  ${blocked && "hide_block"}`}
              />
              <CgUnblock
                onClick={handleSwitch}
                className={`friend_unblock  ${blocked && "show_unblock"}`}
              />
            </>
          )}
        </div>
        <div onClick={handleBurgerM} className="profile_burger_menu">
          <span> </span>
          <span> </span>
          <span> </span>
        </div>
      </div>
    </div>
  );
}
