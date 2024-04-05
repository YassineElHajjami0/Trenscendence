"use client";

import { useEffect, useState } from "react";

import { TiUserAdd } from "react-icons/ti";
import { useRecoilValue } from "recoil";
import { userToken } from "@/app/Atoms/userToken";
import AddFriend from "./AddFriend";

const AddFriendSection = () => {
  const userTok = useRecoilValue(userToken);
  const [addFriend, setAddFriend] = useState(true);

  const [input, setInput] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  const addFriendClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const getAllusers = async () => {
    try {
      console.log("toooooooooooooooo ====> 0000", userTok);
      const res = await fetch("http://localhost:3000/users", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userTok}`,
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setAllUsers(data);
      console.log("all users ====> ", data);
    } catch (error) {
      console.log("3aaaaaaaaaaaa>>>>>");
    }
  };
  useEffect(() => {
    getAllusers();
  }, [addFriend]);

  return (
    <div
      onClick={() => setAddFriend((prev) => !prev)}
      className={`add_friend ${addFriend && `show_the_big_div`}`}
    >
      {addFriend ? (
        <div onClick={addFriendClick} className="add_friend_container">
          <input type="text" placeholder="Add friend" />

          <div className="searchedFriends">
            {allUsers.map((user: any) => (
              <AddFriend key={user.uid} user={user} />
            ))}
          </div>
        </div>
      ) : (
        <TiUserAdd />
      )}
    </div>
  );
};
export default AddFriendSection;
