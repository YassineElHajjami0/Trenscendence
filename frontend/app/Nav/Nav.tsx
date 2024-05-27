"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Nav.css";
import raqeta from "../../public/rakita.png";
import apb from "../../public/apb.png";
import { FaGamepad } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { IoMdChatbubbles } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import next from "next";
import nextAppLoader from "next/dist/build/webpack/loaders/next-app-loader";
import { useRecoilState } from "recoil";
import { loggedUser } from "../Atoms/logged";
import { userToken } from "../Atoms/userToken";
import { userNotifications } from "../Atoms/notifications";

const Nav = () => {
  const [loggedU, setLoggedU] = useRecoilState(loggedUser);
  const [loggedT, setLoggedT] = useRecoilState(userToken);
  const [myNotifications, setMyNotifications] =
    useRecoilState(userNotifications);

  return (
    <div className="main-Nav">
      <div className="logo-and-links">
        <div className="logo">
          <Link className="link" href="/">
            <div>
              <Image
                className="image-logo"
                src={raqeta}
                alt="LOGO"
                width={100}
              />
            </div>
            <div>
              <Image className="apb-logo" src={apb} alt="LOGO" width={100} />
            </div>
          </Link>
        </div>
        <ul>
          <Link className="link" href="/play">
            <li>
              <div>
                <FaGamepad className="nav-icon" />
              </div>
              <div>
                Play<span className="hover-line"></span>
              </div>
            </li>
          </Link>
          <Link className="link" href="/profile">
            <li>
              <div>
                <FaUser className="nav-icon" />
              </div>
              <div>
                Profile<span className="hover-line"></span>
              </div>
            </li>
          </Link>
          <Link className="link" href="/leaderboard">
            <li>
              <div>
                <FaRankingStar className="nav-icon" />
              </div>
              <div>
                Leaderboard<span className="hover-line"></span>
              </div>
            </li>
          </Link>
          <Link className="link" href="/chat">
            <li>
              <div>
                <IoMdChatbubbles className="nav-icon" />
              </div>
              <div>
                Chat<span className="hover-line"></span>
              </div>
            </li>
          </Link>
        </ul>
      </div>
      <div className="settings-logout">
        <ul>
          {/* later */}
          <Link className="link" href="/settings">
            <li>
              <div>
                <IoMdSettings className="nav-icon" />
              </div>
              <div>
                Settings<span className="hover-line"></span>
              </div>
            </li>
          </Link>
          <li
            onClick={() => {
              setLoggedU(-1);
              setLoggedT("");
              setMyNotifications([]);
            }}
            style={{ cursor: "pointer" }}
          >
            <div>
              <MdOutlineLogout className="nav-icon" />
            </div>
            <div>Log-out</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
