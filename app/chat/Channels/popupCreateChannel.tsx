"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoCameraReverse } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import "./channelChat.css";

const PopupCreateChannel = () => {
  const [selectedChannelPicture, setSelectedChannelPicture] =
    useState("/default.png");

  return (
    <div className="popupContainer">
      <button className="cancelBtn">
        <MdOutlineCancel />
      </button>
      <h3>create channel</h3>
      <div className="imageContainer">
        <Image
          className="img"
          src={selectedChannelPicture}
          width={150}
          height={150}
          alt=""
        />
        <div className="chooseImageBtn">
          <label htmlFor="file-upload" className="">
            <IoCameraReverse />
          </label>
          <input
            type="file"
            id="file-upload"
            className="custom-file-input"
            accept=".jpg .png .jpeg "
          />
        </div>
      </div>
      <div className="nameInput">
        <label htmlFor="channelName">channel name</label>
        <input type="text" maxLength={25} name="name" id="channelName" />
      </div>
      <div className="topicInput">
        <label htmlFor="channeltopic">channel topic</label>
        <input type="text" name="topic" maxLength={50} id="channeltopic" />
      </div>
      <div className="channelType">
        <div>
          <input type="radio" id="public" value={"public"} name="channelType" />
          <label htmlFor="public">public</label>
        </div>
        <div>
          <input
            type="radio"
            id="private"
            value={"private"}
            name="channelType"
          />
          <label htmlFor="private">private</label>
        </div>
        <div>
          <input
            type="radio"
            id="protected"
            value={"protected"}
            name="channelType"
          />
          <label htmlFor="protected">protected</label>
        </div>
      </div>
      <button className="createChannelBtn">create</button>
    </div>
  );
};

export default PopupCreateChannel;
