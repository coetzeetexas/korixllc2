import { useState } from "react";
import { GraduationCap, ShieldCheck, ClipboardList, Wrench, FileSearch, FileSpreadsheet, Users2, Building2 } from "lucide-react";

const management = [
  { icon: ClipboardList, title: "Contract Administration", desc: "Award capture, CLIN management, mod processing, and CPARS-ready performance reporting." },
  { icon: FileSpreadsheet, title: "Invoicing & WAWF", desc: "We own the paperwork — IPP, WAWF, and DCAA-aligned billing so your COR sees one clean invoice." },
  { icon: FileSearch, title: "FOIA & Bid Intelligence", desc: "Historical award analysis and FOIA-driven pricing intel inform every proposal we touch." },
  { icon: ShieldCheck, title: "Compliance & Oversight", desc: "FAR/DFARS gatekeeping, sub flow-downs, and continuous quality assurance on every task order." },
];

const delivery = [
  { icon: GraduationCap, title: "Training & Workforce Development", desc: "Recession-resistant: agencies buy training every fiscal year regardless of the economy." },
  { icon: Users2, title: "Instructor & SME Staffing", desc: "Cleared instructors and subject-matter experts mobilized through our subcontractor bench." },
  { icon: Wrench, title: "Technical & Field Services", desc: "Specialist crews execute on-site — installation, maintenance, and mission support." },
  { icon: Building2, title: "Facility & Logistics Support", desc: "Course delivery sites, materials, and end-to-end logistics for multi-region programs." },
];

export function Services() {
  const [tab, setTab] = useState<"management" | "delivery">("management");
  const items = tab === "management" ? management : delivery;

  return (
    <section id="services" className="relative bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-flag">The Middleman Model · One Accountable Prime</p>
          <h2 className="mt-3 text-4xl text-navy md:text-5xl">We carry the contract. Our experts carry the work.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Agencies don't want to manage twenty vendors. KORIX consolidates contracting, oversight,
            and invoicing into one prime relationship — then deploys the specialist subcontractors
            who actually execute on the ground.
          </p>
        </div>

        <div className="mt-10 inline-flex rounded-xl border border-border bg-card p-1 shadow-card">
          <button
            type="button"
            onClick={() => setTab("management")}
            className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${tab === "management" ? "bg-navy text-white" : "text-muted-foreground hover:text-navy"}`}
          >
            Prime Contract Management
          </button>
          <button
            type="button"
            onClick={() => setTab("delivery")}
            className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${tab === "delivery" ? "bg-navy text-white" : "text-muted-foreground hover:text-navy"}`}
          >
            Mission Delivery
          </button>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s) => {
            const Icon = s.icon;
            return (
              <li
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="absolute right-0 top-0 h-1 w-full origin-left scale-x-0 bg-red-flag transition-transform group-hover:scale-x-100" aria-hidden />
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 rounded-2xl border border-dashed border-border bg-card p-6 md:flex md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-bold text-navy">Have an RFP or sources-sought notice?</h3>
            <p className="mt-1 text-sm text-muted-foreground">Send it over — we'll respond with a teaming structure within one business day.</p>
          </div>
          <a href="#contact" className="mt-4 inline-flex rounded-md bg-red-flag px-5 py-2.5 text-sm font-semibold text-white md:mt-0">
            Submit an opportunity →
          </a>
        </div>
      </div>
    </section>
  );
}
