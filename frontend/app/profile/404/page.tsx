"use client";
import { useState } from "react";
import "./404.css";
import { useRouter } from "next/navigation";
export default function Custom404() {
  const [userName, setUserName] = useState("");
  const route = useRouter();
  const redirectUser = (e: any) => {
    e.preventDefault();
    route.push(`/profile/${userName}`);
  };
  return (
    <div className="error_container">
      <div className="error_msg">
        <div className="noise"></div>
        <div className="overlay"></div>
        <form onSubmit={redirectUser} className="terminal">
          <h1>
            Error <span className="errorcode">404</span>
          </h1>
          <p className="output">
            The User you are looking for might have been removed,
            <br /> had its name changed or is temporarily unavailable.
          </p>
          <p className="output">Please try to search with another name</p>
          <input
            required
            placeholder="userName"
            className="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
          />
          <button type="submit" className="output">
            Good luck.
          </button>
        </form>
      </div>
    </div>
  );
}
