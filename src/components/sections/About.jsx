import Reveal from "../ui/Reveal";
import { profile } from "../../data/content";

const infoRows = [
  { label: "Naissance", value: profile.birthDate },
  { label: "Localisation", value: profile.location },
  { label: "École", value: profile.school },
  { label: "Filière", value: profile.filiere },
  { label: "Email", value: profile.email },
  { label: "LinkedIn", value: profile.linkedin },
];

export default function About() {
  return (
    <section id="apropos" className="relative py-32 px-6 sm:px-10 max-w-6xl mx-auto">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.3em] text-cyan-400 mb-3">01 · PROFIL</p>
        <h2 className="font-display text-3xl sm:text-5xl text-slate-100 mb-14">
          Qui suis-je
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-14">
        <Reveal delay={0.05}>
          <div className="space-y-5 text-slate-400 leading-relaxed">
            {profile.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="rounded-lg border border-amber-400/30 bg-amber-400/5 text-amber-300 px-4 py-2 text-xs font-mono">
              PIX AVANCÉ 1 — 555/895
            </span>
            <span className="rounded-lg border border-cyan-400/30 bg-cyan-400/5 text-cyan-300 px-4 py-2 text-xs font-mono">
              SQL — DATACAMP
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="border border-white/10 rounded-2xl divide-y divide-white/5 overflow-hidden">
            {infoRows.map((row) => (
              <div key={row.label} className="flex items-center justify-between px-5 py-4">
                <span className="font-mono text-[11px] tracking-widest text-slate-500">
                  {row.label.toUpperCase()}
                </span>
                <span className="text-sm text-slate-200 text-right">{row.value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
