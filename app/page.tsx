import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Intro } from '@/components/intro'
import { Accommodations } from '@/components/accommodations'
import { Gastronomy } from '@/components/gastronomy'
import { Wellness } from '@/components/wellness'
import { Destinations } from '@/components/destinations'
import { Gallery } from '@/components/gallery'
import { Reservation } from '@/components/reservation'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Intro />
      <Accommodations />
      <Gastronomy />
      <Wellness />
      <Destinations />
      <Gallery />
      <Reservation />
      <SiteFooter />
    </main>
  )
}
