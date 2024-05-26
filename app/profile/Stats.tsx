"use client";

import React, { useEffect, useState } from "react";
import "./Stats.css";
import playerData from "../data/player-info.json";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts/core";

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
      if (statsSwitch.state === "win") return parseInt(stat.win);
      //  {
      //     [statsSwitch.state]:
      //     name: `${month}/${year.slice(-2)}`,
      //   };
      if (statsSwitch.state === "lose") return parseInt(stat.lose);
      // {
      //     [statsSwitch.state]:
      //     // name: `${month}/${year.slice(-2)}`,
      //   };
      if (statsSwitch.state === "w/l") {
        const wl =
          (parseInt(stat.win) / (parseInt(stat.win) + parseInt(stat.lose))) *
          100;
        return wl.toFixed(2);
        // [statsSwitch.state]:
        // name: `${month}/${year.slice(-2)}`,
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

  console.log("data>>>> ", chartData);

  const option = {
    title: {
      text: `Your ${statsSwitch.state} over the week`,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#27272b",
        },
        lineStyle: {
          color: "#ff0000",
        },
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: statsSwitch.state,
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: true,
        itemStyle: {
          color: statsSwitch.color,
          borderColor: statsSwitch.color,
        },
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: statsSwitch.color,
            },
            {
              offset: 1,
              color: "rgba(0, 0, 0,0.7)",
            },
          ]),
        },
        data: chartData,
      },
    ],
  };

  return (
    <div className="stats_container">
      <ReactECharts className="reactEcharts" option={option} />
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
