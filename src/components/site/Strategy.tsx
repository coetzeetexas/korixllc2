const steps = [
  { n: "01", t: "Capture", d: "Sources-sought analysis, FOIA pulls on prior awards, and incumbent intelligence to build a defensible win strategy." },
  { n: "02", t: "Team", d: "Stand up the prime/sub structure, execute teaming agreements, and lock in cleared specialists from our bench." },
  { n: "03", t: "Deliver", d: "Mobilize subcontractors within 14 days, manage CLINs and mods, and run weekly performance reviews with the COR." },
  { n: "04", t: "Report", d: "WAWF/IPP invoicing, CPARS-ready performance data, and FOIA-transparent records that protect the agency at audit." },
];

export function Strategy() {
  return (
    <section id="methodology" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-flag">The Korix Methodology</p>
            <h2 className="mt-3 text-4xl text-navy md:text-5xl">A rigorous framework — built for ROI.</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              The same four-phase operating system runs every engagement, whether it's a six-week
              diagnostic or a multi-year outsourcing partnership. Predictable. Repeatable.
              Accountable.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border-l-4 border-red-flag bg-card p-5 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">First diagnostic</p>
                <p className="mt-2 text-3xl font-bold text-navy">≤ 6 wks</p>
              </div>
              <div className="rounded-xl border-l-4 border-red-flag bg-card p-5 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Time to value</p>
                <p className="mt-2 text-3xl font-bold text-navy">≤ 90 days</p>
              </div>
            </div>
          </div>

          <ol className="relative md:col-span-7">
            <span className="absolute left-5 top-2 bottom-2 w-px bg-border md:left-6" aria-hidden />
            {steps.map((s) => (
              <li key={s.n} className="relative mb-6 pl-16 md:pl-20">
                <span className="absolute left-0 top-0 grid h-11 w-11 place-items-center rounded-xl bg-navy text-sm font-bold text-white md:h-12 md:w-12">
                  {s.n}
                </span>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                  <h3 className="text-xl font-bold text-navy">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
