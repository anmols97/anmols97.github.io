import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anmol Singh',
  description: "Welcome to my digital space! I'm Anmol Singh, a passionate software engineer dedicated to continuous learning and innovation. Explore my journey through the realms of technology, where I share insights, projects, and the latest developments. Join me on this exciting adventure of coding, problem-solving, and pushing the boundaries of what's possible in the world of software engineering.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
