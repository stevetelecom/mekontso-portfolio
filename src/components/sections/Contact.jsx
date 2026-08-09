import { useState } from "react";
import Reveal from "../ui/Reveal";
import { profile } from "../../data/content";

const links = [
  { label: "Téléphone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: profile.linkedin, href: profile.linkedinUrl },
  { label: "Localisation", value: profile.location, href: "#" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contact" className="relative py-32 px-6 sm:px-10 max-w-6xl mx-auto">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.3em] text-cyan-400 mb-3">06 · CONTACT</p>
        <h2 className="font-display text-3xl sm:text-5xl text-slate-100 mb-14">
          Restons en contact
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-14">
        <Reveal delay={0.05} className="space-y-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="flex items-center justify-between rounded-xl border border-white/10 hover:border-cyan-400/40 bg-white/[0.02] px-5 py-4 transition-colors"
            >
              <span className="font-mono text-[11px] tracking-widest text-slate-500">
                {l.label.toUpperCase()}
              </span>
              <span className="text-sm text-slate-200">{l.value}</span>
            </a>
          ))}
        </Reveal>

        <Reveal delay={0.15}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                type="text"
                placeholder="Votre nom"
                className="rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400/50 outline-none px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500"
              />
              <input
                required
                type="email"
                placeholder="votre@email.com"
                className="rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400/50 outline-none px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500"
              />
            </div>
            <input
              required
              type="text"
              placeholder="Sujet"
              className="w-full rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400/50 outline-none px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500"
            />
            <textarea
              required
              rows={5}
              placeholder="Votre message..."
              className="w-full rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400/50 outline-none px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 resize-none"
            />
            <button
              type="submit"
              className="w-full sm:w-auto rounded-full bg-cyan-400 text-[#131a26] font-medium px-7 py-3 text-sm hover:bg-cyan-300 transition-colors"
            >
              {sent ? "Message envoyé ✓" : "Envoyer le message"}
            </button>
          </form>
        </Reveal>
      </div>

      <p className="text-center font-mono text-[11px] text-slate-600 tracking-widest mt-24">
        © 2026 MEKONTSO OLIVIER STEVE · ESTLC AMBAM · GSI
      </p>
    </section>
  );
}
