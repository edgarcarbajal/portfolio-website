import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PHeader from "./components/pheader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "Built with Next.js, & Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className + ' bg-red-500'}>
        <PHeader />
        {children}
      </body>
    </html>
  );
}
