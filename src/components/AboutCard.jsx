import React from "react";
import { motion } from "framer-motion";

function Card({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      animate={{ y: 0 }}
      className="my-4"
    >
      <div className="bg-white mx-7 md:w-[30rem] rounded-lg shadow-lg p-4">{children}</div>
    </motion.div>
  );
}

export default Card;
