"use client";
import React, { useReducer } from "react";
import { useState, useEffect } from "react";
import Popup from "./popupChooseImage/page";
import Image from "next/image";
import avatar from "../../public/avatar5.png";
import { IoMdAdd } from "react-icons/io";
import { IoCameraReverse } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import "../store/store.css";
import "./settings.css";
import { userToken } from "@/app/Atoms/userToken";
import { useRecoilValue } from "recoil";
import { loggedUser } from "../Atoms/logged";

interface dataInterface {
  avatar: string;
  banner: string;
  username: string;
  email: string;
  oldPassword: string;
  newPassword: string;
  confirmedPassword: string;
  bio: string;
  twoFA: boolean;
}
interface itemsInterface {
  description: string;
  id: number;
  img: string;
  is_avatar: boolean;
  name: string;
  power: string;
  price: number;
}

const Settings = () => {
  const [ArticlesType, setArticlesType] = useState("");
  const [showArticlesPopup, setShowArticlesPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<dataInterface>();
  const [errors, setErrors] = useState<string>("");
  const [avatarsAndPaddles, setAvatarsAndPaddles] = useState<any>();
  const userTok = useRecoilValue(userToken);
  const userId = useRecoilValue(loggedUser);

  //http://localhost:3000/users/2 if no 2 the backend does not return an error
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    const fetchedData = async () => {
      try {
        const avatarsAndPaddlesResponse = await fetch(
          "http://localhost:3000/items", //remove the id in the response
          {
            headers: {
              Authorization: `Bearer ${userTok}`,
              "Content-Type": "application/json",
            },
          }
        );

        const response = await fetch(`http://localhost:3000/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${userTok}`,
            "Content-Type": "application/json",
          },
        });
        const avatarsAndPaddlesData = await avatarsAndPaddlesResponse.json();
        const data = await response.json();
        setData(data);
        setAvatarsAndPaddles(avatarsAndPaddlesData);
        console.log("data", data);
        console.log("avatarsAndPaddles", avatarsAndPaddlesData);
      } catch (err) {
        console.error("settings error >>>>>>", err);
      }
    };

    fetchedData();
  }, []);

  function changeInputValue(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    switch (name) {
      case "username":
        setData((data) => ({
          ...(data as dataInterface),
          username: value,
        }));
        break;
      case "email":
        setData((data) => ({
          ...(data as dataInterface),
          email: value,
        }));
        break;
      case "oldPassword":
        setData((data) => ({
          ...(data as dataInterface),
          oldPassword: value,
        }));
        break;
      case "newPassword":
        setData((data) => ({
          ...(data as dataInterface),
          newPassword: value,
        }));
        break;
      case "confirmedPassword":
        setData((data) => ({
          ...(data as dataInterface),
          confirmedPassword: value,
        }));
        break;
      case "bio":
        setData((data) => ({
          ...(data as dataInterface),
          bio: value,
        }));
        break;
      default:
        break;
    }
  }

  const saveUpdatewBtn = async () => {
    try {
      if (
        data?.newPassword == undefined &&
        data?.confirmedPassword == undefined &&
        data?.oldPassword == undefined
      ) {
      } else {
        if (
          data?.newPassword == undefined ||
          data?.confirmedPassword == undefined ||
          data?.oldPassword == undefined
        ) {
          setErrors("fill the 3 password fileds to change it !");
        } else if (data.newPassword !== data.confirmedPassword) {
          setErrors("you didn't confirm your password well ! ");
        }
      }

      const response = await fetch(`http://localhost:3000/users/${userId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${userTok}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          avatar: data?.avatar,
          banner: data?.banner,
          username: data?.username,
          email: data?.email,
          oldPassword: data?.oldPassword,
          newPassword: data?.newPassword,
          confirmedPassword: data?.confirmedPassword,
          bio: data?.bio,
          twoFA: data?.twoFA,
        }),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        setErrors((prev) => prev + "\n" + errorResponse.message);
        throw new Error(
          `Failed to patch data. Error: ${errorResponse.message}`
        );
      }
      setErrors("");
    } catch (err) {
      console.error("SS ERR>>>", err);
    }
  };

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
            // <Popup
            //   Type={ArticlesType}
            //   Articles={player_data.avatarsAndPaddles}
            //   setShowArticlesPopup={setShowArticlesPopup}
            //   setProfileImage={setProfileImage}
            //   setProfileBanner={setProfileBanner}
            // />
            <div>{/* {avatarsAndPaddles} */}</div>
          ) : (
            <div className="settings-container">
              <div
                className="banner"
                style={{
                  backgroundImage: `url('${data?.banner}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="image-holder">
                  <div>
                    <Image
                      className="profile-image"
                      src={data?.avatar ?? "default.png"}
                      width={192}
                      height={192}
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
                      value={data?.username}
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
                      value={data?.email}
                      onChange={(e) => changeInputValue(e)}
                    />
                  </div>{" "}
                  <div>
                    <label htmlFor="label">Bio</label>
                    <textarea
                      rows={4}
                      placeholder="Bio"
                      className="username"
                      name="bio"
                      value={data?.bio}
                      onChange={(e) => changeInputValue(e)}
                    />
                  </div>
                  <div>
                    <label htmlFor="label">password</label>
                    <input
                      id="password"
                      type="password"
                      name="oldPassword"
                      placeholder="old Password"
                      className="Password"
                      value={data?.oldPassword}
                      onChange={(e) => changeInputValue(e)}
                    />
                  </div>
                  <div>
                    <label htmlFor="label">new password</label>
                    <input
                      id="newpassword"
                      type="password"
                      name="newPassword"
                      placeholder="new Password"
                      className="Password"
                      value={data?.newPassword}
                      onChange={(e) => changeInputValue(e)}
                    />
                  </div>
                  <div>
                    <label htmlFor="confirmpassword">confirm password</label>
                    <input
                      id="confirmpassword"
                      type="password"
                      name="confirmedPassword"
                      placeholder="confirm Password"
                      className="Password"
                      value={data?.confirmedPassword}
                      onChange={(e) => changeInputValue(e)}
                    />
                  </div>
                  <pre className="errorsMsg">{errors}</pre>
                </div>
                <div className="twofa">
                  <h4>
                    Set Up Two Factor Authentication <FaLock />
                  </h4>
                  <div>
                    <Image
                      src="/qr.png"
                      alt="Qr code"
                      width={200}
                      height={200}
                    />
                    <button
                      onClick={() => {
                        setData((data) => ({
                          ...(data as dataInterface),
                          twoFA: !data?.twoFA,
                        }));
                      }}
                      className={data?.twoFA ? "redbc" : "greenbc"}
                    >
                      {data?.twoFA ? "Disable 2FA" : "Enable 2FA"}
                    </button>
                  </div>
                </div>
              </div>
              <button className="saveUpdates" onClick={saveUpdatewBtn}>
                Save Updates
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Settings;
