"use client";

import { motion } from "framer-motion";
import { Lightbulb, Rocket, Eye, Shield, Brain, Headphones } from "lucide-react";

const differentials = [
  {
    icon: Lightbulb,
    title: "Visão de Produto",
    description:
      "Entendemos de negócio. Antes de codar, questionamos se é a melhor solução pro seu problema.",
  },
  {
    icon: Rocket,
    title: "+50 Produtos Lançados",
    description:
      "Do zero ao mercado. Já passamos por todos os desafios de lançar e escalar produtos digitais.",
  },
  {
    icon: Eye,
    title: "Transparência Total",
    description:
      "Acesso ao código, documentação clara e comunicação direta. Sem caixas-pretas.",
  },
  {
    icon: Shield,
    title: "Security-First",
    description:
      "Cybersecurity não é opcional. Implementamos best practices desde o dia 1.",
  },
  {
    icon: Brain,
    title: "IA Aplicada",
    description:
      "Integramos IA onde faz sentido. Automação inteligente que gera resultado real.",
  },
  {
    icon: Headphones,
    title: "Suporte Dedicado",
    description:
      "30 dias de suporte gratuito pós-entrega. E continuamos juntos se fizer sentido.",
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
    <section className="bg-[#0A0A0A] py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.1em] text-[#6B6B6B]">
            Diferenciais
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-[40px]">
            Por que a Forma?
          </h2>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 rounded-3xl border border-[#262626] bg-gradient-to-br from-white/5 to-white/[0.02] p-12 text-center md:p-16"
        >
          <p className="mx-auto max-w-[700px] text-2xl font-semibold leading-snug italic text-white md:text-[32px]">
            &ldquo;Não somos uma fábrica de software. Somos parceiros
            estratégicos de crescimento.&rdquo;
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {differentials.map((diff) => (
            <motion.div
              key={diff.title}
              variants={cardVariants}
              className="group rounded-2xl border border-[#262626] bg-[#111111] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#404040]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <diff.icon size={22} className="text-white" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white">
                {diff.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#A3A3A3]">
                {diff.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
