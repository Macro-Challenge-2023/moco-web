import './css/style.css'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

import { Inter, Architects_Daughter } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'
import Footer from "@/components/ui/footer";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'Moco Kids',
  description: 'Your favorite reading comprehension app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-blue-950 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
 