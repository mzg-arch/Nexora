"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import { navLinks } from "@/constants/landing";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 text-sm font-black text-white shadow-lg shadow-violet-950/40">
              N
            </div>

            <div>
              <p className="text-lg font-black tracking-tight text-white">
                Nexora
              </p>
              <p className="text-xs text-slate-400">AI Client Workspace</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ButtonLink href="/login" variant="ghost">
              Login
            </ButtonLink>

            <ButtonLink href="/register?plan=pro">
              Get Started
            </ButtonLink>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-white/10 bg-white/10 p-2 text-white md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="pb-5 md:hidden">
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur-xl">
              <nav className="grid gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="mt-4 grid gap-3 border-t border-white/10 pt-4">
                <ButtonLink href="/login" variant="secondary">
                  Login
                </ButtonLink>

                <ButtonLink href="/register?plan=pro">
                  Get Started
                </ButtonLink>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}