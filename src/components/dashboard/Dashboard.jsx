import React from "react";
import Card from "./Card";
import Chart from "./Chart";
import { PieChart } from "./PieChart";
import Schedules from "./Schedules";
import { Context } from "../../context/contextApi";
import revenue from "../../images/Vector.svg";
import likes from "../../images/Vector (1).svg";
import users from "../../images/Vector (2).svg";
import trans from "../../images/total_transactions_icon.svg";
import { useContext } from "react";
import LineChart from "./LineChart";

export default function Dashboard() {
  const { themeMode } = useContext(Context);

  const getBgAndId = (card) => {
    switch (card.title) {
      case "Revenues":
        return { bg: "#DDEFE0", icon: revenue };
        break;

      case "Transactions":
        return { bg: "#F4ECDD", icon: trans };
        break;

      case "Likes":
        return { bg: "#EFDADA", icon: likes };
        break;

      case "Users":
        return { bg: "#DEE0EF", icon: users };
        break;

      default:
        return { bg: "#DEE0EF", icon: users };
        break;
    }
  };
  const { user, cardData } = useContext(Context);

  return (
    <>
      {/* Upper four Cards */}
      <div className="first grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 h-1/5 gap-5">
        {cardData &&
          cardData.map((card, i) => {
            return (
              <Card
                key={i}
                bg={getBgAndId(card).bg}
                icon={getBgAndId(card).icon}
                text={card.title}
                value={card.value}
              />
            );
          })}
      </div>

      {/* Line Chart */}
      <div className="chart">
        <Chart />
      </div>

      {/* Lower Pie Chart & Schedules */}
      <div className="bottom grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          className={`piechart bg-white rounded-2xl dark:bg-[#313131] dark:text-white ${
            themeMode === "dark" ? "shadow-lg" : ""
          }`}
          style={
            themeMode === "dark"
              ? { boxShadow: `2px 4px 10px rgb(67 67 67)` }
              : {}
          }
        >
          <PieChart />
        </div>

        <div
          className={`schedules bg-white rounded-2xl dark:bg-[#313131] dark:text-white ${
            themeMode === "dark" ? "shadow-lg" : ""
          }`}
          style={
            themeMode === "dark"
              ? { boxShadow: `2px 4px 10px rgb(67 67 67)` }
              : {}
          }
        >
          <Schedules />
        </div>
      </div>
      <div className="bottom grid grid-cols-1 lg:grid-cols-1 gap-8">
        <div
          className={`piechart bg-white rounded-2xl pb-3 dark:bg-[#313131] dark:text-white ${
            themeMode === "dark" ? "shadow-lg" : ""
          }`}
          style={
            themeMode === "dark"
              ? { boxShadow: `2px 4px 10px rgb(67 67 67)` }
              : {}
          }
        >
          <LineChart />
        </div>
      </div>
    </>
  );
}
