import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forma Studio | Software & Produto para Empresas que Escalam",
  description:
    "Studio de software que ajuda empresas de R$1M a R$20M a destravar crescimento através de tecnologia e produto. Do MVP ao scale.",
  keywords:
    "software studio, desenvolvimento, produto digital, MVP, startup, escala",
  openGraph: {
    title: "Forma Studio",
    description: "Software & Produto para Empresas que Escalam",
    url: "https://forma.studio",
    siteName: "Forma Studio",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forma Studio",
    description: "Software & Produto para Empresas que Escalam",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Forma Studio",
              description: "Studio de software e produto",
              url: "https://forma.studio",
              areaServed: "BR",
              priceRange: "$$$$",
            }),
          }}
        />
      </head>
      <body className="bg-[#0A0A0A] font-sans antialiased">{children}</body>
    </html>
  );
}
