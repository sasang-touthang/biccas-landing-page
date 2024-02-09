import React from "react";
import check from "./media/check.png";

function Paywall({ title, subtitle, price, features, button }) {
  return (
    <div
      className={`rounded-[1.25rem] box_shadow p-[1.25rem] relative overflow-hidden ${
        title === "Pro" ? "bg-[#54BD95]" : "bg-white"
      }`}
    >
      <div
        className={`bg-[#6BC2A1] absolute w-[37.5rem] h-[37.5rem] rounded-full z-1 top-[9.12rem] right-[-7rem] ${
          title === "Pro" ? "black" : "hidden"
        }`}
      ></div>
      <div className="flex flex-col items-center xl:pt-[1.25rem] relative z-9">
        <span
          className={`text-center font_inter text-[1.5rem] xl:text-[1.875rem] mb-[0.63rem] font-semibold ${
            title === "Pro" ? "text-white" : "text-black"
          }`}
        >
          {title}
        </span>
        <span
          className={`w-[15.6875rem] text-center font_inter text-[1rem] xl:text-[1.125rem] font-medium  leading-[1.6875rem] ${
            title === "Pro" ? "text-white" : "text-[#A6A6A6]"
          }`}
        >
          {subtitle}
        </span>
        <span
          className={`text-[2.5rem] xl:text-[3.125rem] font-semibold mt-[1rem] xl:mt-[1.5rem] ${
            title === "Pro" ? "text-white" : "text-black"
          }`}
        >
          ${price}
        </span>
      </div>
      <div className="flex flex-col items-center bg-[#F9FAFB] p-[0.8rem] xl:p-[2.31rem] relative z-9 rounded-lg ">
        <ul className="flex flex-col pb-[1.69rem] gap-3 xl:gap-6">
          {features.map((feature) => (
            <li className="flex gap-3">
              <img src={check} alt="img" className="h-[1.625rem]" />
              <span className="font_inter text-[0.8rem] xl:text-[1rem] font-medium items-center">
                {feature}
              </span>
            </li>
          ))}
        </ul>
        <button
          className={`w-[8rem] h-[2.5rem] text-[1rem] md:text-[1.125rem] font-semibold font_inter xl:w-[16.25rem] xl:h-[4rem]  rounded-[1.25rem] box_shadow ${
            title === "Pro"
              ? "bg-[#54BD95] text-white"
              : "bg-white text-[#54BD95]"
          }`}
        >
          {button}
        </button>
      </div>
    </div>
  );
}

export default Paywall;
