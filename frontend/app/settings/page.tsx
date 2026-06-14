import {
  Bell,
  CreditCard,
  Lock,
  Save,
  Settings,
  Shield,
  User,
} from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import GlassCard from "@/components/ui/GlassCard";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl">
        <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-violet-600/20 via-blue-600/10 to-transparent p-6 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-200">
            Workspace Controls
          </p>

          <h1 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
            Settings
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            Manage your profile, workspace preferences, subscription plan, and
            notification settings.
          </p>
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <GlassCard className="p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-200 ring-1 ring-violet-400/20">
                  <User size={22} />
                </div>

                <div>
                  <h2 className="text-xl font-black">Profile</h2>
                  <p className="text-sm text-slate-500">
                    Your personal account details.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.05] p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-xl font-black">
                    M
                  </div>

                  <div>
                    <p className="text-lg font-black">Micahel Biru</p>
                    <p className="text-sm text-slate-500">
                      micahel@example.com
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-200 ring-1 ring-blue-400/20">
                  <CreditCard size={22} />
                </div>

                <div>
                  <h2 className="text-xl font-black">Plan & Billing</h2>
                  <p className="text-sm text-slate-500">
                    Subscription and payment status.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-violet-400/20 bg-violet-500/10 p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Current Plan</p>
                    <h3 className="mt-1 text-2xl font-black">Pro</h3>
                    <p className="mt-1 text-sm text-slate-500">
                      $19/month • AI follow-ups included
                    </p>
                  </div>

                  <button className="rounded-xl border border-white/10 bg-white/[0.08] px-4 py-3 text-sm font-bold text-slate-300 transition hover:bg-white/[0.12] hover:text-white">
                    Manage Billing
                  </button>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="space-y-6">
            <GlassCard className="p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-200 ring-1 ring-violet-400/20">
                  <Settings size={22} />
                </div>

                <div>
                  <h2 className="text-xl font-black">Workspace Settings</h2>
                  <p className="text-sm text-slate-500">
                    Configure how your Nexora workspace appears.
                  </p>
                </div>
              </div>

              <form className="mt-6 space-y-5">
                <div>
                  <label className="text-sm font-semibold text-slate-300">
                    Workspace Name
                  </label>

                  <input
                    defaultValue="Micahel's Workspace"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/50 focus:ring-4 focus:ring-violet-500/10"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-300">
                    Default Client Status
                  </label>

                  <select className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-violet-400/50 focus:ring-4 focus:ring-violet-500/10">
                    <option>Lead</option>
                    <option>Active</option>
                    <option>Completed</option>
                    <option>Archived</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-300">
                    AI Message Tone
                  </label>

                  <select className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-violet-400/50 focus:ring-4 focus:ring-violet-500/10">
                    <option>Professional</option>
                    <option>Friendly</option>
                    <option>Direct</option>
                    <option>Formal</option>
                  </select>
                </div>

                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-950/30 transition hover:-translate-y-0.5 hover:from-violet-500 hover:to-blue-500 sm:w-auto"
                >
                  <Save size={18} />
                  Save Settings
                </button>
              </form>
            </GlassCard>

            <div className="grid gap-6 lg:grid-cols-2">
              <GlassCard className="p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-200 ring-1 ring-emerald-400/20">
                    <Bell size={22} />
                  </div>

                  <div>
                    <h2 className="text-lg font-black">Notifications</h2>
                    <p className="text-sm text-slate-500">
                      Client and task alerts.
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    "Project deadline reminders",
                    "AI follow-up suggestions",
                    "Client status updates",
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4"
                    >
                      <span className="text-sm text-slate-300">{item}</span>
                      <input type="checkbox" defaultChecked />
                    </label>
                  ))}
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/15 text-red-200 ring-1 ring-red-400/20">
                    <Shield size={22} />
                  </div>

                  <div>
                    <h2 className="text-lg font-black">Security</h2>
                    <p className="text-sm text-slate-500">
                      Password and account protection.
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <button className="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-bold text-slate-300 transition hover:bg-white/[0.09] hover:text-white">
                    <Lock size={17} />
                    Change Password
                  </button>

                  <button className="flex w-full items-center gap-3 rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm font-bold text-red-200 transition hover:bg-red-500 hover:text-white">
                    <Shield size={17} />
                    Disable Account
                  </button>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}