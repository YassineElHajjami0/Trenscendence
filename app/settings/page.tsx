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
import { FaImages } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";

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
  wallet: number;
}
interface itemsInterface {
  description: string;
  id: number;
  img: string;
  type: string;
  name: string;
  power: string;
  price: string;
  choosed: boolean;
  owned: boolean;
}

interface User {
  username?: string;
  email?: string;
  bio?: string;
  twoFA?: boolean;
  oldPassword?: string;
  newPassword?: string;
  confirmedPassword?: string;
}

//http://localhost:3000/image.jpeg
const Settings = () => {
  const [ArticlesType, setArticlesType] = useState("");
  const [showArticlesPopup, setShowArticlesPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<dataInterface>();
  const [errors, setErrors] = useState<string>("");
  const [qrImage, setQrImage] = useState<string>("");
  const [avatarsAndPaddles, setAvatarsAndPaddles] =
    useState<itemsInterface[]>();
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
          `http://localhost:3000/useritems?userId=${userId}`, //remove the id in the response
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
  }, [showArticlesPopup]);

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
    console.log("????", data);
    try {
      setErrors("");
      if (
        data?.newPassword == "" &&
        data?.confirmedPassword == "" &&
        data?.oldPassword == ""
      ) {
      } else {
        if (
          data?.newPassword == "" ||
          data?.confirmedPassword == "" ||
          data?.oldPassword == ""
        ) {
          setErrors("fill the 3 password fileds to change it !");
          return;
        } else if (data?.newPassword !== data?.confirmedPassword) {
          setErrors("you didn't confirm your password well ! ");
          return;
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

  const saveUpdatewBtn2 = async () => {
    try {
      setErrors("");
      if (
        data?.newPassword == "" &&
        data?.confirmedPassword == "" &&
        data?.oldPassword == ""
      ) {
      } else {
        if (
          data?.newPassword == "" ||
          data?.confirmedPassword == "" ||
          data?.oldPassword == ""
        ) {
          setErrors("fill the 3 password fileds to change it !");
          return;
        } else if (data?.newPassword !== data?.confirmedPassword) {
          setErrors("you didn't confirm your password well ! ");
          return;
        }
      }

      const body: Partial<User> = {
        username: data?.username,
        email: data?.email,
        bio: data?.bio,
        twoFA: data?.twoFA,
      };

      if (data?.oldPassword && data.oldPassword !== "") {
        body.oldPassword = data.oldPassword;
        body.newPassword = data.newPassword;
        body.confirmedPassword = data.confirmedPassword;
      }
      console.log(body);
      const response = await fetch(`http://localhost:3000/users/${userId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${userTok}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...body }),
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

  const bringQrImage = async () => {
    const response = await fetch(`http://localhost:3000/auth/2fa/turn-on`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userTok}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: userId,
        email: data?.email,
      }),
    });
    const data_ = await response.text();
    setQrImage(data_);
    console.log(data_);
  };

  const changeImageInTheServer = async (
    id: number,
    img: string,
    type: string
  ) => {
    try {
      if (type == "avatar") {
        setData((data) => ({
          ...(data as dataInterface),
          avatar: img,
        }));
      } else if (type == "banner") {
        setData((data) => ({
          ...(data as dataInterface),
          banner: img,
        }));
      }
      // const response = await fetch(`http://localhost:3000/useritems`, {
      //   method: "PATCH",
      //   headers: {
      //     Authorization: `Bearer ${userTok}`,
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     userId: userId,
      //     itemId: id,
      //     choosed: true,
      //   }),
      // });
      // if (!response.ok) {
      //   const errorResponse = await response.json();
      //   throw new Error(`Failed to PATCH data. Error: ${errorResponse.message}`);
      // }
      setLoading(true);
      setTimeout(() => setLoading(false), 1000);
      setShowArticlesPopup(false);
      const response =
        type == "avatar"
          ? await fetch(`http://localhost:3000/useritems`, {
              method: "PATCH",
              headers: {
                Authorization: `Bearer ${userTok}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                itemId: id,
                userId: userId,
                choosed: true,
              }),
            })
          : await fetch(`http://localhost:3000/users/${userId}`, {
              method: "PATCH",
              headers: {
                Authorization: `Bearer ${userTok}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                banner: img,
              }),
            });
      if (!response.ok) {
        const errorResponse = await response.json();
        setErrors("Something went wrong !");
        throw new Error(
          `Failed to patch data. Error: ${errorResponse.message}`
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("changed");
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      fetch(`http://localhost:3000/upload/${userId}?type=${ArticlesType}`, {
        method: "POST",
        body: formData,
      })
        .then((res) => {
          setShowArticlesPopup(false);
        })
        .catch((error) => {
          setErrors("something went wrong ! try again.");
        });
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
            <>
              <div className="choosedItemsList">
                {avatarsAndPaddles?.map((e) => {
                  return e.type == ArticlesType ? (
                    e.type == "avatar" && e.owned && !e.choosed ? (
                      <div
                        key={e.id}
                        className="item"
                        onClick={() =>
                          changeImageInTheServer(e.id, e.img, "avatar")
                        }
                      >
                        <Image
                          className="img"
                          src={`http://localhost:3000/av/${e.img}`}
                          width={200}
                          height={200}
                          alt="IMG"
                        />
                        <p>{e.name}</p>
                      </div>
                    ) : e.type == "banner" && !e.choosed ? (
                      <div
                        key={e.id}
                        className="item"
                        style={{ backgroundColor: "transparent" }}
                        onClick={() =>
                          changeImageInTheServer(e.id, e.img, "banner")
                        }
                      >
                        <Image
                          className="img"
                          style={{
                            borderRadius: 0,
                            width: "100%",
                            height: "60%",
                          }}
                          src={`http://localhost:3000/bn/${e.img}`}
                          width={200}
                          height={200}
                          alt="IMG"
                        />
                      </div>
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  );
                })}
              </div>
              <div className="uploadAndCancel">
                <label htmlFor="file-upload" className="custom-file-upload">
                  Upload Image <FaImages />
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                />
                <button
                  className="cancel"
                  onClick={() => {
                    setArticlesType("");
                    setShowArticlesPopup(false);
                  }}
                >
                  <FaArrowLeft /> Cancel
                </button>
              </div>
            </>
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
                      src={`${data?.avatar}`}
                      width={192}
                      height={192}
                      alt="Profile Picture"
                    />
                  </div>
                  <button
                    className="btn-change-profile"
                    onClick={() => {
                      setLoading(true);
                      setTimeout(() => setLoading(false), 1000);
                      setArticlesType("avatar");
                      setShowArticlesPopup(true);
                    }}
                  >
                    <IoCameraReverse className="camera" />
                  </button>
                </div>
                <div className="button-holder">
                  <button
                    className="addBannerBtn"
                    onClick={() => {
                      setLoading(true);
                      setTimeout(() => setLoading(false), 1000);
                      setArticlesType("banner");
                      setShowArticlesPopup(true);
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
                    {data?.twoFA == true && (
                      <Image
                        src={
                          "data:image/png;base64,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"
                        }
                        alt="Qr code"
                        width={200}
                        height={200}
                      />
                    )}
                    <button
                      onClick={() => {
                        setData((data) => ({
                          ...(data as dataInterface),
                          twoFA: !data?.twoFA,
                        }));
                        if (data?.twoFA == false) bringQrImage();
                      }}
                      className={data?.twoFA ? "redbc" : "greenbc"}
                    >
                      {data?.twoFA ? "Disable 2FA" : "Enable 2FA"}
                    </button>
                  </div>
                </div>
              </div>
              <button className="saveUpdates" onClick={saveUpdatewBtn2}>
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
