"use client";

import { motion } from "framer-motion";
import { Lightbulb, Rocket, Eye, Shield } from "lucide-react";

const differentials = [
  {
    icon: Lightbulb,
    title: "Visão de produto",
    description:
      "Entendemos de negócio. Questionamos antes de codar. Cada feature precisa justificar seu valor.",
    hasMockup: true,
  },
  {
    icon: Rocket,
    title: "+50 produtos",
    description:
      "Do zero ao mercado. Já passamos por todos os desafios de lançar e escalar produtos digitais.",
    hasMockup: true,
  },
  {
    icon: Eye,
    title: "Transparência total",
    description:
      "Código, docs e comunicação. Acesso total a tudo. Sem caixas-pretas, sem surpresas.",
    hasMockup: false,
  },
  {
    icon: Shield,
    title: "Security-first",
    description:
      "Segurança desde o dia 1. Implementamos best practices de cybersecurity em cada projeto.",
    hasMockup: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Differentials() {
  return (
    <section className="bg-[#1A1A2E] py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.1em] text-white/40">
            Diferenciais
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-[40px]">
            O que nos diferencia
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {differentials.map((diff) => (
            <motion.div
              key={diff.title}
              variants={cardVariants}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
            >
              {diff.hasMockup && (
                <div className="mb-6 rounded-xl bg-black/30 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-2 w-2 rounded-full bg-[#8AB661]" />
                    <div className="h-2 w-2 rounded-full bg-yellow-500/50" />
                    <div className="h-2 w-2 rounded-full bg-red-500/50" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-2/3 rounded-full bg-white/10" />
                    <div className="h-2 w-1/3 rounded-full bg-white/10" />
                  </div>
                </div>
              )}

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <diff.icon size={22} className="text-white" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white">
                {diff.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/60">
                {diff.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
