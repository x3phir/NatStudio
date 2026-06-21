import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Portfolio } from '@/components/portfolio'
import { Pricing } from '@/components/pricing'
import { HowToOrder } from '@/components/how-to-order'
import { Testimonials } from '@/components/testimonials'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <HowToOrder />
      <Testimonials />
      <Footer />
    </main>
  )
}
