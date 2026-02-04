"use client";

import { motion } from "framer-motion";

export default function CTAFinal() {
  return (
    <section id="cta" className="bg-[#8AB661] py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[600px] text-center"
        >
          <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-white md:text-[40px]">
            Pronto para escalar?
          </h2>

          <p className="mb-10 text-lg leading-relaxed text-white/90">
            Agenda uma conversa e a gente cuida do resto. Vamos construir algo
            incrível juntos.
          </p>

          <a
            href="https://cal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-white px-8 py-4 text-base font-medium text-[#8AB661] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
          >
            Agendar Conversa
          </a>
        </motion.div>
      </div>
    </section>
  );
}
