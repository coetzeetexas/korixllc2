import { Link } from "react-router-dom";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Contact";

type Section = { h: string; p: React.ReactNode };

function LegalLayout({ title, updated, intro, sections }: { title: string; updated: string; intro: string; sections: Section[] }) {
  return (
    <div className="min-h-dvh bg-background">
      <Nav />
      <main>
        <section className="relative overflow-hidden bg-secondary py-20">
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            <Link to="/" className="text-xs font-semibold uppercase tracking-[0.3em] text-red-flag hover:underline">
              ← Back to Home
            </Link>
            <h1 className="mt-4 text-4xl text-navy md:text-5xl">{title}</h1>
            <p className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">Last updated: {updated}</p>
            <p className="mt-6 text-lg text-muted-foreground">{intro}</p>
          </div>
        </section>

        <section className="bg-background py-16">
          <div className="mx-auto max-w-4xl space-y-10 px-4 md:px-8">
            {sections.map((s, i) => (
              <article key={s.h}>
                <h2 className="text-2xl font-bold text-navy">
                  <span className="text-red-flag">{String(i + 1).padStart(2, "0")}.</span> {s.h}
                </h2>
                <div className="mt-3 space-y-3 text-base leading-relaxed text-muted-foreground">{s.p}</div>
              </article>
            ))}

            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <p className="text-sm font-semibold text-navy">Questions?</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Contact us at <a href="mailto:info@korixllc.com" className="font-semibold text-red-flag hover:underline">info@korixllc.com</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function Terms() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      updated="June 4, 2026"
      intro="These Terms & Conditions govern your use of the KORIX LLC website and any consulting or outsourcing services we provide. By engaging with us, you agree to the terms below."
      sections={[
        { h: "Acceptance of Terms", p: <p>By accessing korixllc.com or executing a statement of work with KORIX LLC ("Korix," "we," "us"), you agree to be bound by these Terms. If you do not agree, please discontinue use of the site and our services.</p> },
        { h: "Services", p: <p>Korix provides consulting and outsourcing services. Specific scope, deliverables, fees, and timelines are defined in a separately executed engagement letter or master services agreement that supersedes general statements on this site.</p> },
        { h: "Client Responsibilities", p: <p>Clients agree to provide accurate information, timely access to systems and stakeholders, and lawful instructions. Delays or inaccuracies in client-supplied inputs may affect schedules and outcomes.</p> },
        { h: "Fees & Payment", p: <p>Invoices are payable net 15 days from issuance unless otherwise agreed in writing. Late balances may accrue interest at 1.5% per month or the maximum permitted by law, whichever is lower.</p> },
        { h: "Confidentiality", p: <p>Both parties will protect non-public information disclosed during an engagement with at least the same care used for their own confidential information, and will not disclose it except as required to perform the services or by law.</p> },
        { h: "Intellectual Property", p: <p>Pre-existing IP remains with its owner. Work product created specifically for a client under a paid engagement is assigned to the client upon full payment, excluding Korix tools, frameworks, and methodologies, which remain our property under a perpetual license to the client for internal use.</p> },
        { h: "Warranties & Disclaimers", p: <p>Services are performed in a professional and workmanlike manner. Except as expressly stated in a signed agreement, the site and services are provided "as is" without warranties of any kind, express or implied.</p> },
        { h: "Limitation of Liability", p: <p>To the maximum extent permitted by law, Korix's aggregate liability arising out of any engagement shall not exceed the fees paid by the client to Korix in the three (3) months preceding the claim. Korix is not liable for indirect, incidental, or consequential damages.</p> },
        { h: "Governing Law & Venue (Texas)", p: <p>KORIX LLC is a limited liability company organized under the laws of the State of Texas, with headquarters at 3737 Timberglen Rd, Dallas, Texas, USA. These Terms are governed by the laws of the State of Texas, without regard to its conflict-of-laws principles. The parties consent to exclusive personal jurisdiction and venue in the state and federal courts located in Dallas County, Texas, and waive any objection based on forum non conveniens. The U.N. Convention on Contracts for the International Sale of Goods does not apply.</p> },
        { h: "Texas Deceptive Trade Practices Act Waiver", p: <p>To the extent permitted by Section 17.42 of the Texas Business & Commerce Code, business clients represented by legal counsel waive all rights and remedies under the Texas Deceptive Trade Practices–Consumer Protection Act (Chapter 17, Subchapter E). Nothing in these Terms waives rights that cannot be waived by Texas law.</p> },
        { h: "Changes to These Terms", p: <p>We may update these Terms periodically. The "Last updated" date above reflects the most recent revision. Continued use of the site after changes constitutes acceptance.</p> },
      ]}
    />
  );
}

export function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated="June 4, 2026"
      intro="This Privacy Policy explains how KORIX LLC collects, uses, and protects information when you visit korixllc.com or engage with our consulting and outsourcing services."
      sections={[
        { h: "Information We Collect", p: <p>We collect information you submit through our contact forms (name, work email, company, industry, service need, message), correspondence sent to our email addresses, and limited technical data (IP address, browser type, pages visited) collected automatically for analytics.</p> },
        { h: "How We Use Information", p: <p>We use submitted information to respond to inquiries, schedule strategic assessments, deliver engaged services, send relevant business communications, and improve the site. We do not sell personal information.</p> },
        { h: "Legal Bases (GDPR)", p: <p>For visitors in the EU/UK, we process personal data under the bases of consent, legitimate interest in operating our business, or performance of a contract with you or your organization.</p> },
        { h: "Sharing & Disclosure", p: <p>We share information only with vetted service providers (e.g., hosting, email, analytics) bound by confidentiality and data-protection obligations, or when required by law. For regulated engagements we sign DPAs and, where applicable, BAAs.</p> },
        { h: "Data Retention", p: <p>We retain inquiry and client data for as long as needed to fulfill the purpose collected and to meet legal, tax, and accounting requirements. Records are then securely deleted or anonymized.</p> },
        { h: "Security", p: <p>We maintain SOC 2-aligned controls including least-privilege access, MFA-enforced workstations, encryption in transit, and quarterly access reviews. No internet transmission is 100% secure, but we work to protect your information accordingly.</p> },
        { h: "Your Rights", p: <p>Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict processing of your personal data, and to object to processing or request portability. To exercise these rights, email info@korixllc.com.</p> },
        { h: "Texas Residents — TDPSA Rights", p: <p>Under the Texas Data Privacy and Security Act (Tex. Bus. & Com. Code Ch. 541), Texas residents may request to (i) confirm whether we process their personal data, (ii) access, correct, or delete that data, (iii) obtain a portable copy, and (iv) opt out of targeted advertising, the sale of personal data, or certain profiling. We do not sell personal data and do not engage in targeted advertising. Submit a verifiable request to <a href="mailto:info@korixllc.com" className="font-semibold text-red-flag hover:underline">info@korixllc.com</a>; we will respond within 45 days. If we decline, you may appeal by replying to our response, and you may contact the Texas Attorney General at <a href="https://www.texasattorneygeneral.gov" className="font-semibold text-red-flag hover:underline">texasattorneygeneral.gov</a>.</p> },
        { h: "Cookies & Analytics", p: <p>We use a small number of cookies and analytics tools to understand site usage. You can control cookies through your browser settings. Disabling cookies may affect site functionality.</p> },
        { h: "International Transfers", p: <p>KORIX LLC is based in Texas, USA. If you are located outside the United States, your information may be transferred to and processed in Texas. We rely on appropriate safeguards such as Standard Contractual Clauses where required.</p> },
        { h: "Governing Law", p: <p>This Policy and any dispute arising from it are governed by the laws of the State of Texas, USA, without regard to conflict-of-laws principles. Exclusive venue lies in the state and federal courts located in Dallas County, Texas.</p> },
        { h: "Changes to This Policy", p: <p>We may update this Policy periodically. The "Last updated" date above reflects the most recent revision. Material changes will be highlighted on this page.</p> },
      ]}
    />
  );
}
