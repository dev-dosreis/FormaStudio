"use client";

import { motion } from "framer-motion";
import {
  Send,
  MessageSquare,
  Webhook,
  Hash,
  Bot,
  FileCheck,
  Activity,
  Headphones,
} from "lucide-react";

const features = [
  { icon: Send, label: "Envio em massa" },
  { icon: MessageSquare, label: "Receber mensagens" },
  { icon: Webhook, label: "Webhooks eventos" },
  { icon: Hash, label: "Multi-número" },
  { icon: Bot, label: "Chatbots & IA" },
];

const allFeatures = [
  "Envio em massa",
  "Webhooks em tempo real",
  "Multi-número",
  "Chatbots & IA integrada",
  "Templates aprovados",
  "Dashboard analytics",
  "99.9% uptime",
  "Suporte técnico dedicado",
];

export default function HarpiaAPI() {
  return (
    <section
      id="harpia"
      className="bg-gradient-to-b from-[#0F0F1A] to-[#1A1A2E] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6 text-center md:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8AB661]/30 bg-[#8AB661]/20 px-4 py-2">
            <span className="text-[13px] font-medium text-[#8AB661]">
              Produto Próprio
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-white md:text-[48px]">
            Harpia API
          </h2>

          <p className="mx-auto mb-4 max-w-[500px] text-xl text-white/80">
            WhatsApp Business API simplificada
          </p>

          <p className="mx-auto mb-12 max-w-[600px] text-lg text-white/50">
            API robusta para automação de comunicação via WhatsApp com escala e
            confiabilidade enterprise.
          </p>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {features.map((feature) => (
            <div
              key={feature.label}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80"
            >
              <feature.icon size={16} className="text-[#8AB661]" />
              {feature.label}
            </div>
          ))}
        </motion.div>

        {/* Code Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-12 max-w-[700px] overflow-hidden rounded-2xl border border-white/10 bg-black/40 text-left"
        >
          {/* Code header */}
          <div className="flex items-center gap-2 border-b border-white/10 px-6 py-3">
            <div className="h-3 w-3 rounded-full bg-red-500/60" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
            <div className="h-3 w-3 rounded-full bg-green-500/60" />
            <span className="ml-2 text-xs text-white/30">example.ts</span>
          </div>

          {/* Code content */}
          <pre className="p-6 font-mono text-sm leading-[1.8] overflow-x-auto">
            <code>
              <span className="text-white/30">{"// Envio simplificado"}</span>
              {"\n"}
              <span className="text-[#C792EA]">const</span>{" "}
              <span className="text-white/80">harpia</span>{" "}
              <span className="text-white/50">=</span>{" "}
              <span className="text-[#C792EA]">new</span>{" "}
              <span className="text-[#82AAFF]">Harpia</span>
              <span className="text-white/50">{"({ "}</span>
              <span className="text-white/80">apiKey</span>
              <span className="text-white/50">{": "}</span>
              <span className="text-[#C3E88D]">{"'sua-key'"}</span>
              <span className="text-white/50">{" })"}</span>
              {"\n\n"}
              <span className="text-[#C792EA]">await</span>{" "}
              <span className="text-white/80">harpia</span>
              <span className="text-white/50">.</span>
              <span className="text-[#82AAFF]">sendMessage</span>
              <span className="text-white/50">{"({"}</span>
              {"\n"}
              <span className="text-white/80">{"  to"}</span>
              <span className="text-white/50">{": "}</span>
              <span className="text-[#C3E88D]">{"'+5511999999999'"}</span>
              <span className="text-white/50">,</span>
              {"\n"}
              <span className="text-white/80">{"  message"}</span>
              <span className="text-white/50">{": "}</span>
              <span className="text-[#C3E88D]">
                {"'Olá! Sua compra foi confirmada.'"}
              </span>
              {"\n"}
              <span className="text-white/50">{"})"}</span>
            </code>
          </pre>
        </motion.div>

        {/* Feature Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mb-12 grid max-w-[600px] grid-cols-2 gap-3 text-left"
        >
          {allFeatures.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-sm text-white/60"
            >
              <span className="text-[#8AB661]">&#10003;</span>
              {feature}
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#cta"
            className="inline-flex rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10"
          >
            Acessar documentação &rarr;
          </a>
          <a
            href="#cta"
            className="inline-flex rounded-full bg-[#8AB661] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#7AA551]"
          >
            Falar com vendas
          </a>
        </motion.div>
      </div>
    </section>
  );
}
