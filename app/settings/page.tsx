"use client";
import React, { useReducer } from "react";
import { useState, useEffect } from "react";
import Popup from "./popupChooseImage/page.jsx";
import Image from "next/image";
import avatar from "../../public/avatar5.png";
import { IoMdAdd } from "react-icons/io";
import { IoCameraReverse } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import "../store/store.css";
import "./settings.css";
import playerData from "../data/player-info.json";

const Settings = () => {
  const player_data: any = playerData;
  const [ArticlesType, setArticlesType] = useState("");
  const [showArticlesPopup, setShowArticlesPopup] = useState(false);
  const [profileBanner, setProfileBanner] = useState(player_data.choosedBanner);
  const [profileImage, setProfileImage] = useState(
    player_data.choosedProfileImage
  );
  const [twoFaStatus, setTwoFaStatus] = useState(false);
  const [username, setUserName] = useState(player_data.username);
  const [email, setEmail] = useState(player_data.email);
  const [password, setPassword] = useState(player_data.password);
  const [bio, setBio] = useState(player_data.bio);
  const [loading, setLoading] = useState(true);

  function changeInputValue(e: any) {
    const { name, value } = e.target;

    switch (name) {
      case "username":
        setUserName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "bio":
        setBio(value);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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
        <>
          {showArticlesPopup ? (
            <Popup
              Type={ArticlesType}
              Articles={player_data.avatarsAndPaddles}
              setShowArticlesPopup={setShowArticlesPopup}
              setProfileImage={setProfileImage}
              setProfileBanner={setProfileBanner}
            />
          ) : (
            <div className="settings-container">
              <div
                className="banner"
                style={{
                  backgroundImage: `url('${profileBanner}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="image-holder">
                  <div>
                  
                  <Image
                    className="profile-image"
                    src={profileImage}
                    width={200}
                    height={200}
                    alt="Profile Picture"
                    />
                    </div>
                  <button
                    className="btn-change-profile"
                    onClick={() => {
                      setArticlesType("avatar");
                      setShowArticlesPopup(!showArticlesPopup);
                    }}
                  >
                    <IoCameraReverse className="camera" />
                  </button>
                </div>
                <div className="button-holder">
                  <button
                    className="addBannerBtn"
                    onClick={() => {
                      setArticlesType("banner");
                      setShowArticlesPopup(!showArticlesPopup);
                    }}
                  >
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
                      name="username"
                      id="username"
                      placeholder="Username"
                      className="username"
                      value={username}
                      onChange={(e) => changeInputValue(e)}
                    />
                  </div>
                  <div>
                    <label htmlFor="label">email</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="email"
                      value={email}
                      onChange={(e) => changeInputValue(e)}
                    />
                  </div>
                  <div>
                    <label htmlFor="label">password</label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="Password"
                      value={password}
                      onChange={(e) => changeInputValue(e)}
                    />
                  </div>
                  <div>
                    <label htmlFor="label">Bio</label>
                    <textarea
                      rows={4}
                      placeholder="Bio"
                      className="username"
                      name="bio"
                      value={bio}
                      onChange={(e) => changeInputValue(e)}
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
                      onClick={() => setTwoFaStatus(!twoFaStatus)}
                      className={twoFaStatus ? "redbc" : "greenbc"}
                    >
                      {twoFaStatus ? "Disable 2FA" : "Enable 2FA"}
                    </button>
                  </div>
                </div>
              </div>
              <button className="saveUpdates">Save Updates</button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Settings;
