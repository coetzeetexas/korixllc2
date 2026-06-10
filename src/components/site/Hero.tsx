import { ArrowRight, Briefcase, Users, Flag } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-background">
      <div className="absolute inset-0 grid-overlay opacity-60" aria-hidden />
      <div className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-red-flag/10 blur-3xl" aria-hidden />
      <div className="absolute -bottom-40 -left-32 h-[520px] w-[520px] rounded-full bg-navy/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-12 md:gap-10 md:px-8 md:py-28">
        <div className="md:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <Flag className="h-3 w-3 text-red-flag" />
            U.S. Federal Prime & Project Management Partner
          </span>
          <h1 className="mt-6 text-4xl leading-[1.05] text-navy sm:text-5xl md:text-6xl">
            Master the Skills. <span className="text-red-flag">Own</span> the Mission.<br />
            Multiply the <span className="text-red-flag">Success.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            KORIX LLC is the accountable prime contractor that government agencies trust to manage
            complex awards end-to-end. We handle the contracting, invoicing, and oversight while
            our vetted subcontractor bench executes the work in the field.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-red-flag px-6 py-3 text-sm font-semibold text-white shadow-elegant transition-transform hover:-translate-y-0.5">
              Request a Capability Briefing
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-secondary">
              Explore Capabilities
            </a>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { k: "sam.gov", v: "Registered & active" },
              { k: "14 days", v: "Sub mobilization" },
              { k: "100%", v: "FOIA transparent" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="text-2xl font-bold text-navy md:text-3xl">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="md:col-span-5">
          <div className="relative grid gap-4">
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="absolute right-0 top-0 h-1 w-full bg-red-flag" aria-hidden />
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-navy text-white">
                  <Briefcase className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-red-flag">Pillar 01 · The Middleman</p>
                  <h2 className="mt-1 text-xl font-bold text-navy">Prime Contractor of Record</h2>
                  <p className="mt-2 text-sm text-muted-foreground">We own the contract, the compliance, and the invoicing — so your agency has one accountable party.</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="absolute right-0 top-0 h-1 w-full bg-navy" aria-hidden />
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-red-flag text-white">
                  <Users className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-red-flag">Pillar 02 · The Bench</p>
                  <h2 className="mt-1 text-xl font-bold text-navy">Vetted Subcontractor Network</h2>
                  <p className="mt-2 text-sm text-muted-foreground">Cleared specialists and instructors execute the physical work — training, logistics, technical services.</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-dashed border-border bg-secondary/60 p-5">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Focused on recession-resistant demand</p>
              <p className="mt-2 text-sm font-semibold text-navy">Training · Workforce Development · Mandatory Compliance Services</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
