import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./device";

export const DeviceList = () => (
  <div className="mt-0">
    <div className="m-2">
      <input
        type="text"
        placeholder="Search Deive"
        className="input input-bordered input-primary w-full max-w-xs"
      />
    </div>
    <hr />
    <motion.ul
      initial={{ opacity: 0.7, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {itemIds.map((i) => (
        <MenuItem i={i} key={i} />
      ))}
    </motion.ul>
  </div>
);

const itemIds = [0, 1, 2, 3, 4];
