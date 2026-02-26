import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jinglong Zhao | Full-Stack Engineer",
  description:
    "Product-oriented Full-Stack Engineer. Real-time systems, performance, integrations, deployments. Edmonton / Remote Canada.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-zinc-100 antialiased">{children}</body>
    </html>
  );
}