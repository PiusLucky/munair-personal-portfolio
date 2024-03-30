import NavBar from "@/components/common/NavBar";
import AboutMeSection from "@/components/sections/AboutMeSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import MyProjectsSection from "@/components/sections/MyProjectsSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="mt-32 flex flex-col gap-32 md:mt-4 mx-4 md:mx-16 mb-32">
        <HeroSection />
        <AboutMeSection />
        <ServicesSection />
        <MyProjectsSection />
        <NewsletterSection />
      </div>
      <FooterSection />
    </main>
  );
}
