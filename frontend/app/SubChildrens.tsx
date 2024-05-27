"use client";
import { loggedUser } from "./Atoms/logged";
import UpperNav from "./upper-navbar/upper-navbar";
import { useRecoilState, useRecoilValue } from "recoil";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Login from "./login/page";

// import GameRequestPopup from "./play/GameRequestPopup";
import GameRequestPopup from "./play/GameRequestPopup";
import { gameRequest } from "./Atoms/gameRequest";
import socket from "./play/gameSocket";
import { gameResponse } from "./Atoms/gameRespose";

import { gameModeVar } from "./Atoms/gameMode";
import { userToken } from "./Atoms/userToken";
import { tablePicture } from "./Atoms/tablePicture";

export default function SubChildrens({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useRecoilValue(loggedUser);
  const router = useRouter();
  const pathname = usePathname();
  const [gameRequestValue, setGameRequestValue] = useRecoilState(gameRequest);
  const [gameResponseValue, setGameResponseValue] =
    useRecoilState(gameResponse);
  const [gameRequestQueue, setGameRequestQueue] = useState<number[]>([]);
  const [index, setIndex] = useState(-1);
  const [, setTable] = useRecoilState(tablePicture);
  const [username, setUsername] = useState("");
  const userTok = useRecoilValue(userToken);

  const fetchUserDatas = async (userId: number) => {
    const res = await fetch(`http://localhost:3000/users/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userTok}`,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setUsername(data.username);
  };

  useEffect(() => {
    user === -1 && router.push("/login");
    user !== -1 && pathname === "/login" && router.push("/");
  }, [user, pathname]);

  useEffect(() => {
    if (user !== -1) {
      socket.emit("new_user", { userId: user });
      socket.on(
        "game_request_request",
        ({
          userId,
          index,
          table,
        }: {
          userId: number;
          index: number;
          table: string;
        }) => {
          fetchUserDatas(userId);
          console.log(`Game request from ${userId}`);
          setGameRequestQueue((prevQueue) => [...prevQueue, userId]);
          setIndex(index);
          setTable(table);
        }
      );

      socket.on("remove_notification", (opponentId: number) => {
        console.log(`Remove notification from ${opponentId}`);
        setGameRequestQueue((prevQueue) =>
          prevQueue.filter((id) => id !== opponentId)
        );
      });

      return () => {
        socket.off("new_user");
        socket.off("game_request_request");
        socket.off("remove_notification");
      };
    }
  }, [user]);

  useEffect(() => {
    if (gameRequestQueue.length > 0) {
      setGameRequestValue(gameRequestQueue[0]);
    }
  }, [gameRequestQueue]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (gameRequestQueue.length > 0) {
        setGameRequestQueue((prevQueue) => prevQueue.slice(1));
        setGameRequestValue(-1);
        setGameResponseValue(0); // Reset gameResponseValue to ensure the last request receives a response
      }
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [gameRequestQueue]);

  const [gameMode, setGameMode] = useRecoilState(gameModeVar);

  useEffect(() => {
    if (gameResponseValue) {
      const accepted =
        gameResponseValue === 1 ? true : gameResponseValue === 2 ? false : null;
      socket.emit("game_response", {
        userId: gameRequestValue,
        accepted: accepted,
        index: index,
      });
      setGameRequestValue(-1);
      setGameResponseValue(0);
      setGameRequestQueue((prevQueue) => prevQueue.slice(1)); // Remove the current request from the queue
      if (accepted) {
        setGameRequestQueue([]); // remove all other requests from the queue
        // router.push('/play/against-friend');
        // setGameMode('friend');
        socket.emit("go_to_game", {
          userId: user,
          opponentId: gameRequestValue,
        });
      }
    }
  }, [gameResponseValue]);

  useEffect(() => {
    socket.on("go_to_game", (opponentId: number) => {
      setGameMode("friend");
    });

    socket.on("go_to_random_game", () => {
      setGameMode("random");
      console.log("go to random game event received");
    });

    return () => {
      socket.off("go_to_game");
      socket.off("go_to_random_game");
    };
  }, []);

  useEffect(() => {
    if (gameRequestQueue.length > 0) {
      setGameRequestValue(gameRequestQueue[0]);
    } else {
      setGameRequestValue(-1);
    }
  }, [gameRequestQueue, gameRequestValue]);

  return (
    <div className="upperNav-children-container">
      <UpperNav />
      {gameRequestValue !== -1 && <GameRequestPopup username={username} />}
      {children}
    </div>
  );
}
