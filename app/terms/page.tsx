import type { Metadata } from "next";
import { Reveal, RevealItem } from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "Terms of Service — Ipsa",
  description: "The terms that govern your use of the Ipsa website and services.",
};

const LAST_UPDATED = "April 30, 2026";

export default function TermsPage() {
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
              Terms of Service
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="mt-4 text-sm text-navy/55">Last updated: {LAST_UPDATED}</p>
          </RevealItem>
          <RevealItem>
            <div className="mt-6 rounded-2xl border border-forest/20 bg-surface p-5 text-sm leading-relaxed text-navy/70">
              This document is a working draft. Final language is pending review by
              counsel and should not be treated as a binding agreement until that
              review is complete.
            </div>
          </RevealItem>
        </Reveal>

        <Reveal className="mt-12 space-y-10 text-[16px] leading-[1.75] text-navy/75">
          <RevealItem>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to
              and use of the Ipsa website and services (the &ldquo;Service&rdquo;)
              provided by Ipsa (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
              &ldquo;our&rdquo;). By using the Service, you agree to these Terms.
              If you do not agree, do not use the Service.
            </p>
          </RevealItem>

          <RevealItem>
            <h2 className="mb-3 font-display text-2xl text-navy">
              1. Acceptance and eligibility
            </h2>
            <p>
              You must be at least the age of majority in your jurisdiction and
              authorized to bind your organization to these Terms when you use
              the Service on behalf of an employer or client.
            </p>
          </RevealItem>

          <RevealItem>
            <h2 className="mb-3 font-display text-2xl text-navy">
              2. Use of the Service
            </h2>
            <p>
              We grant you a limited, non-exclusive, non-transferable, revocable
              right to access and use the Service for your internal business
              purposes, subject to these Terms and any order form or
              subscription agreement.
            </p>
          </RevealItem>

          <RevealItem>
            <h2 className="mb-3 font-display text-2xl text-navy">
              3. Accounts and access
            </h2>
            <p>
              You are responsible for maintaining the confidentiality of your
              credentials and for all activity that occurs under your account.
              Notify us promptly at{" "}
              <a className="text-forest underline" href="mailto:security@getipsa.ai">
                security@getipsa.ai
              </a>{" "}
              if you suspect unauthorized access.
            </p>
          </RevealItem>

          <RevealItem>
            <h2 className="mb-3 font-display text-2xl text-navy">
              4. Acceptable use
            </h2>
            <p>
              You agree not to misuse the Service, including by attempting to
              gain unauthorized access, interfering with operation, scraping at
              scale, reverse engineering, or using the Service to infringe the
              rights of others or violate applicable law.
            </p>
          </RevealItem>

          <RevealItem>
            <h2 className="mb-3 font-display text-2xl text-navy">
              5. Customer data
            </h2>
            <p>
              You retain ownership of the data you submit to the Service. You
              grant us a limited license to process that data solely to provide,
              maintain, and improve the Service in accordance with our Privacy
              Policy and any applicable data processing agreement.
            </p>
          </RevealItem>

          <RevealItem>
            <h2 className="mb-3 font-display text-2xl text-navy">
              6. Intellectual property
            </h2>
            <p>
              The Service, including its software, design, and content, is owned
              by Ipsa and protected by intellectual-property law. These Terms do
              not transfer any ownership rights to you.
            </p>
          </RevealItem>

          <RevealItem>
            <h2 className="mb-3 font-display text-2xl text-navy">
              7. Disclaimers
            </h2>
            <p>
              The Service is provided &ldquo;as is&rdquo; and &ldquo;as
              available,&rdquo; without warranties of any kind, whether express
              or implied. We do not warrant that the Service will be uninterrupted,
              error-free, or that any model output will be accurate or fit for a
              particular purpose.
            </p>
          </RevealItem>

          <RevealItem>
            <h2 className="mb-3 font-display text-2xl text-navy">
              8. Limitation of liability
            </h2>
            <p>
              To the maximum extent permitted by law, Ipsa will not be liable for
              indirect, incidental, special, consequential, or punitive damages,
              or for lost profits or revenues, arising from your use of the
              Service. Our total liability for any claim relating to the Service
              will not exceed the amounts you paid to us for the Service in the
              twelve months preceding the claim.
            </p>
          </RevealItem>

          <RevealItem>
            <h2 className="mb-3 font-display text-2xl text-navy">
              9. Termination
            </h2>
            <p>
              We may suspend or terminate your access to the Service at any time
              for any breach of these Terms. You may stop using the Service at
              any time. Provisions intended to survive termination will do so.
            </p>
          </RevealItem>

          <RevealItem>
            <h2 className="mb-3 font-display text-2xl text-navy">
              10. Governing law
            </h2>
            <p>
              These Terms are governed by the laws of the jurisdiction in which
              Ipsa is organized, without regard to conflict-of-laws principles.
              The specific governing-law and venue provisions will be confirmed
              once final language is reviewed by counsel.
            </p>
          </RevealItem>

          <RevealItem>
            <h2 className="mb-3 font-display text-2xl text-navy">
              11. Changes to these Terms
            </h2>
            <p>
              We may update these Terms from time to time. When we do, we will
              revise the &ldquo;Last updated&rdquo; date above and, where
              appropriate, provide additional notice.
            </p>
          </RevealItem>

          <RevealItem>
            <h2 className="mb-3 font-display text-2xl text-navy">
              12. Contact
            </h2>
            <p>
              Questions about these Terms? Email{" "}
              <a className="text-forest underline" href="mailto:legal@getipsa.ai">
                legal@getipsa.ai
              </a>
              .
            </p>
          </RevealItem>
        </Reveal>
      </div>
    </main>
  );
}
