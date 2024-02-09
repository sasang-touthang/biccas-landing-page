import React from "react";

function Info({
  title,
  subtitle,
  title_size,
  subtitle_size,
  title_margin_bottom,
  subtitle_margin_bottom,
  right_width,
  image,
  gap,
  default_flex_direction,
  xl_flex_direction,
  xl_align,
  image_width,
  image_height,
}) {
  return (
    <div
      className={`flex ${default_flex_direction} items-center xl:${xl_flex_direction} xl:${xl_align}  ${gap}`}
    >
      {image && (
        <div
          className={`${image_width} ${image_height} bg-white flex justify-center items-center box_shadow`}
        >
          <img src={image} />
        </div>
      )}

      <div
        className={`${right_width} flex flex-col text-center xl:text-start leading-tight`}
      >
        <div
          className={`${title_size} ${title_margin_bottom} font_inter font-semibold`}
        >
          {title}
        </div>
        <div
          className={`${subtitle_size} ${subtitle_margin_bottom} leading-relaxed px-[2rem] md:px-[0rem] font_inter font-medium text-[#A6A6A6] text-center xl:text-start`}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
}

export default Info;
