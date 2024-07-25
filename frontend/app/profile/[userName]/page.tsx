"use client";
import React, { useEffect, useRef, useState } from "react";
import "../Profile.css";


import Image from "next/image";
import { useRecoilState, useRecoilValue } from "recoil";

import { PiCurrencyEthFill } from "react-icons/pi";

import axios from "axios";
import { loggedUser } from "@/app/Atoms/logged";
import { userToken } from "@/app/Atoms/userToken";
import { selectedFriendProfile } from "@/app/Atoms/selectedFriendProfile";
import ProfileDetails from "../ProfileDetails";
import {  useRouter } from "next/navigation";
import LoadingPaddle from "@/app/LoadingPaddle";

interface OtherProfileProps {
  params: {
    userName: string;
  };
}
const OtherProfile: React.FC<OtherProfileProps> = ({ params }) => {
  const loggedU = useRecoilValue(loggedUser);
  const userTok = useRecoilValue(userToken);
  const route = useRouter();

  const [selectedProfile, setSelectedProfile] = useRecoilState(
    selectedFriendProfile
  );
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<any>({});

  useEffect(() => {
    if (loggedU === -1) return;

    if (selectedProfile === loggedU) route.replace("/profile");
    setLoading(true);
    const getUserData = async () => {
      try {
        const res = await axios.get(
          `http://10.13.4.4:3000/users/user/${params.userName}`,
          {
            headers: {
              Authorization: `Bearer ${userTok}`,
            },
          }
        );
        const data = await res.data;
        setSelectedProfile(data.uid);
        setUserData(data);
      } catch (error: any) {
        setLoading(false);
        route.push("/profile/404");
      }
    };
    getUserData();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [selectedProfile]);

  

  return loading ? (
    <LoadingPaddle />
  ) : (
    <div className="profile_container">
      <div
        style={{
          backgroundImage: `linear-gradient(
          77deg,
          rgba(0, 0, 0, 1) 30%,
          rgba(255, 255, 255, 0) 100%
        ), url(${userData?.banner})`,
        }}
        className="user_account"
      >
        
          <div className="img_container_add">
            <Image
              src={userData?.avatar}
              width={2000}
              height={2000}
              alt="profile_avatar"
              className="profile_photo"
            />
          </div>

        <div className="profile_data">
          <h1>{userData?.username}</h1>
          <h4 className="profile_username">
            <PiCurrencyEthFill /> {userData?.wallet}
          </h4>
          <h4 className="profile_email">{userData?.email}</h4>
          <h2
            className="profile_user_lvl"
          >
            {userData?.rank}
          </h2>

          <div className="profile_progress">
            <div className="progress">
              <div
                style={{
                  width: `${(userData && userData?.xp % 100) || 0}%`,
                }}
                className="pseudoProgress"
              ></div>
            </div>
            {(userData && userData?.xp % 100) || 0}%
          </div>
        </div>
      </div>
      <div className="profile_details">
        <ProfileDetails whichProfile={selectedProfile} />
      </div>
    </div>
  );
};

export default OtherProfile;


