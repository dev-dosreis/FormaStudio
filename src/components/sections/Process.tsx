"use client";

import { motion } from "framer-motion";
import { Users, FileText, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Users,
    title: "ENTENDER O",
    highlight: "NEGÓCIO",
    label: "Discovery",
  },
  {
    number: "02",
    icon: FileText,
    title: "ESCOPO E",
    highlight: "CRONOGRAMA",
    label: "Proposta",
  },
  {
    number: "03",
    icon: Palette,
    title: "PROTÓTIPO",
    highlight: "VALIDADO",
    label: "Design",
  },
  {
    number: "04",
    icon: Code,
    title: "CÓDIGO",
    highlight: "ESCALÁVEL",
    label: "Desenvolvimento",
  },
  {
    number: "05",
    icon: Rocket,
    title: "PRODUTO EM",
    highlight: "PRODUÇÃO",
    label: "Entrega",
  },
];

export default function Process() {
  return (
    <section id="processo" className="overflow-hidden bg-[#1A1A2E] py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.1em] text-white/40">
            Processo
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-[40px]">
            Nosso Processo
          </h2>
        </motion.div>

        {/* 3D Cards Container */}
        <div className="flex justify-center" style={{ perspective: "1200px" }}>
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-end md:gap-[-10px]">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  rotateY: 0,
                  rotateX: 0,
                  translateY: -20,
                  translateZ: 30,
                  borderColor: "rgba(138, 182, 97, 1)",
                  boxShadow: "0 20px 60px rgba(138, 182, 97, 0.2)",
                }}
                className="flex h-[280px] w-[180px] flex-col rounded-2xl border border-white/10 p-6 backdrop-blur-xl transition-all duration-500"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
                  transform: `rotateY(${-20 + index * 5}deg) rotateX(5deg) translateZ(${
                    index === 2 ? 0 : -Math.abs(index - 2) * 20
                  }px)`,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Number */}
                <span className="text-sm text-white/30">{step.number}</span>

                {/* Icon */}
                <div className="my-auto">
                  <step.icon size={48} className="text-white/40" strokeWidth={1} />
                </div>

                {/* Title */}
                <div>
                  <p className="text-[15px] font-medium leading-snug text-white">
                    {step.title}
                  </p>
                  <p className="text-[15px] font-medium leading-snug text-[#60A5FA]">
                    {step.highlight}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
