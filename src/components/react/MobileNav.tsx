import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavItem {
  href: string;
  label: string;
}

interface Props {
  navItems: NavItem[];
  ctaLabel: string;
  ctaHref: string;
  altLocaleHref: string;
  altLocaleLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
}

export default function MobileNav({
  navItems,
  ctaLabel,
  ctaHref,
  altLocaleHref,
  altLocaleLabel,
  openMenuLabel,
  closeMenuLabel,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? closeMenuLabel : openMenuLabel}
        className="flex items-center justify-center p-2 text-ink"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full border-t border-border bg-cream/98 px-6 py-6 shadow-lg">
          <nav className="flex flex-col gap-4 text-base font-medium">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a
              href={altLocaleHref}
              className="font-mono text-xs uppercase tracking-wide text-muted"
            >
              {altLocaleLabel}
            </a>
            <a
              href={ctaHref}
              onClick={() => setOpen(false)}
              className="rounded-sm bg-ink px-5 py-2.5 text-center font-semibold text-cream"
            >
              {ctaLabel}
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
