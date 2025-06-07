import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import useTheme, { Context } from "../context/contextApi";
import { useContext } from "react";
import avatar from "../images/avatar.png";
import { Link } from "react-router-dom";

export default function Navbar({ showSidebar, setShowSidebar }) {
  const { user } = useContext(Context);

  const { themeMode, lightTheme, darkTheme } = useTheme();

  // actual change in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  const handleTheme = () => {
    if (themeMode === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <nav className="flex flex-row justify-between">
      <strong className="text-2xl text-black dark:text-white">Dashboard</strong>

      <div className="info hidden sm:flex space-x-10">
        <div className="input relative">
          <input
            placeholder="Search..."
            className="rounded-xl px-3 py-2"
            type="text"
          />
          <div className="icon absolute right-3 top-3">
            <BiSearch />
          </div>
        </div>
        <div className="flex">
          <button onClick={handleTheme}>
            {themeMode === "dark" ? (
              <MdOutlineLightMode size={24} color="white" />
            ) : (
              <MdDarkMode size={24} />
            )}
          </button>
        </div>
        <div className="flex items-center">
          <FaRegBell
            size={21}
            color={themeMode === "dark" ? "white" : "black"}
          />
        </div>
        <Link to="/form">
          <img
            className="w-9 h-9 rounded-full"
            src={user?.img || avatar}
            alt="profile"
          />
        </Link>
      </div>

      {/* Hamburger only shows on small screen */}
      <div
        onClick={() => {
          setShowSidebar(!showSidebar);
        }}
        className="icon sm:hidden text-2xl self-center cursor-pointer"
      >
        <FiMenu />
      </div>
    </nav>
  );
}
