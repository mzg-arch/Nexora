import { Check } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { pricingPlans } from "@/constants/landing";
import { cn } from "@/lib/utils";

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 text-white">
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />

      <Container className="relative">
        <SectionHeader
          badge="Pricing"
          title="Simple packages for every stage of client work."
          description="Start small, grow into advanced workflows, and unlock AI-powered client communication when your team is ready."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <GlassCard
              key={plan.name}
              className={cn(
                "relative overflow-hidden p-6 transition duration-300 hover:-translate-y-1",
                plan.highlighted
                  ? "border-violet-400/40 bg-violet-500/[0.11] shadow-violet-950/40"
                  : "hover:border-white/20 hover:bg-white/[0.08]"
              )}
            >
              {plan.highlighted && (
                <div className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-3 py-1 text-xs font-black text-white">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-2xl font-black text-white">{plan.name}</h3>

                <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-400">
                  {plan.description}
                </p>

                <div className="mt-7 flex items-end gap-2">
                  <p className="text-5xl font-black tracking-tight text-white">
                    {plan.price}
                  </p>
                  <p className="pb-2 text-sm text-slate-500">/month</p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-violet-200 ring-1 ring-violet-400/30">
                      <Check size={13} />
                    </div>

                    <p className="text-sm text-slate-300">{feature}</p>
                  </div>
                ))}
              </div>

              <ButtonLink
                href={`/register?plan=${plan.id}`}
                className="mt-9 w-full"
                variant={plan.highlighted ? "primary" : "secondary"}
              >
                Choose {plan.name}
              </ButtonLink>
            </GlassCard>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-6 text-slate-500">
          Payments will be processed through secure checkout after account
          creation. Subscription billing will be connected through Stripe in the
          backend phase.
        </p>
      </Container>
    </section>
  );
}