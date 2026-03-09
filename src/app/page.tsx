import {
  AboutSection,
  AlliesSection,
  ContactSection,
  FaqSection,
  HeroSection,
  PrimaryCtaSection,
  ProblemsSection,
  TeamSection,
  TestimonialsSection,
  YouTubeVideos,
  ServicesSection,
} from "../components/clinic/sections";

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
