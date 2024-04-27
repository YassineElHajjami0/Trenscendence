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
import axios from "axios";

export default function SignIn({ signInUp }: { signInUp: boolean }) {
  const [loggedU, setLoggedU] = useRecoilState(loggedUser);
  const [userTok, setUserTok] = useRecoilState(userToken);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");
  const router = useRouter();

  // useEffect(() => {
  //   setEmail("");
  //   setUsername("");
  //   setPass("");
  // }, [signInUp]);

  const signup = async (e: any) => {
    e.preventDefault();
    console.log("click>>>>>>>>>>");


    const Udata = {
      email: email,
      username: username,
      password: pass,
    };
    try {
      const response = await fetch(`http://localhost:3000/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Udata),
      });

      console.log("errrrrrrrrrrrrrrrrrrr");

      const data = await response.json();
      console.log("useeeeer>>>>>>>", data);
      setLoggedU(data.user.uid);
      setUserTok(data.user_token);
      router.push("/");
    } catch (error: any) {
      console.log("error >> >", error.message);
    }
  };

  const loggin = async (e: any) => {
    e.preventDefault();
    console.log("click>>>>>>>>>>");



    const Udata = {
      username: username,
      password: pass,
    };
    try {
      const response = await fetch(`http://localhost:3000/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Udata),
      });

      const data = await response.json();
      console.log("errrrrrrrrrrrrrrrrrrr", data);

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
   
  };

  return (
    <form onSubmit={signUpFunction} className="sign_in_container">
      {err.length > 0 && <p className="from_errors">{err}</p>}
      <input
        required
        placeholder="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="sign_in_ships"
      />

      <input
        required={signInUp}
        value={email}
        className={`sign_in_ships ${!signInUp && "hide_pass"}`}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        type="email"
      />

      <input
        required
        placeholder="password"
        className="sign_in_ships"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />

      <button
        disabled={err.length > 0}
        type="submit"
        className={`sign_in_ships btn ${err.length > 0 && "lets_not_play"}`}
      >
        Let's play <FaArrowRight />
      </button>

      <h1>OR</h1>
      {/* <div className="outher_methods">
        <button className="other_login">
          <Image src={ggl} width={26} height={26} alt="google auth" /> google
        </button>
        <button onClick={auth42} className="other_login">
          <Image src={intra} width={26} height={26} alt="42 auth" /> intra
        </button>
      </div> */}
    </form>
  );
}
