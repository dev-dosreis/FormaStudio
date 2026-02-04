import { Github, Linkedin, Twitter } from "lucide-react";

const navigation = [
  { label: "Serviços", href: "#servicos" },
  { label: "Cases", href: "#portfolio" },
  { label: "Processo", href: "#processo" },
];

const social = [
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "GitHub", href: "#", icon: Github },
  { label: "Twitter", href: "#", icon: Twitter },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[#F5F3EF] py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        {/* Top */}
        <div className="mb-12">
          {/* Logo */}
          <a href="#" className="mb-4 flex items-center gap-2">
            <svg
              width="28"
              height="28"
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
                stroke="#2D2D2D"
                strokeWidth="2"
              />
              <line x1="14" y1="12" x2="14" y2="28" stroke="#2D2D2D" strokeWidth="2" />
              <line x1="20" y1="12" x2="20" y2="28" stroke="#2D2D2D" strokeWidth="2" />
              <line x1="26" y1="12" x2="26" y2="28" stroke="#2D2D2D" strokeWidth="2" />
              <line x1="10" y1="20" x2="30" y2="20" stroke="#2D2D2D" strokeWidth="2" />
            </svg>
            <span className="text-lg font-semibold text-[#2D2D2D]">Forma</span>
          </a>
          <p className="max-w-[300px] text-sm leading-relaxed text-[#8A8A8A]">
            Braço de venture building e produtos do ecossistema Codnodo.
          </p>
        </div>

        {/* Divider */}
        <div className="mb-12 h-px bg-[#E5E5E5]" />

        {/* Links grid */}
        <div className="mb-12 grid gap-10 sm:grid-cols-3">
          {/* Navigation */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-[#8A8A8A]">
              Navegação
            </p>
            <ul className="flex flex-col gap-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-[#5A5A5A] transition-colors hover:text-[#2D2D2D]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-[#8A8A8A]">
              Contato
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:contato@forma.studio"
                  className="text-sm text-[#5A5A5A] transition-colors hover:text-[#2D2D2D]"
                >
                  contato@forma.studio
                </a>
              </li>
              <li className="text-sm text-[#5A5A5A]">São Paulo, BR</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-[#8A8A8A]">
              Social
            </p>
            <div className="flex gap-3">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5E5E5] text-[#8A8A8A] transition-all hover:border-[#2D2D2D] hover:text-[#2D2D2D]"
                >
                  <item.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-8 h-px bg-[#E5E5E5]" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-[#8A8A8A]">
            &copy; 2026 Forma Studio. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[#8A8A8A]">
            Parte do ecossistema Codnodo
          </p>
        </div>
      </div>
    </footer>
  );
}
