import React from "react";
import Image from "next/image";
import avatar from "../../public/avatar5.png";
import { IoMdAdd } from "react-icons/io";
import { IoCameraReverse } from "react-icons/io5";
import "./settings.css";
import playerData from "../data/player-info.json";

function filterPaddles(avatarsAndPaddles: any) {
  let paddlesArr = [];
  for (let i = 0; i < avatarsAndPaddles.length; i++) {
    if (avatarsAndPaddles[i].paddle) {
      paddlesArr.push(avatarsAndPaddles[i]);
    }
  }
  return paddlesArr;
}

const Settings = () => {
  const player_data: any = playerData["my-data"];
  const availablePaddles = filterPaddles(player_data.avatarsAndPaddles);
  console.log(availablePaddles);
  return (
    <div className="settings-container">
      <div className="banner">
        <div className="image-holder">
          <Image
            className="profile-image"
            src={avatar}
            width={200}
            height={200}
            alt="Profile Picture"
          />
          <button className="btn-change-profile">
            <IoCameraReverse />
          </button>
        </div>
        <div className="button-holder">
          <button className="addBannerBtn">
            <IoMdAdd className="plus-icon" />
          </button>
        </div>
      </div>
      <div className="inputs-and-slider">
        <div className="inputs">
          <input type="text" placeholder="Username" className="username" />
          <input type="text" placeholder="Email" className="email" />
          <input type="text" placeholder="Password" className="Password" />
          <textarea rows={4} placeholder="Bio" className="username" />
        </div>
        <div className="slider">
          {availablePaddles.map((e) => {
            return (
              <div key={e} className="paddleInfo">
                <Image
                  src={`/${e.paddle}`}
                  width={100}
                  height={100}
                  alt="paddle"
                />
                <p>{e.name}</p>
                <div className="description">
                  <span>description </span> {e.description}
                </div>
                <div className="power">
                  <span>power </span> {e.power} ball speed
                </div>
                <div className="width">
                  <span>width </span> {e.width}
                </div>
                {e.choosed == "yes" ? "choosed" : <button>choose</button>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Settings;
