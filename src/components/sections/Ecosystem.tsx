"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function Ecosystem() {
  return (
    <section className="bg-[#F5F3EF] py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.1em] text-[#8A8A8A]">
            Ecossistema
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#2D2D2D] md:text-[40px]">
            Parte do ecossistema
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-lg text-[#5A5A5A]">
            Codnodo é serviço. Forma é produto. Juntos, cobrimos toda a jornada
            do seu negócio digital.
          </p>
        </motion.div>

        {/* Ecosystem Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-[800px] rounded-3xl border-2 border-black bg-white p-8 md:p-12"
        >
          {/* Top Row - Codnodo & Forma */}
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-16">
            {/* Codnodo */}
            <div className="flex-1 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-black bg-[#F5F3EF]">
                <span className="text-xl font-bold text-[#2D2D2D]">C</span>
              </div>
              <h3 className="text-lg font-semibold text-[#2D2D2D]">
                Codnodo Studio
              </h3>
              <p className="mt-1 text-sm text-[#5A5A5A]">
                Desenvolvimento sob demanda, consultoria, times dedicados
              </p>
              <div className="mt-3 inline-flex rounded-full bg-[#F5F3EF] px-3 py-1 text-xs font-medium text-[#8A8A8A]">
                Serviços
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center gap-2 text-[#8A8A8A]">
              <div className="h-px w-12 bg-[#E5E5E5]" />
              <ArrowRight size={16} />
              <div className="h-px w-12 bg-[#E5E5E5]" />
            </div>
            <div className="flex md:hidden items-center justify-center">
              <ArrowDown size={16} className="text-[#8A8A8A]" />
            </div>

            {/* Forma */}
            <div className="flex-1 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-[#8AB661] bg-[#8AB661]">
                <span className="text-xl font-bold text-white">F</span>
              </div>
              <h3 className="text-lg font-semibold text-[#2D2D2D]">
                Forma Studio
              </h3>
              <p className="mt-1 text-sm text-[#5A5A5A]">
                Venture building, produtos próprios, parcerias de longo prazo
              </p>
              <div className="mt-3 inline-flex rounded-full bg-[#8AB661]/10 px-3 py-1 text-xs font-medium text-[#8AB661]">
                Produtos
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 flex items-center justify-center">
            <div className="h-px flex-1 bg-[#E5E5E5]" />
            <ArrowDown size={16} className="mx-4 text-[#8A8A8A]" />
            <div className="h-px flex-1 bg-[#E5E5E5]" />
          </div>

          {/* Bottom Row - Products */}
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-12">
            {/* NornScore */}
            <div className="flex-1 rounded-2xl border border-[#E5E5E5] bg-[#F5F3EF] p-6 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#1A1A2E]">
                <span className="text-xs font-bold text-white">NS</span>
              </div>
              <h4 className="font-semibold text-[#2D2D2D]">NornScore</h4>
              <p className="mt-1 text-xs text-[#8A8A8A]">
                Fintech &middot; Cubo Itaú
              </p>
            </div>

            {/* Harpia */}
            <div className="flex-1 rounded-2xl border border-[#E5E5E5] bg-[#F5F3EF] p-6 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#1A1A2E]">
                <span className="text-xs font-bold text-white">HP</span>
              </div>
              <h4 className="font-semibold text-[#2D2D2D]">Harpia API</h4>
              <p className="mt-1 text-xs text-[#8A8A8A]">
                WhatsApp Business API
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
