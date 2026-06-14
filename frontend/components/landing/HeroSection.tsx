import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Button from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import { stats } from "@/constants/landing";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-24 pt-36 text-white sm:pt-44">
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/30 blur-3xl" />
      <div className="absolute right-10 top-40 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-violet-200">
              <Sparkles size={14} />
              AI Client Workspace
            </div>

            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Run every client relationship from one intelligent command center.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Nexora helps freelancers, agencies, and small teams manage
              clients, projects, tasks, notes, and AI-powered follow-ups from
              one futuristic SaaS workspace.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight
                  className="ml-2 inline transition group-hover:translate-x-1"
                  size={18}
                />
              </Button>

              <Button variant="secondary" size="lg">
                View Pricing
              </Button>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-slate-400 sm:grid-cols-3">
              {["Client CRM", "Project tracking", "AI follow-ups"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-violet-300" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-r from-violet-600/20 to-blue-600/20 blur-3xl" />

            <GlassCard className="relative overflow-hidden p-4">
              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm font-bold text-white">
                      Nexora Command Center
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Live client operations overview
                    </p>
                  </div>

                  <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    Live
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {stats.map((stat) => {
                    const Icon = stat.icon;

                    return (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                      >
                        <Icon size={18} className="text-violet-300" />
                        <p className="mt-4 text-2xl font-black text-white">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          {stat.label}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold text-white">
                        Active Projects
                      </p>
                      <p className="text-xs text-violet-300">72% complete</p>
                    </div>

                    <div className="mt-5 space-y-4">
                      {[
                        ["Brand Website", "Nova Studios", "82%"],
                        ["CRM Setup", "Addis Labs", "64%"],
                        ["Marketing Sprint", "Orbit Media", "48%"],
                      ].map(([project, client, progress]) => (
                        <div key={project}>
                          <div className="flex justify-between text-xs">
                            <span className="font-medium text-slate-300">
                              {project}
                            </span>
                            <span className="text-slate-500">{client}</span>
                          </div>

                          <div className="mt-2 h-2 rounded-full bg-white/10">
                            <div
                              className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-blue-500"
                              style={{ width: progress }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-violet-400/20 bg-violet-500/10 p-4">
                    <div className="flex items-center gap-2">
                      <Sparkles size={16} className="text-violet-200" />
                      <p className="text-sm font-bold text-white">
                        AI Follow-up
                      </p>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-slate-300">
                      “Hi Sarah, just checking in on the website review. I’ve
                      attached the updated timeline and next steps for approval.”
                    </p>

                    <button className="mt-5 w-full rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-violet-100">
                      Generate Message
                    </button>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </Container>
    </section>
  );
}