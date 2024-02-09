import React from "react";
import unsplash from "./media/unsplash.png";
import intercom from "./media/intercom.png";
import descript from "./media/descript.png";
import grammarly from "./media/grammarly.png";
import notion from "./media/notion.png";

function Users() {
  return (
    <div className="px-[1rem] md:px-[3rem] lg:px-[5rem] xl:px-[8rem]">
      <div className="pt-[3rem] text-[2rem] text-center font_inter font-bold lg:text-[2.5rem]">
        More than 25,000 teams use Collabs
      </div>
      <div className="mt-[3rem] flex flex-col items-center lg:flex-row lg:justify-center lg:flex-wrap text-[1.875rem] font-semibold text-[#A6A6A6] gap-16">
        <div className="flex items-start gap-2">
          <img src={unsplash} />
          <span>Unsplash</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={intercom} />
          <span>INTERCOM</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={descript} />
          <span>descript</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={grammarly} className="bg-[#A6A6A6] rounded-full p-1" />
          <span>grammarly</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={notion} />
          <span>Notion</span>
        </div>
      </div>
    </div>
  );
}

export default Users;
