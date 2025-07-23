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
  description: 'I am a full-stack developer focused on building scalable web apps with Spring Boot and Next.js. I recently built a full-stack project using PostgreSQL, handling API design and responsive UI.',
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
