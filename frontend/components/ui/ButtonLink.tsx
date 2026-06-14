import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export default function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  size = "md",
}: ButtonLinkProps) {
  const variants = {
    primary:
      "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-950/30 hover:from-violet-500 hover:to-blue-500",
    secondary:
      "border border-white/15 bg-white/10 text-white backdrop-blur hover:bg-white/15",
    ghost:
      "text-slate-300 hover:bg-white/10 hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-sm",
    lg: "px-7 py-4 text-base",
  };

  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-semibold transition duration-300 hover:-translate-y-0.5",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </a>
  );
}