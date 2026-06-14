import { Bot, CalendarDays, CheckCircle2, MessageSquareText, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ProductPreviewSection() {
  return (
    <section className="relative py-24 text-white">
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="absolute bottom-20 left-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

      <Container className="relative">
        <SectionHeader
          badge="Workspace Preview"
          title="See every client, project, and follow-up in one place."
          description="Nexora gives service businesses a realistic command center for managing relationships, delivery work, and AI-assisted communication."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <GlassCard className="overflow-hidden p-4">
            <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-bold text-white">
                    Client Command View
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Manage client relationship, project work, and next actions.
                  </p>
                </div>

                <span className="w-fit rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-200">
                  Active Client
                </span>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500">
                      <Users size={20} />
                    </div>

                    <div>
                      <p className="font-black text-white">Nova Studios</p>
                      <p className="text-xs text-slate-500">Brand redesign client</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4 text-sm">
                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span className="text-slate-500">Status</span>
                      <span className="font-semibold text-emerald-300">Active</span>
                    </div>

                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span className="text-slate-500">Project</span>
                      <span className="font-semibold text-white">Website Build</span>
                    </div>

                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span className="text-slate-500">Deadline</span>
                      <span className="font-semibold text-white">Aug 28</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-500">Next Step</span>
                      <span className="font-semibold text-violet-200">Review copy</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold text-white">
                        Project Progress
                      </p>
                      <p className="text-xs font-semibold text-violet-300">78%</p>
                    </div>

                    <div className="mt-4 h-3 rounded-full bg-white/10">
                      <div className="h-3 w-[78%] rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      {[
                        ["12", "Tasks"],
                        ["8", "Done"],
                        ["4", "Pending"],
                      ].map(([value, label]) => (
                        <div
                          key={label}
                          className="rounded-xl border border-white/10 bg-slate-950/50 p-3"
                        >
                          <p className="text-lg font-black text-white">{value}</p>
                          <p className="text-xs text-slate-500">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                    <div className="flex items-center gap-2">
                      <CalendarDays size={16} className="text-blue-300" />
                      <p className="text-sm font-bold text-white">
                        Upcoming Actions
                      </p>
                    </div>

                    <div className="mt-4 space-y-3">
                      {[
                        "Send homepage copy update",
                        "Schedule client review call",
                        "Prepare final design notes",
                      ].map((task) => (
                        <div key={task} className="flex items-center gap-3">
                          <CheckCircle2 size={16} className="text-violet-300" />
                          <p className="text-sm text-slate-300">{task}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          <div className="grid gap-6">
            <GlassCard className="p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-200 ring-1 ring-violet-400/20">
                  <Bot size={21} />
                </div>

                <div>
                  <p className="font-black text-white">AI Follow-up Writer</p>
                  <p className="text-xs text-slate-500">
                    Generate polished messages based on client context.
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-violet-400/20 bg-violet-500/10 p-5">
                <p className="text-sm leading-7 text-slate-300">
                  Hi Nova team, just following up on the homepage copy review.
                  I’ve attached the latest project notes and highlighted the
                  remaining decisions before we move into final delivery.
                </p>
              </div>

              <button className="mt-5 w-full rounded-xl bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-violet-100">
                Generate Follow-up
              </button>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-200 ring-1 ring-blue-400/20">
                  <MessageSquareText size={21} />
                </div>

                <div>
                  <p className="font-black text-white">Smart Notes</p>
                  <p className="text-xs text-slate-500">
                    Keep client decisions and context easy to find.
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  "Client prefers a clean dark hero section.",
                  "Send pricing page options before Friday.",
                  "Final launch target is end of month.",
                ].map((note) => (
                  <div
                    key={note}
                    className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm text-slate-300"
                  >
                    {note}
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </Container>
    </section>
  );
}