"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "A Forma transformou completamente a maneira como entregamos nosso produto. Em poucos meses, saímos de uma ideia no papel para um sistema robusto usado por milhares de escritórios.",
    name: "Lucas Mendes",
    role: "CEO, PonttoArq",
    initials: "LM",
  },
  {
    text: "O que mais me impressionou foi a visão de produto. Não entregaram só código — entregaram uma solução que realmente fez sentido para o nosso negócio e escala.",
    name: "Ana Clara Souza",
    role: "CPO, NornScore",
    initials: "AC",
  },
  {
    text: "Transparência total em cada etapa. Acompanhamos tudo em tempo real, sem surpresas. O suporte pós-entrega é um diferencial que poucas empresas oferecem.",
    name: "Roberto Almeida",
    role: "CTO, Harpia",
    initials: "RA",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

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
            Depoimentos
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#2D2D2D] md:text-[40px]">
            O que nossos clientes dizem
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <div
          className="mx-auto max-w-[800px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border-2 border-black bg-white p-10 md:p-12"
            >
              <div className="mb-8 text-5xl leading-none text-[#E5E5E5]">
                &ldquo;
              </div>
              <p className="mb-8 text-lg leading-[1.8] text-[#2D2D2D]">
                {testimonials[current].text}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#8AB661] text-sm font-bold text-white">
                  {testimonials[current].initials}
                </div>
                <div>
                  <p className="font-semibold text-[#2D2D2D]">
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm text-[#8A8A8A]">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-[#8AB661]" : "w-2 bg-[#E5E5E5]"
                }`}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
