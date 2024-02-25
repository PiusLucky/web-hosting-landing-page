"use client";

import { useEffect } from "react";
import NavBar from "@/components/common/NavBar";
import ContactUsSection from "@/components/sections/ContactUsSection";
import CustomerSection from "@/components/sections/CustomerSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import LogoGroupSection from "@/components/sections/LogoGroupSection";
import SubscriptionSection from "@/components/sections/SubscriptionSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <NavBar />
      <div className="flex flex-col gap-32 mx-10">
        <HeroSection />
        <LogoGroupSection />
        <SubscriptionSection />
        <TestimonialSection />
        <CustomerSection />
        <ContactUsSection />
      </div>
      <FooterSection />
    </div>
  );
}
