import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://ubuntutech.org/"),

  title: {
    default: "Ubuntu Tech 2026",
    template: "%s | Ubuntu Tech",
  },

  description:
    "Ubuntu Tech es una comunidad tecnológica afrocolombiana que impulsa la innovación, el aprendizaje, el liderazgo y las oportunidades en tecnología.",

  keywords: [
    "Ubuntu Tech",
    "Tecnología",
    "Afrocolombianos",
    "Comunidad Tech",
    "Evento tecnológico",
    "Programación",
    "Software",
    "Desarrollo Web",
    "Medellín",
    "Colombia",
    "Speakers",
    "Networking",
  ],

  authors: [{ name: "Vrilli Castro" }],
  creator: "Vrilli Castro",
  publisher: "Ubuntu Tech",

  openGraph: {
    title: "Ubuntu Tech 2026",
    description:
      "Comunidad afrocolombiana impulsando el futuro de la tecnología.",
    url: "https://ubuntutech.org/",
    siteName: "Ubuntu Tech",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/logoUbuntu2026.png",
        width: 1200,
        height: 630,
        alt: "Ubuntu Tech 2026",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ubuntu Tech 2026",
    description:
      "Comunidad afrocolombiana impulsando el futuro de la tecnología.",
    images: ["/logoUbuntu2026.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "https://ubuntutech.org/",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-black text-white antialiased">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}