import type { Metadata } from "next";
import { Reveal, RevealItem } from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "Privacy Policy — Ipsa",
  description: "How Ipsa collects, uses, and protects your information.",
};

const LAST_UPDATED = "April 30, 2026";

export default function PrivacyPage() {
  return (
    <main className="bg-warm-white pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <RevealItem>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-deep">
              Legal
            </span>
          </RevealItem>
          <RevealItem>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] text-navy md:text-6xl">
              Privacy Policy
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="mt-4 text-sm text-navy/55">Last updated: {LAST_UPDATED}</p>
          </RevealItem>
          <RevealItem>
            <div className="mt-6 rounded-2xl border border-forest/20 bg-surface p-5 text-sm leading-relaxed text-navy/70">
              This document is a working draft. Final language is pending review by
              counsel and should not be treated as a binding policy until that
              review is complete.
            </div>
          </RevealItem>
        </Reveal>

        <Reveal className="mt-12 space-y-10 text-[16px] leading-[1.75] text-navy/75">
          <RevealItem>
            <p>
              Ipsa (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) provides
              a marketing-mix-modeling platform for advertising agencies and
              in-house marketers. This Privacy Policy describes the information we
              collect when you visit our website or use our services, how we use
              that information, and the choices you have.
            </p>
          </RevealItem>

          <RevealItem>
            <h2 className="mb-3 font-display text-2xl text-navy">
              1. Information we collect
            </h2>
            <p>
              When you submit a demo request or contact us, we collect the
              information you give us — typically your name, work email, agency or
              company, role, and a high-level description of your current
              marketing-measurement setup. When you visit our site, we collect
              standard log information such as browser type, pages visited, and
              approximate location derived from your IP address.
            </p>
          </RevealItem>

          <RevealItem>
            <h2 className="mb-3 font-display text-2xl text-navy">
              2. How we use information
            </h2>
            <p>
              We use the information you provide to respond to your inquiries,
              schedule demos, deliver and improve our services, communicate about
              product updates, and meet legal or contractual obligations. We do
              not sell your personal information.
            </p>
          </RevealItem>

          <RevealItem>
            <h2 className="mb-3 font-display text-2xl text-navy">
              3. How we share information
            </h2>
            <p>
              We share information with service providers that help us operate
              the business — for example, email infrastructure, customer-relationship
              management, analytics, and hosting. These providers are bound by
              contract to use your information only for the services they perform
              for us. We may also disclose information when required by law or to
              protect our rights, property, or safety.
            </p>
          </RevealItem>

          <RevealItem>
            <h2 className="mb-3 font-display text-2xl text-navy">
              4. Data retention
            </h2>
            <p>
              We keep personal information only as long as needed for the purposes
              described in this policy or as required by law. When information is
              no longer needed, we delete or anonymize it.
            </p>
          </RevealItem>

          <RevealItem>
            <h2 className="mb-3 font-display text-2xl text-navy">
              5. Your rights
            </h2>
            <p>
              Depending on where you live, you may have the right to access,
              correct, delete, or port the personal information we hold about you,
              and to object to or restrict certain processing. To exercise these
              rights, email{" "}
              <a className="text-forest underline" href="mailto:privacy@getipsa.ai">
                privacy@getipsa.ai
              </a>
              .
            </p>
          </RevealItem>

          <RevealItem>
            <h2 className="mb-3 font-display text-2xl text-navy">
              6. Cookies and similar technologies
            </h2>
            <p>
              We use a small number of cookies and similar technologies to keep
              the site functional and to understand how visitors use it. You can
              control cookies through your browser settings; doing so may affect
              site functionality.
            </p>
          </RevealItem>

          <RevealItem>
            <h2 className="mb-3 font-display text-2xl text-navy">
              7. Security
            </h2>
            <p>
              We use reasonable administrative, technical, and physical safeguards
              to protect personal information. No method of transmission or
              storage is fully secure, and we cannot guarantee absolute security.
            </p>
          </RevealItem>

          <RevealItem>
            <h2 className="mb-3 font-display text-2xl text-navy">
              8. Changes to this policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we
              will revise the &ldquo;Last updated&rdquo; date above and, where
              appropriate, provide additional notice.
            </p>
          </RevealItem>

          <RevealItem>
            <h2 className="mb-3 font-display text-2xl text-navy">
              9. Contact
            </h2>
            <p>
              Questions about this policy or our privacy practices? Email{" "}
              <a className="text-forest underline" href="mailto:privacy@getipsa.ai">
                privacy@getipsa.ai
              </a>
              .
            </p>
          </RevealItem>
        </Reveal>
      </div>
    </main>
  );
}
