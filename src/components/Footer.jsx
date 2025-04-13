import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X"; 
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Footer() {
  function getYear() {
    return new Date().getFullYear();
  }

  return (
    <div className="px-3 md:px-20 lg:px-32 mt-12">
      <footer className="bg-lightyellow p-6 rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between flex-wrap gap-6">
          {/* Left Section */}
          <div className="flex flex-col justify-center items-center text-center md:text-left md:items-start space-y-2">
            <img src={logo} className="h-10 mb-2" alt="Logo" />
            <div className="text-sm text-black flex items-center gap-2">
              <EmailIcon />{" "}
              <a href="mailto:karnatakalswelfareassociation@gmail.com">
                karnatakalswelfareassociation@gmail.com
              </a>
            </div>
            <div className="text-sm text-black flex items-center gap-2">
              <LanguageIcon />{" "}
              <a href="https://karnatakalswelfare.org" target="_blank" rel="noopener noreferrer">
                karnatakalswelfare.org
              </a>
            </div>
            <div className="text-sm text-black flex items-center gap-2">
              <LocalPhoneIcon /> <a href="tel:+917204100471">+91 72041 00471</a>
            </div>
            <div className="text-sm text-black flex items-start gap-2">
              <LocationOnIcon className="mt-1" />
              <span>
                NUM 578, Bhoothanakatte Road, Alanahalli, Mysuru – 570028
              </span>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-center items-center text-center md:items-end space-y-3 mt-6 md:mt-0">
            <div className="flex gap-4 text-black">
              <a
                href="https://www.instagram.com/karnatakalswelfare"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://x.com/klswda2024"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XIcon />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61573081514161"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>
            </div>
            <Link to="/privacy" className="hover:text-yellow text-black text-sm">
              Privacy Policy
            </Link>
            <span className="text-sm text-gray-500">
              © {getYear()} Karnataka LS Welfare Association. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
