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
  const [data, setData] = useState<any[]>();

  const userTok = useRecoilValue(userToken);
  const userId = useRecoilValue(loggedUser);
  const fetchedData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/match-history?id=${userId}`,
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
  function groupByCreatedAt() {
    if (!data || !data.length) return [];

    const groupedData = data.reduce((acc, item) => {
      const date = item.createdAt.split("T")[0];
      if (!acc[date]) {
        acc[date] = { date, win: 0, lose: 0 };
      }
      if (item.result === "WIN") {
        acc[date].win++;
      } else if (item.result === "LOSE") {
        acc[date].lose++;
      }
      acc[date].w_l = acc[date].win / (acc[date].win + acc[date].lose);
      return acc;
    }, {});

    return Object.values(groupedData);
  }

  const get3a = () => {
    const resulttt = groupByCreatedAt();

    return resulttt.map((e) => {
      if (statsSwitch.state === "win") return e.win;
      if (statsSwitch.state === "lose") return e.lose;
      if (statsSwitch.state === "w/l") return e.w_l;
    });
  };
  const get3a2 = () => {
    const resulttt = groupByCreatedAt();

    return resulttt.map((e) => {
      return e.date;
    });
  };
  console.log("3a2", get3a2());

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
  console.log("dataaaa>", chartData);

  useEffect(() => {
    setChartData(get3a());
  }, [statsSwitch]);

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
        data: get3a2(),
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
