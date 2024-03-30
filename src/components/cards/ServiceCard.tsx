import React from "react";

interface IProps {
  iconUrl: string;
  title: string;
  description?: string;
}

function ServiceCard({
  iconUrl,
  title,
  description = "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
}: IProps) {
  return (
    <div className="rounded-[14px] bg-[#F8F8F8] px-[18px] py-[57px]">
      <div>
        <img src={iconUrl} alt="service icon" />
      </div>
      <p className="text-[32px] font-semibold my-4">{title}</p>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
