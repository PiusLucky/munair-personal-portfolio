import React from "react";
import Header from "../common/Header";
import ServiceCard from "../cards/ServiceCard";

function ServicesSection() {
  const data = [
    {
      iconUrl: "/images/ui_icon.png",
      title: "UI/UX",
    },
    {
      iconUrl: "/images/web_icon.png",
      title: "Web Design",
    },
    {
      iconUrl: "/images/app_icon.png",
      title: "App Design",
    },
    {
      iconUrl: "/images/graphic_icon.png",
      title: "Graphic Design",
    },
  ];
  return (
    <section>
      <Header title="Services" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[31px] mt-[59px]">
        {data.map((service, index) => (
          <ServiceCard {...service} key={index} />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
