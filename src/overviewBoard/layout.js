import { useState, useEffect, useContext } from "react";
import {
  BsPlus,
  BsSearch,
  BsEyeFill,
  BsBookmarkFill,
  BsFillArrowLeftSquareFill,
  BsPeopleFill,
  BsTerminalFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { AppContext } from "../AppContext";

import { motion, useAnimation } from "framer-motion";

export default function Device({ children }) {
  const { store, actions } = useContext(AppContext);
  const [active, setActive] = useState(false);
  const controls = useAnimation();

  const showMore = () => {
    controls.start({
      width: "250px",
      marginRight: "55px",
      transition: { duration: 0.001 },
    });

    setActive(true);
  };

  const showLess = () => {
    controls.start({
      width: "0px",
      marginRight: "0px",
      transition: { duration: 0.001 },
    });
    setActive(false);
  };

  useEffect(() => {
    showMore();
  }, [store.activeMenu]);

  useEffect(() => {
    showLess();
  }, []);

  return (
    <div className="flex w-auto border-r border-l">
      <div className="flex shadow-md">
        <motion.div
          animate={controls}
          className="max-w-[250px] animate duration-300 relative flex flex-col py-10 min-h-screen group"
        >
          {active && (
            <BsFillArrowRightSquareFill
              onClick={showLess}
              className="absolute hidden text-2xl text-gray-500 z-10 cursor-pointer -left-4 bottom-10 group-hover:block "
            />
          )}
          {!active && (
            <BsFillArrowLeftSquareFill
              onClick={showMore}
              className="absolute text-2xl text-gray-500 z-10 cursor-pointer -left-4 bottom-10"
            />
          )}

          <div className="grow">{children}</div>
        </motion.div>
      </div>
    </div>
  );
}
