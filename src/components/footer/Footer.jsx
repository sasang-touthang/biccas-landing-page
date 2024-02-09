import React from "react";
import Testimonial from "./testimonial/Testimonial";
import Links from "./Links/Links";

function Footer() {
  return (
    <div className="px-[1rem] md:px-[3rem] lg:px-[5rem] xl:px-[8rem] bg-[#161C28]">
      <Testimonial />
      <Links />
    </div>
  );
}

export default Footer;
