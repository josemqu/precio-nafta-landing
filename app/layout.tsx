import "./globals.css";
import { Inter } from "next/font/google";
import BackToTop from "./components/BackToTop";
import type { Metadata, Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Precio Nafta - Encuentra el mejor precio de combustible",
    template: "%s | Precio Nafta",
  },
  description:
    "La app más completa para encontrar los mejores precios de nafta, gasoil y GNC cerca de ti. Disponible en web, iOS y Android.",
  applicationName: "Precio Nafta",
  authors: [{ name: "Precio Nafta" }],
  creator: "Precio Nafta",
  publisher: "Precio Nafta",
  category: "Utilidades",
  keywords: [
    "precio nafta",
    "precio combustible",
    "gasoil",
    "gnc",
    "argentina",
    "app",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Precio Nafta - Encuentra el mejor precio de combustible",
    description:
      "La app más completa para encontrar los mejores precios de nafta, gasoil y GNC cerca de ti.",
    url: "/",
    siteName: "Precio Nafta",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/icons/pump_512.png",
        width: 512,
        height: 512,
        alt: "Precio Nafta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Precio Nafta - Encuentra el mejor precio de combustible",
    description:
      "La app más completa para encontrar los mejores precios de nafta, gasoil y GNC cerca de ti.",
    images: ["/images/icons/pump_512.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/icons/pump_512.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f162a" },
    { media: "(prefers-color-scheme: dark)", color: "#0f162a" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* SEO handled by Next.js Metadata & Viewport exports */}
        <meta name="color-scheme" content="dark light" />
        {/* Prevent theme flash: set 'dark' class ASAP based on saved preference or system */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const ls = localStorage.getItem('darkMode'); const isDark = ls === 'true' || (ls === null && window.matchMedia('(prefers-color-scheme: dark)').matches); const c = document.documentElement.classList; isDark ? c.add('dark') : c.remove('dark'); } catch(e){} })();`,
          }}
        />
      </head>
      <body className={inter.className} style={{ backgroundColor: '#0f162a' }}>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
