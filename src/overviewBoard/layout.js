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

import { AiFillFire, AiFillMessage } from "react-icons/ai";
import { IoMdArrowRoundUp } from "react-icons/io";
import { MdNightlightRound, MdFeedback } from "react-icons/md";
import { FaCog } from "react-icons/fa";
import { AppContext } from "../AppContext";

import { motion, useAnimation } from "framer-motion";

const data = [
  {
    name: "Discover",
    items: [
      {
        title: "Popular",
        icon: AiFillFire,
      },
      {
        title: "Most Upvoted",
        icon: IoMdArrowRoundUp,
      },
      {
        title: "Best Discussions",
        icon: AiFillMessage,
      },
      {
        title: "Search",
        icon: BsSearch,
      },
    ],
  },
  {
    name: "Manage",
    items: [
      {
        title: "Bookmarks",
        icon: BsBookmarkFill,
      },
      {
        title: "Reading history",
        icon: BsEyeFill,
      },
      {
        title: "Focus Mode",
        icon: MdNightlightRound,
      },
      {
        title: "Customize",
        icon: FaCog,
      },
    ],
  },
];

export default function Device({ children }) {
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
  }, [store.activeMenu]);

  useEffect(() => {
    showLess();
  }, []);

  return (
    <div className="flex w-auto mr-14 border-r border-l">
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
