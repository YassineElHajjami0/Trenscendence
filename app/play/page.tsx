"use client";
import { useState } from "react";

import Login from "../Login/Login";
import PlayPage from "./play-page";
import Popup from "./popup";

const Play = () => {
	const [logged, setLogged] = useState(true);
	return logged ? <PlayPage /> : <Login />;
};

export default Play;
