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
  metadataBase: new URL("https://sb-mig-landing.vercel.app"),
  title: "sb-mig — Storyblok Operations CLI",
  description:
    "sb-mig syncs Storyblok schemas, configuration, stories, assets, and migrations from an auditable CLI.",
  icons: {
    icon: "/sb-mig-logo.png",
    apple: "/sb-mig-logo.png",
  },
  openGraph: {
    title: "sb-mig — Storyblok Operations CLI",
    description:
      "Sync Storyblok schemas, move content safely, run migrations, and audit every operation from code.",
    images: [
      {
        url: "/sb-mig-logo.png",
        width: 500,
        height: 500,
        alt: "sb-mig logo",
      },
    ],
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
