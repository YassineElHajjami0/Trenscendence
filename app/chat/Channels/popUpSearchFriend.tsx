import React, { useEffect, useState } from "react";
import "./channelChat.css";
import { useRecoilValue } from "recoil";
import { userToken } from "@/app/Atoms/userToken";
import Image from "next/image";
import { MdCancel } from "react-icons/md";
import { loggedUser } from "../../Atoms/logged";

interface channelInterface {
  id: number;
  name: string;
  topic: string;
  type: string;
  uri: string;
  roles: any[];
}

const PopUpSearchFriend = ({
  chToDisplay,
  setShowSerachFriendPopUp,
  selectedChannel,
}: {
  chToDisplay: channelInterface | undefined;
  setShowSerachFriendPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  selectedChannel: number;
}) => {
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const userTok = useRecoilValue(userToken);
  const userId = useRecoilValue(loggedUser);

  useEffect(() => {
    const fetchFreshChannels = async () => {
      const response = await fetch(`http://localhost:3000/users`, {
        headers: {
          Authorization: `Bearer ${userTok}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("data is equal to :", data);
      const excludeMe = data.filter((e: any) => e.uid != userId);
      const filtredData = excludeMe.filter((e: any) =>
        e.username.includes(userName)
      );
      setUsers(filtredData);
    };

    fetchFreshChannels();
  }, [userName]);

  const handleInvite = async (
    senderName: string,
    uid: number,
    channelId: number
  ) => {
    const notifData = {
      type: "channelReq",
      content: `invitation to ${chToDisplay?.name}`,
      suserId: userId,
      chnnelId: channelId,
      ruserId: uid,
    };
    const response = await fetch(
      `http://localhost:3000/notifications/channelnotif`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userTok}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(notifData),
      }
    ).catch((err) => {
      console.error(err);
    });
  };
  return (
    <div className="PopUpSearchFriend">
      <div className="searchingArea">
        <div
          className="exitBtn"
          onClick={() => {
            setShowSerachFriendPopUp(false);
          }}
        >
          <MdCancel />
        </div>
        <input
          type="text"
          maxLength={50}
          placeholder="invite friends"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <div className="searchedFriendsList">
          {users.map((e: any, index) => {
            return (
              <div key={index}>
                <div className="imageAndusername">
                  <Image src={e.avatar} width={50} height={50} alt="AVATAR" />
                  {e.username}
                </div>
                <button
                  onClick={() =>
                    handleInvite(e.username, e.uid, selectedChannel)
                  }
                >
                  Invite
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopUpSearchFriend;
