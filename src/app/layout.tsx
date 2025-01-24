import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quranium",
  description: "Quantum-proof, Layer 1 DLT for the next generation of digital security",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body className={`${inter.className} bg-black min-h-screen`}>
        <Navigation />
        <main className="relative w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
