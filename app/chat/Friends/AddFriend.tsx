"use client";
import { TiUserAdd } from "react-icons/ti";

import Image from "next/image";
import "./AddFriend.css";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { userToken } from "@/app/Atoms/userToken";
import { loggedUser } from "@/app/Atoms/logged";
export default function AddFriend({ user }: { user: any }) {
  const userTok = useRecoilValue(userToken);
  const loggedU = useRecoilValue(loggedUser);

  const addFriend = async () => {
    const dataF = {
      user1Id: loggedU,
      user2Id: user.uid,
      status: "ACCEPTED",
    };

    try {
      console.log(">>>>>>>>>>>>>>>>helloooooooooo");
      const res = await fetch("http://localhost:3000/friends", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userTok}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataF),
      });

      const data = await res.json();
      console.log(">>>>>>>>>>>>>>>>>>>>>", data);
    } catch (error: any) {
      console.log("error>>>", error.message);
    }
  };

  return (
    <div className="add_friend_conatiner">
      <Image
        className="add_friend_avatar"
        src={user.avatar}
        width={1000}
        height={1000}
        alt="avatar"
      />
      <p className="add_friend_name">{user.username}</p>
      <button onClick={addFriend} className="add_friend_btn">
        <TiUserAdd />
      </button>
    </div>
  );
}
