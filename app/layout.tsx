import "./globals.css";
import { Inter } from "next/font/google";
import BackToTop from "./components/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Precio Nafta - Encuentra el mejor precio de combustible",
  description:
    "La app más completa para encontrar los mejores precios de nafta, gasoil y GNC cerca de ti. Disponible en web, iOS y Android.",
  keywords: "precio nafta, combustible, gasoil, gnc, argentina, app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content="Precio Nafta" />
        <meta name="robots" content="index, follow" />
        <meta name="color-scheme" content="dark light" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/icons/pump_512.png" />
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
