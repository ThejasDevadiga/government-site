import React from "react";
import { motion } from "framer-motion";
import AboutCard from "./AboutCard";
import { bg } from "../assets";

function About() {
  return (
    <>
      <div className="min-h-screen  p-3 md:grid place-content-center md:px-20 lg:px-32 ">
        <img
          src={bg}
          alt=""
          className="absolute -z-10 top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] opacity-5"
        />
        <div className="text-center">
          <h1 className="text-3xl my-3  font-semibold text-green">
            ನಮ್ಮ ಬಗ್ಗೆ
          </h1>
          <p className=" text-center lg:text-xl md:text-2xl md:leading-8">
            ಪರವಾನಗಿ ಭೂಮಾಪಕರನ್ನು ಅಖಂಡವಾಗಿ ಒಗ್ಗೂಡಿಸಿ. ಪರವಾನಗಿ ಭೂಮಾಪಕರ ಸಮಸ್ಯೆಗಳಿಗೆ
            ಶಾಶ್ವತ ಪರಿಹಾರ ಕಲ್ಪಿಸಿಕೊಳ್ಳಲು ಸಮಾನ ಮನಸ್ಕ ಪರವಾನಗಿ ಭೂಮಾಪಕರಿಂದ
            ಸ್ಥಾಪಿತವಾದ ವೇದಿಕೆ ಇದು. ಇದನ್ನು ಯಶಸ್ವಿಗೊಳಿಸಲು ಎಲ್ಲಾ ಪರವಾನಗಿ ಭೂಮಾಪಕರು
            ಕಾರ್ಯಪ್ರವೃತ್ತರಾಗಬೇಕೆಂದು ಕೋರಿಕೊಳ್ಳುತ್ತೇವೆ.
          </p>
        </div>
        <div className="flex  flex-col md:flex-row items-center justify-center">
          <AboutCard>
            <div className="mt-2 text-center">
              <h1 className="text-3xl my-4  font-semibold text-green">
                ನಾವು ಏನು ಮಾಡುವುದಿಲ್ಲ
              </h1>
              <p className="text-center lg:text-xl md:text-2xl md:leading-8">
                ಅಖಂಡ ಕರ್ನಾಟಕ ಒಗ್ಗೂಡಿ ...ಒಮ್ಮತ ಬರುವವರೆಗೂ <br />
                <ul>
                  <li>೧. ಯಾವುದೇ ಖಾಯಮಾತಿ ಹೋರಾಟಗಳನ್ನು ಮಾಡುವುದಿಲ್ಲ.</li>
                  <li>
                    ೨. ಯಾರಿಗಾದರೂ ಅನ್ಯಾಯವಾದರೆ ಅವರ ಪರ ನಿಂತು ಲಾಗಿನ್ ಸ್ಥಗಿತಗೊಳಿಸಿ
                    ಹೋರಾಟ ಮಾಡುವುದಿಲ್ಲ.
                  </li>
                </ul>
              </p>
            </div>
          </AboutCard>

          <AboutCard>
            <div className="mt-2 text-center">
              <h1 className="text-3xl my-  font-semibold text-green">
                ಸದ್ಯಕ್ಕೆ ಏನು ಮಾಡಬಹುದು
              </h1>
              <p className="text-center lg:text-xl md:text-2xl md:leading-8">
                <ul>
                  <li>
                    {" "}
                    ೧. ಸೋಶಿಯಲ್ ಮೀಡಿಯಾ ಮುಖೇನ ಪ.ಭೂ ಸಮಸ್ಯೆಗಳ ಬಗ್ಗೆ ಬೆಳಕು ಚೆಲ್ಲಲು
                    ಪ್ರಯತ್ನಿಸುವುದು.
                  </li>
                  <li>
                    ೨. ಅನ್ಯಾಯಕ್ಕೊಳಗಾದವರ ಸಹಕಾರದಿಂದ ಸದರಿ ಪ್ರಕರಣದ ಬಗ್ಗೆ ಸರ್ಕಾರದ ಗಮನ
                    ಸೆಳೆಯಲು ಪ್ರಯತ್ನಿಸುವುದು.
                  </li>
                  <li> ೩. ಸಮಾಜಮುಖಿ ಕಾರ್ಯಕ್ರಮಗಳಲ್ಲಿ ಭಾಗವಹಿಸುವುದು</li>
                </ul>
              </p>
            </div>
          </AboutCard>
        </div>
      </div>
    </>
  );
}

export default About;
