"use client";

import React, { useEffect, useState } from "react";
import "./Stats.css";
import playerData from "../data/player-info.json";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts/core";
import { useRecoilValue } from "recoil";
import { userToken } from "../Atoms/userToken";
import { loggedUser } from "../Atoms/logged";

export default function Stats() {
  const [data, setData] = useState<any[]>([]);

  const userTok = useRecoilValue(userToken);
  const userId = useRecoilValue(loggedUser);
  const fetchedData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/match-history/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${userTok}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setData(data);
    } catch (err) {
      console.error(">>>>>>", err);
    }
  };
  useEffect(() => {
    fetchedData();
  }, []);

  const [statsSwitch, setStatsSwitch] = useState({
    state: "win",
    color: "#1ce14e",
  });

  
  const [chartData, setChartData] = useState();
  
  const switchStats = (e: any) => {
    const buttonText = e.target.textContent;
    
    if (buttonText === "win")
      setStatsSwitch({ state: "win", color: "#1ce14e" });
    
    if (buttonText === "lose")
      setStatsSwitch({ state: "lose", color: "#ff3355" });
    
    if (buttonText === "w/l")
      setStatsSwitch({ state: "w/l", color: "#ff7f00" });
  };
  const getStats = () => {
    return data.map((e) => {
      if (statsSwitch.state === "win") return e.win;
      if (statsSwitch.state === "lose") return e.lose;
      if (statsSwitch.state === "w/l") return e.w_l;
    });
  };

  useEffect(() => {
    setChartData(getStats());
  }, [statsSwitch,data]);

  const option = {
    title: {
      text: `Your ${
        statsSwitch.state === "w/l" ? "win-loss ratio" : statsSwitch.state
      } over the week`,
      textStyle: {
        color: statsSwitch.color,
      },
    },
    tooltip: {
      backgroundColor: "#27272b",
      borderWidth: 1,
      trigger: "axis",
      axisPointer: {
        type: "line",
        label: {
          backgroundColor: "#27272b",
        },
        lineStyle: {
          color: "transparent",
        },
      },
    },
    grid: {
      left: "0%",
      right: "2%",
      bottom: "0%",

      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: data.map((e) => {
          return e.date;
        }),
      },
    ],
    yAxis: [
      {
        splitLine: {
          show: false,
        },
        type: "value",
        // axisLine: {
        //   lineStyle: {
        //     color: "transparent",
        //   },
        // },
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
              color: "#27272b",
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
