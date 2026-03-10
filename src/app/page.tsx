import HeroSection from "@/src/components/clinic/sections/HeroSection";
import ProblemsSection from "@/src/components/clinic/sections/ProblemsSection";
import ServicesSection from "@/src/components/clinic/sections/ServicesSection";
import AlliesSection from "@/src/components/clinic/sections/AlliesSection";
import AboutSection from "@/src/components/clinic/sections/AboutSection";
import TestimonialsSection from "@/src/components/clinic/sections/TestimonialsSection";
import TestimonialVideos from "@/src/components/clinic/sections/TestimonialVideos";
import YouTubeVideos from "@/src/components/clinic/sections/YouTubeVideos";
import TeamSection from "@/src/components/clinic/sections/TeamSection";
import PrimaryCtaSection from "@/src/components/clinic/sections/PrimaryCtaSection";
import FaqSection from "@/src/components/clinic/sections/FaqSection";
import ContactSection from "@/src/components/clinic/sections/ContactSection";

export default function Home() {
  
  return (
    <div id="top" className="bg-surface-0 font-sans text-foreground">
      <HeroSection />
      <ProblemsSection />
      <ServicesSection />
      <AlliesSection />
      <AboutSection />
      <TestimonialsSection />
      {/* <TestimonialVideos /> */}
      <YouTubeVideos />
      <TeamSection />
      <PrimaryCtaSection />
      <FaqSection />
      <ContactSection />
    </div>
  );
}
