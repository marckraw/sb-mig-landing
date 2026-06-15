import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider/next";
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
    "sb-mig is a Storyblok migration and synchronization toolkit with dry-run artifacts, published-layer preservation, and an auditable CLI.",
  openGraph: {
    title: "sb-mig — Storyblok Migration Toolkit",
    description:
      "Sync Storyblok schemas, run safer content migrations, and audit every operation from code.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
