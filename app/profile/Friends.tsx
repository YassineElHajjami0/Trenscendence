import React from "react";
import "./Friends.css";
import Friend from "./Friend";

export default function Friends() {
	return (
		<div className="friends_container">
			{Array.from({ length: 20 })
				.fill(null)
				.map((e, i) => (
					<Friend key={i} />
				))}
		</div>
	);
}
