"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ReactNode, useRef } from "react"
import { useLanguageSafe } from "@/lib/use-language"

const cardImages = ["/Daniella.jpg", "/StayPlay.JPG", "/stay.JPG"]
const cardAccents = ["#FFABFF", "#00E2FF", "#FFBD17"]
const cardPanels = ["#F6C8F4", "#D9F9FF", "#FFE7A0"]
const cardIds = ["01", "02", "03"] as const

export function Method() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { t } = useLanguageSafe()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <section id="method" className="relative bg-[#F5F0E6] pb-32 overflow-visible">
      <div className="mx-auto max-w-7xl px-6 pt-12 flex items-center gap-6">
        <div className="h-[2px] flex-1 bg-black/10" />
        <div className="flex gap-2">
          <div className="h-2 w-2 rounded-full bg-[#FFABFF]" />
          <div className="h-2 w-2 rounded-full bg-[#00E2FF]" />
          <div className="h-2 w-2 rounded-full bg-[#FFBD17]" />
        </div>
        <div className="h-[2px] flex-1 bg-black/10" />
      </div>

      <div className="absolute top-[10%] left-[-2%] pointer-events-none select-none opacity-[0.03] z-0">
        <h2 className="text-[20vw] font-black leading-none text-black">{t("method.eyebrow")}</h2>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-20 mb-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-[0.4em] text-black/40 mb-6">
              {t("method.eyebrow")}
            </p>
            <h2
              className="font-sans leading-[0.95] tracking-[-0.04em] text-black"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.8rem)", fontWeight: 900 }}
            >
              {t("method.heading")}
            </h2>
          </div>
          <div className="max-w-xs pb-2">
            <p className="text-sm font-medium leading-relaxed text-black/50 border-l-2 border-black pl-4 italic">
              {t("method.subheading")}
            </p>
          </div>
        </div>
      </div>

      <div ref={containerRef} className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {cardIds.map((id, index) => (
          <StickyPanel
            key={id}
            cardId={id}
            index={index}
            progress={scrollYProgress}
            total={cardIds.length}
            image={cardImages[index]}
            accent={cardAccents[index]}
            panel={cardPanels[index]}
          />
        ))}
      </div>
    </section>
  )
}

function StickyPanel({
  cardId, index, progress, total, image, accent, panel
}: {
  cardId: string
  index: number
  progress: any
  total: number
  image: string
  accent: string
  panel: string
}) {
  const { t } = useLanguageSafe()
  const start = index / total
  const end = (index + 1) / total

  const visualY = useTransform(progress, [start, end], [50, -50])
  const visualScale = useTransform(progress, [start, end], [0.95, 1.05])

  const eyebrow = t(`method.cards.${cardId}.eyebrow`)
  const subtitle = t(`method.cards.${cardId}.subtitle`)
  const p1 = t(`method.cards.${cardId}.p1`)
  const p2 = t(`method.cards.${cardId}.p2`)
  const p3 = t(`method.cards.${cardId}.p3`)

  return (
    <div
      className="sticky top-0 flex items-center justify-center h-screen w-full"
      style={{ top: `${index * 40}px`, zIndex: index + 1 }}
    >
      <article className="grid h-[80vh] w-full overflow-hidden rounded-[32px] border-[4px] border-black bg-[#FDF9F3] shadow-[15px_15px_0_0_rgba(0,0,0,1)] lg:grid-cols-[1.1fr_0.9fr]">
        {/* IZQUIERDA */}
        <div className="flex flex-col h-full border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-black">
          <div
            className="flex shrink-0 items-center justify-between border-b-[4px] border-black px-8 py-5"
            style={{ backgroundColor: accent }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black">{eyebrow}</span>
            <span className="font-mono text-xs font-bold text-black/30">[{cardId}]</span>
          </div>

          <div className="flex-1 overflow-y-auto p-8 sm:p-12 xl:p-16 custom-scrollbar bg-white">
            <h3 className="font-sans text-[2.5rem] font-black leading-[0.95] tracking-tighter text-black sm:text-[3.2rem] lg:text-[3.8rem]">
              {subtitle}
            </h3>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-black/75 sm:text-lg lg:text-xl font-medium">
              <p>{p1}</p>
              <p>{p2}</p>
              <p className="font-black text-black">{p3}</p>
            </div>
          </div>
        </div>

        {/* DERECHA */}
        <div
          className="hidden lg:flex relative h-full items-center justify-center overflow-hidden"
          style={{ backgroundColor: panel }}
        >
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(black 1px, transparent 0)', backgroundSize: '24px 24px' }} />

          <motion.div style={{ y: visualY, scale: visualScale }} className="w-full max-w-[380px] p-8 z-10">
            <div className="rounded-[35px] border-[4px] border-black bg-white overflow-hidden shadow-[15px_15px_0_0_rgba(0,0,0,1)]">
              <div className="flex items-center justify-between border-b-[3.5px] border-black px-6 py-4" style={{ backgroundColor: accent }}>
                <span className="text-[10px] font-black uppercase tracking-[0.15em] text-black">STAY PLAYFUL</span>
                <div className="flex gap-1.5">
                  {[0, 1, 2].map(d => <span key={d} className="h-2.5 w-2.5 rounded-full border-[2px] border-black bg-white" />)}
                </div>
              </div>
              <div className="p-5 bg-white">
                <div className="aspect-[4/5] rounded-[24px] border-[3.5px] border-black overflow-hidden relative shadow-[inset_0_4px_10px_rgba(0,0,0,0.05)]">
                  <img src={image} alt="Founder" className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="flex items-center justify-between border-t-[3.5px] border-black bg-[#FDF9F3] px-6 py-3.5">
                <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-black/40">STAY PLAYFUL</span>
                <span className="font-mono text-[12px] font-black text-black">{index + 1}/03</span>
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
  {
    id: "01",
    eyebrow: "Meet the Founder",
    subtitle: "Hej mitt namn är Daniella.",
    description: (
      <>
        <p>Det började med en tillfrisknad från en ätstörning och en stark drivkraft (en total hyper fixering) att fördjupa mig i nutrition och psykologi. Till certifikat för kostrådgivning och några tävlingar inom bikini fitness. Till flera år av föreläsning inom ätstörning- och självskadebeteende.</p>
        <p>Tills att jag sa blää vad är det människor håller på med där ute! Jag ser människor som gör “allt rätt” men ändå inte mår bra över tid.</p>
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
        <p>Genom coaching, upplevelser y ett lekfullt förhållningssätt hjälper vi dig att hitta det som ger dig energi.</p>
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
    <section id="method" className="relative bg-[#F5F0E6] pb-32 overflow-visible">
      {/* 1. DIVIDER */}
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

      {/* 3. TÍTULO */}
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

      {/* CARDS CONTAINER */}
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

  const visualY = useTransform(progress, [start, end], [50, -50])
  const visualScale = useTransform(progress, [start, end], [0.95, 1.05])

  return (
    <div
      className="sticky top-0 flex items-center justify-center h-screen w-full"
      style={{
        top: `${index * 40}px`,
        zIndex: index + 1
      }}
    >
      <article
        className="grid h-[80vh] w-full overflow-hidden rounded-[32px] border-[4px] border-black bg-[#FDF9F3] shadow-[15px_15px_0_0_rgba(0,0,0,1)] lg:grid-cols-[1.1fr_0.9fr]"
      >
        {/* IZQUIERDA: TEXTO */}
        <div className="flex flex-col h-full border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-black">
          <div
            className="flex shrink-0 items-center justify-between border-b-[4px] border-black px-8 py-5"
            style={{ backgroundColor: card.accent }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black">
              {card.eyebrow}
            </span>
            <span className="font-mono text-xs font-bold text-black/30">[{card.id}]</span>
          </div>

          <div className="flex-1 overflow-y-auto p-8 sm:p-12 xl:p-16 custom-scrollbar bg-white">
            <h3 className="font-sans text-[2.5rem] font-black leading-[0.95] tracking-tighter text-black sm:text-[3.2rem] lg:text-[3.8rem]">
              {card.subtitle}
            </h3>

            <div className="mt-8 space-y-6 text-base leading-relaxed text-black/75 sm:text-lg lg:text-xl font-medium">
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
            <div className="rounded-[35px] border-[4px] border-black bg-white overflow-hidden shadow-[15px_15px_0_0_rgba(0,0,0,1)]">
              {/* Header Teléfono */}
              <div
                className="flex items-center justify-between border-b-[3.5px] border-black px-6 py-4"
                style={{ backgroundColor: card.accent }}
              >
                <span className="text-[10px] font-black uppercase tracking-[0.15em] text-black">STAY PLAYFUL</span>
                <div className="flex gap-1.5">
                  {[0, 1, 2].map(d => (
                    <span key={d} className="h-2.5 w-2.5 rounded-full border-[2px] border-black bg-white" />
                  ))}
                </div>
              </div>

              {/* Área Imagen */}
              <div className="p-5 bg-white">
                <div className="aspect-[4/5] rounded-[24px] border-[3.5px] border-black overflow-hidden relative shadow-[inset_0_4px_10px_rgba(0,0,0,0.05)]">
                  <img src={card.image} alt="Founder" className="h-full w-full object-cover" />
                  {/* AQUÍ ESTABA LA MINI CARD BLANCA Y HA SIDO ELIMINADA */}
                </div>
              </div>

              {/* Footer Teléfono */}
              <div className="flex items-center justify-between border-t-[3.5px] border-black bg-[#FDF9F3] px-6 py-3.5">
                <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-black/40">STAY PLAYFUL</span>
                <span className="font-mono text-[12px] font-black text-black">{index + 1}/03</span>
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
