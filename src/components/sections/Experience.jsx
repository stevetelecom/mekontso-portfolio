import Reveal from "../ui/Reveal";
import { experiences } from "../../data/content";

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 sm:px-10 max-w-6xl mx-auto">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.3em] text-cyan-400 mb-3">03 · EXPÉRIENCE</p>
        <h2 className="font-display text-3xl sm:text-5xl text-slate-100 mb-14">
          Où j'ai travaillé
        </h2>
      </Reveal>

      <div className="relative border-l border-white/10 pl-8 space-y-10">
        {experiences.map((e, i) => (
          <Reveal key={e.title + e.company} delay={i * 0.08}>
            <div className="relative">
              <span className="absolute -left-[38px] top-1.5 h-2.5 w-2.5 rounded-full bg-amber-400 shadow-[0_0_12px_2px_rgba(251,191,36,0.5)]" />

              <div className="flex items-center gap-3">
                {e.icon && (
                  <img
                    src={e.icon}
                    alt={e.company}
                    className="h-6 w-6 rounded bg-white/5 p-1 shrink-0"
                    loading="lazy"
                  />
                )}
                <span className="font-mono text-[11px] tracking-widest text-amber-300">
                  {e.date}
                </span>
              </div>

              <h3 className="font-display text-xl text-slate-100 mt-2">{e.title}</h3>
              <p className="text-sm text-cyan-300/80 mt-1">
                {e.company} — {e.location}
              </p>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed max-w-2xl">{e.desc}</p>

              {e.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {e.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] rounded-md bg-white/5 text-slate-400 px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
