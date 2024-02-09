import React from "react";
import logo from "./media/logo.png";
import arrow from "./media/arrow.png";

const data = [
  {
    title: "Support",
    links: ["Help center", "Account information", "About", "Contact us"],
  },
  {
    title: "Help and Solution",
    links: [
      "Talk to support",
      "Support docs",
      "System status",
      "Covid response",
    ],
  },
  {
    title: "Product",
    links: ["Update", "Security", "Beta test", "Pricing product"],
  },
];

function Links() {
  return (
    <div className="pb-[3rem]">
      <div className="flex flex-col lg:flex-row gap-20 mt-[5rem] xl:mt-[8.13rem] w-full">
        <div className="flex flex-col items-center lg:items-start flex-[45%] gap-8 w-full">
          <div>
            <img src={logo} />
          </div>
          <span className="text-[#A6A6A6] text-[1.125rem] font_inter font_medium leading-tight">
            Get started now, try our product
          </span>
          <div className="flex justify-between items-center rounded-full overflow-hidden max-w-[25.625rem] w-full border ">
            <input
              className="w-[77%] xl:h-[3rem] bg-[#161C28] font_inter text-[1.125rem] ml-[1.25rem] focus:outline-none text-white"
              type="text"
              placeholder="Enter your email here"
            />
            <img
              src={arrow}
              className="bg-[#54BD95] p-[0.69rem] rounded-full w-[2rem] h-[2rem] xl:w-[2.875rem] xl:h-[2.875rem] m-[0.3rem] cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between flex-[55%] gap-6 text-[1.125rem] lg:text-[0.85rem] xl:text-[1.125rem] font-medium font_inter">
          {data.map(({ title, links }) => (
            <div className="w-full flex flex-col lg:items-start items-center gap-5">
              <span className="text-white">{title}</span>
              <ul className="flex flex-col lg:items-start items-center gap-3 text-[#A6A6A6]">
                {links.map((link) => (
                  <li>
                    <a className="cursor-pointer hover:underline">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row lg:justify-between text-white mt-[3.69rem] gap-10 font_inter text-[1.125rem] font-medium">
        <span className="flex-1 text-center lg:text-start">
          2024 Biccas Inc. Copyright and rights reserved
        </span>
        <div className="flex-1 flex flex-col items-center md:flex-row md:justify-center lg:justify-end gap-5 md:gap-10">
          <span>
            <a className="cursor-pointer hover:underline">
              Terms and Conditions
            </a>
          </span>
          <span>
            <a className="cursor-pointer hover:underline">Privacy</a>
          </span>
          <a className="cursor-pointer hover:underline">Policy</a>
        </div>
      </div>
    </div>
  );
}

export default Links;
