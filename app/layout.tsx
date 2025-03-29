import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "phish.directory - Join the Waitlist",
  description:
    "Join the waitlist for phish.directory - Navigate safely. Identify phishing sites instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        defer={true}
        src="https://umami.hogwarts.dev/script.js"
        data-website-id="09449c2c-634b-48c0-9373-e1e2b978215c"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import "./globals.css";
