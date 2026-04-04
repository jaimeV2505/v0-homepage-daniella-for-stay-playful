"use client"

import { motion, useScroll, useTransform, useMotionValue, MotionValue } from "framer-motion"
import { useEffect } from "react"
import { useLanguageSafe } from "@/lib/use-language"

const cardImages = ["/Daniella.jpg", "/StayPlay.JPG", "/stay.JPG"]
const cardAccents = ["#FFABFF", "#00E2FF", "#FFBD17"]
const cardPanels = ["#F6C8F4", "#D9F9FF", "#FFE7A0"]
const cardIds = ["01", "02", "03"] as const

export function Method() {
  const { t } = useLanguageSafe()

  const manualProgress = useMotionValue(0)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    return scrollYProgress.on("change", (v) => manualProgress.set(v))
  }, [scrollYProgress, manualProgress])

  return (
    <section id="method" className="relative bg-[#F5F0E6] pb-24">
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

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {cardIds.map((id, index) => (
          <StickyPanel
            key={id}
            cardId={id}
            index={index}
            progress={manualProgress}
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
  progress: MotionValue<number>
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
      className="sticky flex items-center justify-center h-screen"
      style={{ top: `${index * 32 + 40}px`, zIndex: index }}
    >
      <article className="grid h-[80vh] w-full overflow-hidden rounded-[24px] border-[3px] border-black bg-[#FDF9F3] shadow-[8px_8px_0_0_rgba(0,0,0,1)] sm:rounded-[34px] lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col h-full border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-black">
          <div
            className="flex shrink-0 items-center justify-between border-b-[4px] border-black px-8 py-5"
            style={{ backgroundColor: accent }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black">{eyebrow}</span>
            <span className="font-mono text-xs font-bold text-black/30">[{cardId}]</span>
          </div>

          <div className="flex-1 overflow-y-auto p-8 sm:p-12 xl:p-16 bg-white">
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

        <div
          className="hidden lg:flex relative h-full items-center justify-center overflow-hidden"
          style={{ backgroundColor: panel }}
        >
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(black 1px, transparent 0)', backgroundSize: '24px 24px' }} />

          <motion.div style={{ y: visualY, scale: visualScale }} className="w-full max-w-[380px] p-8 z-10">
            <div className="rounded-[35px] border-[4px] border-black bg-white overflow-hidden shadow-[10px_10px_0_0_rgba(0,0,0,1)]">
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
    </div>
  )
}
