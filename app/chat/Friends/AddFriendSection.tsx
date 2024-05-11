"use client";

import { useEffect, useState } from "react";

import { TiUserAdd } from "react-icons/ti";
import { useRecoilValue } from "recoil";
import { userToken } from "@/app/Atoms/userToken";
import AddFriend from "./AddFriend";
import { loggedUser } from "@/app/Atoms/logged";

interface AddFriendInterface {
  className: string;
}

const AddFriendSection = () => {
  const userTok = useRecoilValue(userToken);
  const userL = useRecoilValue(loggedUser);
  const [addFriend, setAddFriend] = useState(false);

  const [input, setInput] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const filteredUsers = allUsers.filter((user: any) =>
    user?.username.toLowerCase().includes(input.toLowerCase())
  );
  const addFriendClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const getAllusers = async () => {
    if (!addFriend) return;
    try {
      const res = await fetch(
        `http://localhost:3000/friends/allusers/${userL}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${userTok}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      if (data?.statusCode === 401) return;
      console.log("all users ====> ", data);
      setAllUsers(data);
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
      className={`add_friend ${addFriend && `show_the_big_div`} `}
    >
      {addFriend ? (
        <div onClick={addFriendClick} className={`add_friend_container`}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Add friend"
          />

          <div className="searchedFriends">
            {filteredUsers?.map((user: any) => (
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
