import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { BudgetOptimizer } from "@/components/sections/BudgetOptimizer";
import { Comparison } from "@/components/sections/Comparison";
import { SocialProof } from "@/components/sections/SocialProof";
import { Mission } from "@/components/sections/Mission";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <BudgetOptimizer />
      <Comparison />
      <SocialProof />
      <Mission />
      <ClosingCTA />
    </>
  );
}
