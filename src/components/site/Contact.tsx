import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(120).optional(),
  industry: z.string().min(1, "Select an industry"),
  need: z.string().min(1, "Select a service need"),
  message: z.string().trim().max(1000).optional(),
});

const industries = ["Federal Civilian Agency", "Department of Defense", "State / Local Government", "Prime Contractor (Teaming)", "Subcontractor (Bench)", "Other"];
const needs = ["Prime contractor on an RFP", "Teaming / subcontracting", "Training & workforce delivery", "Capability statement request", "Not sure — advise me"];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      setStatus("err");
      return;
    }
    setErrors({});
    setStatus("ok");
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-background py-24">
      <div className="absolute inset-0 grid-overlay opacity-50" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-flag">Book a Consultation</p>
          <h2 className="mt-3 text-4xl text-navy md:text-5xl">Let's map your next quarter.</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Tell us where the friction lives. A senior partner will respond within one business
            day with a tailored 30-minute strategic assessment.
          </p>

          <div className="mt-10 space-y-4">
            <a href="mailto:info@korixllc.com" className="block rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-red-flag">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-flag">Enterprise & Mid-Market</p>
              <p className="mt-1 text-base font-semibold text-navy">info@korixllc.com</p>
            </a>
            <a href="mailto:partner@korixllc.com" className="block rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-red-flag">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-flag">Partnerships & Talent</p>
              <p className="mt-1 text-base font-semibold text-navy">partner@korixllc.com</p>
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-border bg-card p-6 shadow-elegant md:col-span-7 md:p-10">
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Full name" name="name" required error={errors.name} />
            <Field label="Work email" name="email" type="email" required error={errors.email} />
            <Field label="Company" name="company" error={errors.company} />
            <Select label="Industry" name="industry" options={industries} required error={errors.industry} />
            <div className="md:col-span-2">
              <Select label="What do you need?" name="need" options={needs} required error={errors.need} />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-semibold text-navy">Tell us about the bottleneck</label>
              <textarea
                name="message"
                rows={4}
                maxLength={1000}
                className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-red-flag/40"
                placeholder="Cycle time, cost, quality, headcount, tooling…"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-red-flag px-6 py-3 text-sm font-semibold text-white shadow-elegant transition-transform hover:-translate-y-0.5 md:w-auto"
          >
            Schedule a Strategic Assessment
          </button>

          {status === "ok" && (
            <p className="mt-4 text-sm font-medium text-navy">Thanks — we'll be in touch within one business day.</p>
          )}
          {status === "err" && (
            <p className="mt-4 text-sm font-medium text-red-flag">Please fix the highlighted fields and resubmit.</p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, error }: { label: string; name: string; type?: string; required?: boolean; error?: string }) {
  return (
    <div>
      <label className="text-sm font-semibold text-navy">
        {label} {required && <span className="text-red-flag">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-red-flag/40"
      />
      {error && <p className="mt-1 text-xs text-red-flag">{error}</p>}
    </div>
  );
}

function Select({ label, name, options, required, error }: { label: string; name: string; options: string[]; required?: boolean; error?: string }) {
  return (
    <div>
      <label className="text-sm font-semibold text-navy">
        {label} {required && <span className="text-red-flag">*</span>}
      </label>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-red-flag/40"
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-red-flag">{error}</p>}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-deep py-12 text-white/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3 md:px-8">
        <div>
          <p className="text-base font-bold text-white">KORIX <span className="text-red-flag">LLC</span></p>
          <p className="mt-2 text-sm">Consulting & Outsourcing Specialist Agency</p>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-white">Contact</p>
          <p className="mt-2">info@korixllc.com</p>
          <p>partner@korixllc.com</p>
        </div>
        <div className="flex items-start gap-3 text-sm md:justify-end md:text-right">
          <div className="md:order-2">
            <p className="font-semibold text-white">Headquarters</p>
            <p className="mt-2">3737 Timberglen Rd</p>
            <p>Dallas, Texas, USA</p>
          </div>
          <svg
            viewBox="0 0 100 100"
            aria-hidden="true"
            className="h-12 w-12 shrink-0 text-red-flag md:order-1 sm:h-14 sm:w-14"
            fill="currentColor"
          >
            <polygon points="50,5 61,38 96,38 67,59 78,93 50,72 22,93 33,59 4,38 39,38" />
          </svg>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 px-4 pt-6 text-xs md:flex-row md:px-8">
        <p>© {new Date().getFullYear()} KORIX <span className="text-red-flag">LLC</span>. All rights reserved. <span className="ml-2 text-white/50">EIN: 42-2983677</span></p>
        <nav aria-label="Legal" className="flex items-center gap-5">
          <a href="/terms" className="text-white/70 transition-colors hover:text-red-flag">Terms & Conditions</a>
          <a href="/privacy" className="text-white/70 transition-colors hover:text-red-flag">Privacy Policy</a>
        </nav>
        <p className="uppercase tracking-widest text-red-flag">Fokus Execute Win</p>
      </div>
    </footer>
  );
}
