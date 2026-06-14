import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import GlassCard from "@/components/ui/GlassCard";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white">
      <div className="fixed left-0 top-0 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="fixed bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/40 backdrop-blur-xl lg:grid-cols-[1fr_0.9fr]">
          <section className="hidden border-r border-white/10 bg-gradient-to-br from-violet-600/10 via-blue-600/5 to-transparent p-10 lg:flex lg:flex-col lg:justify-between">
            <div>
              <ButtonLink href="/" variant="ghost" className="mb-12 w-fit">
                <ArrowLeft className="mr-2" size={16} />
                Back home
              </ButtonLink>

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 text-lg font-black shadow-lg shadow-violet-950/40">
                  N
                </div>

                <div>
                  <p className="text-2xl font-black">Nexora</p>
                  <p className="text-sm text-slate-400">
                    AI Client Workspace
                  </p>
                </div>
              </div>

              <div className="mt-16">
                <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-violet-200">
                  <Sparkles size={14} />
                  Welcome Back
                </div>

                <h1 className="mt-6 max-w-xl text-5xl font-black leading-tight tracking-tight">
                  Continue managing your client command center.
                </h1>

                <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
                  Sign in to manage clients, projects, tasks, notes, and
                  AI-powered follow-ups from your Nexora workspace.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                ["24", "Projects"],
                ["128", "Clients"],
                ["32", "AI Messages"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                >
                  <p className="text-2xl font-black">{value}</p>
                  <p className="mt-1 text-xs text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="p-6 sm:p-8 md:p-10">
            <div className="mx-auto max-w-md">
              <div className="mb-8 flex items-center justify-between lg:hidden">
                <Link href="/" className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 text-sm font-black text-white">
                    N
                  </div>

                  <div>
                    <p className="text-xl font-black">Nexora</p>
                    <p className="text-xs text-slate-500">
                      AI Client Workspace
                    </p>
                  </div>
                </Link>
              </div>

              <GlassCard className="p-6 sm:p-8">
                <div>
                  <p className="text-sm font-semibold text-violet-300">
                    Sign in
                  </p>

                  <h2 className="mt-2 text-3xl font-black tracking-tight">
                    Welcome back
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Enter your credentials to access your workspace.
                  </p>
                </div>

                <form className="mt-8 space-y-5">
                  <div>
                    <label className="text-sm font-semibold text-slate-300">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/50 focus:ring-4 focus:ring-violet-500/10"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-300">
                      Password
                    </label>

                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/50 focus:ring-4 focus:ring-violet-500/10"
                    />
                  </div>

                  <button
                    type="button"
                    className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-950/30 transition hover:-translate-y-0.5 hover:from-violet-500 hover:to-blue-500"
                  >
                    Login
                  </button>
                </form>

                <p className="mt-6 text-center text-sm text-slate-500">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/register?plan=pro"
                    className="font-bold text-violet-300 transition hover:text-violet-200"
                  >
                    Create one
                  </Link>
                </p>
              </GlassCard>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}