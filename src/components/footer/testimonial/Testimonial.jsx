import React from "react";
import quote from "./media/quote.png";
import profile_1 from "./media/profile_1.png";
import profile_2 from "./media/profile_2.png";
import profile_3 from "./media/profile_3.png";
import profile_4 from "./media/profile_4.png";
import play from "./media/play.png";
import form_icon from "./media/form_icon.png";

function Testimonial() {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-20 pt-[3rem] xl:pt-[8.13rem]">
      <div className="flex flex-col lg:flex-[45%] gap-8 justify-between text-white max-h-full">
        <div className="flex flex-col gap-5">
          <span className="font_inter text-center lg:text-start text-[3.125rem] font-semibold text-white leading-tight">
            What People are Saying About Us
          </span>
          <span className="font_inter text-[1.125rem] font-medium text-[#A6A6A6]">
            Everything you need to accept payment and grow your money, manage
            anywhere on the planet
          </span>
        </div>

        <span>
          <img src={quote} />
        </span>
        <span className="font_inter text-[1.125rem] font-medium text-[#A6A6A6]">
          I am very helped by this E-wallet application, my days are very easy
          to use this application and its very helpful in my life, even I can
          pay a short time
        </span>
        <span className="font_inter text-[1.125rem] font-medium text-[#A6A6A6]">
          _Aria Zinanrio
        </span>
        <span className="flex gap-5 flex-wrap lg:flex-nowrap justify-center lg:justify-start">
          <img className="cursor-pointer" src={profile_1} />
          <img className="cursor-pointer" src={profile_2} />
          <img className="cursor-pointer" src={profile_3} />
          <img className="cursor-pointer" src={profile_4} />
          <img className="cursor-pointer" src={play} />
        </span>
      </div>
      <div className="flex flex-col items-center lg:flex-[55%] bg-[#222938] pt-[2.5rem] pb-[3.12rem] rounded-[1.25rem] max-h-full">
        <div className="flex flex-col items-center">
          <img src={form_icon} />
          <span className="text-[1.875rem] font-medium font_inter text-white">
            Get Started
          </span>
        </div>
        <div className="w-full px-[2rem] xl:px-[5.38rem] mt-[0.63rem] text-end text-white">
          <form className="flex flex-col">
            <label className="font_inter text-[1.125rem] text-start mb-[1.25rem] font-medium text-white">
              Email
            </label>
            <input
              className="text-black focus:outline-none h-[3.125rem] mb-[1.25rem] rounded-xl p-[1.06rem]"
              type="text"
              placeholder="Enter your email"
            />
            <label className="text-white text-start mb-[1.25rem]">
              Message
            </label>
            <input
              className="text-black focus:outline-none h-[3.125rem] mb-[1.25rem] rounded-xl p-[1.06rem]"
              type="text"
              placeholder="What are you saying?"
            />
            <button
              className="bg-[#54BD95] text-white py-[1.25rem] w-full rounded-xl"
              type="submit"
            >
              Request Demo
            </button>
          </form>
          <span className="text-center text-[0.875rem] font-medium font_inter w-full mt-[0.63rem]">
            <span className="text-[#A6A6A6]">or</span>{" "}
            <a className="hover:underline cursor-pointer">Start Free Trial</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
