"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";
import "./upper-navbar.css";
import { MdOutlinePersonSearch } from "react-icons/md";

import Notifications from "./Notifications";
import { useRecoilState, useRecoilValue } from "recoil";
import { userNotifications } from "../Atoms/notifications";
import { userToken } from "../Atoms/userToken";
import { loggedUser } from "../Atoms/logged";
import Link from "next/link";

const UpperNav = () => {
  const notificationRef = useRef<HTMLDivElement>(null);
  const userTok = useRecoilValue(userToken);
  const loggedU = useRecoilValue(loggedUser);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      )
        setShowNotif(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [notificationRef]);

  const [searchUsers, setSearchUsers] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [myNotifications, setMyNotifications] =
    useRecoilState(userNotifications);
  const [myUsers, setMyUsers] = useState<any[]>([]);
  console.log("-------->>>>", myUsers);

  const getNotifications = async () => {
    if (loggedU === -1) return;
    try {
      const res = await fetch(
        `http://localhost:3000/notifications/${loggedU}`,
        {
          headers: {
            Authorization: `Bearer ${userTok}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setMyNotifications(data);
    } catch (error: any) {
      console.log("error>>>", error.message);
    }
  };
  const getAllUsers = async () => {
    if (loggedU === -1) return;
    try {
      const res = await fetch(
        `http://localhost:3000/users/allusers/${loggedU}`,
        {
          headers: {
            Authorization: `Bearer ${userTok}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setMyUsers(data);
    } catch (error: any) {
      console.log("error>>>", error.message);
    }
  };
  useEffect(() => {
    getNotifications();
    getAllUsers();
  }, [loggedU]);

  return (
    <div className="upperNav">
      <div>
        <div className="search-icon">
          <MdOutlinePersonSearch />
        </div>
        <input
          value={searchUsers}
          onChange={(e) => setSearchUsers(e.target.value)}
          placeholder="search player"
          type="text"
        />
        <div className={`all_users ${searchUsers.length && "show_all_users"}`}>
          {myUsers.map((user) => (
            <Link
              className="users_names_links"
              key={user?.uid}
              href={`/profile/${user?.username}`}
            >
              <img
                src={user?.avatar}
                className="users_avatars_links"
                alt="avatar"
              />
              {user?.username}
            </Link>
          ))}
        </div>
      </div>
      <div ref={notificationRef} className="notif-and-profilePic">
        <div
          onClick={() => setShowNotif((prev) => !prev)}
          className="notif-icon"
        >
          <IoMdNotificationsOutline />

          {myNotifications.length > 0 && (
            <div className="notif_count">{myNotifications.length}</div>
          )}
        </div>
        <Notifications showNotif={showNotif} />
        <div className="profile-picture">
          {!imageLoaded && <div className="profile-picture-white"></div>}
          <div>
            <Image
              src="https://cdn.intra.42.fr/users/b653c32ff7b8c8f272ffb8dfbb4674a7/yel-hajj.jpg"
              alt="P"
              width={45}
              height={45}
              loading="lazy"
              onLoad={() => setImageLoaded(!imageLoaded)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperNav;
