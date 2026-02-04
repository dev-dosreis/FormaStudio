"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    duration: "1-2 semanas",
    description:
      "Entendemos seu negócio, seus desafios e seus objetivos. Mapeamos processos, identificamos oportunidades e validamos hipóteses antes de escrever qualquer linha de código.",
    deliverables: [
      "Mapa de processos",
      "Análise de stakeholders",
      "Definição de KPIs",
      "Levantamento técnico",
    ],
  },
  {
    number: "02",
    title: "Proposta & Escopo",
    duration: "3-5 dias",
    description:
      "Apresentamos uma proposta clara com escopo, cronograma, investimento e métricas de sucesso. Sem surpresas, sem letras miúdas.",
    deliverables: [
      "Escopo detalhado",
      "Cronograma realista",
      "Proposta comercial",
      "Contrato transparente",
    ],
  },
  {
    number: "03",
    title: "Design & Validação",
    duration: "2-4 semanas",
    description:
      "Criamos wireframes, protótipos e validamos com usuários reais. Você acompanha cada decisão de design e aprova antes do desenvolvimento.",
    deliverables: [
      "Wireframes",
      "Protótipo navegável",
      "Design System",
      "Validação com usuários",
    ],
  },
  {
    number: "04",
    title: "Desenvolvimento",
    duration: "4-12 semanas",
    description:
      "Sprints de 2 semanas com entregas incrementais. Você acompanha o progresso em tempo real e pode ajustar prioridades.",
    deliverables: [
      "Código fonte documentado",
      "Testes automatizados",
      "Ambiente de staging",
      "Deploy contínuo",
    ],
  },
  {
    number: "05",
    title: "Entrega & Suporte",
    duration: "Ongoing",
    description:
      "Lançamento com acompanhamento. 1 mês de suporte gratuito para ajustes e melhorias. Documentação completa para seu time.",
    deliverables: [
      "Produto em produção",
      "Documentação técnica",
      "Treinamento do time",
      "30 dias de suporte",
    ],
  },
];

export default function Process() {
  const [active, setActive] = useState(0);

  return (
    <section id="processo" className="bg-[#0A0A0A] py-24 md:py-32">
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
            Processo
          </p>
          <h2 className="max-w-[600px] text-3xl font-semibold leading-tight tracking-tight text-white md:text-[40px]">
            Um processo simples e eficiente
          </h2>
        </motion.div>

        {/* Steps - Desktop */}
        <div className="hidden md:block">
          {/* Step indicators */}
          <div className="mb-16 flex items-center">
            {steps.map((step, i) => (
              <div key={step.number} className="flex flex-1 items-center">
                <button
                  onClick={() => setActive(i)}
                  className="flex flex-col items-center gap-3"
                >
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full border-2 text-xl font-semibold transition-all duration-300 ${
                      i === active
                        ? "border-white bg-white/5 text-white"
                        : "border-[#262626] bg-[#111111] text-[#6B6B6B] hover:border-[#404040] hover:text-[#A3A3A3]"
                    }`}
                  >
                    {step.number}
                  </div>
                  <span
                    className={`text-sm font-medium transition-colors duration-300 ${
                      i === active ? "text-white" : "text-[#6B6B6B]"
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
                {i < steps.length - 1 && (
                  <div className="mx-4 h-0.5 flex-1 bg-[#262626]" />
                )}
              </div>
            ))}
          </div>

          {/* Active step detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-[#262626] bg-[#111111] p-10"
            >
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <div className="mb-4 flex items-center gap-3">
                    <h3 className="text-2xl font-semibold text-white">
                      {steps[active].title}
                    </h3>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-[#A3A3A3]">
                      {steps[active].duration}
                    </span>
                  </div>
                  <p className="max-w-[600px] leading-relaxed text-[#A3A3A3]">
                    {steps[active].description}
                  </p>
                </div>
                <div className="shrink-0">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[#6B6B6B]">
                    Entregáveis
                  </p>
                  <ul className="flex flex-col gap-2">
                    {steps[active].deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-[#A3A3A3]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#6B6B6B]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Steps - Mobile (Accordion) */}
        <div className="flex flex-col gap-3 md:hidden">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="overflow-hidden rounded-xl border border-[#262626] bg-[#111111]"
            >
              <button
                onClick={() => setActive(i === active ? -1 : i)}
                className="flex w-full items-center gap-4 p-5"
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${
                    i === active
                      ? "border-white text-white"
                      : "border-[#262626] text-[#6B6B6B]"
                  }`}
                >
                  {step.number}
                </span>
                <span
                  className={`text-base font-medium ${
                    i === active ? "text-white" : "text-[#A3A3A3]"
                  }`}
                >
                  {step.title}
                </span>
                <span className="ml-auto text-xs text-[#6B6B6B]">
                  {step.duration}
                </span>
              </button>
              <AnimatePresence>
                {i === active && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-[#262626] px-5 pt-4 pb-5">
                      <p className="mb-4 text-sm leading-relaxed text-[#A3A3A3]">
                        {step.description}
                      </p>
                      <ul className="flex flex-col gap-2">
                        {step.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-sm text-[#A3A3A3]"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#6B6B6B]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
