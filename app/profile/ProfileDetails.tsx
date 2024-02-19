"use client";

import React, { useState } from "react";
import "./ProfileDetails.css";
import Friends from "./Friends";

export default function ProfileDetails() {
	const [switchElements, setSwitchElements] = useState("friends");

	const switchE = (e) => {
		setSwitchElements(e.target.textContent);
	};
	return (
		<div className="profile_details_container">
			<div className="profile_details_header">
				<span
					onClick={switchE}
					className={`${switchElements === "stats" && "switch_e"}`}
				>
					stats
				</span>
				<span
					onClick={switchE}
					className={`${switchElements === "friends" && "switch_e"}`}
				>
					friends
				</span>
				<span
					onClick={switchE}
					className={`${switchElements === "achievements" && "switch_e"}`}
				>
					achievements
				</span>
			</div>
			<div className="profile_details_data">
				{switchElements === "friends" && <Friends />}
			</div>
		</div>
	);
}
