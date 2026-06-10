import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/korix-logo.png.asset.json";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Korix" },
  { href: "#methodology", label: "Methodology" },
  { href: "#insights", label: "Insights" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-2" aria-label="KORIX LLC home">
          <img
            src={logo.url}
            alt="KORIX LLC"
            width={700}
            height={210}
            className="h-20 w-auto md:h-[140px]"
          />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-red-flag">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-md bg-red-flag px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Schedule a Strategic Assessment
        </a>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md border border-border bg-background p-2 text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col px-4 py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium text-foreground/80 hover:text-red-flag"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 mb-3 inline-flex rounded-md bg-red-flag px-4 py-2 text-sm font-semibold text-white"
              >
                Schedule a Strategic Assessment
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
