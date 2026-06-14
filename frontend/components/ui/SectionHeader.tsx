import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  children?: ReactNode;
}

export default function SectionHeader({
  badge,
  title,
  description,
  className,
  children,
}: SectionHeaderProps) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      {badge && (
        <p className="inline-flex rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-violet-200">
          {badge}
        </p>
      )}

      <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
          {description}
        </p>
      )}

      {children}
    </div>
  );
}