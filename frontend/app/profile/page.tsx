"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Profile.css";

import { MdOutlineEdit, MdContentCopy } from "react-icons/md";
import ProfileDetails from "./ProfileDetails";
import Image from "next/image";
import { useRecoilState, useRecoilValue } from "recoil";
import { loggedUser } from "../Atoms/logged";
import { userToken } from "../Atoms/userToken";
import { PiCurrencyEthFill } from "react-icons/pi";
import { selectedFriendProfile } from "../Atoms/selectedFriendProfile";

const Profile = () => {
  const uidRef = useRef<HTMLDivElement>(null);

  const [selectedProfile, setSelectedProfile] = useRecoilState(
    selectedFriendProfile
  );
  const loggedU = useRecoilValue(loggedUser);
  const userTok = useRecoilValue(userToken);

  const [userData, setUserData] = useState<any>({});
  // const copyUID = () => {
  //   return;
  //   if (uidRef.current) {
  //     const textToCopy = uidRef.current.textContent || "";

  //     navigator.clipboard
  //       .writeText(textToCopy)
  //       .then(() => {
  //         console.log("Text copied to clipboard:", textToCopy);
  //       })
  //       .catch((error) => {
  //         console.error("Unable to copy text to clipboard", error);
  //       });
  //   }
  // };

  // useEffect(() => {
  //   setSelectedProfile(-1);
  // });
  const whichProfile = selectedProfile === -1 ? loggedU : selectedProfile;
  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/users/${whichProfile}`, {
          headers: {
            Authorization: `Bearer ${userTok}`,
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setUserData(data);
        console.log("userData-->>>", data);
      } catch (error: any) {
        console.log("--->>>", error.message);
      }
    };
    getUserData();
  }, [whichProfile]);

  return (
    <div className="profile_container">
      <div
        style={{
          backgroundImage: `linear-gradient(
          77deg,
          rgba(0, 0, 0, 1) 30%,
          rgba(255, 255, 255, 0) 100%
        ), url(http://localhost:3000/bn${userData?.banner})`,
        }}
        className="user_account"
      >
        <div className="edit_label">
          <span>Edit</span>
          <MdOutlineEdit />
        </div>

        <Image
          src={`http://localhost:3000/av/${userData?.avatar}`}
          // src={userData?.avatar}
          width={2000}
          height={2000}
          alt="profile_avatar"
          className="profile_photo"
        />

        <div className="profile_data">
          <h1>{userData?.username}</h1>
          <h4 className="profile_username">
            <PiCurrencyEthFill /> {userData?.wallet}
          </h4>
          <h4 className="profile_email">{userData?.email}</h4>
          <h2 className="profile_user_lvl">
            LVL <span>{userData?.level}</span>
          </h2>
        </div>

        <div className="profile_progress">
          <div className="progress">
            <div
              style={{
                width: `${userData?.level}%`,
              }}
              className="pseudoProgress"
            ></div>
          </div>
          <div
            //  onClick={copyUID}

            ref={uidRef}
            className="profile_uid"
          >
            {userData?.uid}
            <MdContentCopy />
          </div>
        </div>
      </div>
      <div className="profile_details">
        <ProfileDetails whichProfile={whichProfile} />
      </div>
    </div>
  );
};

export default Profile;
