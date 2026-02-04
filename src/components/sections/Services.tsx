"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code, Palette, Server } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Estratégia de Produto",
    description:
      "Transformamos problemas de negócio em soluções técnicas. Definimos roadmap, priorizamos features e garantimos que cada linha de código gere valor.",
    items: [
      "Discovery e validação",
      "Roadmap de produto",
      "Arquitetura de solução",
      "Prototipagem e MVP",
    ],
  },
  {
    icon: Code,
    title: "Desenvolvimento Full-Stack",
    description:
      "Do front-end ao back-end, APIs a integrações. Entregamos produtos robustos, escaláveis e com código que seu time consegue evoluir.",
    items: [
      "Apps Web e Mobile",
      "APIs e Integrações",
      "Sistemas sob medida",
      "Automações inteligentes",
    ],
  },
  {
    icon: Palette,
    title: "Design & Experiência",
    description:
      "Interfaces que convertem e experiências que encantam. Design system documentado e pronto para escalar com sua empresa.",
    items: [
      "UI/UX Design",
      "Design System",
      "Branding digital",
      "Prototipagem interativa",
    ],
  },
  {
    icon: Server,
    title: "Infraestrutura & DevOps",
    description:
      "Seu produto rodando com performance, segurança e custo otimizado. Monitoramento 24/7 e deploys sem downtime.",
    items: [
      "Cloud (AWS/GCP/Azure)",
      "CI/CD e automação",
      "Segurança e compliance",
      "Performance e custos",
    ],
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
    <section id="servicos" className="bg-[#0A0A0A] py-24 md:py-32">
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
            Serviços
          </p>
          <h2 className="max-w-[600px] text-3xl font-semibold leading-tight tracking-tight text-white md:text-[40px]">
            Tudo que seu produto precisa para escalar
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group flex flex-col gap-6 rounded-2xl border border-[#262626] bg-[#111111] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#404040] md:p-10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <service.icon size={24} className="text-white" />
              </div>

              <h3 className="text-2xl font-semibold leading-tight text-white">
                {service.title}
              </h3>

              <p className="leading-relaxed text-[#A3A3A3]">
                {service.description}
              </p>

              <ul className="flex flex-col gap-3">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-[#A3A3A3]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#6B6B6B]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
