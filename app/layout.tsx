import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { FloatingDock } from "@/components/Navigation/FloatingDock";
import styles from "./Layout.module.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Jerome Haynes | Frontend Engineer",
  description: "Frontend Developer Portfolio. Creating impactful user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${jetbrainsMono.variable}`}>
      <body className={styles.body}>
        <div className={styles.scanline} />
        <FloatingDock />
        {children}
      </body>
    </html>
  );
}
