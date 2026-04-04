"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

type Testimonial = {
  id: string
  quote: string
  shortQuote: string
  author: string
  role: string
  badge: string
  initial: string
  highlight?: string
}

const testimonials: Testimonial[] = [
  {
    id: "emma",
    quote:
      "For the first time in my life, I actually enjoy eating without guilt. This completely changed how I relate to food, my body, and my day-to-day life.",
    shortQuote: "The best investment in my wellbeing I’ve ever made.",
    author: "Emma L.",
    role: "12-Week Program Graduate",
    badge: "Life-changing",
    initial: "E",
    highlight: "wellbeing",
  },
  {
    id: "marcus",
    quote:
      "The approach is so refreshing — no calorie counting, no restrictions. Just genuine support and practical guidance that fits my busy life.",
    shortQuote:
      "Refreshing, practical, and finally something that fits real life.",
    author: "Marcus K.",
    role: "1:1 Coaching Client",
    badge: "Highly recommend",
    initial: "M",
    highlight: "real life",
  },
]

const AUTO_ROTATE_MS = 4500

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (testimonials.length <= 1) return
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, AUTO_ROTATE_MS)
    return () => window.clearInterval(timer)
  }, [])

  const active = testimonials[activeIndex]

  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#FFFDF9] py-0 w-full">

      {/* 1. TICKER TURQUESA (MÁXIMA OPTIMIZACIÓN MOBILE/DESKTOP) */}
      <div className="w-full border-y-[2px] sm:border-y-[3px] border-black bg-[#40E0D0] py-3 sm:py-5 shadow-[0_4px_0_0_rgba(0,0,0,1)] relative z-30">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[0, 1].map((i) => (
            <div key={i} className="flex shrink-0 items-center">
              <span className="mx-4 sm:mx-8 font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] text-black text-lg sm:text-2xl lg:text-3xl">
                Stöd som passar ditt liv ✦ Lekfullt ✦ i linje med dina värderingar ✦ STAY PLAYFUL ✦ MOTIVERANDE ✦ ENERGIGIVANDE
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 2. CONTENIDO EDITORIAL */}
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-12 py-12 sm:py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] items-center gap-10 sm:gap-16 lg:gap-24">

          {/* LADO IZQUIERDO: IMAGEN CON BADGE ABAJO */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[30px] sm:rounded-[45px] border-[3px] sm:border-[4px] border-black bg-white shadow-[15px_15px_0_0_rgba(0,0,0,1)] sm:shadow-[25px_25px_0_0_rgba(0,0,0,1)] aspect-[4/5] lg:aspect-[3/4.2]">
              <Image
                src="/smile.JPG"
                alt="Stay Playful Editorial"
                fill
                priority
                className="object-cover object-center transition-transform duration-1000 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* BADGE MOVIDO ABAJO (PARA NO TAPAR LA CABEZA) */}
              <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 z-20">
                <div className="whitespace-nowrap rounded-full border-[2px] sm:border-[3px] border-black bg-[#FFBD17] px-5 sm:px-8 py-2 sm:py-3 text-[10px] sm:text-sm font-black uppercase tracking-widest shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                  {active.badge}
                </div>
              </div>
            </div>
          </div>

          {/* LADO DERECHO: TEXTOS */}
          <div className="flex flex-col items-start lg:pl-10 order-1 lg:order-2">
            <div className="relative w-full">
              {/* Títulos dinámicos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-[3.5rem] sm:text-[5rem] lg:text-[7.5rem] xl:text-[10rem] font-black uppercase leading-[0.85] tracking-[-0.04em] text-black">
                  Your <br />
                  <span className="text-[#FF008E] italic">playground!</span>
                </h2>
              </motion.div>

              <div className="mt-8 sm:mt-14 space-y-8 sm:space-y-12 w-full">
                <p className="font-serif text-2xl sm:text-3xl lg:text-5xl italic text-black/90">
                  Mer info kommer snart!
                </p>

                {/* Bloque de Testimonio */}
                <div className="max-w-full sm:max-w-[550px] border-l-[4px] sm:border-l-[6px] border-black pl-6 sm:pl-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active.id}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-4 sm:space-y-6"
                    >
                      <p className="text-xl sm:text-2xl lg:text-3xl font-bold leading-[1.3] text-black">
                        “{active.shortQuote}”
                      </p>
                      <div className="pt-2">
                        <p className="text-[10px] sm:text-xs lg:text-base font-black uppercase tracking-[0.2em] text-[#FF008E]">
                          {active.author} — <span className="text-black/50">{active.role}</span>
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Controles de Navegación */}
              <div className="mt-10 sm:mt-16 flex gap-3 sm:gap-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-3 sm:h-5 border-[2px] sm:border-[3px] border-black transition-all duration-500 shadow-[2px_2px_0_0_rgba(0,0,0,1)] ${index === activeIndex
                      ? "w-12 sm:w-20 bg-[#FF008E]"
                      : "w-3 sm:w-5 bg-white"
                      }`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marca de agua optimizada para mobile */}
      <div className="pointer-events-none absolute bottom-[-5%] sm:bottom-[-8%] left-0 z-0 select-none opacity-[0.02] sm:opacity-[0.03]">
        <span className="font-serif text-[30vw] sm:text-[25vw] font-black uppercase leading-none tracking-tighter">
          PLAYFUL
        </span>
      </div>
    </section>
  )
}