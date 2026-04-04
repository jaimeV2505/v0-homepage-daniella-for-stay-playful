"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ReactNode, useRef } from "react"

type MethodCard = {
  id: string
  eyebrow: string
  subtitle: string
  description: ReactNode
  accent: string
  panel: string
  image: string
}

const methodCards: MethodCard[] = [
  {
    id: "01",
    eyebrow: "Meet the Founder",
    subtitle: "Hej mitt namn är Daniella.",
    description: (
      <>
        <p>Det började med en tillfrisknad från en ätstörning och en stark drivkraft (en total hyper fixering) att fördjupa mig i nutrition och psykologi. Till certifikat för kostrådgivning och några tävlingar inom bikini fitness. Till flera år av föreläsning inom ätstörning- och självskadebeteende.</p>
        <p>Tills att jag sa blää vad är det människor håller på med där ute! Jag ser människor som gör “allt rätt” men ändå inte mår bra över tid.</p>
        <p className="font-black text-black">Tänk om problemet inte är brist på disciplin, utan att vi lägger för mycket tid på något vi inte ens tycker om? Den insikten förändrade allt!</p>
      </>
    ),
    accent: "#FFABFF",
    panel: "#F6C8F4",
    image: "/Daniella.jpg",
  },
  {
    id: "02",
    eyebrow: "Visionen",
    subtitle: "Ett nytt sätt att se på balans.",
    description: (
      <>
        <p>Stay Playful driver och strävar efter en förändring där hälsa inte längre är ett projekt vid sidan av livet, utan en integrerad del av hur vi lever och mår.</p>
        <p>Vi ska omdefiniera hur människor ser på träning och kost: från något man kämpar med, till något som känns tillgängligt, lustfyllt och något som känns bra.</p>
        <p>Genom att kombinera individanpassad kostrådgivning ser vi till att bygga ett liv där rörelse, näring och välmående samverkar med vardagen.</p>
      </>
    ),
    accent: "#00E2FF",
    panel: "#D9F9FF",
    image: "stayhappy.JPG",
  },
  {
    id: "03",
    eyebrow: "Strategin och målet",
    subtitle: "Lekfull syn på välmående.",
    description: (
      <>
        <p>Stay playful erbjuder stöd med ett medvetet fokus på helhetsperspektivet i ditt liv snarare än enbart kalori-fokus och träning.</p>
        <p>Genom coaching, upplevelser och ett lekfullt förhållningssätt hjälper vi dig att hitta det som ger dig energi.</p>
        <p className="font-black text-black">Stay Playful handlar inte om att bli “bättre på hälsan”. Det handlar om att ha kul med de bästa förutsättningarna.</p>
      </>
    ),
    accent: "#FFBD17",
    panel: "#FFE7A0",
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
    <section id="method" className="relative bg-[#F5F0E6] pb-32">
      {/* Título Masivo Estilo Referencia */}
      <div className="mx-auto max-w-7xl px-6 pt-24 mb-20">
        <p className="text-[11px] font-black uppercase tracking-[0.24em] text-black/35 mb-4">
          MIN METOD
        </p>
        <h2
          className="font-sans leading-[0.85] tracking-[-0.05em] text-black"
          style={{ fontSize: "clamp(3.5rem, 10vw, 8.5rem)", fontWeight: 900 }}
        >
          Tre grundpelare <br /> som gör Stay <br /> Playful unik.
        </h2>
      </div>

      {/* Cards Stacking Container */}
      <div ref={containerRef} className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
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
  const start = index / total
  const end = (index + 1) / total

  const visualY = useTransform(progress, [start, end], [60, -60])
  const visualScale = useTransform(progress, [start, end], [0.92, 1.05])

  return (
    <div
      className="sticky top-0 flex items-center justify-center h-screen w-full"
      style={{
        top: `${index * 35 + 40}px`,
        zIndex: index + 10
      }}
    >
      <article
        className="grid h-[82vh] w-full overflow-hidden rounded-[32px] border-[4px] border-black bg-[#FDF9F3] shadow-[14px_14px_0_0_rgba(0,0,0,1)] lg:grid-cols-[1.1fr_0.9fr]"
      >
        {/* Izquierda: Texto Dinámico */}
        <div className="flex flex-col h-full border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-black">
          <div
            className="flex shrink-0 items-center justify-between border-b-[4px] border-black px-8 py-5"
            style={{ backgroundColor: card.accent }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black sm:text-xs">
              {card.eyebrow}
            </span>
            <span className="font-mono text-xs font-bold text-black/40">[{card.id}]</span>
          </div>

          <div className="flex-1 overflow-y-auto p-8 sm:p-12 xl:p-16 custom-scrollbar bg-white">
            <h3 className="font-sans text-[2.8rem] font-black leading-[0.95] tracking-tighter text-black sm:text-[3.8rem] lg:text-[4.2rem]">
              {card.subtitle}
            </h3>

            <div className="mt-8 space-y-6 text-base leading-relaxed text-black/75 sm:text-lg lg:text-xl">
              {card.description}
            </div>
          </div>
        </div>

        {/* Derecha: Efecto Visual Teléfono */}
        <div
          className="hidden lg:flex relative h-full items-center justify-center overflow-hidden"
          style={{ backgroundColor: card.panel }}
        >
          {/* Patrón de puntos neo-brutalista de fondo */}
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(black 1px, transparent 0)', backgroundSize: '24px 24px' }} />

          <motion.div
            style={{ y: visualY, scale: visualScale }}
            className="w-full max-w-[420px] p-10 z-10"
          >
            {/* EL DISPOSITIVO (REFERENCIA image_9177a7.png) */}
            <div className="rounded-[35px] border-[4px] border-black bg-white overflow-hidden shadow-[15px_15px_0_0_rgba(0,0,0,1)]">

              {/* Header Status Bar */}
              <div
                className="flex items-center justify-between border-b-[3.5px] border-black px-6 py-4"
                style={{ backgroundColor: card.accent }}
              >
                <span className="text-[10px] font-black uppercase tracking-[0.15em] text-black">
                  STAY PLAYFUL
                </span>
                <div className="flex gap-1.5">
                  {[0, 1, 2].map(d => (
                    <span key={d} className="h-2.5 w-2.5 rounded-full border-[2px] border-black bg-white" />
                  ))}
                </div>
              </div>

              {/* Main Visual Area */}
              <div className="p-5 bg-white">
                <div className="aspect-[4/5] rounded-[24px] border-[3.5px] border-black overflow-hidden relative shadow-[inset_0_4px_10px_rgba(0,0,0,0.05)]">
                  <img
                    src={card.image}
                    alt="Stay Playful Founder"
                    className="h-full w-full object-cover"
                  />

                  {/* Floating Tag */}
                  <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                    <div className="inline-flex items-center gap-2.5 rounded-full border-[2.5px] border-black bg-white/95 px-5 py-2 text-[10px] font-black uppercase tracking-widest text-black backdrop-blur-md shadow-sm">
                      <span className="h-3 w-3 rounded-full border-[2px] border-black" style={{ backgroundColor: card.accent }} />
                      Stay Playful
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Reveal Bar */}
              <div className="flex items-center justify-between border-t-[3.5px] border-black bg-[#FDF9F3] px-6 py-3.5">
                <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-black/50">
                  SCROLL TO REVEAL
                </span>
                <span className="font-mono text-[12px] font-black text-black">
                  {index + 1}/03
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #FDF9F3;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #000;
          border-radius: 20px;
        }
      `}</style>
    </div>
  )
}