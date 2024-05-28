"use client";
import React from "react";
import Image from "next/image";
import "./popupChooseImage.css";
import blob1 from "../../../public/blobs/blob1.svg";
import blob2 from "../../../public/blobs/blob2.svg";
import blob3 from "../../../public/blobs/blob3.svg";
import blob4 from "../../../public/blobs/blob4.svg";
import blob5 from "../../../public/blobs/blob5.svg";
import blob6 from "../../../public/blobs/blob6.svg";
import blob7 from "../../../public/blobs/blob7.svg";
import blob8 from "../../../public/blobs/blob8.svg";
import blob9 from "../../../public/blobs/blob9.svg";
import blob10 from "../../../public/blobs/blob10.svg";
import blob11 from "../../../public/blobs/blob11.svg";
import blob12 from "../../../public/blobs/blob12.svg";
import { TiDelete } from "react-icons/ti";
import { PlayerInfo } from "@/app/Interfaces/playerInfoInterface";

interface popupProps {
  Type: string;
  Articles: any[];
  setShowArticlesPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setProfileImage: React.Dispatch<React.SetStateAction<string>>;
  setProfileBanner: React.Dispatch<React.SetStateAction<string>>;
}

const Popup: React.FC<popupProps> = ({
  Type,
  Articles,
  setShowArticlesPopup,
  setProfileImage,
  setProfileBanner,
}) => {
  const paddles = Articles.filter((e) => (e.paddle ? e : ""));
  const avatars = Articles.filter((e) => (e.avatar ? e : ""));
  const banners = Articles.filter((e) => (e.banner ? e : ""));
  console.log(Type, banners);

  let ArticlesToRender;
  if (Type == "avatar") {
    ArticlesToRender = avatars.map((e) => {
      if (e.owned == "yes" && e.choosed == "no") {
        return (
          <div key={e.id} className="item">
            <div>
              <Image
                className="picture"
                src={`/${e.avatar}`}
                width={150}
                height={150}
                alt="avatar"
              />
            </div>
            <p className="name">{e.name}</p>
            <p className="description">{e.description}</p>
            <button
              className="selectBtn"
              onClick={() => {
                setShowArticlesPopup(false);
                setProfileImage(`/${e.avatar}`);
              }}
            >
              select
            </button>
          </div>
        );
      }
    });
  } else if (Type == "paddle") {
    ArticlesToRender = paddles.map((e) => {
      if (e.owned == "yes" && e.choosed == "no") {
        return (
          <div key={e.id} className="item">
            <div>
              <Image
                className="picture"
                src={`/${e.paddle}`}
                width={150}
                height={150}
                alt="paddle"
              />
            </div>
            <p className="name">{e.name}</p>
            <p className="description">{e.description}</p>
            <button
              className="selectBtn"
              onClick={() => {
                setShowArticlesPopup(false);
              }}
            >
              select
            </button>
          </div>
        );
      }
    });
  } else if (Type == "banner") {
    ArticlesToRender = banners.map((e) => {
      if (e.choosed == "no") {
        return (
          <div key={e.id} className="item">
            <div>
              <Image
                className="picture"
                src={`/${e.banner}`}
                width={150}
                height={100}
                alt="banner"
              />
            </div>
            <button
              className="selectBtn"
              onClick={() => {
                setShowArticlesPopup(false);
                console.log(e.banner);
                setProfileBanner(`/${e.banner}`);
              }}
            >
              select
            </button>
          </div>
        );
      }
    });
  }
  return (
    <div className="renderedArticles">
      <div className="blobs">
        {/*         
        <Image
          className="blob blob1"
          src={blob1}
          width={100}
          height={100}
          alt=""
        />
        <Image
          className="blob blob2"
          src={blob2}
          width={100}
          height={100}
          alt=""
        />
        <Image
          className="blob blob3"
          src={blob3}
          width={100}
          height={100}
          alt=""
        />
        <Image
          className="blob blob4"
          src={blob4}
          width={100}
          height={100}
          alt=""
        />
        <Image
          className="blob blob5"
          src={blob5}
          width={100}
          height={100}
          alt=""
        />
        <Image
          className="blob blob6"
          src={blob6}
          width={100}
          height={100}
          alt=""
        />
        <Image
          className="blob blob7"
          src={blob7}
          width={100}
          height={100}
          alt=""
        />
        <Image
          className="blob blob8"
          src={blob8}
          width={100}
          height={100}
          alt=""
        />
        <Image
          className="blob blob9"
          src={blob9}
          width={100}
          height={100}
          alt=""
        /> */}
      </div>
      <button className="cancel" onClick={() => setShowArticlesPopup(false)}>
        <TiDelete className="icon" />
      </button>
      <div className="renderedArticlesContainer">
        {" "}
        {ArticlesToRender ? ArticlesToRender : "soory no article availabele"}
      </div>
    </div>
  );
};

export default Popup;
