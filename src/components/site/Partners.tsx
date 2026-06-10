import { GraduationCap, ShieldCheck, TrendingDown, Landmark } from "lucide-react";

const metrics = [
  { icon: GraduationCap, k: "Training", t: "Recession-Resistant Spend", d: "Federal mandatory training budgets continue every fiscal year — independent of administration or economic cycle." },
  { icon: Landmark, k: "FOIA", t: "Informed Bid Strategy", d: "We mine FOIA releases and USAspending data so every proposal reflects realistic, defensible pricing." },
  { icon: ShieldCheck, k: "One Prime", t: "Single Accountable Party", d: "Your CO and COR deal with one vendor — KORIX absorbs the sub-management complexity." },
  { icon: TrendingDown, k: "Lower Risk", t: "Diversified Sub Bench", d: "Multiple cleared subcontractors per capability area means no single point of failure on delivery." },
];

export function Partners() {
  return (
    <section id="why" className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 grid-overlay-dark opacity-60" aria-hidden />
      <div className="absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-red-flag/20 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-flag">Why Korix</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Built to de-risk federal delivery.</h2>
          <p className="mt-5 text-lg text-white/75">
            Government buyers are judged on schedule, cost, and quality. We focus exclusively on
            services the government buys every year — training, workforce development, and
            mandatory technical support — and we structure every award to protect the agency from
            sub failure, scope creep, and audit exposure.
          </p>
          <a href="#contact" className="mt-8 inline-flex rounded-md bg-red-flag px-6 py-3 text-sm font-semibold shadow-elegant transition-transform hover:-translate-y-0.5">
            Request capability statement
          </a>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 md:col-span-7">
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <li key={m.t} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all hover:border-red-flag/60 hover:bg-white/[0.07]">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-red-flag/15 text-red-flag">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-5 text-3xl font-bold text-white">{m.k}</p>
                <h3 className="mt-1 text-base font-bold uppercase tracking-wider text-white/90">{m.t}</h3>
                <p className="mt-2 text-sm text-white/70">{m.d}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
