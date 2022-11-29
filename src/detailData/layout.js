import { useState, useEffect, useContext } from "react";
import {
  BsArrowUpSquareFill,
  BsArrowDownSquareFill,
  BsClipboardData,
} from "react-icons/bs";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { AppContext } from "../AppContext";
import { Card, Text, Metric, TabList, Tab } from "@tremor/react";
import { CiTempHigh } from "react-icons/ci";
import { motion, useAnimation } from "framer-motion";

export default function Device({ children }) {
  const { store, actions } = useContext(AppContext);
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(1);
  const controls = useAnimation();

  const showMore = () => {
    controls.start({
      height: "250px",
      transition: { duration: 0.001 },
    });

    setActive(true);
  };

  const showLess = () => {
    controls.start({
      height: "0px",
      transition: { duration: 0.001 },
    });

    setActive(false);
  };

  useEffect(() => {
    showMore();
  }, []);

  return (
    <motion.div
      animate={controls}
      className="animate duration-300 absolutez flex flex-col group"
    >
      {active && (
        <BsArrowDownSquareFill
          onClick={showLess}
          className="absolute text-2xl text-gray-500 z-10 cursor-pointer right-5 -top-6 group-hover:block "
        />
      )}
      {!active && (
        <BsArrowUpSquareFill
          onClick={showMore}
          className="absolute text-2xl text-gray-500 z-10 cursor-pointer right-16 -top-5"
        />
      )}

      <div className="flex">
        {active && (
          <div>
            <>
              <TabList
                defaultValue={value}
                handleSelect={(value) => setValue(value)}
                marginTop="mt-6"
              >
                <Tab value={1} text="Data" icon={BsClipboardData} />
                <Tab value={2} text="Graph" icon={CiTempHigh} />
                <Tab value={3} text="Data" icon={CiTempHigh} />
              </TabList>
            </>
            {value == 1 && children}
            {value == 2 && "Test"}
          </div>
        )}
      </div>
    </motion.div>
  );
}
