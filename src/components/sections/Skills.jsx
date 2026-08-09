import Reveal from "../ui/Reveal";
import { skills } from "../../data/content";

const ZONE_STYLE = {
  code: "border-cyan-400/25 hover:border-cyan-400/50",
  network: "border-amber-400/25 hover:border-amber-400/50",
  data: "border-violet-400/25 hover:border-violet-400/50",
};

export default function Skills() {
  return (
    <section id="competences" className="relative py-32 px-6 sm:px-10 max-w-6xl mx-auto">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.3em] text-cyan-400 mb-3">02 · COMPÉTENCES</p>
        <h2 className="font-display text-3xl sm:text-5xl text-slate-100 mb-14">
          Ce que je maîtrise
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.08}>
            <div
              className={`h-full rounded-2xl border bg-white/[0.02] backdrop-blur-sm p-6 transition-colors ${ZONE_STYLE[s.zone]}`}
            >
              <h3 className="font-display text-lg text-slate-100 mb-5">{s.title}</h3>
              <div className="space-y-4">
                {s.tags.map((tag) => (
                  <div key={tag.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="flex items-center gap-2 font-mono text-[11px] text-slate-300">
                        {tag.icon && (
                          <img
                            src={`https://cdn.simpleicons.org/${tag.icon}`}
                            alt=""
                            className="h-3.5 w-3.5 opacity-90"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        )}
                        {tag.name}
                      </span>
                      <span className="font-mono text-[10px] text-cyan-300/80">{tag.level}%</span>
                    </div>
                    <div className="h-1 w-full rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${tag.level}%`,
                          background: "linear-gradient(90deg, #35c3ff, #7c6bff)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
