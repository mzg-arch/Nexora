import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { features } from "@/constants/landing";

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 text-white">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

      <Container className="relative">
        <SectionHeader
          badge="Features"
          title="Everything you need to manage client work."
          description="Nexora brings clients, projects, tasks, notes, and AI-assisted follow-ups into one polished workspace."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <GlassCard
                key={feature.title}
                className="group p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.09]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 text-violet-200 ring-1 ring-white/10 transition group-hover:scale-105">
                  <Icon size={22} />
                </div>

                <h3 className="mt-6 text-xl font-black text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {feature.description}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}