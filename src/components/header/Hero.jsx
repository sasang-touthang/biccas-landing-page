import React from "react";
import curve from "./media/curve.png";
import play from "./media/Play.png";
import hero from "./media/hero.png";

function Hero() {
  return (
    <div className="mt-[2rem] lg:mt-[7rem] px-[1rem] md:px-[3rem] lg:px-[5rem] xl:px-[8rem] flex flex-col xl:flex-row">
      <div className="flex flex-col items-center xl:items-start flex-1">
        <div className="text-[3rem] md:text-[5rem] text-center xl:text-left font_inter font-bold leading-tight">
          We're here to Increase your Productivity
        </div>
        <div className="flex lg:flex-1 p-1">
          <img src={curve} />
        </div>
        <div className="font_inter md:text-[1.125rem] leading-[1.875rem] my-10 text-center xl:text-start md:w-[31rem]">
          Let's make your work more organize and easily using the Taskio
          Dashboard with many of the latest features managing work every day
        </div>
        <div className="flex md:pt-3 pb-10  font-medium">
          <button className="text-[1rem] md:text-[1.125rem] py-[1rem] px-[1.875rem] gap-[0.625rem] rounded-full bg-[#54BD95] text-white mr-[2.76rem]">
            Try free trial
          </button>
          <button className="text-[1rem] md:text-[1.125rem] flex items-center">
            <img src={play} className="mr-[0.88rem]" />
            view demo
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center xl:justify-end">
        <div>
          <img src={hero} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
