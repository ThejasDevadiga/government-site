import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

function Footer() {
  function getYear() {
    return new Date().getFullYear();
  }

  return (
    <>
      <div class="px-3 md:px-20 lg:px-32 mt-12">
        <footer class="bg-lightyellow p-6 rounded-lg shadow m-4 dark:bg-gray-800">
          <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <div class="flex flex-col justify-center items-center text-center md:text-left md:items-start">
              <img src={logo} class="h-8" alt="" />
              
              {/* <a
                href="mailto:office.sandeepkprabhu@gmail.com"
                class="text-black mt-4"
              >
                <EmailIcon variant="filled" />
                office.sandeepkprabhu@gmail.com
              </a>
              <a href="tel:+919686808941" class="text-black">
                <LocalPhoneIcon />
                +91 9686808941
              </a> */}
            </div>
            <div className="text-center">
              <span class="text-sm text-gray-500 text-center dark:text-gray-400">
                © {getYear()}{" "}
                <a
                  href="https://deltanlobo.vercel.app"
                  class="hover:text-lightyellow text-yellow"
                >
                  Deltan Lobo
                </a>
                . All Rights Reserved.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
