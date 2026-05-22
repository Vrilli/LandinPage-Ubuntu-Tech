import { ReactNode } from "react";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";

export const metadata = {
  title: "Ubuntu Tech",
  description: "Tecnología, comunidad y propósito",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-black text-white">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}