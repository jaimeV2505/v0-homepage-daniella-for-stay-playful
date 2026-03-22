import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[calc(100vh-8rem)]">
        {/* Left: Image */}
        <div className="relative h-[50vh] lg:h-auto order-2 lg:order-1">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-shkrabaanthony-7081150-bIERGVUyNNOGGog64mq8I3rZZknp2E.jpg"
            alt="Playful lifestyle portrait with rainbow light"
            fill
            className="object-cover"
            priority
          />
          {/* Decorative overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-sp-deep-brown/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-sp-soft-green/30" />
        </div>

        {/* Right: Content Panel */}
        <div className="bg-sp-soft-green flex flex-col justify-center px-6 py-14 sm:px-12 lg:px-18 xl:px-28 order-1 lg:order-2">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <p className="text-sp-hot-pink font-bold text-xs tracking-widest uppercase mb-4">
              Health Coaching
            </p>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-sp-deep-brown leading-[1.05] text-balance mb-6">
              A healthier way to feel{" "}
              <span className="italic text-sp-hot-pink">well</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-sp-deep-brown/80 leading-relaxed mb-10 text-pretty max-w-xl">
              Not another diet. A personalized approach to building a sustainable, 
              joyful relationship with food, movement, and yourself.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-sp-hot-pink hover:bg-sp-hot-pink/90 text-white rounded-lg px-8 font-bold text-base h-14 border-2 border-sp-hot-pink shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="#contact">
                  Book a Free Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-sp-deep-brown text-sp-deep-brown hover:bg-sp-deep-brown hover:text-white rounded-lg px-8 font-bold text-base h-14 transition-all"
              >
                <Link href="#programs">
                  Explore Programs
                </Link>
              </Button>
            </div>

            {/* Trust Indicator */}
            <p className="mt-8 text-sm text-sp-deep-brown/60">
              Trusted by 100+ clients across Sweden and internationally
            </p>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#F5F3F0"
            opacity="1"
          />
        </svg>
      </div>
    </section>
  )
}
