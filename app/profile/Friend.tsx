"use client";

import React, { useState } from "react";
import { LuMessagesSquare } from "react-icons/lu";
import { BiSolidJoystickAlt } from "react-icons/bi";
import { MdBlock } from "react-icons/md";
import { CgUnblock } from "react-icons/cg";
import { TbUserShare } from "react-icons/tb";

import silence from "../../public/mask_avatar.png";

import "./Friend.css";
import Image from "next/image";

export default function Friend() {
	const [logged, setLogged] = useState(false);
	const [inGame, setInGame] = useState(false);
	const [blocked, setBlocked] = useState(false);
	const [burgerM, setBurgerM] = useState(false);

	const handleSwitch = () => {
		setBlocked((prev) => !prev);
	};
	const handleBurgerM = () => {
		setBurgerM((prev) => !prev);
	};

	const test = () => {
		console.log("-------->>>>>>>");
	};

	return (
		<div className="friend_container">
			<div className="friend_name_photo">
				<div>

				<Image
					src={silence}
					width={2000}
					height={2000}
					className="friend_avatar"
					alt="avatar"
				/>

				<span
					className={`profile_name ${blocked && "blocked_friend"}  ${
						burgerM && "hideName"
					}`}
				>
					Yahya TAQSI
					<div
						className={`dot ${logged && "logged"}  ${
							logged && inGame && "ingame"
						}`}
					></div>
				</span>
			</div>
			<div className={`btn_conatiner ${burgerM && "showParam"}`}>
				<button className="friend_component_btn view_profile">
					<TbUserShare />
				</button>
				<button
					className={`friend_component_btn friend_msg ${
						(blocked || !logged) && "disable_btns"
					}`}
					onClick={test}
					disabled={blocked || !logged}
				>
					<LuMessagesSquare className="" />
				</button>
				<button
					className={`friend_component_btn friend_play ${
						(blocked || !logged || (logged && inGame)) && "disable_btns"
					}
                    `}
					onClick={test}
					disabled={blocked || !logged || (logged && inGame)}
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
			<div onClick={handleBurgerM} className="profile_burger_menu">
				<span> </span>
				<span> </span>
				<span> </span>
			</div>
		</div>
	);
}
