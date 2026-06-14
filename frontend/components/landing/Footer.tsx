import Container from "@/components/ui/Container";
import { navLinks } from "@/constants/landing";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-white">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 text-sm font-black text-white">
                N
              </div>

              <div>
                <p className="font-black text-white">Nexora</p>
                <p className="text-xs text-slate-500">AI Client Workspace</p>
              </div>
            </div>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
              A futuristic client workspace for managing clients, projects,
              tasks, notes, and AI-powered follow-ups.
            </p>
          </div>

          <nav className="flex flex-wrap gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-400 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-slate-600">
          © 2026 Nexora. Portfolio SaaS project.
        </div>
      </Container>
    </footer>
  );
}