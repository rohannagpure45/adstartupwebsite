import { socialProof } from "@/content/copy";
import { LogoMarquee } from "@/components/ui/LogoMarquee";

export function SocialProof() {
  return (
    <section className="relative bg-warm-white pb-20 md:pb-28">
      <LogoMarquee logos={socialProof.logos} />
    </section>
  );
}
