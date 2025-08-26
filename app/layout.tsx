import type React from "react"
import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Inter } from "next/font/google"
import "./globals.css"

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Soft Synergy - Budujemy Software... Efektywnie",
  description:
    "Soft Synergy to software house specjalizujący się w tworzeniu stron internetowych, sklepów e-commerce i systemów custom. 250+ zrealizowanych projektów. Skontaktuj się z nami!",
  keywords:
    "software house, tworzenie stron internetowych, sklepy e-commerce, systemy custom, WordPress, Laravel, Nuxt.js, programowanie",
  authors: [{ name: "Soft Synergy" }],
  creator: "Soft Synergy",
  publisher: "Soft Synergy",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://soft-synergy.com",
    siteName: "Soft Synergy",
    title: "Soft Synergy - Budujemy Software... Efektywnie",
    description:
      "Profesjonalne rozwiązania IT. 250+ zrealizowanych projektów. Specjalizujemy się w tworzeniu stron internetowych, sklepów e-commerce i systemów custom.",
    images: [
      {
        url: "/images/soft-synergy-logo.png",
        width: 1200,
        height: 630,
        alt: "Soft Synergy Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soft Synergy - Budujemy Software... Efektywnie",
    description: "Profesjonalne rozwiązania IT. 250+ zrealizowanych projektów.",
    images: ["/images/soft-synergy-logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/soft-synergy-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/soft-synergy-logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/images/soft-synergy-logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <head>
        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-sans: ${inter.variable};
  --font-mono: ${GeistMono.variable};
  --font-inter: ${inter.variable};
}
        `}</style>
      </head>
      <body className={`${inter.variable} ${figtree.variable}`}>{children}</body>
    </html>
  )
}
