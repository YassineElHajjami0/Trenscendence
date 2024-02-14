"use client"
import React, { useState } from "react";
import playerData from "../data/player-info.json";
import "../globals.css";

const LatestGames = () => {
    const player_data: any = playerData["my-data"];
    const matches = player_data.matches; 
    return (
    <div className="latest-games">
        <div className="header">
          <h3>Latest games</h3>
        </div>
        <div className="latests">
      {Object.keys(matches).map((date) =>
        Object.keys(matches[date]).map((time) => {
          return (
            <div className="line" key={time}>
              <div className="player">
                {player_data.fullname}{" "}
                <span>{matches[date][time].mygoals}</span>
              </div>
              <div className="gamestatus">
                <div> {date} </div>
                <div
                  className={
                    matches[date][time].result === "WIN" ? "win" : "lose"
                  }
                >
                  {matches[date][time].result}
                </div>
              </div>
              <div className="opponent">
                <span>{matches[date][time].opponentgoals}</span>
                {matches[date][time].opponent}
              </div>
            </div>
          );
        })
      )}
    </div>
    </div>
  );
};

export default LatestGames;
