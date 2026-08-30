import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Landmark, HeartHandshake } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Program Rutin", href: "#program-rutin" },
    { label: "Program Jangka Panjang", href: "#program-jangka-panjang" },
    { label: "Laporan Keuangan", href: "#laporan-keuangan" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-900/30 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group text-left">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-800 text-white shadow-md shadow-emerald-950/50 group-hover:scale-105 transition-transform">
            <Landmark className="h-5 w-5 text-amber-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base md:text-lg tracking-tight text-slate-100 group-hover:text-emerald-300 transition-colors">
              Masjid Nurul Falah
            </span>
            <span className="text-[11px] font-medium text-emerald-400/80 uppercase tracking-wider">
              Kp. Sukatani, Cisolok
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:text-emerald-300 hover:bg-slate-900/60 transition-all"
            >
              {link.label}
            </a>
          ))}

          <div className="ml-3 pl-3 border-l border-slate-800">
            <Button
              variant="gold"
              size="sm"
              className="gap-1.5"
              onClick={() => {
                const el = document.querySelector("#infaq-wakaf");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <HeartHandshake className="h-4 w-4" />
              <span>Infaq / Wakaf</span>
            </Button>
          </div>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-400 hover:bg-slate-900 hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Buka menu navigasi</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-emerald-400" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-emerald-900/30 bg-slate-950/95 px-4 pt-2 pb-5 space-y-2 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-200 hover:bg-emerald-950/40 hover:text-emerald-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <Button
              variant="gold"
              className="w-full justify-center gap-2"
              onClick={() => {
                setMobileMenuOpen(false);
                const el = document.querySelector("#infaq-wakaf");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <HeartHandshake className="h-4 w-4" />
              <span>Infaq / Wakaf</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
