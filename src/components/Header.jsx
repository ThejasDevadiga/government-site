import React, { useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { logo } from "../assets";
import About from "./About";
function Header() {
  return (
    <>
      <div className="h-screen mt-12 md:-mt-12 flex flex-col-reverse md:flex-row items-center px-3 md:px-32 justify-center">
        <div className="m-5 flex flex-col justify-center items-center">
          <div className="flex justify-center items-center ">
            <img
              src={logo}
              alt=""
              className="h-48    drop-shadow-2xl overflow-hidden p-4 md:p-12 lg:p-0 z-18 lg:-z-0 absolute lg:static lg:rounded-3xl md:rounded-[6rem] rounded-[3rem] brightness-100 object-cover"
            />
          </div>
          <div className="flex justify-center mt-24 items-center flex-col">
            <div className="overflow-hidden text-center my-3 pt-3 pb-7">
              <TypeAnimation
                className="font-bold md:text-7xl text-2xl text-yellow"
                sequence={["ಪರವಾನಗಿ ಭೂಮಾಪಕರ ಕ್ಷೇಮಾಭಿವೃದ್ಧಿ ಸಂಘ", 500]}
                repeat={Infinity}
                cursor={false}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              animate={{ y: 0 }}
            >
              <h1 className="text-green font-semibold md:text-2xl text-2xl">
                ನಮ್ಮ ಉದ್ದೇಶ
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              animate={{ y: 0 }}
            ></motion.div>
            <div className="text-center">
              <h1 className="text-lightgreen font-semibold md:text-3xl text-2xl">
                ಪರವಾನಗಿ ಭೂಮಾಪಕರ ಹಿತಾಸಕ್ತಿಗಾಗಿ
              </h1>
            </div>
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              animate={{ y: 0 }}
            >
              <h1 className=" md:text-xl md:leading-8 lg:text-l text-black text-center  md:mx-24">
                ಅಖಂಡ ಕರ್ನಾಟಕದ ಪ.ಭೂ ಗಳಿಗೆ ಒಂದು ವ್ಯವಸ್ಥಿತ ಪ್ಲಾಟ್ ಫಾರ್ಮ್ ಕ್ರಿಯೇಟ್
                ಮಾಡುವುದು. ಪ್ರತೀ ವಾರಕ್ಕೊಮ್ಮೆ ಗೂಗಲ್ ಮೀಟ್ ಮುಖೇನ ಇಲಾಖಾ ಸಂಭಂಧಿತ ಹೊಸ
                ವಿಷಯಗಳ ಕಲಿಕೆ. ರಾಜ್ಯಮಟ್ಟದ ಪ.ಭೂ ಗಳನ್ನು ವ್ಯವಸ್ಥಿತ ವೇದಿಕೆಗೆ ತರಲು
                ಪ್ರಯತ್ನಿಸುವುದು. ರಾಜ್ಯಮಟ್ಟದಲ್ಲಿ ಪ.ಭೂ ಗಳಿಗೆ ವರ್ಷಕ್ಕೊಮ್ಮೆ
                ಸ್ಪೋರ್ಟ್ಸ್, ಕಲ್ಚರಲ್ ಆಕ್ಟಿವಿಟೀಸ್, ಪ್ರಶಸ್ತಿ ಪ್ರಧಾನ ಸಮಾರಂಭ ನಡೆಸಲು
                ಶ್ರಮಿಸಿವುದು. ವರ್ಷಕ್ಕೊಮ್ಮೆ ಪರವಾನಗಿ ಭೂಮಾಪಕರ ಮ್ಯಾಗಝಿನ್ ತರುವುದು.
                ಪರವಾನಗಿ ಭೂಮಾಪಕರ ಕೈಪಿಡಿ ತಯಾರಿಸುವುದು. ಪರವಾನಗಿ ಭೂಮಾಪಕರ ವಿಪತ್ತು ನಿಧಿ
                ಸ್ಥಾಪಿಸಿ ನೊಂದವರಿಗೆ ನೆರವಾಗಲು ಪ್ರಯತ್ನಿಸುವುದು.
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="px-3 md:px-20 lg:px-32">
        <About />
      </div>

    </>
  );
}

export default Header;
