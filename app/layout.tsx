import type { Metadata } from 'next'
import './globals.css'

// Import Roboto font
import { Roboto } from 'next/font/google'

// Load Roboto with weights you want
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Markara Oun',
  description: 'I am passionate full-stack developer focused on building efficient, scalable web applications using Spring Boot and Next.js. Recently, I developed a full-stack project with PostgreSQL, managing everything from API design to responsive UI.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-roboto`}>
        {children}
      </body>
    </html>
  )
}
