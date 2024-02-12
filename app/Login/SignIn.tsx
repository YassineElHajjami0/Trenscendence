"use client";
import React, { useState } from "react";
import "./SignIn.css";
import { FaArrowRight } from "react-icons/fa6";

import Image from "next/image";

import ggl from "../../public/ggl_icon.png";
import intra from "../../public/42_logo.svg";

export default function SignIn({ signInUp }) {
	return (
		<div className="sign_in_container">
			<div className="sign_in_input_div">
				<input placeholder="username" className="sign_in_ships" type="text" />
			</div>
			{signInUp && (
				<div className="sign_in_input_div">
					<input placeholder="email" className="sign_in_ships" type="text" />
				</div>
			)}
			<div className="sign_in_input_div">
				<input
					placeholder="password"
					className="sign_in_ships"
					type="password"
				/>
			</div>
			<div className="sign_in_input_div">
				<button className="sign_in_ships btn">
					Let's play <FaArrowRight />
				</button>
			</div>

			<h1>OR</h1>
			<div className="outher_methods">
				<button className="other_login">
					{" "}
					<Image src={ggl} width={26} height={26} alt="google" /> google
				</button>
				<button className="other_login">
					{" "}
					<Image src={intra} width={26} height={26} alt="google" /> intra
				</button>
			</div>
		</div>
	);
}
