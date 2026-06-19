import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jb",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jinglong Zhao — Technical Lead & Full-Stack Engineer",
  description:
    "Technical Lead and Full-Stack Software Engineer in Edmonton, Alberta. Building production ERP platforms, real-time operations dashboards, workflow automation, and reliable internal tools on Frappe/ERPNext.",
  keywords: [
    "Jinglong Zhao",
    "Technical Lead",
    "Full-Stack Engineer",
    "Frappe",
    "ERPNext",
    "Edmonton",
  ],
  authors: [{ name: "Jinglong Zhao" }],
  openGraph: {
    title: "Jinglong Zhao — Technical Lead & Full-Stack Engineer",
    description:
      "Building production ERP platforms, real-time dashboards, and reliable internal tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen antialiased">
        <div className="aurora" aria-hidden />
        <div className="grid-overlay" aria-hidden />
        {children}
      </body>
    </html>
  );
}
