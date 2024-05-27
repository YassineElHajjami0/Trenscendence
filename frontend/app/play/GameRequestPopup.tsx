import { loggedUser } from "../Atoms/logged";
import { useRecoilState, useRecoilValue } from "recoil";
import { gameRequest } from "../Atoms/gameRequest";
import { gameResponse } from "../Atoms/gameRespose";
import { useEffect, useState } from "react";

import { userToken } from "../Atoms/userToken";
import socket from "./gameSocket";

import '../play/play-page-style.css';

export default function GameRequestPopup({ username }: { username: string }) {
	const [gameResponseValue, setGameResponseValue] = useRecoilState(gameResponse);
	const [gameRequestValue, setGameRequestValue] = useRecoilState(gameRequest);

	const handleAccept = () => {
		setGameResponseValue(1);
	}

	const handleReject = () => {
		setGameResponseValue(2);
	}

	return (
		<div className={"game-request-popup-container "}>
			<h3>
				Apex Pong Battle
			</h3>
			Would you like to play with:
			<div className="request-from-player"> {username} </div>
			<div className="game-request-popup-buttons">
				<button className="accept-button" onClick={handleAccept}>Accept</button>
				<button className="decline-button" onClick={handleReject}>Decline</button>
			</div>
		</div>
	);
}
