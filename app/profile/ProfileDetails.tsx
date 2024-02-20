"use client";

import React, { useState } from "react";
import "./ProfileDetails.css";
import Friends from "./Friends";
import Stats from "./Stats";

export default function ProfileDetails() {
	const [switchElements, setSwitchElements] = useState("stats");

	const switchE = (e) => {
		setSwitchElements(e.target.textContent);
	};
	return (
		<div className="profile_details_container">
			<div className="profile_details_header">
				<button
					onClick={switchE}
					className={`${switchElements === "stats" && "underline_animation"}`}
				>
					stats
				</button>
				<button
					onClick={switchE}
					className={`${switchElements === "friends" && "underline_animation"}`}
				>
					friends
				</button>
				<button
					onClick={switchE}
					className={`${
						switchElements === "achievements" && "underline_animation"
					}`}
				>
					achievements
				</button>
			</div>
			<div className="profile_details_data">
				{switchElements === "friends" && <Friends />}
				{switchElements === "stats" && <Stats />}
			</div>
		</div>
	);
}
