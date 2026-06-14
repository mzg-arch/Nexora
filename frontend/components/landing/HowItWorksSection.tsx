import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { steps } from "@/constants/landing";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 text-white">
      <div className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

      <Container className="relative">
        <SectionHeader
          badge="How It Works"
          title="A simple workflow for serious client operations."
          description="Nexora keeps your client process clear from the first conversation to final delivery."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {steps.map((step) => (
            <GlassCard
              key={step.number}
              className="relative overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.09]"
            >
              <div className="absolute -right-6 -top-8 text-8xl font-black text-white/[0.03]">
                {step.number}
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10 text-sm font-black text-violet-200">
                {step.number}
              </div>

              <h3 className="mt-6 text-xl font-black text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {step.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}