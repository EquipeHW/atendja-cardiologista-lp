import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'

const oscineRegular = localFont({
  src: '../public/fonts/fonnts.com-Oscine_Regular.otf',
  variable: '--font-oscine-regular',
})

const oscineBold = localFont({
  src: '../public/fonts/fonnts.com-Oscine_Bold.otf',
  variable: '--font-oscine-bold',
})

export const metadata: Metadata = {
  title: 'Atend Já Feira de Santana - Cardiologia',
  description: 'Consultas e exames cardíacos em Feira de Santana',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${oscineRegular.variable} ${oscineBold.variable} font-oscine-regular`}>{children}</body>
    </html>
  )
}
