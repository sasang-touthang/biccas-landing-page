import React from "react";
import Features from "./Features/Features";
import Benefit from "./Benefit/Benefit";
import Plan from "./Plan/Plan";

function Body() {
  return (
    <div className="bg-[#fff] px-[1rem] md:px-[3rem] lg:px-[5rem] xl:px-[8rem] relative">
      <Features />
      <Benefit />
      <Plan />
    </div>
  );
}

export default Body;
