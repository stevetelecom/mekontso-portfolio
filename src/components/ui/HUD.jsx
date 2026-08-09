import { useEffect, useState } from "react";
import { sections } from "../../data/content";

export default function HUD() {
  const [active, setActive] = useState(sections[0].id);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const activeMeta = sections.find((s) => s.id === active) ?? sections[0];

  return (
    <div className="fixed bottom-5 right-5 z-40 hidden sm:flex flex-col items-end gap-2 font-mono text-[11px] text-slate-300 select-none pointer-events-none">
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 backdrop-blur px-3 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span className="tracking-widest text-cyan-300">MODULE_{activeMeta.code}</span>
        <span className="text-slate-400">{activeMeta.label.toUpperCase()}</span>
      </div>
      <div className="h-1 w-40 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-amber-400 transition-[width] duration-150"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>
    </div>
  );
}
