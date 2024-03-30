import React from "react";
import { Progress } from "@/components/ui/progress";

function ProgressBar({ title, percent }: { title: string; percent: number }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[20px] font-semibold">{title}</p>
      <Progress value={percent} className="w-[60%] bg-[#EDECEC] h-[12px]" />
    </div>
  );
}

function AboutMeSection() {
  return (
    <section className="flex flex-col gap-8 md:flex-row justify-between items-center">
      <div className="md:w-[50%]">
        <img src="/images/about_me_image.png" alt="profile" />
      </div>
      <div className="md:w-[50%]">
        <p className="text-2xl md:text-[65px] font-bold leading-[3.5rem]">About me</p>
        <p className="text-[21px] my-8">
          My design approach is focused on understanding the needs and behaviors
          of users to create engaging and seamless experiences. I believe that
          good design is more than just aesthetics; it's about solving problems
          and enhancing the way people interact with digital products.
        </p>
        <div className="flex gap-4 flex-col">
          <ProgressBar title="UX" percent={97} />
          <ProgressBar title="Website Design" percent={95} />
          <ProgressBar title="App Design" percent={98} />
          <ProgressBar title="Graphic Design " percent={97} />
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
