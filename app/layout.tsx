import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Ubuntu Tech",
  description: "Tecnología, comunidad y propósito",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}