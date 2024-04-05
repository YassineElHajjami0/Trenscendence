"use client";
import Image from "next/image";
import player from "../public/player.webp";
import pingpong_chess from "../public/pingpong-chest.png";
import avatars_chess from "../public/avatars-chest.png";
import avatar_forstore from "../public/avatar-for-store.png";
import "./globals.css";
import { TbShoppingBag } from "react-icons/tb";
import playerData from "./data/player-info.json";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PlayerInfo } from "./Interfaces/playerInfoInterface";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    const fetchedData = async () => {
      try {
        const response = await fetch("http://10.12.4.13:3001/users");
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (err) {
        console.error(">>>>>>", err);
      }
    };

    fetchedData();
  }, []);
  const player_data: PlayerInfo = playerData;
  let flag: number = 0;

  return (
    <div>
      {loading ? (
        <div className="container">
          <div className="bat">
            <div className="handle">
              <div className="inner"></div>
            </div>
            <div className="front"></div>
          </div>
          <div className="ball"></div>
        </div>
      ) : (
        <main className="home-page">
          <div className="animation-slide">
            <span className="blur-effect"></span>
            <div>
              <Image
                className="player-image"
                src={player}
                width={370}
                height={370}
                alt="Player"
              />
            </div>
            <span className="ball"></span>
          </div>
          <div className="store-container">
            <h2>
              Store <TbShoppingBag className="store-icon" />
            </h2>
            <div className="store">
              <span className="shape1"></span>
              <span className="shape2"></span>
              <span className="shape3"></span>
              <span className="shape4"></span>
              <span className="shape5"></span>
              <span className="shape6"></span>
              <div className="buy-paddle">
                <div>
                  <Image
                    className="paddles_chess"
                    src={pingpong_chess}
                    width={290}
                    height={290}
                    alt="paddles"
                  />
                </div>
                <Link href={"/store"}>
                  {" "}
                  <button className="buy-paddle-btn">Buy Paddle</button>
                </Link>
              </div>
              <div>
                <Image
                  className="avatar-for-store-slide"
                  src={avatar_forstore}
                  width={290}
                  height={290}
                  alt="paddles"
                />
              </div>
              <div className="buy-avatar">
                <div>
                  <Image
                    className="avatars_chess"
                    src={avatars_chess}
                    width={290}
                    height={290}
                    alt="avatars"
                  />
                </div>
                <Link href={"/store"}>
                  <button className="buy-avatar-btn">Buy Avatar</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="latest-games">
            <div className="header">
              <h3>Latest games</h3>
              <Link className="see-all" href={"/latest-games"}>
                <h3>See all</h3>
              </Link>
            </div>
            <div className="latests">
              {player_data.matches.map((e) => {
                return e.todaysMatches.map((match) => {
                  if (flag === 3) return;
                  flag++;

                  return (
                    <div className="line" key={match.hour}>
                      <div className="player">
                        {player_data.username} <span>{match.mygoals}</span>
                      </div>
                      <div className="gamestatus">
                        <div
                          className={match.result === "WIN" ? "win" : "lose"}
                        >
                          {match.result}
                        </div>
                      </div>
                      <div className="opponent">
                        <span>{match.opponentgoals}</span>
                        {match.opponent}
                      </div>
                    </div>
                  );
                });
              })}
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
