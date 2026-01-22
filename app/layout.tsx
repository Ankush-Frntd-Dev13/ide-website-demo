import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "IDE - Innovative Digital Excellence | Transform Your Industry",
  description: "Aprovechamos el poder de la IA para impulsar la innovación, transformar industrias y crear perspectivas impactantes para su negocio.",
  keywords: "digital innovation, AI solutions, industry transformation, data insights, technology consulting",
  authors: [{ name: "IDE Team" }],
  openGraph: {
    title: "IDE - Innovative Digital Excellence",
    description: "Transform your industry with innovative AI-powered solutions and data-driven insights.",
    type: "website",
    locale: "es_ES",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
