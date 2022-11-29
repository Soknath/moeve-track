// @src/components/Sidebar.jsx
import React, { useState, useContext } from "react";
import { IoLogoEdge, IoBookmark } from "react-icons/io5";
import {
  BsImageFill,
  BsFillHandbagFill,
  BsFillStarFill,
  BsHouseFill,
} from "react-icons/bs";
import classNames from "classnames";
import { AppContext } from "../AppContext";

const Sidebar = ({ navigationData }) => {
  const [currentRoute, setCurrentRoute] = useState("Home");
  const { store, actions } = useContext(AppContext);

  const renderIcon = (element) => {
    switch (element) {
      case "Home":
        return (
          <button
            className={`p-2 transition-colors ${
              currentRoute === element ? "bg-indigo-800 text-white" : "bg-white"
            } rounded-lg shadow-md hover:bg-indigo-800 hover:text-white focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-offset-white focus:ring-offset-2`}
          >
            <BsHouseFill />
          </button>
        );
      case "Gallery":
        return (
          <button
            className={`p-2 transition-colors ${
              currentRoute === element ? "bg-indigo-800 text-white" : "bg-white"
            } rounded-lg shadow-md hover:bg-indigo-800 hover:text-white focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-offset-white focus:ring-offset-2`}
          >
            <BsImageFill />
          </button>
        );
      case "Store":
        return (
          <button
            className={`p-2 transition-colors ${
              currentRoute === element ? "bg-indigo-800 text-white" : "bg-white"
            } rounded-lg shadow-md hover:bg-indigo-800 hover:text-white focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-offset-white focus:ring-offset-2`}
          >
            <BsFillHandbagFill />
          </button>
        );
      case "Favorites":
        return (
          <button
            className={`p-2 transition-colors ${
              currentRoute === element ? "bg-indigo-800 text-white" : "bg-white"
            } rounded-lg shadow-md hover:bg-indigo-800 hover:text-white focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-offset-white focus:ring-offset-2`}
          >
            <BsFillStarFill />
          </button>
        );
      case "Saved":
        return (
          <button
            className={`p-2 transition-colors ${
              currentRoute === element ? "bg-indigo-800 text-white" : "bg-white"
            } rounded-lg shadow-md hover:bg-indigo-800 hover:text-white focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-offset-white focus:ring-offset-2`}
          >
            <IoBookmark />
          </button>
        );
    }
  };

  return (
    <nav
      className={
        "fixed right-0 top-0 bottom-0 z-50 w-14 bg-white flex flex-col h-screen justify-between items-center py-3 rounded-l-3xl border"
      }
    >
      <span className={"text-4xl text-blue-800"}>
        <IoLogoEdge />
      </span>
      <ul className={"flex flex-col items-center w-full"}>
        {navigationData.map((element, index) => (
          <li
            key={index}
            className={classNames([
              "text-gray-400 hover:text-gray-800 text-xl py-2 cursor-pointer",
              currentRoute === element && "text-blue-600 hover:text-blue-700",
              "group",
            ])}
            onClick={() => {
              actions.setActiveMenu(element);
              setCurrentRoute(element);
            }}
          >
            {renderIcon(element)}
            <span
              className={classNames([
                "absolute w-auto min-w-max left-16 text-base font-medium hidden",
                "group-hover:inline",
              ])}
            >
              {element}
            </span>
          </li>
        ))}
      </ul>
      <div className={"flex flex-col justify-between items-center"}></div>
    </nav>
  );
};

export default Sidebar;
