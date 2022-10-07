import React from "react";
import { motion } from "framer-motion";

const AnimatedRoute = ({ children }) => {
  return (
    <motion.div initial={{ x: 200 }} animate={{ x: 0 }}>
      {children}
    </motion.div>
  );
};

export default AnimatedRoute;
