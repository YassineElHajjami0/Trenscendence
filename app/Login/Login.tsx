import "./Login.css";
import log_in_out from "../../public/login.png";
import raqeta from "../../public/rakita.png";
import apb from "../../public/apb.png";

import Image from "next/image";
import SignIn from "./SignIn";

export default function Login() {
	return (
		<div className="login_container">
			<div className="sign_in_out">
				<div className="sign_in">
					<h1>sign in</h1>
					<h3>use you're ApexPongBattle account to continue</h3>
					<SignIn />
					<h5>
						you don't have an account? <label htmlFor="check">Sing Up.</label>
					</h5>
					<div className="logo">
						<Image className="logo_img" src={raqeta} alt="logo_img" />
						<Image className="logo_img" src={apb} alt="logo_name" />
					</div>
				</div>
				<div className="sign_up"></div>
				<input type="checkbox" name="check" id="check" />
				<Image className="log_in_out_img" src={log_in_out} alt="log_in_out" />
			</div>
		</div>
	);
}
