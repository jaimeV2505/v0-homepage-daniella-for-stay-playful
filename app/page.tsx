import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { BrandStatement } from "@/components/BrandStatement"
import { Programs } from "@/components/Programs"
import { Method } from "@/components/Method"
import { Testimonials } from "@/components/Testimonials"
import { Community } from "@/components/Community"
import { ContactForm } from "@/components/ContactForm"
import { Footer } from "@/components/Footer"
import { LetsChatWidget } from "@/components/LetsChatWidget"

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full max-w-full">
      <Header />
      <Hero />
      <BrandStatement />
      <Method />
      <Programs />
      <Testimonials />
      <Community />
      <ContactForm />
      <Footer />
      <LetsChatWidget />
    </main>
  )
}
