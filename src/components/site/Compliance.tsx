import { FileSearch, ScrollText, Landmark, ShieldCheck } from "lucide-react";

const trust = [
  { icon: FileSearch, t: "FOIA-Informed Proposals", d: "We routinely pull awarded contracts, price histories, and past-performance data from FOIA channels to ground every bid in reality." },
  { icon: Landmark, t: "USAspending Transparency", d: "Every active KORIX award is public record. We welcome agencies to verify our delivery footprint and obligation history." },
  { icon: ScrollText, t: "Public-Facing Compliance", d: "SAM.gov registration, UEI, CAGE, and applicable NAICS codes are published openly — no opaque qualifications." },
  { icon: ShieldCheck, t: "Sub Flow-Down Discipline", d: "Every subcontractor signs FAR/DFARS flow-downs, NDAs, and conflict-of-interest disclosures before touching a task order." },
];

export function Compliance() {
  return (
    <section id="trust" className="relative overflow-hidden bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-flag">Transparency & Compliance</p>
            <h2 className="mt-3 text-4xl text-navy md:text-5xl">An astute, FOIA-fluent partner.</h2>
            <p className="mt-5 text-muted-foreground">
              Agencies prefer vendors who understand their own oversight regime. KORIX operates as
              a public-record-first business — we use the same Freedom of Information Act and
              historical data tools that government auditors do, so nothing about our pricing,
              performance, or partners is a surprise.
            </p>
          </div>

          <dl className="grid gap-5 sm:grid-cols-2 md:col-span-2">
            {trust.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.t} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-red-flag/10 text-red-flag">
                    <Icon className="h-5 w-5" />
                  </span>
                  <dt className="mt-4 text-lg font-bold text-navy">{b.t}</dt>
                  <dd className="mt-2 text-sm text-muted-foreground">{b.d}</dd>
                </div>
              );
            })}
          </dl>
        </div>

        <div id="insights" className="mt-20 rounded-3xl border border-border bg-navy p-8 text-white md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-flag">Mission Focus</p>
          <h3 className="mt-3 text-3xl md:text-4xl">Recession-resistant categories the government always funds.</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { tag: "Workforce Training", k: "Annual", t: "mandatory spend", d: "OPM, DoD, and civilian agency training requirements renew every fiscal year — regardless of administration." },
              { tag: "Compliance Education", k: "Required", t: "by statute", d: "Cybersecurity, ethics, EEO, and safety training are legally mandated — not discretionary line items." },
              { tag: "Mission Readiness", k: "Continuous", t: "operational need", d: "Instructor support, simulation services, and field exercises run year-round, recession or not." },
            ].map((c) => (
              <article key={c.tag} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-red-flag">{c.tag}</p>
                <p className="mt-4 text-4xl font-bold">{c.k}</p>
                <p className="text-sm uppercase tracking-wider text-white/70">{c.t}</p>
                <p className="mt-3 text-sm text-white/75">{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
