"use client";
import React, { useEffect, useState } from "react";
import "./SignIn.css";
import { FaArrowRight } from "react-icons/fa6";

import Image from "next/image";

import ggl from "../../public/ggl_icon.png";
import intra from "../../public/42_logo.svg";
import { useRecoilState, useRecoilValue } from "recoil";
import { useRouter } from "next/navigation";

import { loggedUser } from "../Atoms/logged";
import { userToken } from "../Atoms/userToken";

export default function SignIn({ signInUp }: { signInUp: boolean }) {
  const [loggedU, setLoggedU] = useRecoilState(loggedUser);
  const [userTok, setUserTok] = useRecoilState(userToken);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const [pass, setPass] = useState("");
  const router = useRouter();

  const signup = async () => {
    const Udata = {
      email: email,
      username: username,
      password: pass,
    };
    try {
      const response = await fetch(`http://10.12.7.15:3000/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Udata),
      });

      // if (!response) {
      //   console.log("Error no response");
      //   return;
      // }

      // const data = await response.json();
      // console.log("useeeeer>>>>>>>", data);
      // localStorage.setItem("loggedUser", data.user.uid);
      // localStorage.setItem("userToken", data.user_token);
      // router.push("/");
    } catch (error: any) {
      console.log("error >> >", error.message);
    }
  };

  const loggin = async () => {
    const Udata = {
      username: username,
      password: pass,
    };
    try {
      const response = await fetch(`http://10.12.7.15:3000/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Udata),
      });
      if (!response) {
        console.log("Error000");
        return;
      }
      const data = await response.json();

      setLoggedU(data.user.uid);
      setUserTok(data.user_token);

      console.log("useeeeer>>>>>>>", data);

      router.push("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const signUpFunction = signInUp ? signup : loggin;

  const auth42 = async () => {
    // try {
    console.log("hanaaaa>>>>>>>>>");

    const response = await fetch(`http://10.12.7.15:3000/auth/login-42`, {
      headers: {
        Host: "localhost",
      },
    });

    // if (!response) {
    //   console.log("Error no response");
    //   return;
    // }

    const data = await response.json();
    console.log("useeeeer>>>>>>>", data);
    // setLoggedU(data.user.uid);
    // setUserTok(data.user_token);
    // router.push("/");
    // } catch (error: any) {
    //   console.log("error >>>> ", error.message);
    // }
  };

  return (
    <div className="sign_in_container">
      <input
        placeholder="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="sign_in_ships"
      />

      <input
        value={email}
        className={`sign_in_ships ${!signInUp && "hide_pass"}`}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        type="email"
      />

      <input
        placeholder="password"
        className="sign_in_ships"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />

      <button onClick={signUpFunction} className="sign_in_ships btn">
        Let's play <FaArrowRight />
      </button>

      <h1>OR</h1>
      <div className="outher_methods">
        <button className="other_login">
          <Image src={ggl} width={26} height={26} alt="google auth" /> google
        </button>
        <button onClick={auth42} className="other_login">
          <Image src={intra} width={26} height={26} alt="42 auth" /> intra
        </button>
      </div>
    </div>
  );
}
