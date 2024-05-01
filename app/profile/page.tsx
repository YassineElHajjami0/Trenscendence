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
import { BsPersonFillAdd } from "react-icons/bs";
import axios from "axios";

const Profile = () => {
  const uidRef = useRef<HTMLDivElement>(null);
  const loggedU = useRecoilValue(loggedUser);
  const userTok = useRecoilValue(userToken);

  const [selectedProfile, setSelectedProfile] = useRecoilState(
    selectedFriendProfile
  );
  const [isFriend, setIsFriend] = useState(true);

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

  const getIfFriend = async () => {
    if (selectedProfile === -1 || selectedProfile === loggedU) return;

    console.log("ana hnaaa-------------------------");

    const query = {
      friendId: selectedProfile,
    };

    const res = await axios.get(`http://localhost:3000/friends/me/${loggedU}`, {
      params: query,
      headers: {
        Authorization: `Bearer ${userTok}`,
      },
    });
    const data = await res.data;
    setIsFriend(data);
    console.log("jjjjjjjjjj>>>>>>>", data);
  };

  useEffect(() => {
    getIfFriend();
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
        {(selectedProfile === -1 || loggedU === selectedProfile) && (
          <div className="edit_label">
            <span>Edit</span>
            <MdOutlineEdit />
          </div>
        )}

        <div className="img_container_add">
          <Image
            src={`http://localhost:3000/av/${userData?.avatar}`}
            // src={userData?.avatar}
            width={2000}
            height={2000}
            alt="profile_avatar"
            className="profile_photo"
          />
          {!isFriend && <BsPersonFillAdd className="add_me_if_not" />}
        </div>

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
                width: `${userData?.level + 50}%`,
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
