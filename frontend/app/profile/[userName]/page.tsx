"use client";
import React, { useEffect, useRef, useState } from "react";
import "../Profile.css";

import { MdOutlineEdit, MdContentCopy } from "react-icons/md";

import Image from "next/image";
import { useRecoilState, useRecoilValue } from "recoil";

import { PiCurrencyEthFill } from "react-icons/pi";

import { BsPersonFillAdd } from "react-icons/bs";
import axios from "axios";
import { loggedUser } from "@/app/Atoms/logged";
import { userToken } from "@/app/Atoms/userToken";
import { selectedFriendProfile } from "@/app/Atoms/selectedFriendProfile";
import ProfileDetails from "../ProfileDetails";
import { notFound, useRouter } from "next/navigation";
import LoadingPaddle from "@/app/LoadingPaddle";

interface OtherProfileProps {
  params: {
    userName: string;
  };
}
const OtherProfile: React.FC<OtherProfileProps> = ({ params }) => {
  const uidRef = useRef<HTMLDivElement>(null);
  const loggedU = useRecoilValue(loggedUser);
  const userTok = useRecoilValue(userToken);
  const route = useRouter();

  const [selectedProfile, setSelectedProfile] = useRecoilState(
    selectedFriendProfile
  );
  const [isFriend, setIsFriend] = useState(true);
  const [loading, setLoading] = useState(false);

  const [userData, setUserData] = useState<any>({});

  useEffect(() => {
    if (selectedProfile === loggedU) route.replace("/profile");
    setLoading(true);
    const getUserData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/users/user/${params.userName}`,
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
    getIfFriend();
  }, [selectedProfile]);

  const getIfFriend = async () => {
    if (selectedProfile === -1 || selectedProfile === loggedU) return;
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
    setTimeout(() => {
      setIsFriend(data);
      setLoading(false);
    }, 1000);
  };

  // useEffect(() => {
  //   getIfFriend();
  // }, [selectedProfile]);

  const addFriend = async () => {
    if (selectedProfile === -1 || selectedProfile === loggedU) return;

    const notifData = {
      type: "friendReq",
      content: "sent you a friend request",
      suserId: loggedU,
      ruserId: selectedProfile,
    };

    try {
      const res = await fetch("http://localhost:3000/notifications", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userTok}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(notifData),
      });
    } catch (error: any) {
      console.log("error>>>", error);
    }
  };

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
        ), url(http://localhost:3000/bn${userData?.banner})`,
        }}
        className="user_account"
      >
        <div className="img_container_add">
          <Image
            src={`http://localhost:3000/av/${userData?.avatar}`}
            width={2000}
            height={2000}
            alt="profile_avatar"
            className="profile_photo"
          />
          {!isFriend && (
            <BsPersonFillAdd className="add_me_if_not" onClick={addFriend} />
          )}
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
        <ProfileDetails whichProfile={selectedProfile} />
      </div>
    </div>
  );
};

export default OtherProfile;

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
