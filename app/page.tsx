import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import ClassCategories from "@/components/ClassCategories";
import WhyUs from "@/components/WhyUs";
import AestheticsOne from "@/components/AestheticsOne";
import TrainerSpotlight from "@/components/TrainerSpotlight";
import AestheticsTwo from "@/components/AestheticsTwo";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import SchedulePreview from "@/components/SchedulePreview";
import CommunityStrip from "@/components/CommunityStrip";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* 1. Hero Section (Full Bleed) */}
      <Hero />

      {/* 2. Social Proof Bar */}
      <SocialProofBar />

      {/* 3. Class Categories Showcase */}
      <ClassCategories />

      {/* 4. Why Us / Philosophy */}
      <WhyUs />

      {/* 5. Aesthetics Section 1 (Back stretch athlete aesthetic & giant watermark typography) */}
      <AestheticsOne />

      {/* 6. Trainer Spotlight */}
      <TrainerSpotlight />

      {/* 7. Aesthetics Section 2 (Recovery Engineering & Architecture) */}
      <AestheticsTwo />

      {/* 8. Testimonials (Curved Fan Carousel) */}
      <Testimonials />

      {/* 9. Pricing & Membership Tiers */}
      <Pricing />

      {/* 10. Schedule Preview */}
      <SchedulePreview />

      {/* 11. Community Gallery Strip */}
      <CommunityStrip />

      {/* 12. FAQ Accordion */}
      <FAQ />

      {/* 13. Final CTA */}
      <FinalCTA />
    </div>
  );
}
