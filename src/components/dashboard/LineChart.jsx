import React, { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts";

const barChartData = [
  {
    data: [120, 180, 100, 220, 160],
    stack: "Frontend",
    label: "React",
    color: "#EE8484",
  },
  {
    data: [90, 150, 80, 200, 130],
    stack: "Frontend",
    label: "Vue",
    color: "#98D89E",
  },
  {
    data: [150, 100, 120, 180, 110],
    stack: "Backend",
    label: "Node.js",
    color: "#F6DC7D",
  },
  {
    data: [100, 120, 90, 170, 150],
    stack: "Backend",
    label: "Django",
    color: "#EE8484",
  },
  {
    data: [80, 140, 70, 190, 140],
    stack: "Database",
    label: "MySQL",
    color: "#6972C3",
  },
];

const BarChartComponent = () => {

  return (
    <div className="bar-chart-box space-y-6 flex flex-col w-full md:px-6 py-0 pt-4 sm:py-7">
      {/* Heading */}
      <div className="bar-chart-heading flex flex-col sm:flex-row justify-between px-6">
        <div className="text-lg sm:text-xl md:text-2xl font-bold">
          IT Skills Demand
        </div>
        <div className="text-thin text-xs self-center text-gray-400">
          Quarterly Demand
        </div>
      </div>

      {/* Chart and Legends */}
      <div className="flex flex-col sm:flex-row justify-between">
        {/* Bar chart */}
        <div className="bar-chart w-[36%]">
          <BarChart
            series={barChartData.map((item) => ({ ...item, data: item.data }))}
            width={600}
            height={400}
            borderRadius={50}
            options={{
              colors: barChartData.map((item) => item.color),
            }}
          />
        </div>
        {/* Legends */}
        <div className="md:flex flex-col items-start space-y-2 w-full sm:w-auto hidden">
          {barChartData.map((item, index) => {
            return (
              <div className="flex items-start space-x-2 flex-row" key={index}>
                <div
                  className="rounded-full mt-1 w-4 h-4"
                  style={{ backgroundColor: item.color }}
                ></div>
                <div>
                  <div className="text-xs sm:text-lg font-extrabold">
                    {item.label}
                  </div>
                  <div className="text-sm font-thin text-gray-400">
                    {item.stack}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BarChartComponent;
