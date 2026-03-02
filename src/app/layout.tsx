import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "sb-mig — Storyblok Migration Toolkit",
  description:
    "sb-mig is a Storyblok migration toolkit. Sync components, run content migrations, and automate repetitive operations from code with an opinionated CLI.",
  openGraph: {
    title: "sb-mig — Storyblok Migration Toolkit",
    description:
      "Sync components, run content migrations, and automate repetitive Storyblok operations from code.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
