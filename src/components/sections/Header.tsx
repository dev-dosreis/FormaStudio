"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Processo", href: "#processo" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <svg
            width="32"
            height="32"
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
              strokeWidth="2"
            />
            <line x1="14" y1="12" x2="14" y2="28" stroke="white" strokeWidth="2" />
            <line x1="20" y1="12" x2="20" y2="28" stroke="white" strokeWidth="2" />
            <line x1="26" y1="12" x2="26" y2="28" stroke="white" strokeWidth="2" />
            <line x1="10" y1="20" x2="30" y2="20" stroke="white" strokeWidth="2" />
          </svg>
          <span className="text-lg font-semibold tracking-tight text-white">
            Forma
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#A3A3A3] transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#cta"
          className="hidden rounded-lg bg-white px-6 py-3 text-sm font-medium text-[#0A0A0A] transition-all hover:-translate-y-0.5 hover:bg-[#E5E5E5] md:inline-flex"
        >
          Falar com especialista
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white md:hidden"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 top-20 z-40 flex flex-col bg-[#0A0A0A] px-6 pt-8 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-medium text-[#A3A3A3] transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              className="mt-10 inline-flex justify-center rounded-lg bg-white px-6 py-4 text-base font-medium text-[#0A0A0A] transition-all hover:bg-[#E5E5E5]"
            >
              Falar com especialista
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
