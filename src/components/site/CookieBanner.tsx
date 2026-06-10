import { useEffect, useState } from "react";
import { X } from "lucide-react";

type Consent = "accepted" | "declined" | "custom";
type Prefs = { analytics: boolean; marketing: boolean };

const STORAGE_KEY = "korix-cookie-consent";
const PREFS_KEY = "korix-cookie-prefs";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>({ analytics: false, marketing: false });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
      const sp = localStorage.getItem(PREFS_KEY);
      if (sp) setPrefs(JSON.parse(sp));
    } catch {
      setVisible(true);
    }
  }, []);

  function persist(consent: Consent, p: Prefs) {
    try {
      localStorage.setItem(STORAGE_KEY, consent);
      localStorage.setItem(PREFS_KEY, JSON.stringify(p));
    } catch {
      /* ignore */
    }
    setVisible(false);
    setShowPrefs(false);
  }

  function acceptAll() {
    const p = { analytics: true, marketing: true };
    setPrefs(p);
    persist("accepted", p);
  }

  function declineAll() {
    const p = { analytics: false, marketing: false };
    setPrefs(p);
    persist("declined", p);
  }

  function saveCustom() {
    persist("custom", prefs);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 md:px-8 md:pb-6"
    >
      <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-card p-5 shadow-elegant md:p-7">
        {!showPrefs ? (
          <div className="flex flex-col gap-5 md:flex-row md:items-center">
            <div className="flex-1 text-sm leading-relaxed text-muted-foreground">
              <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-red-flag">Cookies</p>
              <p className="text-navy">
                We use essential cookies to make our site work. With your consent, we may also use
                non-essential cookies to improve user experience and analyze website traffic. By
                clicking "Accept," you agree to our website's cookie use as described in our{" "}
                <a href="/privacy" className="font-semibold text-red-flag hover:underline">
                  Cookie Policy
                </a>
                . You can change your cookie settings at any time by clicking "Preferences."
              </p>
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:shrink-0">
              <button
                type="button"
                onClick={() => setShowPrefs(true)}
                className="rounded-md border border-border bg-background px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-red-flag"
              >
                Preferences
              </button>
              <button
                type="button"
                onClick={declineAll}
                className="rounded-md border border-border bg-background px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-red-flag"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-md bg-red-flag px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-transform hover:-translate-y-0.5"
              >
                Accept
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-red-flag">Cookie Preferences</p>
                <h3 className="mt-1 text-xl font-bold text-navy">Choose what we may use</h3>
              </div>
              <button
                type="button"
                aria-label="Close preferences"
                onClick={() => setShowPrefs(false)}
                className="rounded-md border border-border p-1.5 text-navy hover:border-red-flag"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 space-y-3">
              <PrefRow
                title="Essential"
                description="Required for the site to function. Always on."
                checked
                disabled
              />
              <PrefRow
                title="Analytics"
                description="Helps us understand how visitors use our site so we can improve it."
                checked={prefs.analytics}
                onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
              />
              <PrefRow
                title="Marketing"
                description="Used to deliver more relevant communications and measure campaigns."
                checked={prefs.marketing}
                onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
              />
            </div>

            <div className="mt-6 flex flex-col gap-2 md:flex-row md:justify-end">
              <button
                type="button"
                onClick={declineAll}
                className="rounded-md border border-border bg-background px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-red-flag"
              >
                Decline all
              </button>
              <button
                type="button"
                onClick={saveCustom}
                className="rounded-md border border-border bg-background px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-red-flag"
              >
                Save preferences
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-md bg-red-flag px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-transform hover:-translate-y-0.5"
              >
                Accept all
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function PrefRow({
  title,
  description,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <label className="flex items-start justify-between gap-4 rounded-lg border border-border bg-background p-4">
      <div>
        <p className="text-sm font-semibold text-navy">{title}</p>
        <p className="mt-1 text-xs text-muted-foreground">{description}</p>
      </div>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-1 h-5 w-5 shrink-0 accent-red-flag disabled:opacity-60"
      />
    </label>
  );
}
