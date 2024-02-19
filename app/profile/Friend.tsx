"use client";

import React, { useState } from "react";
import { LuMessagesSquare } from "react-icons/lu";
import { BiSolidJoystickAlt } from "react-icons/bi";
import { MdBlock } from "react-icons/md";
import { CgUnblock } from "react-icons/cg";

import silence from "../../public/mask_avatar.png";

import "./Friend.css";
import Image from "next/image";

export default function Friend() {
	const [blocked, setBlocked] = useState(false);

	const handleSwitch = () => {
		setBlocked((prev) => !prev);
	};

	const test = () => {
		console.log("-------->>>>>>>");
	};

	return (
		<div className="friend_container">
			<input type="checkbox" name="burger_menu" id="burger_menu" />

			<div className="friend_name_photo">
				<Image
					src={silence}
					width={20}
					height={20}
					className="friend_avatar"
					alt="avatar"
				/>
				<span className={`${blocked && "blocked_friend"}`}>Yahya TAQSI</span>
			</div>
			<div className="btn_conatiner">
				<button
					className={`friend_component_btn friend_msg ${
						blocked && "disable_btns"
					}`}
					onClick={test}
					disabled={blocked}
				>
					<LuMessagesSquare className="" />
				</button>
				<button
					className={`friend_component_btn friend_play ${
						blocked && "disable_btns"
					}`}
					onClick={test}
					disabled={blocked}
				>
					<BiSolidJoystickAlt className="" />
				</button>
				<MdBlock
					onClick={handleSwitch}
					className={`friend_block  ${blocked && "hide_block"}`}
				/>
				<CgUnblock
					onClick={handleSwitch}
					className={`friend_unblock  ${blocked && "show_unblock"}`}
				/>
			</div>
			<label htmlFor="burger_menu" className="profile_burger_menu">
				<span>.</span>
				<span>.</span>
				<span>.</span>
			</label>
		</div>
	);
}
