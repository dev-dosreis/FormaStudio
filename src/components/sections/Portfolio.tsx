"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "PonttoArq",
    category: "Sistema de Gamificação",
    description:
      "Escalamos de 0 para 4.000 escritórios de arquitetura com um sistema de gamificação e engajamento.",
    metric: "4.000 escritórios",
    color: "from-violet-500/20 to-blue-500/20",
  },
  {
    title: "Apps Mobile",
    category: "React Native",
    description:
      "Mais de 10 aplicativos publicados na Apple Store com foco em performance e experiência nativa.",
    metric: "+10 apps publicados",
    color: "from-orange-500/20 to-red-500/20",
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
    <section id="portfolio" className="bg-[#F5F3EF] py-24 md:py-32">
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
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.1em] text-[#8A8A8A]">
              Portfólio
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#2D2D2D] md:text-[40px]">
              Outros projetos
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
              className="group cursor-pointer overflow-hidden rounded-2xl border-2 border-black bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
            >
              {/* Image placeholder */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-transform duration-500 group-hover:scale-105`}
                />
                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                  }}
                />
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-black/10">
                    {project.title[0]}
                  </span>
                </div>
                {/* Arrow */}
                <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={18} className="text-[#2D2D2D]" />
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="mb-1 text-xl font-semibold text-[#2D2D2D]">
                  {project.title}
                </h3>
                <p className="mb-3 text-sm text-[#8A8A8A]">
                  {project.category}
                </p>
                <p className="mb-4 text-sm leading-relaxed text-[#5A5A5A]">
                  {project.description}
                </p>
                <p className="text-sm font-medium text-[#8AB661]">
                  {project.metric}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
