"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "PonttoArq", initials: "PA" },
  { name: "NornScore", initials: "NS" },
  { name: "Cubo Itaú", initials: "CI" },
  { name: "Harpia", initials: "HP" },
  { name: "VentureX", initials: "VX" },
  { name: "ScaleUp", initials: "SU" },
];

export default function SocialProof() {
  return (
    <section className="border-y border-black/5 bg-[#F5F3EF] py-20">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-sm font-medium uppercase tracking-[0.1em] text-[#8A8A8A]"
        >
          Empresas que confiam na Forma
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-12 md:gap-16"
        >
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 text-[#8A8A8A] grayscale transition-all duration-300 hover:text-[#2D2D2D] hover:grayscale-0"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md border border-current text-xs font-bold">
                {logo.initials}
              </div>
              <span className="text-sm font-medium">{logo.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
