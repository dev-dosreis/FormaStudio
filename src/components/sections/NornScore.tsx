"use client";

import { motion } from "framer-motion";
import { BarChart3, Zap, Building2, Plug } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Análise em tempo real",
    description:
      "Score de crédito com Machine Learning em segundos. Precisão superior aos modelos tradicionais.",
    hasMockup: true,
  },
  {
    icon: BarChart3,
    title: "€8M processados",
    description:
      "Volume total de transações analisadas pela plataforma no mercado europeu.",
    hasMockup: true,
  },
  {
    icon: Building2,
    title: "Acelerado pelo Cubo Itaú",
    description:
      "Parte do programa de aceleração do maior hub de inovação da América Latina.",
    hasMockup: false,
  },
  {
    icon: Plug,
    title: "API-first",
    description:
      "Integração em minutos com qualquer sistema. Documentação completa e SDKs prontos.",
    hasMockup: false,
  },
];

const metrics = [
  { value: "€8M", label: "processados" },
  { value: "Cubo", label: "Itaú" },
  { value: "<1s", label: "resposta" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function NornScore() {
  return (
    <section
      id="nornscore"
      className="bg-gradient-to-b from-[#1A1A2E] to-[#0F0F1A] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8AB661]/30 bg-[#8AB661]/20 px-4 py-2">
            <span className="text-[13px] font-medium text-[#8AB661]">
              Venture Building
            </span>
          </div>

          <h2 className="mb-4 max-w-[700px] text-3xl font-semibold leading-tight tracking-tight text-white md:text-[48px]">
            NornScore: Análise de crédito com inteligência artificial
          </h2>

          <p className="mb-12 max-w-[600px] text-lg text-white/60">
            Startup acelerada pelo Cubo Itaú que processou €8M em análises de
            crédito para o mercado europeu.
          </p>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 flex flex-wrap gap-8"
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="text-3xl font-semibold text-white md:text-4xl">
                {metric.value}
              </p>
              <p className="text-sm text-white/50">{metric.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
            >
              {feature.hasMockup && (
                <div className="mb-6 rounded-xl bg-black/30 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-2 w-2 rounded-full bg-[#8AB661]" />
                    <div className="h-2 w-2 rounded-full bg-yellow-500/50" />
                    <div className="h-2 w-2 rounded-full bg-red-500/50" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-3/4 rounded-full bg-white/10" />
                    <div className="h-2 w-1/2 rounded-full bg-white/10" />
                    <div className="flex gap-2 mt-3">
                      <div className="h-6 flex-1 rounded bg-[#8AB661]/20" />
                      <div className="h-6 flex-1 rounded bg-white/5" />
                    </div>
                  </div>
                </div>
              )}

              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <feature.icon size={20} className="text-white" />
              </div>

              <h3 className="mb-2 text-xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="text-[15px] leading-relaxed text-white/60">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <a
            href="#cta"
            className="inline-flex rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10"
          >
            Conhecer NornScore &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
