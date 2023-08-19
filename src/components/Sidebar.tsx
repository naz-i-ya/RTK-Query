import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { AiFillPieChart } from "react-icons/ai";
import CreateContact from "../feature/Contact";
import { Link } from "react-router-dom";
import ChartPage from "../pages/ChartPage";

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string>("contact");
;

  const handleActive = (active: string) => {
    setActiveItem(active);
  };

  return (
    <div
      className={`bg-dark-purple h-screen p-5 pt-8 ${
        open ? "w-72" : "w-20"
      } duration-300 relative`}
    >
      <BsArrowLeftShort
        className={`bg-white text-dark-purple text-3xl rounded-full -right-3 top-9 absolute border border-dark-purple cursor-pointer ${
          open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />

      <ul className="pt-2 mt-[4rem]">
        <Link to="/">
          <li
            className={`text-gray-300 text-sm flex items-center p-2 hover:bg-light-white rounded-md mt-2 gap-x-4 ${
              activeItem === "contact" ? "bg-light-white" : ""
            }`}
            onClick={() => handleActive("contact")}
          >
            <span className="text-2xl block float-left">
              <FaUserAlt />
            </span>
            <span
              className={` font-medium text-xl flex-1 ${!open && "hidden"}`}
            >
              <h1>Contact</h1>
            </span>
          </li>
        </Link>
        <Link to="/chart">
          <li
            className={`text-gray-300 text-sm flex items-center p-2 hover:bg-light-white rounded-md mt-2 gap-x-4 ${
              activeItem === "chart" ? "bg-light-white" : ""
            }`}
            onClick={() => handleActive("chart")}
          >
            <span className="text-2xl block float-left">
              <AiFillPieChart />
            </span>
            <span
              className={` font-medium text-xl flex-1 ${!open && "hidden"}`}
            >
              <h1>Chart</h1>
            </span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
