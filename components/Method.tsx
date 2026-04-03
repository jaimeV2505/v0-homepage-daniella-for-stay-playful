"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ReactNode, useRef } from "react"

type MethodCard = {
  id: string
  eyebrow: string
  title: string
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
    id: "",
    eyebrow: "Meet the Founder",
    title: "",
    subtitle: "",
    description: (
      <>
        <p>Hej mitt namn är Daniella.</p>

        <p>
          Det började med en tillfrisknad från en ätstörning. En hyper fixering kring
          psykologi och nutrition.
        </p>

        <p>
          Till certifikat för kostrådgivning och några tävlingar inom bikini fitness.
        </p>

        <p>
          Till flera år av föreläsning inom ätstörning- och självskadebeteende.
          Till engagemang i brukarråd där man bl.a pratar om samhällsproblem inom området.
        </p>

        <p>
          <strong>
            Tills att jag sa blää — vad är det människor håller på med där ute?
          </strong>
        </p>

        <p>
          Jag ser fler och fler som “gör allt rätt”: tränar, äter enligt plan, har kunskapen.
          Men i perioder.
        </p>

        <p>
          Tänk om problemet inte är att vi inte har tillräckligt med disciplin —
          utan att vi faktiskt lägger ner för mycket tid på något vi inte tycker om.
        </p>

        <p><strong>Den insikten förändrade allt!</strong></p>
      </>
    ),
    points: [],
    accent: "#FFABFF",
    panel: "#F6C8F4",
    sectionBg: "#F5F0E6",
    image: "/Daniella.jpg",
  },
  {
    id: "",
    eyebrow: "Vision",
    title: "",
    subtitle: "aEtt nytt sätt att se på balans och välmående",
    description: (
      <>
        <p>
          Målet är inte perfektion, press eller ständig självkontroll.
        </p>

        <p>
          Det handlar om att hjälpa dig bygga något som känns personligt,
          hållbart och glädjefyllt.
        </p>

        <p>
          Ett stöd som faktiskt passar ditt liv.
        </p>
      </>
    ),
    points: [
      "En realistisk väg som du faktiskt kan hålla över tid",
      "Mer tillit till dig själv och din process",
      "Välmående som känns stödjande, inte kontrollerande",
    ],
    accent: "#00E2FF",
    panel: "#D9F9FF",
    sectionBg: "#F3EEE4",
  },
  {
    id: "",
    eyebrow: "Strategin ock Målet",
    title: "",
    subtitle: "En lekfull syn på välmående.",
    description: (
      <>
        <p>
          Sluta aldrig leka genom livet och för att orka göra det så behöver du energi och
          näring!
        </p>

        <p>
          Företagets övergripande mål är att förmedla att ett hälsosamt liv inte är ett krav
          eller ett projekt, utan något som kan vara härligt, personligt och i linje med dina
          egna värderingar och livsstil.
        </p>

        <p>
          Stay Playful handlar inte om att bli “bättre på hälsan”. Det handlar om att ha kul
          med de bästa förutsättningarna.
        </p>
      </>
    ),
    points: [
      "Energi och näring för att leva fullt ut",
      "Ett hälsosamt liv utan krav eller press",
      "Välmående som känns personligt och glädjefyllt",
    ],
    accent: "#FFBD17",
    panel: "#FFE7A0",
    sectionBg: "#EFE9DD",
    image: "/stay.JPG",
  },
]

export function Method() {
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  })

  return (
    <section
      id="method"
      aria-labelledby="method-title"
      className="relative overflow-clip bg-[#F5F0E6]"
    >
      {/* Top intro */}
      <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24 xl:px-16">
        <div className="max-w-4xl">
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-black/35 sm:text-xs">
            MIN METOD
          </p>

          <h2
            id="method-title"
            className="mt-4 max-w-[12ch] font-sans leading-[0.9] tracking-[-0.06em] text-black"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5.6rem)",
              fontWeight: 900,
            }}
          >
            Tre grundpelare som gör Stay Playful unik.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-black/60 sm:text-base lg:text-lg">
            Vem är jag, vad är strategin och vad är målet? Här får du en tydlig bild av
            filosofin bakom Stay Playful — och hur vi tillsammans skapar balans,
            energi och ett mer lekfullt liv.
          </p>
        </div>
      </div>

      <div ref={wrapperRef} className="relative mt-10 sm:mt-14 lg:mt-16">
        {methodCards.map((card, index) => (
          <StickyPanel
            key={`${card.eyebrow}-${index}`}
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

function StickyPanel({
  card,
  index,
  progress,
  total,
}: {
  card: MethodCard
  index: number
  progress: any
  total: number
}) {
  const segment = 1 / total
  const start = index * segment
  const end = start + segment

  const visualY = useTransform(progress, [start, end], [30, -30])
  const visualScale = useTransform(progress, [start, end], [0.97, 1.03])

  return (
    <article
      className="sticky flex h-screen items-center px-4 py-6 sm:px-6 sm:py-8 lg:px-10 xl:px-14"
      style={{
        top: `${index * 18 + 12}px`,
        zIndex: index + 10,
        backgroundColor: card.sectionBg,
      }}
    >
      <div className="mx-auto grid h-[86vh] w-full max-w-[1500px] overflow-hidden rounded-[24px] border-[3px] border-black bg-[#FDF9F3] shadow-[0_10px_0_0_rgba(0,0,0,1),0_30px_90px_-20px_rgba(0,0,0,0.18)] sm:rounded-[28px] lg:grid-cols-[1.15fr_0.85fr] lg:rounded-[34px]">
        {/* Left side */}
        <div className="relative flex min-h-0 flex-col overflow-hidden">
          {/* Header strip */}
          <div
            className="flex shrink-0 items-center justify-between border-b-[3px] border-black px-4 py-3 sm:px-6 sm:py-4"
            style={{ backgroundColor: card.accent }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-black sm:text-xs">
              {card.eyebrow}
            </span>
            <span className="text-[10px] font-black tracking-[0.04em] text-black/55 sm:text-xs">
              [{card.id}]
            </span>
          </div>

          <div className="relative flex min-h-0 flex-1 overflow-hidden">
            {/* Left progress rail */}
            <div className="hidden w-[84px] shrink-0 border-r-[3px] border-black bg-black/[0.02] lg:flex lg:flex-col lg:items-center lg:justify-between lg:py-8">
              <div className="flex flex-col items-center gap-3">
                {methodCards.map((item, i) => (
                  <span
                    key={`${item.eyebrow}-${i}`}
                    className="h-3.5 w-3.5 rounded-full border-2 border-black"
                    style={{
                      backgroundColor: i === index ? item.accent : "transparent",
                      opacity: i <= index ? 1 : 0.35,
                    }}
                  />
                ))}
              </div>

              <div className="rotate-180 text-[10px] font-black uppercase tracking-[0.22em] text-black/25 [writing-mode:vertical-rl]">
                Layered method
              </div>
            </div>

            {/* Main content */}
            <div className="relative flex min-h-0 flex-1 flex-col justify-center overflow-y-auto p-6 sm:p-8 lg:p-10 xl:p-14">
              {/* Giant decorative number */}
              <div className="pointer-events-none absolute right-4 top-3 font-sans text-[5rem] font-black leading-none tracking-[-0.08em] text-black/[0.05] sm:right-6 sm:top-4 sm:text-[6.5rem] lg:right-8 lg:top-6 lg:text-[8rem] xl:text-[9rem]">
                {card.id}
              </div>

              <h3
                className="relative z-10 max-w-[12ch] font-sans leading-[0.87] tracking-[-0.055em] text-black"
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 4.8rem)",
                  fontWeight: 900,
                }}
              >
                {card.title}
              </h3>

              <p className="relative z-10 mt-4 max-w-[38rem] text-sm font-semibold leading-snug text-black/82 sm:text-base lg:text-[1.12rem]">
                {card.subtitle}
              </p>

              <div className="relative z-10 mt-5 max-w-[44rem] space-y-3 text-sm leading-relaxed text-black/63 sm:text-base lg:text-lg [&>p]:m-0">
                {card.description}
              </div>

              <div className="relative z-10 mt-7 sm:mt-8">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-black/34 sm:text-xs">
                </p>

                <ul className="mt-4 grid gap-3 sm:gap-3.5">
                  {card.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-snug text-black/74 sm:text-base"
                    >
                      <span
                        className="mt-1.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full border-2 border-black"
                        style={{ backgroundColor: card.accent }}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right visual / image */}
        <div
          className="relative hidden border-l-[3px] border-black lg:flex lg:items-center lg:justify-center"
          style={{ backgroundColor: card.panel }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.55),transparent_55%)]" />

          <motion.div
            className="relative w-full max-w-[340px] px-6"
            style={{ y: visualY, scale: visualScale }}
          >
            {card.image ? (
              <div className="overflow-hidden rounded-[22px] border-[3px] border-black bg-[#FDF9F3] shadow-[0_8px_0_0_rgba(0,0,0,1),0_18px_50px_-18px_rgba(0,0,0,0.22)]">
                <div
                  className="flex items-center justify-between border-b-[2px] border-black px-4 py-2.5"
                  style={{ backgroundColor: card.accent }}
                >
                  <span className="text-[9px] font-black uppercase tracking-[0.18em] text-black/70">
                    Stay Playful
                  </span>
                  <div className="flex gap-1">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="h-2 w-2 rounded-full border border-black bg-white"
                      />
                    ))}
                  </div>
                </div>

                <div className="p-4">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] border-[2px] border-black bg-white">
                    <img
                      src={card.image}
                      alt={card.eyebrow}
                      className="h-full w-full object-cover"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.04))]" />

                    <div className="absolute bottom-4 left-4">
                      <div className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-white/85 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-black/70 backdrop-blur">
                        <span
                          className="h-2 w-2 rounded-full border border-black"
                          style={{ backgroundColor: card.accent }}
                        />
                        Stay Playful
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t-[2px] border-black px-4 py-2">
                  <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-black/35">
                    Scroll to reveal
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-[0.14em] text-black/45">
                    {index + 1}/{total}
                  </span>
                </div>
              </div>
            ) : (
              <div className="overflow-hidden rounded-[22px] border-[3px] border-black bg-[#FDF9F3] shadow-[0_8px_0_0_rgba(0,0,0,1),0_18px_50px_-18px_rgba(0,0,0,0.22)]">
                <div
                  className="flex items-center justify-between border-b-[2px] border-black px-4 py-2.5"
                  style={{ backgroundColor: card.accent }}
                >
                  <span className="text-[9px] font-black uppercase tracking-[0.18em] text-black/70">
                    Stay Playful
                  </span>
                  <div className="flex gap-1">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="h-2 w-2 rounded-full border border-black bg-white"
                      />
                    ))}
                  </div>
                </div>

                <div className="p-4">
                  <div
                    className="relative flex aspect-[4/5] items-end overflow-hidden rounded-[18px] border-[2px] border-black p-5"
                    style={{ backgroundColor: card.accent }}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0))]" />

                    <div className="relative z-10">
                      <div className="text-[10px] font-black uppercase tracking-[0.22em] text-black/45">
                        {card.eyebrow}
                      </div>

                      <div className="mt-3 font-sans text-[2.05rem] font-black uppercase leading-[0.84] tracking-[-0.05em] text-[#14532D]">
                        <div>Stay</div>
                        <div>Playful</div>
                      </div>

                      <div className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-black bg-white/70 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-black/70 backdrop-blur">
                        <span
                          className="h-2 w-2 rounded-full border border-black"
                          style={{ backgroundColor: card.accent }}
                        />
                        Layer {index + 1}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t-[2px] border-black px-4 py-2">
                  <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-black/35">
                    Scroll to reveal
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-[0.14em] text-black/45">
                    {index + 1}/{total}
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </article>
  )
}