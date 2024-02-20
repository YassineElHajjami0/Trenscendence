"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import avatar from "../../public/avatar5.png";
import { IoMdAdd } from "react-icons/io";
import { IoCameraReverse } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import "../store/store.css"; 
import "./settings.css"; 
import playerData from "../data/player-info.json";

const Settings = () => {
const [loading, setLoading] = useState(true);
useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const player_data: any = playerData["my-data"];
  console.log(player_data.username);
  return (
    <>
      {loading ? (
        <div className="container">
          <div className="bat">
            <div className="handle">
              <div className="inner"></div>
            </div>
            <div className="front"></div>
          </div>
          <div className="ball"></div>
        </div>
      ) : (
    <div className="settings-container">
      <div
        className="banner"
        style={{
          backgroundImage: "url('/Xarben_bear.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="image-holder">
          <Image
            className="profile-image"
            src={"/avatar5.png"}
            width={200}
            height={200}
            alt="Profile Picture"
          />
          <button className="btn-change-profile">
            <IoCameraReverse className="camera"/>
          </button>
        </div>
        <div className="button-holder">
          <button className="addBannerBtn">
            <IoMdAdd className="plus-icon" />
          </button>
        </div>
      </div>
      <div className="inputs-and-2fa">
        <div className="inputs">
          <div>
            <label htmlFor="username">username</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="username"
              value={player_data.username}
            />
          </div>
          <div>
            <label htmlFor="label">email</label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              className="email"
              value={player_data.email}
            />
          </div>
          <div>
            <label htmlFor="label">password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="Password"
              value={player_data.password}
            />
          </div>
          <div>
            <label htmlFor="label">Bio</label>
            <textarea
              rows={4}
              placeholder="Bio"
              className="username"
              value={player_data.bio}
            />
          </div>
        </div>
        <div className="twofa">
          <h4>
            Set Up Two Factor Authentication <FaLock />
          </h4>
          <div>
            <img src="/qr.png" alt="Qr code" />
            <button
              className={player_data.TwoFA == "true" ? "redbc" : "greenbc"}
            >
              {player_data.TwoFA == "true" ? "Disable 2FA" : "Enable 2FA"}
            </button>
          </div>
        </div>
      </div>
      <button className="saveUpdates">Save Updates</button>
    </div>)}</>
  );
};

export default Settings;
