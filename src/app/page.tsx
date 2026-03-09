import HeroSection from "../components/clinic/HeroSection";
import ProblemsSection from "../components/clinic/ProblemsSection";
import ServicesSection from "../components/clinic/ServicesSection";
import AlliesSection from "../components/clinic/AlliesSection";
import AboutSection from "../components/clinic/AboutSection";
import TestimonialsSection from "../components/clinic/TestimonialsSection";
import TestimonialVideos from "../components/clinic/TestimonialVideos";
import YouTubeVideos from "../components/clinic/YouTubeVideos";
import TeamSection from "../components/clinic/TeamSection";
import ProcessSection from "../components/clinic/ProcessSection";
import PrimaryCtaSection from "../components/clinic/PrimaryCtaSection";
import FaqSection from "../components/clinic/FaqSection";
import ContactSection from "../components/clinic/ContactSection";

export default function Home() {
  
  return (
    <div className="bg-surface-0 font-sans text-foreground">
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
