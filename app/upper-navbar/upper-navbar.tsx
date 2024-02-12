"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";
import "./upper-navbar.css";
import { MdOutlinePersonSearch } from "react-icons/md";

const UpperNav = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="upperNav">
      <div>
        <div className="search-icon">
          <MdOutlinePersonSearch />
        </div>
        <input placeholder="search player" type="text" />
      </div>
      <div className="notif-and-profilePic">
        <div className="notif-icon">
          <IoMdNotificationsOutline />
        </div>
        <div className="profile-picture">
          {!imageLoaded && <div className="profile-picture-white"></div>}
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
  );
};

export default UpperNav;
