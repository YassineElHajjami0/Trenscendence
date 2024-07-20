"use client";
import React, { useEffect, useRef, useState } from "react";
import "../Profile.css";

import { MdContentCopy } from "react-icons/md";

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
import { getRank } from "@/app/util/headers";
import { useSocket } from "@/app/SubChildrens";

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

  //makaynch lkhroj lyom khasmna nsaliwwwwwww

  // const decodedUsername = decodeURIComponent(params.userName);

  const [selectedProfile, setSelectedProfile] = useRecoilState(
    selectedFriendProfile
  );
  const [isFriend, setIsFriend] = useState(true);
  const [loading, setLoading] = useState(true);

  const [userData, setUserData] = useState<any>({});
  const [hoverEffect, setHoverEffect] = useState(true);

  useEffect(() => {
    if (selectedProfile === loggedU) route.replace("/profile");

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
        route.push("/profile/404");
      }
    };
    getUserData();
    getIfFriend();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
    setIsFriend(data);
  };

  const { socket } = useSocket();

  useEffect(() => {
    const updateFriends = (friend: any) => {
      getIfFriend();
    };
    if (!socket) return;

    socket.on("update_friend_list", updateFriends);
    return () => {
      socket.off("update_friend_list");
    };
  }, []);
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
        ), url(${userData?.banner})`,
        }}
        className="user_account"
      >
        {hoverEffect ? (
          <div className="img_container_add">
            <Image
              src={`${userData?.avatar || ""}`}
              width={2000}
              height={2000}
              alt="profile_avatar"
              className="profile_photo"
            />
          </div>
        ) : (
          <div className="img_container_add">
            <Image
              src={`${"/ranks/" + userData?.rank + ".png" || ""}`}
              width={100}
              height={100}
              alt="profile_avatar"
              className="profile_photo2"
            />
          </div>
        )}
        <div className="profile_data">
          <h1>{userData?.username}</h1>
          <h4 className="profile_username">
            <PiCurrencyEthFill /> {userData?.wallet}
          </h4>
          <h4 className="profile_email">{userData?.email}</h4>
          <h2
            onMouseOver={() => setHoverEffect(false)}
            onMouseOut={() => setHoverEffect(true)}
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
        <ProfileDetails whichProfile={loggedU} />
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
