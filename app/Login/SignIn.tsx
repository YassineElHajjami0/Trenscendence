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

import OtpInput from "react-otp-input";
import { MdError } from "react-icons/md";

export default function SignIn({ signInUp }: { signInUp: boolean }) {
  // axios.defaults.headers.common["Content-Type"] = "application/json";
  const router = useRouter();

  const [loggedU, setLoggedU] = useRecoilState(loggedUser);
  const [userTok, setUserTok] = useRecoilState(userToken);

  const [biometric, setBiometric] = useState<string>("");
  const [_2fa_opt, set_2fa_opt] = useState<boolean>(false);

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [err, setErr] = useState<string>("");
  const [user, setUser] = useState<any>({});

  // useEffect(() => {
  //   setEmail("");
  //   setUsername("");
  //   setPass("");
  //   setBiometric("");
  // }, [signInUp]);

  const verifyTwoFA = async (e: any) => {
    e.preventDefault();

    const Udata = {
      ...user,
      twoFaCode: biometric,
    };
    console.log("user>>>>>>", user);

    try {
      const response = await axios.post(
        `http://localhost:3000/auth/2fa`,
        Udata
      );
      const data = await response.data;
      console.log("2fa data>>>>>>>>", data);

      setLoggedU(data.user.uid);
      setUserTok(data.userToken);
      // router.push("/");
    } catch (error: any) {
      setErr(error.response.data.message);
      setTimeout(() => {
        setErr("");
      }, 5000);
    }
  };

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
      if (data.user.twoFA) {
        setUser(data.user);
        set_2fa_opt(true);
        return;
      }
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

  const uri = _2fa_opt ? verifyTwoFA : signUpFunction;

  const auth42 = async () => {
    router.push("http://localhost:3000/auth/login-42");
  };
  const authGoogle = async () => {
    router.push("http://localhost:3000/auth/google");
  };

  return (
    <form onSubmit={uri} className="sign_in_container">
      <input
        required={!_2fa_opt}
        placeholder="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={`sign_in_ships ${_2fa_opt && "hide_pass"}`}
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
        required={!_2fa_opt}
        placeholder="password"
        className={`sign_in_ships ${_2fa_opt && "hide_pass"}`}
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />

      <div className={`two_factor_auth && ${_2fa_opt && "show_2fa_container"}`}>
        <h1 className="_2fa_header">2-Factor Authentication</h1>
        <OtpInput
          value={biometric}
          onChange={setBiometric}
          numInputs={6}
          inputType="number"
          containerStyle="_2fa_container"
          inputStyle="_2fa_container_inputs"
          renderSeparator={<span className="_2fa_container_separator">-</span>}
          renderInput={(props) => <input {...props} />}
        />
      </div>

      <button
        disabled={err.length > 0}
        type="submit"
        className={`sign_in_ships btn ${err.length && "lets_not_play"}`}
      >
        {!err.length ? (
          !_2fa_opt ? (
            "Let's play"
          ) : (
            "verify"
          )
        ) : (
          <p className="from_errors">{err}</p>
        )}
        {err.length ? <MdError /> : <FaArrowRight />}
      </button>

      <h1 onClick={() => set_2fa_opt((prev) => !prev)}>OR</h1>
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
