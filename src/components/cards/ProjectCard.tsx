import React from "react";

interface IProps {
  imageUrl: string;
  title: string;
  description?: string;
}

function ProjectCard({ imageUrl, title, description }: IProps) {
  return (
    <div className="rounded-[14px] px-[18px]">
      <div className="bg-[#FFEBDB] px-[27px]">
        <img src={imageUrl} alt="service icon" />
      </div>
      <p className="text-[19px] my-4 mt-8 text-primary">{title}</p>
      <p className="text-[19px] font-semibold my-4">{description}</p>
    </div>
  );
}

export default ProjectCard;
