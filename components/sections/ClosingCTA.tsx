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

function SuccessPanel({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center gap-6 py-6">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path
            d="M7 16.5L13 22.5L25 10"
            stroke="#2E5E45"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="space-y-2 text-center">
        <h2 className="font-display text-[clamp(26px,3.5vw,44px)] font-semibold leading-[1.1] tracking-[-0.025em] text-anchor">
          We&rsquo;ll be in touch.
        </h2>
        <p className="text-[17px] leading-[1.6] text-forest">
          Thanks for reaching out &mdash; someone from the Ipsa team will email you
          within 1&ndash;2 business days.
        </p>
      </div>
      <a
        href="https://getipsa.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full bg-sienna px-6 py-3 text-sm font-medium text-warm-white shadow-[0_4px_14px_rgba(123,52,32,0.25)] transition-all duration-300 will-change-transform hover:-translate-y-0.5 hover:bg-sienna-deep hover:shadow-[0_10px_28px_-6px_rgba(123,52,32,0.45)]"
      >
        Explore getipsa.ai →
      </a>
      <button
        type="button"
        onClick={onReset}
        className="text-[13px] text-anchor/45 underline-offset-2 transition hover:text-forest hover:underline"
      >
        Submit another request
      </button>
    </div>
  );
}

export function ClosingCTA() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  }

  return (
    <section id="book-demo" className="bg-surface px-7 py-10 md:py-12">
      <div
        className="mx-auto max-w-[860px] rounded-3xl border border-anchor/12 bg-warm-white px-8 py-16 text-center md:px-12 md:py-[72px]"
        style={{
          boxShadow:
            "0 24px 60px -30px rgba(28,56,41,0.18), 0 8px 20px -12px rgba(28,56,41,0.18)",
        }}
      >
        {submitted ? (
          <SuccessPanel onReset={() => { setSubmitted(false); setEmailError(""); }} />
        ) : (
          <>
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
              Yearly ad spend you manage
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
            <label htmlFor="cta-measurement" className={labelBase}>
              How are you currently measuring marketing effectiveness?
            </label>
            <select id="cta-measurement" name="measurement" required defaultValue="" className={inputBase}>
              <option value="" disabled>
                Select an option
              </option>
              <option value="mmm">We use MMM</option>
              <option value="attribution">Attribution / last-touch only</option>
              <option value="spreadsheet">Spreadsheets / manual</option>
              <option value="nothing">Nothing formal yet</option>
            </select>
          </div>
          <div className="space-y-1.5 md:col-span-2">
            <label htmlFor="cta-challenge" className={labelBase}>
              What&rsquo;s your biggest challenge with marketing spend decisions?
            </label>
            <select id="cta-challenge" name="challenge" required defaultValue="" className={inputBase}>
              <option value="" disabled>
                Select an option
              </option>
              <option value="roi">Proving ROI to clients / stakeholders</option>
              <option value="pipeline">Data pipeline &amp; reporting time</option>
              <option value="allocation">Budget allocation across channels</option>
              <option value="no-process">We don&rsquo;t have a measurement process yet</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="space-y-1.5 md:col-span-2">
            <label htmlFor="cta-pain" className={labelBase}>
              Add any additional information <span className="text-anchor/40">(optional)</span>
            </label>
            <textarea
              id="cta-pain"
              name="pain"
              rows={3}
              placeholder="Anything else you'd like us to know…"
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
          </>
        )}
      </div>
    </section>
  );
}
