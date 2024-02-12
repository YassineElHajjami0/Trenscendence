"use clinet";
import "./Login.css";
import log_in_out from "../../public/login.png";
import raqeta from "../../public/rakita.png";
import apb from "../../public/apb.png";

import Image from "next/image";
import SignIn from "./SignIn";
import { useState } from "react";

export default function Login() {
	const [signInUp, setSignInUp] = useState(false);

	const switchSides = () => {
		setSignInUp((prev) => !prev);
	};

	return (
		<div className="login_container">
			<div className="sign_in_out">
				<input type="checkbox" name="check" id="check" />
				<div className="sign_in">
					<div className="sign_in_header">
						<h1>sign in</h1>
						<h3>use you're ApexPongBattle account to continue</h3>
					</div>
					<SignIn signInUp={signInUp} />
					<h5>
						you don't have an account?{" "}
						<label onClick={switchSides} htmlFor="check">
							Sing {signInUp ? "In" : "Up"}.
						</label>
					</h5>
					<div className="login_logo">
						<Image className="logo_img" src={raqeta} alt="logo_img" />
						<Image className="logo_img" src={apb} alt="logo_name" />
					</div>
				</div>
				<Image className="log_in_out_img" src={log_in_out} alt="log_in_out" />
			</div>
		</div>
	);
}
