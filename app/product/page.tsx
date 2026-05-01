import { Tabs } from "@/components/ui/Tabs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { BudgetOptimizer } from "@/components/sections/BudgetOptimizer";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { AnimatedDashboard } from "@/components/sections/AnimatedDashboard";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { Reveal, RevealItem } from "@/components/ui/SectionReveal";

const tabs = [
  {
    label: "Pipelines",
    title: "Connect every ad source, once.",
    body:
      "API integrations to Meta, Google, TikTok, GA4, Toast, DoorDash, and more. Spend and revenue stream in automatically. Data hygiene checks flag gaps and outliers before they touch the model.",
  },
  {
    label: "Causal models",
    title: "MMM that explains itself.",
    body:
      "Bayesian causal models with seasonality controls, baseline isolation, and saturation curves. Versioned per client and reproducible across quarters.",
  },
  {
    label: "Multi-client",
    title: "One platform for every advertiser.",
    body:
      "Switch clients in a click. Model versioning, white-labeled QBR exports, and role-based access for agency teams running MMM at scale.",
  },
  {
    label: "Optimizer",
    title: "Allocations with a plain-language reason.",
    body:
      "The Budget Optimizer recommends the exact reallocation that maximizes the KPI, and tells you why in language clients understand.",
  },
];

export default function ProductPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-9 md:pt-40">
        <GradientBlob variant={1} className="-top-40 right-0 h-[500px] w-[500px]" />
        <div className="relative mx-auto grid max-w-container items-center gap-16 px-6 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <RevealItem>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-deep">
                Product
              </span>
            </RevealItem>
            <RevealItem>
              <h1 className="mt-4 font-display text-5xl leading-[1.05] text-navy md:text-6xl">
                A repeatable platform for MMM at agency scale.
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="mt-6 max-w-xl text-lg text-navy/65">
                Pipelines, causal models, and plain-language explanations, built so analysts
                spend their time on judgment, not janitorial work.
              </p>
            </RevealItem>
          </Reveal>
          <AnimatedDashboard />
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-container px-6">
          <Tabs tabs={tabs} />
        </div>
      </section>

      <HowItWorks />
      <BudgetOptimizer />
      <ClosingCTA />
    </>
  );
}
