"use client";
import React, { useState, useEffect } from "react";
import playerData from "../data/player-info.json";
import "../globals.css";
import "./latest-games.css";

const LatestGames = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const player_data: any = playerData;

  return (
    <>
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
        <div className="latest-games l">
          <div className="header">
            <h3>Latest games</h3>
          </div>
          <div className="latests">
            {player_data.matches.map((e: any) => {
              return e.todaysMatches.map((match: any) => {
                return (
                  <div className="line" key={e.hour}>
                    <div className="player">
                      {player_data.username} <span>{match.mygoals}</span>
                    </div>
                    <div className="gamestatus">
                      <div className={match.result === "WIN" ? "win" : "lose"}>
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
      )}
    </>
  );
};

export default LatestGames;
