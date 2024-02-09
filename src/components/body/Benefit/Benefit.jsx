import React from "react";
import check from "./media/check.png";
import photo from "./media/photo.png";

const data = [
  "Free Consulting With Expert Saving Money",
  "Online Banking",
  "Investment Report Every Month",
  "Saving Money for The Future",
  "Online Transaction",
];

function Benefit() {
  return (
    <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-between lg:items-start mt-[5rem] relative z-10 overflow-hidden">
      <div className="flex flex-col items-center xl:items-start w-[20.8125rem] lg:w-[26.8125rem]">
        <div className="text-center lg:text-start text-[3.125rem] font-bold font_inter ">
          What Benefit Will You Get
        </div>
        <div>
          {data.map((info) => (
            <div className="flex my-[2rem] gap-5 ">
              <img src={check} className="h-[2rem]" />
              <div className="text-[1.125rem] font-medium font_inter">
                {info}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img
          src={photo}
          className="w-[20rem] h-[24rem] lg:w-[28.125rem] lg:h-[33.0625rem] mb-[2rem]"
        />
      </div>
    </div>
  );
}

export default Benefit;
