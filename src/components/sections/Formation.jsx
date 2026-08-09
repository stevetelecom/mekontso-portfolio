import Reveal from "../ui/Reveal";
import { formations, certifications } from "../../data/content";

export default function Formation() {
  return (
    <section id="formation" className="relative py-32 px-6 sm:px-10 max-w-6xl mx-auto">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.3em] text-cyan-400 mb-3">04 · FORMATION</p>
        <h2 className="font-display text-3xl sm:text-5xl text-slate-100 mb-14">
          Mon parcours
        </h2>
      </Reveal>

      <div className="relative border-l border-white/10 pl-8 space-y-10">
        {formations.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.08}>
            <div className="relative">
              <span className="absolute -left-[38px] top-1.5 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_2px_rgba(53,195,255,0.5)]" />
              <span className="font-mono text-[11px] tracking-widest text-amber-300">
                {f.date}
              </span>
              <h3 className="font-display text-xl text-slate-100 mt-2">{f.title}</h3>
              <p className="text-sm text-cyan-300/80 mt-1">{f.school}</p>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed max-w-2xl">{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-20">
        <h3 className="font-display text-xl text-slate-100 mb-6">Certifications</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          {certifications.map((c) => (
            <a
              key={c.title}
              href={c.file}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 hover:border-amber-400/40 bg-white/[0.02] p-6 flex items-center justify-between gap-4 transition-colors group"
            >
              <div>
                <h4 className="font-display text-base text-slate-100">{c.title}</h4>
                <p className="text-xs text-slate-500 mt-1">{c.info}</p>
                <span className="inline-block mt-3 font-mono text-[11px] text-amber-300 bg-amber-400/10 rounded-full px-3 py-1">
                  {c.score}
                </span>
              </div>
              <span className="font-mono text-xs text-slate-500 group-hover:text-amber-300 transition-colors">
                VOIR ↗
              </span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
