"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { closingCTA } from "@/content/copy";

const inputBase =
  "w-full rounded-xl border border-anchor/15 bg-warm-white px-4 py-3 text-[15px] text-anchor placeholder:text-anchor/40 transition-colors focus:border-forest focus:outline-none focus:ring-2 focus:ring-accent/40";

const labelBase =
  "block text-left text-[12px] font-medium uppercase tracking-[0.12em] text-forest";

const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.co.uk",
  "yahoo.ca",
  "yahoo.fr",
  "yahoo.de",
  "ymail.com",
  "rocketmail.com",
  "hotmail.com",
  "hotmail.co.uk",
  "outlook.com",
  "live.com",
  "msn.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "pm.me",
  "gmx.com",
  "gmx.us",
  "mail.com",
  "yandex.com",
  "yandex.ru",
  "zoho.com",
  "fastmail.com",
  "hey.com",
  "duck.com",
  "tutanota.com",
  "tuta.io",
  "qq.com",
  "163.com",
  "126.com",
]);

function isFreeEmailDomain(domain: string): boolean {
  if (FREE_EMAIL_DOMAINS.has(domain)) return true;
  for (const blocked of FREE_EMAIL_DOMAINS) {
    if (domain.endsWith(`.${blocked}`)) return true;
  }
  return false;
}

function getEmailDomainError(value: string): string {
  const trimmed = value.trim().toLowerCase();
  if (!trimmed) return "";
  const at = trimmed.lastIndexOf("@");
  if (at === -1 || at === trimmed.length - 1) return "";
  const domain = trimmed.slice(at + 1);
  if (isFreeEmailDomain(domain)) {
    return "Please use your work email — personal email providers aren't accepted.";
  }
  return "";
}

export function ClosingCTA() {
  const [submitting, setSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    const msg = getEmailDomainError(e.target.value);
    setEmailError(msg);
    e.target.setCustomValidity(msg);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const emailEl = e.currentTarget.elements.namedItem(
      "email"
    ) as HTMLInputElement | null;
    const msg = emailEl ? getEmailDomainError(emailEl.value) : "";
    if (msg && emailEl) {
      setEmailError(msg);
      emailEl.setCustomValidity(msg);
      emailEl.reportValidity();
      return;
    }
    setSubmitting(true);
    if (typeof window !== "undefined") {
      window.open(closingCTA.cta.href, "_blank", "noopener,noreferrer");
    }
    setTimeout(() => setSubmitting(false), 600);
  }

  return (
    <section className="bg-surface px-7 py-10 md:py-12">
      <div
        className="mx-auto max-w-[860px] rounded-3xl border border-anchor/12 bg-warm-white px-8 py-16 text-center md:px-12 md:py-[72px]"
        style={{
          boxShadow:
            "0 24px 60px -30px rgba(28,56,41,0.18), 0 8px 20px -12px rgba(28,56,41,0.18)",
        }}
      >
        <h2 className="font-display text-[clamp(30px,4vw,54px)] font-semibold leading-[1.1] tracking-[-0.025em] text-anchor">
          {closingCTA.headline}
        </h2>
        <p className="mt-3.5 text-[17px] leading-[1.6] text-forest">{closingCTA.sub}</p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 grid max-w-[640px] grid-cols-1 gap-4 md:grid-cols-2"
        >
          <div className="space-y-1.5 md:col-span-1">
            <label htmlFor="cta-name" className={labelBase}>
              Name
            </label>
            <input
              id="cta-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Jane Analyst"
              className={inputBase}
            />
          </div>
          <div className="space-y-1.5 md:col-span-1">
            <label htmlFor="cta-email" className={labelBase}>
              Work email
            </label>
            <input
              id="cta-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="jane@agency.com"
              onChange={handleEmailChange}
              aria-invalid={emailError ? true : undefined}
              aria-describedby={emailError ? "cta-email-error" : undefined}
              className={`${inputBase} ${
                emailError ? "border-coral focus:border-coral focus:ring-coral/30" : ""
              }`}
            />
            {emailError ? (
              <p
                id="cta-email-error"
                className="text-left text-[12px] leading-snug text-coral"
              >
                {emailError}
              </p>
            ) : null}
          </div>
          <div className="space-y-1.5 md:col-span-1">
            <label htmlFor="cta-company" className={labelBase}>
              Agency / Company
            </label>
            <input
              id="cta-company"
              name="company"
              type="text"
              required
              autoComplete="organization"
              placeholder="Omnicom, Annalect, in-house…"
              className={inputBase}
            />
          </div>
          <div className="space-y-1.5 md:col-span-1">
            <label htmlFor="cta-role" className={labelBase}>
              Role
            </label>
            <select id="cta-role" name="role" required defaultValue="" className={inputBase}>
              <option value="" disabled>
                Select your role
              </option>
              <option value="analyst">Analyst</option>
              <option value="manager">Manager / Director</option>
              <option value="exec">Founder / Executive</option>
              <option value="marketer">In-house marketer</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="space-y-1.5 md:col-span-2">
            <label htmlFor="cta-spend" className={labelBase}>
              Monthly ad spend you manage
            </label>
            <select id="cta-spend" name="spend" required defaultValue="" className={inputBase}>
              <option value="" disabled>
                Select a range
              </option>
              <option value="<100k">Under $100k</option>
              <option value="100k-1m">$100k – $1M</option>
              <option value="1m-10m">$1M – $10M</option>
              <option value="10m+">$10M+</option>
            </select>
          </div>
          <div className="space-y-1.5 md:col-span-2">
            <label htmlFor="cta-pain" className={labelBase}>
              Biggest MMM pain right now <span className="text-anchor/40">(optional)</span>
            </label>
            <textarea
              id="cta-pain"
              name="pain"
              rows={3}
              placeholder="Pipelines, explainability, turnaround time…"
              className={`${inputBase} resize-none`}
            />
          </div>

          <div className="md:col-span-2 mt-2 flex flex-col items-center gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-full bg-sienna px-6 py-3 text-sm font-medium text-warm-white shadow-[0_4px_14px_rgba(123,52,32,0.25)] transition-all duration-300 will-change-transform hover:-translate-y-0.5 hover:bg-sienna-deep hover:shadow-[0_10px_28px_-6px_rgba(123,52,32,0.45)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {submitting ? "Sending…" : closingCTA.cta.label}
            </button>
            <p className="max-w-md text-center text-[12px] leading-snug text-anchor/55">
              By submitting, you agree to be contacted about Ipsa. We&rsquo;ll
              never share your details. See our{" "}
              <a className="underline transition hover:text-forest" href="/privacy">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
