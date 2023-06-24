import React from "react";
import { TypeAnimation } from "react-type-animation";
import Button_component from "./Button_component";

const Hero = () => {
  return (
    <>
      {/* <img className="w-full object-cover" src={hero_bg} alt="Nepali_Thali" /> */}

      <div className="max-w-5xl p-1 lg:pr-0 lg:pl-0 w-full">
        <div className="z-10 bg-gray-500/80 md:bg-gray-500/50 md:w-5/12 mx-3 lg:mx-0 rounded-lg py-11 px-3">
          <h3 className="uppercase text-white text-2xl">Namaste</h3>
          <span className="text-white text-lg block">Welcome to</span>

          <div className="inline-block text-center">
            <h1 className="uppercase text-yellow-500 text-6xl">Gorkhali</h1>
            <h1 className="uppercase pl-9 text-yellow-500 text-6xl">Kitchen</h1>
            <span className="text-gray-300 text-xs">Tampa, Florida</span>
          </div>

          <p className="text-yellow-500 py-6">
            <span>We are </span>
            <TypeAnimation
              sequence={[
                "First ever Nepali Restaurant in Tampa.", // Types 'One'
                2000, // Waits 1s
                "2023 Bib Gourmand Awards Winner.", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "16px", display: "inline-block" }}
            />
          </p>

          <div className="flex justify-center gap-8">
            <Button_component btn_text="menu" href="#menu" />
            <Button_component
              btn_text="order"
              href="https://www.clover.com/online-ordering/gorkhali-kitchen-tampa"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
