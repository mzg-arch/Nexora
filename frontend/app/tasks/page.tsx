import {
  AlertCircle,
  CalendarDays,
  CheckCircle2,
  Circle,
  MoreHorizontal,
  Plus,
  Search,
} from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import GlassCard from "@/components/ui/GlassCard";

const tasks = [
  {
    title: "Send homepage copy update",
    client: "Nova Studios",
    project: "Brand Website Redesign",
    status: "In Progress",
    priority: "High",
    dueDate: "Aug 20, 2026",
  },
  {
    title: "Prepare CRM onboarding checklist",
    client: "Addis Labs",
    project: "CRM Onboarding Setup",
    status: "Pending",
    priority: "Medium",
    dueDate: "Aug 24, 2026",
  },
  {
    title: "Review campaign assets",
    client: "Orbit Media",
    project: "Marketing Campaign Sprint",
    status: "In Review",
    priority: "High",
    dueDate: "Aug 27, 2026",
  },
  {
    title: "Send final launch notes",
    client: "Pixel Perfect",
    project: "Landing Page Refresh",
    status: "Completed",
    priority: "Low",
    dueDate: "Jul 30, 2026",
  },
];

function getPriorityStyle(priority: string) {
  if (priority === "High") {
    return "bg-red-500/15 text-red-200 ring-red-400/20";
  }

  if (priority === "Medium") {
    return "bg-orange-500/15 text-orange-200 ring-orange-400/20";
  }

  return "bg-emerald-500/15 text-emerald-200 ring-emerald-400/20";
}

function getStatusIcon(status: string) {
  if (status === "Completed") {
    return <CheckCircle2 size={18} className="text-emerald-300" />;
  }

  if (status === "In Review") {
    return <AlertCircle size={18} className="text-orange-300" />;
  }

  return <Circle size={18} className="text-violet-300" />;
}

export default function TasksPage() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl">
        <section className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-gradient-to-r from-violet-600/20 via-blue-600/10 to-transparent p-6 shadow-2xl shadow-black/30 backdrop-blur-xl md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-200">
              Task Workflows
            </p>

            <h1 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
              Tasks
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
              Organize client work, track deadlines, manage priorities, and keep
              every project moving forward.
            </p>
          </div>

          <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-950/30 transition hover:-translate-y-0.5 hover:from-violet-500 hover:to-blue-500 md:w-auto">
            <Plus size={18} />
            New Task
          </button>
        </section>

        <section className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {[
            ["Total Tasks", "48"],
            ["In Progress", "18"],
            ["In Review", "10"],
            ["Completed", "20"],
          ].map(([label, value]) => (
            <GlassCard
              key={label}
              className="p-6 transition hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.09]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-200 ring-1 ring-violet-400/20">
                <CheckCircle2 size={22} />
              </div>

              <p className="mt-5 text-sm text-slate-500">{label}</p>
              <h2 className="mt-2 text-4xl font-black">{value}</h2>
            </GlassCard>
          ))}
        </section>

        <GlassCard className="mt-6 p-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-md">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                placeholder="Search tasks..."
                className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-11 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/50 focus:ring-4 focus:ring-violet-500/10"
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2 md:flex">
              <select className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-violet-400/50 focus:ring-4 focus:ring-violet-500/10 md:w-auto">
                <option>All Statuses</option>
                <option>Pending</option>
                <option>In Progress</option>
                <option>In Review</option>
                <option>Completed</option>
              </select>

              <select className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-violet-400/50 focus:ring-4 focus:ring-violet-500/10 md:w-auto">
                <option>All Priorities</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>
        </GlassCard>

        {/* Mobile cards */}
        <section className="mt-6 grid gap-4 lg:hidden">
          {tasks.map((task) => (
            <GlassCard key={task.title} className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(task.status)}
                    <h2 className="text-lg font-black">{task.title}</h2>
                  </div>

                  <p className="mt-2 text-sm text-slate-500">
                    {task.client} • {task.project}
                  </p>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ring-1 ${getPriorityStyle(
                    task.priority
                  )}`}
                >
                  {task.priority}
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <CalendarDays size={14} />
                    Due Date
                  </div>
                  <p className="mt-2 text-sm font-bold text-white">
                    {task.dueDate}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3">
                  <p className="text-xs text-slate-500">Status</p>
                  <p className="mt-2 text-sm font-bold text-white">
                    {task.status}
                  </p>
                </div>
              </div>

              <button className="mt-5 w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-bold text-slate-300 transition hover:bg-white/[0.1] hover:text-white">
                View Task
              </button>
            </GlassCard>
          ))}
        </section>

        {/* Desktop table */}
        <section className="mt-6 hidden overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/30 backdrop-blur-xl lg:block">
          <table className="w-full border-collapse text-left">
            <thead className="bg-white/[0.06]">
              <tr>
                <th className="px-5 py-4 text-sm font-semibold text-slate-300">
                  Task
                </th>
                <th className="px-5 py-4 text-sm font-semibold text-slate-300">
                  Project
                </th>
                <th className="px-5 py-4 text-sm font-semibold text-slate-300">
                  Status
                </th>
                <th className="px-5 py-4 text-sm font-semibold text-slate-300">
                  Priority
                </th>
                <th className="px-5 py-4 text-sm font-semibold text-slate-300">
                  Due Date
                </th>
                <th className="px-5 py-4 text-sm font-semibold text-slate-300">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((task) => (
                <tr
                  key={task.title}
                  className="border-t border-white/10 transition hover:bg-white/[0.04]"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(task.status)}
                      <div>
                        <p className="font-bold text-white">{task.title}</p>
                        <p className="mt-1 text-sm text-slate-500">
                          {task.client}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-300">
                    {task.project}
                  </td>

                  <td className="px-5 py-4">
                    <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-bold text-violet-200 ring-1 ring-violet-400/20">
                      {task.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ring-1 ${getPriorityStyle(
                        task.priority
                      )}`}
                    >
                      {task.priority}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-300">
                    {task.dueDate}
                  </td>

                  <td className="px-5 py-4">
                    <button className="rounded-xl border border-white/10 bg-white/[0.06] p-2 text-slate-300 transition hover:bg-white/[0.1] hover:text-white">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </DashboardLayout>
  );
}