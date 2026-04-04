"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ReactNode } from "react"

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
        <p>Tills att jag sa blää vad är det människor håller på med där ute! Jag ser människor som gör "allt rätt" men ändå inte mår bra över tid.</p>
        <p className="font-black text-black">Tänk om problemet inte är brist på disciplin, utan att vi lägger för mucho tid på något vi inte ens tycker om? Den insikten förändrade allt!</p>
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
        <p>Genom que kombinerar individanpassad kostrådgivning ser vi till att bygga ett liv där rörelse, näring och välmående samverkar med vardagen.</p>
      </>
    ),
    accent: "#00E2FF",
    panel: "#D9F9FF",
    image: "/StayPlay.JPG",
  },
  {
    id: "03",
    eyebrow: "Strategin och målet",
    subtitle: "Lekfull syn på välmående.",
    description: (
      <>
        <p>Stay playful erbjuder stöd med ett medvetet fokus på helhetsperspektivet i ditt liv snarare än enbart kalori-fokus och träning.</p>
        <p>Genom coaching, upplevelser och ett lekfullt förhållningssätt hjälper vi dig att hitta det som ger dig energi.</p>
        <p className="font-black text-black">Stay Playful handlar inte om att bli "bättre på hälsan". Det handlar om att ha kul med de bästa förutsättningarna.</p>
      </>
    ),
    accent: "#FFBD17",
    panel: "#FFE7A0",
    image: "/stay.JPG",
  },
]

export function Method() {
  const { scrollYProgress } = useScroll()

  return (
    <section id="method" className="relative bg-[#F5F0E6] pb-32 overflow-visible">

      {/* 1. DIVIDER MINIMALISTA */}
      <div className="mx-auto max-w-7xl px-6 pt-12 flex items-center gap-6">
        <div className="h-[2px] flex-1 bg-black/10" />
        <div className="flex gap-2">
          <div className="h-2 w-2 rounded-full bg-[#FFABFF]" />
          <div className="h-2 w-2 rounded-full bg-[#00E2FF]" />
          <div className="h-2 w-2 rounded-full bg-[#FFBD17]" />
        </div>
        <div className="h-[2px] flex-1 bg-black/10" />
      </div>

      {/* 2. MARCA DE AGUA */}
      <div className="absolute top-[10%] left-[-2%] pointer-events-none select-none opacity-[0.03] z-0">
        <h2 className="text-[20vw] font-black leading-none text-black">METHOD</h2>
      </div>

      {/* 3. TÍTULO REFINADO */}
      <div className="mx-auto max-w-7xl px-6 pt-20 mb-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-[0.4em] text-black/40 mb-6">
              FILOSOFI & METOD
            </p>
            <h2
              className="font-sans leading-[0.95] tracking-[-0.04em] text-black"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.8rem)", fontWeight: 900 }}
            >
              Tre grundpelare som gör <br /> Stay Playful unik.
            </h2>
          </div>
          <div className="max-w-xs pb-2">
            <p className="text-sm font-medium leading-relaxed text-black/50 border-l-2 border-black pl-4 italic">
              Vem är jag, vad är strategin och vad är målet?
            </p>
          </div>
        </div>
      </div>

      {/* CARDS CONTAINER CON EFECTO STACKING RESTAURADO */}
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
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

  // Efecto de desplazamiento sutil dentro de la carta
  const visualY = useTransform(progress, [start, end], [50, -50])
  const visualScale = useTransform(progress, [start, end], [0.95, 1.05])

  return (
    <div
      className="sticky top-0 flex items-center justify-center h-screen w-full"
      style={{
        // Aplicamos el desfase del segundo código para que se vean los bordes superiores al apilarse
        top: `${index * 40}px`,
        zIndex: index + 1
      }}
    >
      <article
        className="grid h-[80vh] w-full max-w-[1400px] overflow-hidden rounded-[20px] sm:rounded-[32px] border-[3px] sm:border-[4px] border-black bg-[#FDF9F3] shadow-[8px_8px_0_0_rgba(0,0,0,1)] sm:shadow-[15px_15px_0_0_rgba(0,0,0,1)] lg:grid-cols-[1.1fr_0.9fr]"
      >
        {/* IZQUIERDA: TEXTO */}
        <div className="flex flex-col h-full border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-black">
          <div
            className="flex shrink-0 items-center justify-between border-b-[4px] border-black px-6 sm:px-8 py-4 sm:py-5"
            style={{ backgroundColor: card.accent }}
          >
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-black">
              {card.eyebrow}
            </span>
            <span className="font-mono text-xs font-bold text-black/30">[{card.id}]</span>
          </div>

          <div className="flex-1 overflow-y-auto p-6 sm:p-8 lg:p-12 xl:p-16 custom-scrollbar bg-white">
            <h3 className="font-sans text-[2rem] sm:text-[2.5rem] font-black leading-[0.95] tracking-tighter text-black lg:text-[3.2rem]">
              {card.subtitle}
            </h3>

            <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6 text-base leading-relaxed text-black/75 lg:text-lg font-medium">
              {card.description}
            </div>
          </div>
        </div>

        {/* DERECHA: TELÉFONO */}
        <div
          className="hidden lg:flex relative h-full items-center justify-center overflow-hidden"
          style={{ backgroundColor: card.panel }}
        >
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(black 1px, transparent 0)', backgroundSize: '24px 24px' }} />

          <motion.div
            style={{ y: visualY, scale: visualScale }}
            className="w-full max-w-[380px] p-8 z-10"
          >
            <div className="rounded-[24px] sm:rounded-[35px] border-[3px] sm:border-[4px] border-black bg-white overflow-hidden shadow-[8px_8px_0_0_rgba(0,0,0,1)] sm:shadow-[10px_10px_0_0_rgba(0,0,0,1)]">
              {/* Header */}
              <div
                className="flex items-center justify-between border-b-[3px] sm:border-b-[4px] border-black px-4 sm:px-6 py-3 sm:py-4"
                style={{ backgroundColor: card.accent }}
              >
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] text-black">STAY PLAYFUL</span>
                <div className="flex gap-1.5">
                  {[0, 1, 2].map(d => (
                    <span key={d} className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full border-[2px] border-black bg-white" />
                  ))}
                </div>
              </div>

              {/* Image Area */}
              <div className="p-3 sm:p-5 bg-white">
                <div className="aspect-[4/5] rounded-[16px] sm:rounded-[24px] border-[3px] sm:border-[4px] border-black overflow-hidden relative shadow-[inset_0_4px_10px_rgba(0,0,0,0.05)]">
                  <img src={card.image} alt="Founder" className="h-full w-full object-cover" />
                  <div className="absolute bottom-3 sm:bottom-5 left-0 right-0 flex justify-center">
                    <div className="inline-flex items-center gap-2 sm:gap-2.5 rounded-full border-[2px] sm:border-[2.5px] border-black bg-white/95 px-3 sm:px-5 py-1.5 sm:py-2 text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-black shadow-sm">
                      <span className="h-2 w-2 sm:h-3 sm:w-3 rounded-full border-[2px] border-black" style={{ backgroundColor: card.accent }} />
                      Card {card.id}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t-[3px] sm:border-t-[4px] border-black bg-[#FDF9F3] px-4 sm:px-6 py-2.5 sm:py-3.5">
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.1em] text-black/40">STAY PLAYFUL</span>
                <span className="font-mono text-[11px] sm:text-[12px] font-black text-black">{index + 1}/03</span>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #FDF9F3; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #000; border-radius: 20px; }
      `}</style>
    </div>
  )
}
