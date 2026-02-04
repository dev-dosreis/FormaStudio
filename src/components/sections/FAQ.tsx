"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Qual o investimento mínimo para um projeto?",
    answer:
      "Nossos projetos começam a partir de R$30.000. O valor depende da complexidade, prazo e escopo do produto. Trabalhamos com sprints e entregas incrementais.",
  },
  {
    question: "Quanto tempo leva para entregar um MVP?",
    answer:
      "Um MVP típico leva de 6 a 12 semanas. Começamos com uma sprint de discovery de 2 semanas para alinhar expectativas e definir o escopo ideal.",
  },
  {
    question: "Vocês trabalham com quais tecnologias?",
    answer:
      "React, Next.js, React Native, Node.js, Python, AWS, GCP e mais. Escolhemos a stack ideal para cada projeto baseado em requisitos técnicos e de negócio.",
  },
  {
    question: "Como funciona o suporte pós-entrega?",
    answer:
      "Oferecemos 30 dias de suporte gratuito após a entrega. Depois disso, temos planos de manutenção contínua para garantir que seu produto siga evoluindo.",
  },
  {
    question: "Posso acompanhar o andamento do projeto?",
    answer:
      "Sim. Transparência é um dos nossos principais valores. Você terá acesso ao repositório de código, board de tarefas e calls semanais de alinhamento.",
  },
  {
    question: "Qual a relação entre Forma Studio e Codnodo?",
    answer:
      "A Forma é o braço de venture building e produtos do ecossistema Codnodo. Enquanto a Codnodo foca em serviços de desenvolvimento, a Forma constrói e escala produtos próprios e de parceiros.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#F5F3EF] py-24 md:py-32">
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
            FAQ
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#2D2D2D] md:text-[40px]">
            Perguntas frequentes
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="mx-auto max-w-[800px] space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="overflow-hidden rounded-2xl border-2 border-black bg-white"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="pr-4 font-medium text-[#2D2D2D]">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-[#8AB661] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-[#E5E5E5] px-6 py-5">
                      <p className="leading-relaxed text-[#5A5A5A]">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
