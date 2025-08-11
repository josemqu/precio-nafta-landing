import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Precio Nafta - Encuentra el mejor precio de combustible',
  description: 'La app más completa para encontrar los mejores precios de nafta, gasoil y GNC cerca de ti. Disponible en web, iOS y Android.',
  keywords: 'precio nafta, combustible, gasoil, gnc, argentina, app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
