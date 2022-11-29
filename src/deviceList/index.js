import { useState, useEffect, useContext } from "react";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { DeviceList } from "./deviceList";
import { AppContext } from "../AppContext";

import { motion, useAnimation } from "framer-motion";

export default function Device() {
  const { store, actions } = useContext(AppContext);
  const [active, setActive] = useState(false);
  const controls = useAnimation();
  const controlText = useAnimation();
  const controlTitleText = useAnimation();

  const showMore = () => {
    controls.start({
      width: "250px",
      transition: { duration: 0.001 },
    });
    controlText.start({
      opacity: 1,
      display: "block",
      transition: { delay: 0.3 },
    });
    controlTitleText.start({
      opacity: 1,
      transition: { delay: 0.3 },
    });

    setActive(true);
  };

  const showLess = () => {
    controls.start({
      width: "0px",
      transition: { duration: 0.001 },
    });

    controlText.start({
      opacity: 0,
      display: "none",
    });

    controlTitleText.start({
      opacity: 0,
    });

    setActive(false);
  };

  useEffect(() => {
    showMore();
  }, []);

  return (
    <div className="flex w-full">
      <div className="flex w-auto border shadow-lg ">
        <motion.div
          animate={controls}
          className="max-w-[250px]  animate duration-300 relative flex flex-col min-h-screen group"
        >
          {active && (
            <BsFillArrowLeftSquareFill
              onClick={showLess}
              className="absolute hidden text-2xl text-gray-500 z-10 cursor-pointer -right-4 top-10 group-hover:block "
            />
          )}
          {!active && (
            <BsFillArrowRightSquareFill
              onClick={showMore}
              className="absolute text-2xl text-gray-500 z-10 cursor-pointer -right-4 top-10"
            />
          )}

          <div className="flex flex-col space-y-5">
            <DeviceList />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
