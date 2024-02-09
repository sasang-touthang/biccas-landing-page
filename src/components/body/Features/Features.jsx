import React from "react";
import Details from "../../component_parts/Info";
import collaboration from "./media/collaboration.png";
import cloud from "./media/cloud.png";
import analytics from "./media/analytics.png";

const data = [
  {
    img: collaboration,
    title: "Collaboration Teams",
    subtitle: "Here you can handle projects together with team virtually",
  },
  {
    img: cloud,
    title: "Cloud Storage",
    subtitle:
      "No need to worry about storage because we provide storage up to 2TB",
  },
  {
    img: analytics,
    title: "Daily Analytics",
    subtitle:
      "We always provide useful information to make it easier for you every day",
  },
];

function Features() {
  return (
    <div className="flex flex-col relative z-10 overflow-hidden">
      <div className="flex flex-col items-center xl:flex-row xl:justify-between xl:items-center gap-10 w-full pt-[5rem] xl:pt-[9rem] pb-[3rem] xl:pb-[5rem]">
        <div className="text-center xl:text-start text-[3.125rem] font-semibold font_inter xl:w-[20.6875rem] leading-tight">
          Our Features you can get
        </div>
        <div className="xl:w-[28.8125rem] text-center xl:text-start text-[1.125rem] text-[#A6A6A6] font-medium">
          We offer a variety of interesting features that you can help increase
          your productivity at work and manage your project easily
        </div>
        <button className=" text-[1rem] md:text-[1.125rem] py-[1rem] px-[1.875rem] gap-[0.625rem] rounded-full bg-[#54BD95] text-white">
          Get started
        </button>
      </div>
      <div className="flex flex-col items-center xl:flex-row xl:justify-between xl:gap-5">
        {data.map(({ img, title, subtitle }) => (
          <div className="flex flex-col items-center xl:items-start">
            <img
              src={img}
              className="w-[15rem] h-[19rem] xl:w-[22.75rem] xl:h-[26.875rem] mb-[1.87rem]"
            />
            <Details
              title={title}
              subtitle={subtitle}
              right_width="xl:w-[22.75rem]"
              title_size="text-[1.875rem]"
              subtitle_size="text-[1.125rem]"
              title_margin_bottom="mb-[1.125rem]"
              subtitle_margin_bottom="mb-[2rem]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
