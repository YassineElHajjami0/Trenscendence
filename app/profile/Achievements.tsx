import React from "react";
import Achievement from "./Achievement";

import "./Achievements.css"
export default function Achievements() {
	return (
		<div className="achievements_container">
			{Array.from({ length: 20 })
				.fill(null)
				.map((e, i) => (
					<Achievement key={i} />
				))}
		</div>
	);
}
