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
  // axios.defaults.headers.common["Content-Type"] = "application/json";

  const [loggedU, setLoggedU] = useRecoilState(loggedUser);
  const [userTok, setUserTok] = useRecoilState(userToken);
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [err, setErr] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    setEmail("");
    setUsername("");
    setPass("");
  }, [signInUp]);

  const signUpFunction = async (e: any) => {    
    e.preventDefault();
    const Udata = {
      email: email,
      username: username,
      password: pass,
    };
    const endpoint = signInUp ? "signup" : "login";
    try {
      const response = await axios.post(
        `http://localhost:3000/auth/${endpoint}`,
        Udata
      );
      const data = await response.data;
      setLoggedU(data.user.uid);
      setUserTok(data.user_token);
      router.push("/");
    } catch (error: any) {
      setErr(error.response.data.message);
      setTimeout(() => {
        setErr("");
      }, 5000);
    }
  };

  

  const auth42 = async () => {
    router.push("http://localhost:3000/auth/login-42");
  };
  const authGoogle = async () => {
    router.push("http://localhost:3000/auth/google");
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
      <div className="outher_methods">
        <button type="button" onClick={authGoogle} className="other_login">
          <Image src={ggl} width={26} height={26} alt="google auth" /> google
        </button>
        <button type="button" onClick={auth42} className="other_login">
          <Image src={intra} width={26} height={26} alt="42 auth" /> intra
        </button>
      </div>
    </form>
  );
}
