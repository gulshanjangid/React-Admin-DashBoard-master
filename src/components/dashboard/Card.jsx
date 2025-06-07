import React, { useContext } from "react";
import { Context } from "../../context/contextApi";

export default function Card({ bg, text, value, icon }) {
  const { themeMode } = useContext(Context);

  function addCommasToNumber(number) {
    const numberString = Math.floor(number).toString();

    const lastThree = numberString.slice(-3);
    const otherNumbers = numberString.slice(0, -3);

    const formattedNumber =
      otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
      (otherNumbers ? "," : "") +
      lastThree;

    return formattedNumber;
  }
  return (
    <div
      className={`relative bg-[${bg}] rounded-2xl flex flex-col justify-end space-y-1 px-7 h-32 py-5 ${
        themeMode === "dark" ? "shadow-lg" : ""
      }`}
      style={themeMode === "dark" ? { boxShadow: `1px 4px 8px ${bg}` } : {}}
    >
      <div className="absolute top-4 right-5">
        <img className="w-7" src={icon} />
      </div>
      <div className="text-md font-medium">Total {text}</div>
      <div className="text-3xl font-bold">
        {text === "Revenues" ? "₹ " : ""}
        {addCommasToNumber(value)}
      </div>
    </div>
  );
}
