"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F5F3EF] px-6 pt-40 pb-20 md:px-8">
      <div className="relative mx-auto max-w-[1200px] text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#8AB661]/30 bg-[#8AB661]/10 px-4 py-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8AB661] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8AB661]" />
          </span>
          <span className="text-[13px] font-medium text-[#8AB661]">
            Parte do ecossistema Codnodo
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mx-auto mb-6 max-w-[800px] text-4xl font-semibold leading-[1.1] tracking-tight text-[#2D2D2D] md:text-[56px]"
        >
          Construímos produtos que{" "}
          <span className="text-[#8AB661]">escalam negócios.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mx-auto mb-10 max-w-[600px] text-lg leading-relaxed text-[#5A5A5A]"
        >
          Somos o braço de venture building e produtos do ecossistema Codnodo.
          Criamos, desenvolvemos e escalamos produtos digitais — do MVP ao Series A.
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
            className="inline-flex rounded-full bg-[#8AB661] px-8 py-4 text-base font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#7AA551] hover:shadow-[0_8px_24px_rgba(138,182,97,0.3)]"
          >
            Agendar conversa
          </a>
          <a
            href="#nornscore"
            className="inline-flex rounded-full border-2 border-[#2D2D2D] bg-transparent px-8 py-4 text-base font-medium text-[#2D2D2D] transition-all hover:bg-[#2D2D2D] hover:text-[#F5F3EF]"
          >
            Conhecer nossos produtos &rarr;
          </a>
        </motion.div>

        {/* Mockup Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="relative mx-auto mt-20 grid max-w-[900px] grid-cols-3 gap-4"
        >
          {/* NornScore mockup */}
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border-2 border-black bg-white p-4 shadow-lg transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-[#8AB661]" />
              <span className="text-xs font-medium text-[#2D2D2D]">NornScore</span>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-3/4 rounded-full bg-[#F5F3EF]" />
              <div className="h-2 w-1/2 rounded-full bg-[#F5F3EF]" />
              <div className="mt-4 flex gap-2">
                <div className="h-8 flex-1 rounded-lg bg-[#8AB661]/20" />
                <div className="h-8 flex-1 rounded-lg bg-[#8AB661]/10" />
              </div>
              <div className="h-12 w-full rounded-lg bg-gradient-to-r from-[#8AB661]/20 to-[#8AB661]/5" />
            </div>
          </div>

          {/* Harpia mockup */}
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border-2 border-black bg-[#1A1A2E] p-4 shadow-lg transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-[#8AB661]" />
              <span className="text-xs font-medium text-white/70">Harpia API</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-1">
                <span className="font-mono text-[10px] text-[#C792EA]">const</span>
                <span className="font-mono text-[10px] text-white/60">harpia =</span>
              </div>
              <div className="h-2 w-2/3 rounded-full bg-white/10" />
              <div className="h-2 w-1/2 rounded-full bg-white/10" />
              <div className="mt-2 h-8 rounded-lg bg-[#8AB661]/20" />
            </div>
          </div>

          {/* App mockup */}
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border-2 border-black bg-white p-4 shadow-lg transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-[#8AB661]" />
              <span className="text-xs font-medium text-[#2D2D2D]">Mobile App</span>
            </div>
            <div className="mx-auto w-12 space-y-2">
              <div className="h-16 rounded-xl border border-[#E5E5E5] bg-[#F5F3EF]" />
              <div className="flex justify-center gap-1">
                <div className="h-1 w-1 rounded-full bg-[#8AB661]" />
                <div className="h-1 w-1 rounded-full bg-[#E5E5E5]" />
                <div className="h-1 w-1 rounded-full bg-[#E5E5E5]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
