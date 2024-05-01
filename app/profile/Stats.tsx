"use client";

import React, { useEffect, useState } from "react";
import "./Stats.css";
import playerData from "../data/player-info.json";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BsTransparency } from "react-icons/bs";

export default function Stats() {
  const player_data: any = playerData;
  const [statsSwitch, setStatsSwitch] = useState({
    state: "win",
    color: "#1ce14e",
  });
  const [chartData, setChartData] = useState(() =>
    transformPlayerData(player_data)
  );

  function transformPlayerData(player_data: any) {
    const dataArray = player_data.stats.map((stat: any) => {
      const [month, year] = stat.date.split("/");
      if (statsSwitch.state === "win")
        return {
          [statsSwitch.state]: parseInt(stat.win),
          name: `${month}/${year.slice(-2)}`,
        };
      if (statsSwitch.state === "lose")
        return {
          [statsSwitch.state]: parseInt(stat.lose),
          name: `${month}/${year.slice(-2)}`,
        };
      if (statsSwitch.state === "w/l") {
        const wl =
          (parseInt(stat.win) / (parseInt(stat.win) + parseInt(stat.lose))) *
          100;
        return {
          [statsSwitch.state]: wl.toFixed(2),
          name: `${month}/${year.slice(-2)}`,
        };
      }
    });
    return dataArray;
  }

  const switchStats = (e: any) => {
    const buttonText = e.target.textContent;

    if (buttonText === "win")
      setStatsSwitch({ state: "win", color: "#1ce14e" });

    if (buttonText === "lose")
      setStatsSwitch({ state: "lose", color: "#ff3355" });

    if (buttonText === "w/l")
      setStatsSwitch({ state: "w/l", color: "#ff7f00" });
  };

  useEffect(() => {
    setChartData(transformPlayerData(player_data));
  }, [statsSwitch]);

  const axisLineProps = { stroke: "white", opacity: "0.6" };
  const tickProps = { fill: "white", opacity: "0.6" };

  return (
    <div className="stats_container">
      <ResponsiveContainer className="chart" width="100%" height="90%">
        <AreaChart data={chartData}>
          <XAxis
            dataKey="name"
            axisLine={{ stroke: "white", opacity: "0.6"}}
            tick={{ fill: "white", opacity: "0.6"}}
          />
          <YAxis
            domain={statsSwitch.state === "w/l" ? [0, 100] : undefined}
            axisLine={{ stroke: "white", opacity: "0"}}
            tick={{ fill: "white", opacity: "0" }}
          />
          <Tooltip />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor={statsSwitch.color}
                stopOpacity={0.8}
              />
              <stop
                offset="100%"
                stopColor={statsSwitch.color}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey={statsSwitch.state}
            stroke={statsSwitch.color}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="stat_btn_switch">
        <button
          className={`${statsSwitch.state === "win" && "btn_win"}`}
          onClick={switchStats}
        >
          win
        </button>
        <button
          className={`${statsSwitch.state === "lose" && "btn_lose"}`}
          onClick={switchStats}
        >
          lose
        </button>
        <button
          className={`${statsSwitch.state === "w/l" && "btn_wl"}`}
          onClick={switchStats}
        >
          w/l
        </button>
      </div>
    </div>
  );
}
