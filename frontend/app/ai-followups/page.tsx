import {
  Bot,
  Copy,
  Mail,
  MessageSquareText,
  Plus,
  Sparkles,
} from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import GlassCard from "@/components/ui/GlassCard";

const recentMessages = [
  {
    client: "Nova Studios",
    type: "Project Update",
    preview:
      "Hi Nova team, just following up on the homepage copy review and next steps...",
  },
  {
    client: "Addis Labs",
    type: "Onboarding Summary",
    preview:
      "Hi Addis Labs team, here is a quick summary of our onboarding setup...",
  },
  {
    client: "Orbit Media",
    type: "Deadline Reminder",
    preview:
      "Hi Orbit team, just a reminder about the upcoming campaign asset deadline...",
  },
];

export default function AIFollowupsPage() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl">
        <section className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-gradient-to-r from-violet-600/20 via-blue-600/10 to-transparent p-6 shadow-2xl shadow-black/30 backdrop-blur-xl md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-200">
              AI Communication
            </p>

            <h1 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
              AI Follow-ups
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
              Generate polished client follow-ups, project updates, reminders,
              and summaries using client and project context.
            </p>
          </div>

          <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-950/30 transition hover:-translate-y-0.5 hover:from-violet-500 hover:to-blue-500 md:w-auto">
            <Plus size={18} />
            New Message
          </button>
        </section>

        <section className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {[
            ["Generated This Month", "32"],
            ["Project Updates", "14"],
            ["Payment Reminders", "6"],
            ["Follow-ups Sent", "21"],
          ].map(([label, value]) => (
            <GlassCard
              key={label}
              className="p-6 transition hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.09]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-200 ring-1 ring-violet-400/20">
                <Sparkles size={22} />
              </div>

              <p className="mt-5 text-sm text-slate-500">{label}</p>
              <h2 className="mt-2 text-4xl font-black">{value}</h2>
            </GlassCard>
          ))}
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <GlassCard className="p-6">
            <div>
              <h2 className="text-xl font-black">Generate Message</h2>
              <p className="mt-1 text-sm text-slate-500">
                Choose a client, message type, and context to draft a message.
              </p>
            </div>

            <form className="mt-6 space-y-5">
              <div>
                <label className="text-sm font-semibold text-slate-300">
                  Select Client
                </label>

                <select className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-violet-400/50 focus:ring-4 focus:ring-violet-500/10">
                  <option>Nova Studios</option>
                  <option>Addis Labs</option>
                  <option>Orbit Media</option>
                  <option>Pixel Perfect</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-300">
                  Message Type
                </label>

                <select className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-violet-400/50 focus:ring-4 focus:ring-violet-500/10">
                  <option>Project Update</option>
                  <option>Follow-up Reminder</option>
                  <option>Payment Reminder</option>
                  <option>Meeting Summary</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-300">
                  Key Points
                </label>

                <textarea
                  rows={6}
                  placeholder="Example: Ask for homepage copy approval, mention updated timeline, ask if they need anything else..."
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/50 focus:ring-4 focus:ring-violet-500/10"
                />
              </div>

              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-950/30 transition hover:-translate-y-0.5 hover:from-violet-500 hover:to-blue-500"
              >
                <Bot size={18} />
                Generate Follow-up
              </button>
            </form>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-black">Generated Preview</h2>
                <p className="mt-1 text-sm text-slate-500">
                  AI output will appear here before sending or copying.
                </p>
              </div>

              <button className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold text-slate-300 transition hover:bg-white/[0.1] hover:text-white">
                <Copy size={16} />
                Copy
              </button>
            </div>

            <div className="mt-6 rounded-3xl border border-violet-400/20 bg-violet-500/10 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-200 ring-1 ring-violet-400/20">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="font-black text-white">Project Update Draft</p>
                  <p className="text-xs text-slate-500">For Nova Studios</p>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
                <p>Hi Nova team,</p>

                <p>
                  Just following up on the homepage copy review for the website
                  redesign project. I have prepared the latest updates and the
                  next steps so we can keep the project moving forward smoothly.
                </p>

                <p>
                  Please let me know if you have any changes, questions, or
                  approvals before we continue into the next delivery stage.
                </p>

                <p>
                  Best regards,
                  <br />
                  Your Name
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <p className="text-sm font-bold text-white">AI Notes</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Later, this preview will be generated from the backend using the
                selected client, project, task history, and user-provided key
                points.
              </p>
            </div>
          </GlassCard>
        </section>

        <GlassCard className="mt-6 p-6">
          <div>
            <h2 className="text-xl font-black">Recent AI Messages</h2>
            <p className="mt-1 text-sm text-slate-500">
              Previously generated follow-ups and client communications.
            </p>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {recentMessages.map((message) => (
              <div
                key={message.client}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition hover:-translate-y-1 hover:bg-white/[0.08]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-200 ring-1 ring-violet-400/20">
                    <MessageSquareText size={18} />
                  </div>

                  <div>
                    <p className="font-bold text-white">{message.client}</p>
                    <p className="text-xs text-violet-300">{message.type}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  {message.preview}
                </p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </DashboardLayout>
  );
}