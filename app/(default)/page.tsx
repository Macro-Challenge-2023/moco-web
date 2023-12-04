export const metadata = {
  title: 'Home - Moco Kids',
  description: 'Turning Pages Into Games',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Newsletter />
    </>
  )
}
