"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "PonttoArq",
    category: "Sistema de Gamificação",
    description:
      "Escalamos de 0 para 4.000 escritórios de arquitetura com um sistema de gamificação e engajamento.",
    metrics: "4.000 escritórios  ·  +300% engajamento",
    gradient: "from-violet-500/20 to-blue-500/20",
  },
  {
    title: "NornScore",
    category: "Fintech  ·  Cubo Itaú",
    description:
      "Venture building para startup do Cubo Itaú que processou 8 milhões de euros em análises de crédito.",
    metrics: "€8M processados  ·  Cubo Itaú",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Apps Mobile",
    category: "React Native",
    description:
      "Mais de 10 aplicativos publicados na Apple Store com foco em performance e experiência nativa.",
    metrics: "+10 apps  ·  Apple Store",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Harpia API",
    category: "WhatsApp Business API",
    description:
      "API robusta para automação de comunicação via WhatsApp com escala e confiabilidade enterprise.",
    metrics: "Enterprise-ready  ·  Alta disponibilidade",
    gradient: "from-sky-500/20 to-indigo-500/20",
  },
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

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#0A0A0A] py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.1em] text-[#6B6B6B]">
              Portfólio
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-[40px]">
              Trabalhos em destaque
            </h2>
          </div>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-[#262626] bg-[#111111] transition-all duration-400 hover:-translate-y-2 hover:border-[#404040]"
            >
              {/* Image placeholder */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-600 group-hover:scale-105`}
                />
                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                  }}
                />
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white/20">
                    {project.title[0]}
                  </span>
                </div>
                {/* Arrow */}
                <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={18} className="text-white" />
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mb-3 text-sm text-[#6B6B6B]">
                  {project.category}
                </p>
                <p className="mb-4 text-sm leading-relaxed text-[#A3A3A3]">
                  {project.description}
                </p>
                <p className="text-xs font-medium text-[#6B6B6B]">
                  {project.metrics}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
