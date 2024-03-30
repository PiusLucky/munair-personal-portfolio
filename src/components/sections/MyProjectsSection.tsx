import React from "react";
import Header from "../common/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "../cards/ProjectCard";

function MyProjectsSection() {
  const data = {
    all: [
      {
        imageUrl: "/images/p_1.png",
        title: "Web Design ",
        description: "AirCalling Landing Page Design ",
      },
      {
        imageUrl: "/images/p_2.png",
        title: "Web Design",
        description: "Business Landing Page Design ",
      },
      {
        imageUrl: "/images/p_3.png",
        title: "Web Design",
        description: "Ecom Web Page Design",
      },
    ],

    web: [
      {
        imageUrl: "/images/p_3.png",
        title: "Web Design",
        description: "Ecom Web Page Design",
      },
      {
        imageUrl: "/images/p_1.png",
        title: "Web Design ",
        description: "AirCalling Landing Page Design ",
      },
      {
        imageUrl: "/images/p_2.png",
        title: "Web Design",
        description: "Business Landing Page Design ",
      },
    ],

    app: [
      {
        imageUrl: "/images/p_2.png",
        title: "App Design",
        description: "Business Mobile",
      },
      {
        imageUrl: "/images/p_3.png",
        title: "App Design",
        description: "Ecom App Page Design",
      },
      {
        imageUrl: "/images/p_1.png",
        title: "App Design ",
        description: "AirCalling Mobile",
      },
    ],

    ui: [
      {
        imageUrl: "/images/p_2.png",
        title: "UI Design",
        description: "Business UI/UX",
      },
    ],
    graphic: [
      {
        imageUrl: "/images/p_1.png",
        title: "UI Design",
        description: "Business UI/UX",
      },
    ],
  };
  return (
    <section>
      <Header title="My Projects" />

      <Tabs defaultValue="all" className="w-full my-8">
        <TabsList className="grid mb-16 w-full grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="ui" className="hidden lg:block">
            UI/UX
          </TabsTrigger>
          <TabsTrigger value="web" className="hidden lg:block">
            Web Design
          </TabsTrigger>
          <TabsTrigger value="app" className="hidden lg:block">
            App Design
          </TabsTrigger>
          <TabsTrigger value="graphic" className="hidden lg:block">
            Graphic Design
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="flex flex-col gap-16 md:flex-row justify-around">
            {data.all.map((project, index) => (
              <ProjectCard {...project} key={index} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="ui">
          <div className="flex flex-col gap-16 md:flex-row justify-around">
            {data.ui.map((project, index) => (
              <ProjectCard {...project} key={index} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="web">
          <div className="flex flex-col gap-16 md:flex-row justify-around">
            {data.web.map((project, index) => (
              <ProjectCard {...project} key={index} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="app">
          <div className="flex flex-col gap-16 md:flex-row justify-around">
            {data.app.map((project, index) => (
              <ProjectCard {...project} key={index} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="graphic">
          <div className="flex flex-col gap-16 md:flex-row justify-around">
            {data.graphic.map((project, index) => (
              <ProjectCard {...project} key={index} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
export default MyProjectsSection;
