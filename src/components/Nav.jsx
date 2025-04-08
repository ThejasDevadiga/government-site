import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { logo } from "../assets";
import { useLocation, NavLink } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  useEffect(() => {
    const storedActiveLink = localStorage.getItem("activeLink");
    if (storedActiveLink) {
      setNavigation((prevNavigation) => {
        return prevNavigation.map((item) => {
          return {
            ...item,
            current: item.href === storedActiveLink,
          };
        });
      });
    }
  }, []);
  
  const [navigation, setNavigation] = useState([
    { name: "ಮುಖಪುಟ", href: "/", current: false },
    { name: "ಧ್ಯೇಯೋದ್ದೇಶಗಳು", href: "/services", current: false },
    { name: "ಇತ್ತೀಚಿನ ವರದಿಗಳು", href: "/reports", current: false },
    {name: "ಅಂಗರಚನೆ", href: "/angarachane",current: false },
    {name: "ಗ್ಯಾಲರಿ", href: "/gallery",current: false },
    {name:"ಸದಸ್ಯತ್ವ", href: "/form", current: false },
    { name: "ಸಂಪರ್ಕಿಸಿ", href: "/contact", current: false },
    { name: "Privacy Policy", href: "/privacy", current: false },
  ]);

  const handleClick = (index, href) => {
    setNavigation((prevNavigation) => {
      return prevNavigation.map((item) => {
        return {
          ...item,
          current: item.href === href,
        };
      });
    });
    localStorage.setItem("activeLink", href);
  };

  const location = useLocation();

  const [opacity, setOpacity] = useState(false);

  const addOpacity = () => {
    if (window.scrollY >= window.innerHeight / 2.8) {
      setOpacity(true);
    } else {
      setOpacity(false);
    }
  };

  window.addEventListener("scroll", addOpacity);

  return (
    <>
      <div className=" sticky top-0 z-20 ">
        <div
          className={`px-4    ${
            opacity
              ? " drop-shadow-lg backdrop-filter backdrop-blur-sm duration-700 ease-in-out  "
              : ""
          } `}
        >
          <Disclosure as="nav" className="bg-gray-800  top-0 ">
            {({ open }) => (
              <>
                <div className="mx-auto   max-w-7xl px-2 sm:px-6 lg:px-8">
                  <div className="relative z-50  flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="flex  flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                      <div className="flex cursor-pointer flex-shrink-0 items-center">
                        <img
                          className="block mix-blend-color-burn h-12 w-auto lg:hidden"
                          src={logo}
                          alt="Your Company"
                        />
                        <img
                          className="hidden h-12 w-auto lg:block"
                          src={logo}
                          alt="Your Company"
                        />
                      </div>
                      <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                          {navigation.map((item, index) => (
                            <NavLink
                              smooth
                              spy
                              key={item.name}
                              to={item.href}
                              isActive={() => item.href === location.pathname}
                              // className={classNames(
                              //   item.current
                              //     ? "text-white active lg:text-base md:text-xl"
                              //     : "text-grey rounded-3xl  hover:text-black duration-500 hover:bg-lightyellow ",
                              //   "px-3 py-2 text-sm font-medium lg:text-base md:text-xl"
                              // )}
                              className={({ isActive }) => {
                                return (
                                  "text-grey rounded-3xl px-3 py-2 text-sm font-medium lg:text-base md:text-xl hover:text-black duration-500 hover:bg-lightyellow " +
                                  (isActive
                                    ? "active bg-yellow hover:text-bgWhite"
                                    : "")
                                );
                              }}
                              aria-current={item.current ? "page" : undefined}
                              // onClick={() => handleClick(index, item.href)}
                              activeClassName="active"
                              activeClass="active"
                              exact
                            >
                              {item.name}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Disclosure.Panel className="sm:hidden text-center">
                  <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item, index) => (
                      
                      <Disclosure.Button
                        key={item.name}
                        spy
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-white active lg:text-base md:text-xl"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white lg:text-base md:text-xl",
                          "block rounded-md px-3 py-2 text-base font-medium"
                        )}
                      
                        aria-current={item.current ? "page" : undefined}
                        activeClassName="active"
                        activeClass="active"
                        onClick={() => handleClick(index, item.href)}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  );
}
