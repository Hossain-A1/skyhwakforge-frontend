import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navber from '@/components/Navber'
import { cn } from '@/libs/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SkyHawkForce | Home',
  description: 'SkyHawkForce a E-commerce Drone store.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'bg-dark text-light')}>
        <Navber/>
        {children}</body>
    </html>
  )
}
