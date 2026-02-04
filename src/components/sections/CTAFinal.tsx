"use client";

import { motion } from "framer-motion";

export default function CTAFinal() {
  return (
    <section
      id="cta"
      className="bg-gradient-to-b from-[#0A0A0A] to-[#111111] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[600px] text-center"
        >
          {/* Avatar placeholder */}
          <div className="mx-auto mb-10 flex h-28 w-28 items-center justify-center rounded-full border-2 border-[#262626] bg-[#111111]">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="2"
                width="36"
                height="36"
                rx="4"
                stroke="white"
                strokeWidth="1.5"
                opacity="0.5"
              />
              <line x1="14" y1="12" x2="14" y2="28" stroke="white" strokeWidth="1.5" opacity="0.5" />
              <line x1="20" y1="12" x2="20" y2="28" stroke="white" strokeWidth="1.5" opacity="0.5" />
              <line x1="26" y1="12" x2="26" y2="28" stroke="white" strokeWidth="1.5" opacity="0.5" />
              <line x1="10" y1="20" x2="30" y2="20" stroke="white" strokeWidth="1.5" opacity="0.5" />
            </svg>
          </div>

          <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-white md:text-[40px]">
            Pronto para escalar?
          </h2>

          <p className="mb-10 text-lg leading-relaxed text-[#A3A3A3]">
            Agenda uma conversa e a gente cuida do resto.
          </p>

          <a
            href="https://cal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg bg-white px-8 py-4 text-base font-medium text-[#0A0A0A] transition-all hover:-translate-y-0.5 hover:bg-[#E5E5E5]"
          >
            Agendar Conversa
          </a>
        </motion.div>
      </div>
    </section>
  );
}
