import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaCalendarAlt, FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Context } from "../context/contextApi";
import { MdSpaceDashboard, MdViewKanban } from "react-icons/md";

export default function Sidebar({ setShowSidebar }) {
  const { themeMode } = useContext(Context);

  return (
    <div className="bg-black font-[Montserrat] text-white dark:text-black dark:bg-[#F5F5F5] py-12 rounded-2xl w-full h-full flex flex-col justify-between items-center relative">
      {/* Close Icon on Sidebar (only on small screens) */}
      <div
        onClick={() => setShowSidebar(false)}
        className="close-icon text-xl sm:hidden absolute top-4 right-4"
      >
        <AiOutlineClose />
      </div>

      <div className="top">
        <div className="font-bold text-4xl">
          <Link to={"/"}>
            <strong className="text-[#5CE1E6]">Dash</strong>Go.
          </Link>
        </div>

        <div className="items [&>*]:cursor-pointer font-light my-14 flex flex-col space-y-8">
          <div className="flex flex-row space-x-5 items-center ">
            <MdSpaceDashboard
              size={21}
              color={themeMode === "dark" ? "black" : "white"}
            />
            <Link to={"/"} className="text-xl">
              Dashboard
            </Link>
          </div>
          <div className="flex flex-row space-x-5 items-center ">
            <FaCalendarAlt
              size={21}
              color={themeMode === "dark" ? "black" : "white"}
            />
            <Link to={"/calendar"} className="text-xl">
              Calender
            </Link>
          </div>
          <div className="flex flex-row space-x-5 items-center ">
            <MdViewKanban
              size={21}
              color={themeMode === "dark" ? "black" : "white"}
            />
            <Link to={"/projects"} className="text-xl">
              Kanban
            </Link>
          </div>
          <div className="flex flex-row space-x-5 items-center ">
            <FaRegUserCircle
              size={21}
              color={themeMode === "dark" ? "black" : "white"}
            />
            <Link to={"/users"} className="text-xl">
              Users
            </Link>
          </div>
          {/* <div className="flex flex-row space-x-5 items-center ">
                        <img src={settings} alt="" srcset="" />
                        <div className='text-xl'>Settings</div>
                    </div> */}
        </div>
      </div>

      <div className="contact text-start w-1/2 flex flex-col  text-gray-400 ">
        <a href="https://adityashukla-portfolio.netlify.app/#contact">
          <div>Help</div>
        </a>
        <a href="https://adityashukla-portfolio.netlify.app/#contact">
          <div>Contact us</div>
        </a>
      </div>
    </div>
  );
}
