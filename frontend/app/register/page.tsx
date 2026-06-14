"use client";

import Link from "next/link";
import { ArrowLeft, Check, CreditCard, Sparkles } from "lucide-react";
import { useSearchParams } from "next/navigation";
import ButtonLink from "@/components/ui/ButtonLink";
import GlassCard from "@/components/ui/GlassCard";
import { pricingPlans } from "@/constants/landing";

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const selectedPlanId = searchParams.get("plan") || "pro";

  const selectedPlan =
    pricingPlans.find((plan) => plan.id === selectedPlanId) || pricingPlans[1];

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white">
      <div className="fixed left-0 top-0 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="fixed bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/40 backdrop-blur-xl lg:grid-cols-[0.95fr_1fr]">
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
                  Start Your Workspace
                </div>

                <h1 className="mt-6 max-w-xl text-5xl font-black leading-tight tracking-tight">
                  Build your client command center.
                </h1>

                <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
                  Create your Nexora account, choose your workspace plan, and
                  prepare for secure subscription checkout.
                </p>
              </div>
            </div>

            <GlassCard className="p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-200 ring-1 ring-violet-400/20">
                  <CreditCard size={20} />
                </div>

                <div>
                  <p className="font-black text-white">Payment-ready flow</p>
                  <p className="text-xs text-slate-500">
                    Stripe checkout will connect after backend auth.
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                Users choose a plan first, create an account, then continue to
                secure billing before accessing paid workspace features.
              </p>
            </GlassCard>
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
                    Create account
                  </p>

                  <h2 className="mt-2 text-3xl font-black tracking-tight">
                    Start with Nexora
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Create your account and continue with your selected plan.
                  </p>
                </div>

                <div className="mt-6 rounded-2xl border border-violet-400/20 bg-violet-500/10 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-400">Selected Plan</p>
                      <h3 className="mt-1 text-2xl font-black text-white">
                        {selectedPlan.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-400">
                        {selectedPlan.description}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-2xl font-black text-white">
                        {selectedPlan.price}
                      </p>
                      <p className="text-xs text-slate-500">/month</p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    {selectedPlan.features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Check size={15} className="text-violet-300" />
                        <p className="text-sm text-slate-300">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {pricingPlans.map((plan) => (
                      <Link
                        key={plan.id}
                        href={`/register?plan=${plan.id}`}
                        className={`rounded-full px-3 py-1 text-xs font-bold transition ${
                          selectedPlan.id === plan.id
                            ? "bg-violet-500 text-white"
                            : "bg-white/10 text-slate-400 hover:bg-white/15 hover:text-white"
                        }`}
                      >
                        {plan.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <form className="mt-8 space-y-5">
                  <div>
                    <label className="text-sm font-semibold text-slate-300">
                      Full Name
                    </label>

                    <input
                      placeholder="Your full name"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/50 focus:ring-4 focus:ring-violet-500/10"
                    />
                  </div>

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
                      placeholder="Create a password"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/50 focus:ring-4 focus:ring-violet-500/10"
                    />
                  </div>

                  <button
                    type="button"
                    className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-950/30 transition hover:-translate-y-0.5 hover:from-violet-500 hover:to-blue-500"
                  >
                    Create Account & Continue
                  </button>
                </form>

                <p className="mt-6 text-center text-sm text-slate-500">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-bold text-violet-300 transition hover:text-violet-200"
                  >
                    Login
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