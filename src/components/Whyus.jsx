import React from "react";
import Cards from "./Card";
import {card} from "../constants";
import { motion } from "framer-motion";
function Whyus() {

  
  return (
    <>
      <div>
        <h1 className="font-semibold  text-4xl text-black overflow-hidden">
          Why Us?
        </h1>
        <motion.div
          className="min-h-[50vh]"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          animate={{ x: 0 }}
       
        >

       
        <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2">
          {card.map((item) => {
            return <Cards image={item.img}
            title={item.title}
            desc={item.desc}
            
            />;
          })}
        </div>
        </motion.div>
      </div>
    </>
  );
}

export default Whyus;
