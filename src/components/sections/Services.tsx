"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code, Palette } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Estratégia & Produto",
    description:
      "Transformamos problemas de negócio em produtos que geram receita. Discovery, roadmap e priorização baseada em dados.",
    tags: ["Discovery", "Roadmap", "MVP", "Product Strategy"],
    featured: false,
  },
  {
    icon: Code,
    title: "Desenvolvimento",
    description:
      "Do front-end ao back-end, apps a APIs. Código limpo, documentado e pronto para seu time evoluir. Stack moderna, arquitetura escalável.",
    tags: ["Apps & APIs", "React/Node", "Cloud", "Integrações"],
    featured: true,
  },
  {
    icon: Palette,
    title: "Design & UX",
    description:
      "Interfaces que convertem. Design system documentado, protótipos interativos e testes com usuários reais.",
    tags: ["UI/UX", "Design System", "Protótipo", "User Research"],
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Services() {
  return (
    <section id="servicos" className="bg-[#F5F3EF] py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.1em] text-[#8A8A8A]">
            Serviços
          </p>
          <h2 className="max-w-[600px] text-3xl font-semibold leading-tight tracking-tight text-[#2D2D2D] md:text-[40px]">
            Soluções que elevam marcas e criam experiências excepcionais.
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className={`group flex flex-col gap-5 rounded-3xl border-2 p-8 transition-all duration-300 hover:-translate-y-1 ${
                service.featured
                  ? "border-[#8AB661] bg-[#8AB661]"
                  : "border-black bg-white"
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    service.featured ? "bg-white/20" : "bg-[#F5F3EF]"
                  }`}
                >
                  <service.icon
                    size={24}
                    className={service.featured ? "text-white" : "text-[#2D2D2D]"}
                  />
                </div>
              </div>

              <h3
                className={`text-2xl font-semibold leading-tight ${
                  service.featured ? "text-white" : "text-[#2D2D2D]"
                }`}
              >
                {service.title}
              </h3>

              <p
                className={`leading-relaxed ${
                  service.featured ? "text-white/90" : "text-[#5A5A5A]"
                }`}
              >
                {service.description}
              </p>

              {/* Tags */}
              <div className="mt-auto flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full px-4 py-2 text-[13px] font-medium ${
                      service.featured
                        ? "border border-white/30 bg-white/20 text-white"
                        : "border border-[#E5E5E5] bg-[#F5F3EF] text-[#2D2D2D]"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
