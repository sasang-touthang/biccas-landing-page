import React from "react";
import Details from "../component_parts/Info";
import publishing from "./media/publishing.png";
import analytics from "./media/analytics.png";
import command from "./media/comand.png";
import fiveStar from "./media/five_star_rating.png";
import fourStar from "./media/four_star_rating.png";

const details = [
  {
    img: publishing,
    title: "Publishing",
    subtitle:
      "Plan, collaborate, and publishing your content that drives meaningful engagement and growth for you brand",
  },
  {
    img: analytics,
    title: "Analytics",
    subtitle: "Analyze your performance and create gorgeous report",
  },
  {
    img: command,
    title: "Engagement",
    subtitle: "Quickly navigate and engage with your audience",
  },
];

function Partner() {
  return (
    <div className="flex flex-col xl:flex-row py-[3.75rem] px-[1rem] md:px-[3rem] lg:px-[5rem] xl:px-[8rem] bg-[#F9F8FE]">
      <div className="xl:flex-[1.3] flex flex-col">
        <Details
          title="How we support our partners all over the world"
          subtitle="SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software."
          title_size="text-[3rem]"
          subtitle_size="text-[1.125rem]"
          title_margin_bottom="mb-[1.87rem]"
        />
        <div className="flex flex-col items-center xl:flex-row gap-y-10 gap-x-20 mt-[2rem] lg:mt-[5rem] font_inter">
          <div className="flex flex-col items-center gap-3">
            <img src={fiveStar} />
            <span className="text-[1.125rem]">
              <b>4.9 </b>/ 5 rating
            </span>
            <span className="text-[#A6A6A6] text-[1.125rem]">databricks</span>
          </div>
          <div className="flex flex-col items-center gap-3 tracking-wide">
            <img src={fourStar} />
            <span className="text-[1.125rem]">
              <b>4.88 </b>/ 5 rating
            </span>
            <span className="text-[#A6A6A6] text-[1.125rem]">
              Chainanalysis
            </span>
          </div>
        </div>
      </div>

      <div className="xl:flex xl:flex-col xl:justify-between flex-1 mt-[5rem] xl:mt-[0rem]">
        {details.map(({ img, title, subtitle }) => (
          <Details
            title_size="text-[1.75rem]"
            subtitle_size="text-[1.125rem]"
            image={img}
            title={title}
            subtitle={subtitle}
            right_width="w-[26.75rem]"
            title_margin_bottom="mb-[0.63rem]"
            subtitle_margin_bottom="mb-[2.06rem]"
            gap="gap-5"
            default_flex_direction="flex-col"
            xl_flex_direction="flex-row"
            xl_align="items-start"
            image_width="w-[3.75rem]"
            image_height="h-[3.75rem]"
          />
        ))}
      </div>
    </div>
  );
}

export default Partner;
