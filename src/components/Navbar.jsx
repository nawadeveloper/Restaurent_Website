import React, { useState } from "react";
import logo from "../assets/logo.png";
import Menus from "./Menus";
import Drop_menus from "./Drop_menus";
import { useEffect } from "react";

const Navbar = () => {
  const [icon, setIcon] = useState("menu");
  const [height, setHeight] = useState(false);
  const [scrollBg, setScrollBg] = useState("rgba(41, 37, 36, 0.7)");
  //const height_of_navbar = 45;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // const viewportHeightPx = window.innerHeight;
      // const scrollPositionVh =
      // ((scrollPosition + height_of_navbar) / viewportHeightPx) * 100;

      const threshold = 550; // Adjust this value to your desired threshold

      if (scrollPosition > threshold) {
        setScrollBg("rgba(41, 37, 36, 1)"); // Change background color when scrolled beyond the threshold
      } else {
        setScrollBg("rgba(41, 37, 36, 0.7)"); // Reset background color when scrolled back above the threshold
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const changeIcon = () => {
    if (icon == "menu") {
      setIcon("close");
      setHeight(true);
    }
    if (icon == "close") {
      setIcon("menu");
      setHeight(false);
    }
  };

  return (
    <>
      <div
        className="bg-prime/70 z-10 flex justify-center fixed top-0 left-0 right-0"
        id="navbar"
        style={{ background: scrollBg }}
      >
        <div className="max-w-5xl px-4 lg:px-0 w-full flex items-center justify-between">
          <img src={logo} className="w-12 md:w-16" alt="Gorkhali Kitchen" />
          <span
            onClick={changeIcon}
            className="material-symbols-outlined cursor-pointer text-white sm:hidden"
          >
            {icon}
          </span>
          <Menus />
        </div>
      </div>

      <Drop_menus height={height} />
    </>
  );
};

export default Navbar;
