import { sections, profile } from "../../data/content";

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-40 flex items-center justify-between px-6 sm:px-10 h-16 border-b border-white/5 bg-[#131a26]/70 backdrop-blur-md">
      <a href="#accueil" className="flex items-center gap-2.5">
        <span className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/40 bg-gradient-to-br from-cyan-400/15 via-violet-400/10 to-transparent">
          <span className="font-display text-sm font-bold tracking-tight text-cyan-300">MOS</span>
        </span>
        <span className="font-display text-lg tracking-tight text-slate-100 hidden sm:inline">
          Mekontso<span className="text-cyan-400">.</span>
        </span>
      </a>
      <ul className="hidden md:flex items-center gap-7 font-mono text-xs tracking-widest text-slate-400">
        {sections.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className="hover:text-cyan-300 transition-colors">
              <span className="text-slate-600 mr-1">{s.code}</span>
              {s.label.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
      <a
        href={profile.cv}
        download
        className="rounded-full border border-cyan-400/40 px-4 py-1.5 text-xs font-mono tracking-widest text-cyan-300 hover:bg-cyan-400/10 transition-colors"
      >
        CV ↓
      </a>
    </nav>
  );
}
