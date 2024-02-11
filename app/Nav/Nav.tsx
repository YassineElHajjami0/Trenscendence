import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Nav.css";
import raqeta from "./rakita.png";
import apb from "./apb.png";
import { FaGamepad } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaRankingStar } from "react-icons/fa6";
import { IoMdChatbubbles } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import next from "next";
import nextAppLoader from "next/dist/build/webpack/loaders/next-app-loader";

const Nav = () => {  
  return ( 
    <div className="main-Nav">
      <div className="logo-and-links">
        <div className="logo">
          <Link className="link" href="/">
            <Image className="image-logo" src={raqeta} alt="LOGO" width={100} />
            <Image className="apb-logo" src={apb} alt="LOGO" width={100} />
          </Link>
        </div>
        <ul>
          <Link className="link" href="/play">
            <li>
              <div>
                <FaGamepad />
              </div>
              <div>
                Play<span className="hover-line"></span>
              </div>
            </li>
          </Link>
          <Link className="link" href="/profile">
            <li>
              <div>
                <CgProfile />
              </div>
              <div>
                Profile<span className="hover-line"></span>
              </div>
            </li>
          </Link>
          <Link className="link" href="/leaderboard">
            <li>
              <div>
                <FaRankingStar />
              </div>
              <div>
                Leaderboard<span className="hover-line"></span>
              </div>
            </li>
          </Link>
          <Link className="link" href="/chat">
            <li>
              <div>
                <IoMdChatbubbles />
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
                <IoMdSettings />
              </div>
              <div>
                Settings<span className="hover-line"></span>
              </div>
            </li>
          </Link>
          <li style={{cursor:"pointer"}}>
            <div>
              <MdOutlineLogout />
            </div>
            <div >Log-out</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;