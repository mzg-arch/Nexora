import {
  Bot,
  CheckCircle2,
  Clock3,
  FolderKanban,
  Users,
} from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import GlassCard from "@/components/ui/GlassCard";

const stats = [
  {
    label: "Total Clients",
    value: "128",
    icon: Users,
  },
  {
    label: "Active Projects",
    value: "24",
    icon: FolderKanban,
  },
  {
    label: "Pending Tasks",
    value: "48",
    icon: Clock3,
  },
  {
    label: "AI Follow-ups",
    value: "32",
    icon: Bot,
  },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl">
        <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-violet-600/20 via-blue-600/10 to-transparent p-6 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-200">
            Workspace Overview
          </p>

          <h1 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
            Welcome back to Nexora.
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            Track your clients, projects, tasks, and AI-generated follow-ups
            from one futuristic command center.
          </p>
        </section>

        <section className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <GlassCard
                key={stat.label}
                className="p-6 transition hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.09]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-200 ring-1 ring-violet-400/20">
                  <Icon size={22} />
                </div>

                <p className="mt-5 text-sm text-slate-500">{stat.label}</p>
                <h2 className="mt-2 text-4xl font-black">{stat.value}</h2>
              </GlassCard>
            );
          })}
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <GlassCard className="p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-black">Active Projects</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Current client work in progress.
                </p>
              </div>

              <a
                href="/projects"
                className="w-fit rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold text-slate-300 transition hover:bg-white/[0.1] hover:text-white"
              >
                View Projects
              </a>
            </div>

            <div className="mt-6 space-y-4">
              {[
                ["Nova Studios", "Brand website redesign", "82%"],
                ["Addis Labs", "CRM onboarding setup", "64%"],
                ["Orbit Media", "Marketing campaign sprint", "48%"],
              ].map(([client, project, progress]) => (
                <div
                  key={client}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] p-4"
                >
                  <div className="flex justify-between gap-4">
                    <div>
                      <p className="font-bold">{client}</p>
                      <p className="mt-1 text-sm text-slate-500">{project}</p>
                    </div>

                    <p className="text-sm font-bold text-violet-300">
                      {progress}
                    </p>
                  </div>

                  <div className="mt-4 h-2 rounded-full bg-white/10">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-blue-500"
                      style={{ width: progress }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div>
              <h2 className="text-xl font-black">AI Follow-up Suggestions</h2>
              <p className="mt-1 text-sm text-slate-500">
                Smart messages ready to generate.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {[
                "Follow up with Nova Studios about homepage approval.",
                "Send Addis Labs a project onboarding summary.",
                "Remind Orbit Media about campaign content deadline.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border border-violet-400/20 bg-violet-500/10 p-4"
                >
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-violet-300"
                    size={18}
                  />
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>

            <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:from-violet-500 hover:to-blue-500">
              Generate Follow-ups
            </button>
          </GlassCard>
        </section>
      </div>
    </DashboardLayout>
  );
}