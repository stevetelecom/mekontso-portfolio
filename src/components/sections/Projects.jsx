import Reveal from "../ui/Reveal";
import { projets, profile } from "../../data/content";

export default function Projects() {
  return (
    <section id="projets" className="relative py-32 px-6 sm:px-10 max-w-6xl mx-auto">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.3em] text-cyan-400 mb-3">05 · PROJETS</p>
        <h2 className="font-display text-3xl sm:text-5xl text-slate-100 mb-14">
          Ce que j'ai construit
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-5">
        {projets.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.1}>
            <div className="h-full rounded-2xl border border-white/10 hover:border-cyan-400/30 bg-white/[0.02] p-6 flex flex-col transition-colors">
              <span className="self-start font-mono text-[10px] tracking-widest text-slate-500 border border-white/10 rounded-full px-3 py-1 mb-4">
                {p.type.toUpperCase()}
              </span>
              <h3 className="font-display text-lg text-slate-100 mb-2">{p.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[11px] rounded-md bg-white/5 text-cyan-300/80 px-2.5 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-16">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-transparent p-10 sm:p-14 text-center">
          <h3 className="font-display text-2xl sm:text-3xl text-slate-100 mb-3">
            Télécharger mon CV
          </h3>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Parcours, compétences et expériences en détail.
          </p>
          <a
            href={profile.cv}
            download
            className="inline-block rounded-full bg-cyan-400 text-[#131a26] font-medium px-7 py-3 text-sm hover:bg-cyan-300 transition-colors"
          >
            Télécharger le CV ↓
          </a>
        </div>
      </Reveal>
    </section>
  );
}
