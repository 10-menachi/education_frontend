"use client";

import AISpotlight from "@/components/shared/landing-page/ai-spotlight/ai-spotlight";
import CTA from "@/components/shared/landing-page/cta";
import Features from "@/components/shared/landing-page/features";
import Footer from "@/components/shared/landing-page/footer";
import Hero from "@/components/shared/landing-page/hero/hero";
import HowItWorks from "@/components/shared/landing-page/how-it-works";
import Navbar from "@/components/shared/landing-page/navbar/navbar";
import Problem from "@/components/shared/landing-page/problem";
import StatsBar from "@/components/shared/landing-page/stats-bar";
import Testimonials from "@/components/shared/landing-page/testimonials";
import { theme } from "@/lib/utils/constants/localization";
import { MantineProvider } from "@mantine/core";

export default function LandingPage() {
  return (
    <MantineProvider theme={theme}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; background: #fff; }
        html { scroll-behavior: smooth; }
      `}</style>

      <Navbar />
      <Hero />
      <StatsBar />
      <Problem />
      <Features />
      <HowItWorks />
      <AISpotlight />
      <Testimonials />
      <CTA />
      <Footer />
    </MantineProvider>
  );
}
