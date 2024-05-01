import React from "react";
import { motion } from "framer-motion";
function Servicecard(props) {
  return (
    <div>
      <motion.div
        
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        animate={{ x: 0 }}
      >
        <div class="max-w-sm rounded-xl my-4 overflow-hidden shadow-lg">
          <img
            class="w-full  overflow-hidden"
            src={props.img}
            alt="Sunset in the mountains"
            loading="lazy"
          />
          <div class="px-6 py-4 overflow-hidden">
            <div class="font-bold text-black text-xl mb-2">{props.title}</div>
            <p class=" text-justify	 text-gray-700 text-base ">{props.desc}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Servicecard;
