"use client";
import { ReactTyped } from "react-typed";
import IntroductionSection from "@/components/IntroductionSection";
import AboutMeSection from "@/components/AboutMeSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <div className="max-w-full overflow-hidden">
      <IntroductionSection />
      <AboutMeSection />
      <SkillsSection />
    </div>
  );
}
