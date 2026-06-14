import { ArrowRight, Sparkles } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";

export default function FinalCTASection() {
  return (
    <section className="relative py-24 text-white">
      <div className="absolute left-1/2 top-16 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

      <Container className="relative">
        <GlassCard className="overflow-hidden p-8 text-center md:p-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 text-white shadow-lg shadow-violet-950/40">
            <Sparkles size={24} />
          </div>

          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to run client work from one intelligent workspace?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Start organizing clients, projects, tasks, notes, and follow-ups
            with a futuristic SaaS workspace built for modern service teams.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/register?plan=pro" size="lg">
              Start with Pro
              <ArrowRight className="ml-2 inline" size={18} />
            </ButtonLink>

            <ButtonLink href="#pricing" variant="secondary" size="lg">
              Compare Plans
            </ButtonLink>
          </div>
        </GlassCard>
      </Container>
    </section>
  );
}