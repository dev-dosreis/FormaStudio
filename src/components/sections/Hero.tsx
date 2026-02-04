"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-40 pb-20 md:px-8">
      {/* Subtle gradient bg */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-[1200px] text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          <span className="text-[13px] font-medium text-white">
            2 projetos disponíveis em Fevereiro
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mx-auto mb-6 max-w-[800px] text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-[56px]"
        >
          Seu produto precisa de mais do que código.{" "}
          <span className="text-[#A3A3A3]">Precisa de estratégia.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mx-auto mb-10 max-w-[600px] text-lg leading-relaxed text-[#A3A3A3]"
        >
          Somos um studio de software que ajuda empresas de R$1M a R$20M a
          destravar crescimento através de tecnologia e produto.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#cta"
            className="inline-flex rounded-lg bg-white px-8 py-4 text-base font-medium text-[#0A0A0A] transition-all hover:-translate-y-0.5 hover:bg-[#E5E5E5]"
          >
            Agendar conversa estratégica
          </a>
          <a
            href="#portfolio"
            className="inline-flex rounded-lg border border-[#404040] bg-transparent px-8 py-4 text-base font-medium text-white transition-all hover:border-white hover:bg-white/5"
          >
            Ver nossos cases
          </a>
        </motion.div>

        {/* Abstract visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="relative mx-auto mt-20 aspect-video max-w-[900px] overflow-hidden rounded-2xl border border-[#262626] bg-[#111111]"
        >
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }} />
          {/* Center glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_60%)]" />
          {/* Forma lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="opacity-20">
              <rect x="10" y="10" width="180" height="180" rx="20" stroke="white" strokeWidth="1" />
              <line x1="70" y1="50" x2="70" y2="150" stroke="white" strokeWidth="1" />
              <line x1="100" y1="50" x2="100" y2="150" stroke="white" strokeWidth="1" />
              <line x1="130" y1="50" x2="130" y2="150" stroke="white" strokeWidth="1" />
              <line x1="50" y1="100" x2="150" y2="100" stroke="white" strokeWidth="1" />
            </svg>
          </div>
          {/* Label */}
          <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-md border border-[#262626] bg-[#0A0A0A]/80 px-3 py-1.5 text-xs text-[#6B6B6B]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
            forma.studio
          </div>
        </motion.div>
      </div>
    </section>
  );
}
