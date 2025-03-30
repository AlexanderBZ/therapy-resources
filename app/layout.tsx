import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { PrivacyNotice } from "@/components/privacy-notice";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smile Therapy",
  description: "AI-powered therapy resources to help you smile again",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <PrivacyNotice />
      </body>
    </html>
  );
}

import "./globals.css";
