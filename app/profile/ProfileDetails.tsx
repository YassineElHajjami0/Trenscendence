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
				<button
					onClick={switchE}
					className={`underline_animation`}
				>
					stats
				</button>
				<button
					onClick={switchE}
					className={`underline_animation`}
				>
					friends
				</button>
				<button
					onClick={switchE}
					className={`underline_animation`}
				>
					achievements
				</button>
			</div>
			<div className="profile_details_data">
				{switchElements === "friends" && <Friends />}
			</div>
		</div>
	);
}
