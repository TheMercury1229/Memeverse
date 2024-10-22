"use client";

import { CTA } from "./_components/LandingPage/CTA";
import { Footer } from "./_components/LandingPage/Footer";
import { Hero } from "./_components/LandingPage/Hero";
import { StickyScrollReveal } from "./_components/LandingPage/StickReveal";

export default function page() {
  return (
    <>
      <Hero />
      <StickyScrollReveal />
      <CTA />
      <Footer />
    </>
  );
}
