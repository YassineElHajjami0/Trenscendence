"use client";
import React, { useRef } from "react";
import "./Profile.css";
import silence from "../../public/mask_avatar.png";

import { MdOutlineEdit, MdContentCopy } from "react-icons/md";
import ProfileDetails from "./ProfileDetails";
import Image from "next/image";

const Profile = () => {
  const uidRef = useRef<HTMLDivElement>(null);

  const copyUID = () => {
    return;
    if (uidRef.current) {
      const textToCopy = uidRef.current.textContent || "";

      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          console.log("Text copied to clipboard:", textToCopy);
        })
        .catch((error) => {
          console.error("Unable to copy text to clipboard", error);
        });
    }
  };

  return (
    <div className="profile_container">
      <div className="user_account">
        <div className="edit_label">
          <span>Edit</span>
          <MdOutlineEdit />
        </div>

        <Image
          src={silence}
          width={2000}
          height={2000}
          alt="profile_avatar"
          className="profile_photo"
        />

        <div className="profile_data">
          <h1 className="profile_name">Yahya TAQSI</h1>
          <h4 className="profile_username">#BUDA</h4>
          <h4 className="profile_email">buda98@gmail.com</h4>
          <h2 className="profile_user_lvl">
            LVL <span>5.32</span>
          </h2>
        </div>

        <div className="profile_progress">
          <div className="progress"></div>
          <div onClick={copyUID} ref={uidRef} className="profile_uid">
            684687487597
            <MdContentCopy />
          </div>
        </div>
      </div>
      <div className="profile_details">
        <ProfileDetails />
      </div>
    </div>
  );
};

export default Profile;
