"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ReactNode, useRef } from "react"

type MethodCard = {
  id: string
  eyebrow: string
  subtitle: string
  description: ReactNode
  points: string[]
  accent: string
  panel: string
  sectionBg: string
  image?: string
}

const methodCards: MethodCard[] = [
  {
    id: "01",
    eyebrow: "Meet the Founder",
    subtitle: "Daniella - Grundare av Stay Playful",
    description: (
      <>
        <p>Det började med en tillfrisknad från en ätstörning. En hyper fixering kring psykologi och nutrition.</p>
        <p>Till certifikat för kostrådgivning och tävlingar inom bikini fitness. Tills att jag sa blää — vad är det människor håller på med där ute?</p>
        <p><strong>Den insikten förändrade allt!</strong> Problemet är inte disciplin, utan att vi lägger tid på det vi inte gillar.</p>
      </>
    ),
    points: ["Certifierad kostrådgivare", "Erfarenhet inom ätstörningsvård", "Passion för hållbar livsstil"],
    accent: "#FFABFF",
    panel: "#F6C8F4",
    sectionBg: "#F5F0E6",
    image: "/Daniella.jpg",
  },
  {
    id: "02",
    eyebrow: "Vision",
    subtitle: "Ett nytt sätt att se på balans och välmående",
    description: (
      <>
        <p>Målet är inte perfektion, press eller ständig självkontroll.</p>
        <p>Det handlar om att hjälpa dig bygga något som känns personligt, hållbart och glädjefyllt.</p>
        <p>Ett stöd som faktiskt passar ditt liv.</p>
      </>
    ),
    points: [
      "En realistisk väg över tid",
      "Mer tillit till dig själv",
      "Välmående utan kontrollbehov",
    ],
    accent: "#00E2FF",
    panel: "#D9F9FF",
    sectionBg: "#F3EEE4",
  },
  {
    id: "03",
    eyebrow: "Strategin",
    subtitle: "En lekfull syn på välmående.",
    description: (
      <>
        <p>Sluta aldrig leka genom livet! För att orka det behöver du energi och näring.</p>
        <p>Stay Playful handlar inte om att bli “bättre på hälsan”. Det handlar om att ha kul med de bästa förutsättningarna.</p>
      </>
    ),
    points: [
      "Energi för att leva fullt ut",
      "Hälsa utan krav eller press",
      "Glädjefyllt välmående",
    ],
    accent: "#FFBD17",
    panel: "#FFE7A0",
    sectionBg: "#EFE9DD",
    image: "/stay.JPG",
  },
]

export function Method() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <section
      id="method"
      className="relative bg-[#F5F0E6] pb-24"
    >
      {/* Intro Section */}
      <div className="mx-auto max-w-7xl px-5 pt-24 sm:px-8 lg:px-12 xl:px-16 mb-12">
        <div className="max-w-4xl">
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-black/35">
            MIN METOD
          </p>
          <h2
            className="mt-4 font-sans leading-[0.9] tracking-[-0.06em] text-black"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.6rem)", fontWeight: 900 }}
          >
            Tre grundpelare som gör Stay Playful unik.
          </h2>
        </div>
      </div>

      {/* Cards Container */}
      <div ref={containerRef} className="relative mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        {methodCards.map((card, index) => (
          <StickyPanel
            key={index}
            card={card}
            index={index}
            progress={scrollYProgress}
            total={methodCards.length}
          />
        ))}
      </div>
    </section>
  )
}

function StickyPanel({ card, index, progress, total }: { card: MethodCard; index: number; progress: any; total: number }) {
  // Animación suave de escala y movimiento para el contenido visual derecho
  const start = index / total
  const end = (index + 1) / total
  const visualY = useTransform(progress, [start, end], [40, -40])
  const visualScale = useTransform(progress, [start, end], [0.95, 1.05])

  return (
    <div
      className="sticky top-0 flex items-center justify-center h-screen"
      style={{
        // El top acumulado crea el efecto de "stacking" donde se ve un borde de la card anterior
        top: `${index * 32 + 40}px`,
        zIndex: index
      }}
    >
      <article
        className="grid h-[80vh] w-full overflow-hidden rounded-[24px] border-[3px] border-black bg-[#FDF9F3] shadow-[8px_8px_0_0_rgba(0,0,0,1)] sm:rounded-[34px] lg:grid-cols-[1.1fr_0.9fr]"
        style={{ backgroundColor: "#FDF9F3" }}
      >
        {/* Left Content */}
        <div className="flex flex-col h-full">
          <div
            className="flex items-center justify-between border-b-[3px] border-black px-6 py-4"
            style={{ backgroundColor: card.accent }}
          >
            <span className="text-[10px] font-black uppercase tracking-widest text-black">
              {card.eyebrow}
            </span>
            <span className="text-[10px] font-black text-black/50">[{card.id}]</span>
          </div>

          <div className="flex-1 overflow-y-auto p-8 lg:p-12 xl:p-16">
            <h3 className="text-3xl lg:text-5xl font-black leading-none tracking-tighter mb-4">
              {card.subtitle}
            </h3>
            <div className="space-y-4 text-lg text-black/70 leading-relaxed max-w-xl">
              {card.description}
            </div>

            <ul className="mt-8 space-y-3">
              {card.points.map((point, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-sm lg:text-base">
                  <div className="h-2.5 w-2.5 rounded-full border-2 border-black" style={{ backgroundColor: card.accent }} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Visual */}
        <div
          className="hidden lg:flex relative border-l-[3px] border-black items-center justify-center overflow-hidden"
          style={{ backgroundColor: card.panel }}
        >
          <motion.div
            style={{ y: visualY, scale: visualScale }}
            className="w-full max-w-[380px] p-8"
          >
            <div className="rounded-[24px] border-[3px] border-black bg-white p-4 shadow-[12px_12px_0_0_rgba(0,0,0,1)]">
              <div className="aspect-[4/5] rounded-[16px] border-[2px] border-black overflow-hidden relative">
                {card.image ? (
                  <img src={card.image} className="h-full w-full object-cover" alt="" />
                ) : (
                  <div className="h-full w-full flex items-center justify-center font-black text-4xl p-6 text-center" style={{ backgroundColor: card.accent }}>
                    STAY PLAYFUL
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  )
}