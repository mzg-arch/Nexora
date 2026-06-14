"use client";

import Link from "next/link";
import {
  BarChart3,
  FolderKanban,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

const dashboardLinks = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Clients",
    href: "/clients",
    icon: Users,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    label: "Tasks",
    href: "/tasks",
    icon: BarChart3,
  },
  {
    label: "AI Follow-ups",
    href: "/ai-followups",
    icon: Sparkles,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="fixed left-0 top-0 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="fixed bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative flex min-h-screen">
        <aside className="sticky top-0 hidden h-screen w-72 border-r border-white/10 bg-slate-950/80 p-5 backdrop-blur-xl lg:block">
          <div className="flex h-full flex-col">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 text-sm font-black shadow-lg shadow-violet-950/40">
                N
              </div>

              <div>
                <p className="text-lg font-black">Nexora</p>
                <p className="text-xs text-slate-500">AI Client Workspace</p>
              </div>
            </Link>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.06] p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-sm font-black">
                  M
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-bold">Micahel Biru</p>
                  <p className="truncate text-xs text-slate-500">
                    Pro Workspace
                  </p>
                </div>
              </div>
            </div>

            <nav className="mt-8 flex-1 space-y-2">
              {dashboardLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-400 transition hover:bg-white/[0.08] hover:text-white",
                      link.href === "/dashboard" &&
                        "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-950/30"
                    )}
                  >
                    <Icon size={18} />
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <button className="flex items-center gap-3 rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-200 transition hover:bg-red-500 hover:text-white">
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col">
          <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 px-4 py-4 backdrop-blur-xl lg:hidden">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 text-sm font-black">
                  N
                </div>

                <div>
                  <p className="font-black">Nexora</p>
                  <p className="text-xs text-slate-500">Workspace</p>
                </div>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-xl border border-white/10 bg-white/[0.06] p-2 text-white"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

            {mobileMenuOpen && (
              <nav className="mt-4 grid gap-2 rounded-3xl border border-white/10 bg-white/[0.06] p-3">
                {dashboardLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
                    >
                      <Icon size={18} />
                      {link.label}
                    </Link>
                  );
                })}

                <button className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-red-300 transition hover:bg-red-500/10 hover:text-red-200">
                  <LogOut size={18} />
                  Logout
                </button>
              </nav>
            )}
          </header>

          <section className="flex-1 p-4 sm:p-6 lg:p-8">{children}</section>
        </div>
      </div>
    </main>
  );
}