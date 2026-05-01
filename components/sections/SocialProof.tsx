import { socialProof } from "@/content/copy";
import { LogoMarquee } from "@/components/ui/LogoMarquee";

export function SocialProof() {
  return (
    <section className="relative bg-surface py-7 md:py-9">
      <p className="mb-8 text-center text-[12.5px] font-medium uppercase tracking-[0.14em] text-anchor/55">
        Built from conversations with analysts at
      </p>
      <LogoMarquee logos={socialProof.logos} />
    </section>
  );
}
