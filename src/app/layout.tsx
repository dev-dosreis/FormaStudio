import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forma Studio | Venture Building & Produtos Digitais | Ecossistema Codnodo",
  description:
    "Braço de venture building e produtos do ecossistema Codnodo. Criamos, desenvolvemos e escalamos produtos digitais — do MVP ao Series A.",
  keywords:
    "venture building, produtos digitais, NornScore, Harpia API, Codnodo, desenvolvimento, software studio",
  openGraph: {
    title: "Forma Studio | Ecossistema Codnodo",
    description: "Venture Building & Produtos Digitais — do MVP ao Series A",
    url: "https://forma.studio",
    siteName: "Forma Studio",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forma Studio",
    description: "Venture Building & Produtos Digitais — do MVP ao Series A",
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
      <body className="bg-[#F5F3EF] font-sans antialiased">{children}</body>
    </html>
  );
}
