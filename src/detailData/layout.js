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

export default function Device({ children }) {
  const { store, actions } = useContext(AppContext);
  const [active, setActive] = useState(false);
  const [animationParent] = useAutoAnimate({});
  const [value, setValue] = useState(1);

  const showMore = () => {
    setActive(true);
  };

  const showLess = () => {
    setActive(false);
  };

  useEffect(() => {
    showMore();
  }, []);

  return (
    <div className="flex">
      {active && (
        <BsArrowDownSquareFill
          onClick={showLess}
          className="absolute text-2xl text-gray-500 z-10 cursor-pointer right-5 -top-6 group-hover:block "
        />
      )}
      {!active && (
        <BsArrowUpSquareFill
          onClick={showMore}
          className="absolute text-2xl text-gray-500 z-10 cursor-pointer right-5 -top-5"
        />
      )}

      <div className="flex max-h-96" ref={animationParent}>
        {active && (
          <div>
            <>
              <TabList
                defaultValue={value}
                handleSelect={(value) => setValue(value)}
                marginTop="mt-6"
              >
                <Tab value={1} text="Peer performance" icon={BsClipboardData} />
                <Tab
                  value={2}
                  text="Individual performance"
                  icon={CiTempHigh}
                />
              </TabList>
            </>
            {value == 1 && children}
            {value == 2 && "Test"}
          </div>
        )}
      </div>
    </div>
  );
}
