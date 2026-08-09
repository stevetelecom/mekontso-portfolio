import { useEffect, useRef } from "react";
import gsap from "gsap";
import { profile } from "../../data/content";

export default function Hero() {
  const rootRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(".hero-eyebrow", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 })
        .fromTo(
          ".hero-line",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 },
          "-=0.35"
        )
        .fromTo(".hero-sub", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4")
        .fromTo(".hero-cta", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, "-=0.4");
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="accueil"
      ref={rootRef}
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-10 pt-24 pb-16"
    >
      <div className="flex flex-col md:flex-row items-center gap-14 md:gap-10">
        <div className="flex-1 min-w-0">
          <p className="hero-eyebrow font-mono text-xs tracking-[0.3em] text-cyan-400 mb-6">
            SYSTEM_ONLINE · DISPONIBLE POUR OPPORTUNITÉS
          </p>
          <h1 className="font-display leading-[0.95] text-slate-100">
            <span className="hero-line block text-[13vw] sm:text-[5.5vw] font-medium">Mekontso</span>
            <span className="hero-line block text-[13vw] sm:text-[5.5vw] font-medium text-cyan-300">
              Olivier Steve
            </span>
          </h1>
          <p className="hero-sub mt-8 max-w-xl text-slate-400 text-base sm:text-lg leading-relaxed">
            {profile.role} · {profile.subrole}. Étudiant ingénieur GSI à l'ESTLC d'Ambam —
            systèmes, réseaux, cybersécurité et intelligence artificielle.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#contact"
              className="hero-cta rounded-full bg-cyan-400 text-[#131a26] font-medium px-6 py-3 text-sm hover:bg-cyan-300 transition-colors"
            >
              Me contacter
            </a>
            <a
              href="#projets"
              className="hero-cta rounded-full border border-white/15 text-slate-200 px-6 py-3 text-sm hover:border-cyan-400/50 transition-colors"
            >
              Voir les projets
            </a>
          </div>
          <p className="hero-cta mt-10 font-mono text-[11px] text-slate-500 tracking-widest">
            {profile.location.toUpperCase()} · GSI // FUTUR INGÉNIEUR
          </p>
        </div>

        <div className="hero-cta shrink-0 relative mx-auto md:mx-0 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 animate-float">
          <div
            className="absolute -inset-2 rounded-full opacity-70 blur-md animate-spin-slow"
            style={{
              background:
                "conic-gradient(from 180deg, #35c3ff, #7c6bff, #f0a500, #35c3ff)",
            }}
          />
          <img
            src={profile.photo}
            alt={profile.name}
            className="relative h-full w-full rounded-full object-cover border-4 border-[#131a26]"
          />
          <span className="absolute -top-2 -right-4 sm:-right-8 rounded-full bg-[#1c2434] border border-cyan-400/30 px-3 py-1.5 text-xs font-mono text-cyan-300 shadow-lg flex items-center gap-1.5 whitespace-nowrap">
            <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 shrink-0">
              <path d="M12 3L1 8l11 5 9-4.09V17h2V8L12 3z" fill="currentColor" />
              <path d="M5 10.18v3.64L12 17l7-3.18v-3.64L12 13.5 5 10.18z" fill="currentColor" opacity="0.6" />
            </svg>
            Futur Ingénieur
          </span>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-[#1c2434] border border-white/10 px-3 py-1.5 text-xs font-mono text-slate-300 shadow-lg flex items-center gap-1.5 whitespace-nowrap">
            <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 shrink-0 text-cyan-300">
              <path
                d="M12 21s-7-6.1-7-11.2C5 6.1 8.1 3 12 3s7 3.1 7 6.8C19 14.9 12 21 12 21z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            {profile.location}
          </span>
        </div>
      </div>
    </section>
  );
}
