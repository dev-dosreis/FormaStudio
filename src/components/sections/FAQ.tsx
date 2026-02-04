"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Qual o prazo típico de um projeto?",
    answer:
      "Depende do escopo e complexidade. Em média: landing pages e sites levam 2-4 semanas, MVPs e aplicativos de 6-12 semanas, e sistemas complexos de 12-24 semanas. Fazemos um levantamento detalhado antes de dar qualquer prazo. Preferimos ser realistas do que criar expectativas erradas.",
  },
  {
    question: "Como funciona o processo de trabalho?",
    answer:
      "Trabalhamos em sprints de 2 semanas com entregas incrementais. Você participa das dailies (se quiser), tem acesso ao board de tasks e ao ambiente de staging para acompanhar o progresso em tempo real. Comunicação direta, sem intermediários.",
  },
  {
    question: "Vocês oferecem manutenção após a entrega?",
    answer:
      "Sim! Incluímos 30 dias de suporte gratuito para ajustes e correções. Após esse período, oferecemos planos de manutenção mensais ou você pode nos chamar sob demanda. Também entregamos documentação completa para seu time evoluir o produto.",
  },
  {
    question: "Qual o investimento mínimo para começar?",
    answer:
      "Projetos começam a partir de R$25.000 para MVPs e podem chegar a R$150.000+ para sistemas complexos. O valor exato depende do escopo. Fazemos uma proposta detalhada após o discovery inicial — sem custo e sem compromisso.",
  },
  {
    question: "Vocês trabalham com minha identidade visual existente?",
    answer:
      "Com certeza. Se você já tem brand guidelines, trabalhamos dentro delas. Se não tem, podemos criar junto ou focar só no produto. Flexibilidade total.",
  },
  {
    question: "Em quais tecnologias vocês trabalham?",
    answer:
      "Nosso stack principal: Front-end com React, Next.js e React Native; Back-end com Node.js, Python e Go; Cloud com AWS, GCP e Azure; e IA com OpenAI, LangChain e modelos open-source. Mas escolhemos a tech pela necessidade do projeto, não por preferência pessoal.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="flex flex-col gap-16 md:flex-row md:gap-20">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="shrink-0 md:w-[340px]"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.1em] text-[#6B6B6B]">
              FAQ
            </p>
            <h2 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-white md:text-[40px]">
              Perguntas Frequentes
            </h2>
            <p className="mb-8 leading-relaxed text-[#A3A3A3]">
              Respostas às dúvidas mais comuns sobre nosso trabalho.
            </p>
            <a
              href="#cta"
              className="inline-flex rounded-lg border border-[#404040] bg-transparent px-6 py-3 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/5"
            >
              Ainda tem dúvidas? Fale com a gente
            </a>
          </motion.div>

          {/* Right column - Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1"
          >
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
                    openIndex === i
                      ? "border-[#404040] bg-[#111111]"
                      : "border-[#262626] bg-[#111111] hover:border-[#404040]"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-6"
                  >
                    <span className="text-left font-medium text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-[#6B6B6B] transition-transform duration-300 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p className="leading-relaxed text-[#A3A3A3]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
