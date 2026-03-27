"use client"

type MethodCard = {
  id: string
  eyebrow: string
  title: string
  subtitle: string
  description: string
  points: string[]
  accent: string
  panel: string
}

const methodCards: MethodCard[] = [
  {
    id: "001",
    eyebrow: "ABOUT ME",
    title: "The Person Behind Stay Playful.",
    subtitle: "A softer, more human approach to wellbeing.",
    description:
      "I’m Daniella, and Stay Playful was created to offer a more grounded and compassionate approach to wellbeing — one rooted in balance, self-trust, and a healthier relationship with food, body, and everyday life.",
    points: [
      "Gentle support without extremes",
      "A more sustainable relationship with wellbeing",
      "Guidance built for real life, not perfection",
    ],
    accent: "#FFABFF",
    panel: "#F6C8F4",
  },
  {
    id: "002",
    eyebrow: "THE GOAL",
    title: "Support That Feels Sustainable.",
    subtitle: "Less pressure. More clarity. More joy.",
    description:
      "The goal is not perfection, pressure, or constant self-monitoring. It’s helping you build something that feels personal, sustainable, and joyful — support that actually fits your life.",
    points: [
      "A realistic path you can actually maintain",
      "More trust in yourself and your process",
      "Wellbeing that feels supportive, not controlling",
    ],
    accent: "#00E2FF",
    panel: "#D9F9FF",
  },
  {
    id: "003",
    eyebrow: "THE STRATEGY",
    title: "Change Through Curiosity, Not Force.",
    subtitle: "A calmer process with lasting shifts.",
    description:
      "We use curiosity, reflection, and thoughtful guidance to create change that lasts. No rigid rules, no extremes — just a grounded process that helps you move forward with more ease and clarity.",
    points: [
      "Thoughtful support instead of strict rules",
      "Small shifts that create real momentum",
      "A process built around care, reflection, and trust",
    ],
    accent: "#FFBD17",
    panel: "#FFE7A0",
  },
]

export function Method() {
  return (
    <section
      id="method"
      aria-labelledby="method-title"
      className="relative bg-[#F5F0E6] py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#FFF8EF_0%,#F5F0E6_45%,#EEE6D8_100%)]" />
        <div className="absolute left-1/2 top-10 h-[180px] w-[80%] -translate-x-1/2 rounded-full bg-[#EAB4F0]/70 blur-[2px] sm:h-[220px] lg:h-[280px]" />
      </div>

      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.26em] text-black/55">
            Stay Playful
          </p>

          <h2
            id="method-title"
            className="mt-5 font-sans text-[2.9rem] font-black uppercase leading-[0.84] tracking-[-0.09em] text-[#14532D] sm:text-[4.4rem] lg:text-[5.8rem]"
          >
            STAY PLAYFUL
            <br />
            METHOD
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-black/70 sm:text-lg">
            The heart of Stay Playful comes down to three simple things — who I am,
            what this work is here to support, and the way we create change with more
            curiosity, more care, and far less pressure.
          </p>
        </div>

        <div className="mt-12 sm:mt-14 lg:mt-16">
          <div className="sticky top-4 z-40 mb-4 sm:top-5 sm:mb-5 lg:top-6 lg:mb-6">
            <div className="rounded-full border-[4px] border-black bg-[#14532D] px-6 py-4 shadow-[0_6px_0_0_rgba(0,0,0,1)]">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-black uppercase tracking-[0.14em] text-white sm:text-base">
                  Stay Playful Method
                </span>
                <span className="text-sm font-black uppercase tracking-[0.14em] text-white sm:text-base">
                  Three Layers
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            {methodCards.map((card, index) => (
              <StickyMethodCard key={card.id} card={card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StickyMethodCard({
  card,
  index,
}: {
  card: MethodCard
  index: number
}) {
  const topOffsets = [
    "top-[6.25rem] sm:top-[6.75rem] lg:top-[7.25rem]",
    "top-[7.6rem] sm:top-[8.1rem] lg:top-[8.8rem]",
    "top-[8.95rem] sm:top-[9.45rem] lg:top-[10.35rem]",
  ]

  return (
    <article
      className={[
        "relative z-[1] mb-[85vh] last:mb-0",
        "sticky",
        topOffsets[index] ?? topOffsets[0],
      ].join(" ")}
    >
      <div className="overflow-hidden rounded-[28px] border-[4px] border-black bg-[#F7F1E6] shadow-[0_10px_0_0_rgba(0,0,0,1)] sm:rounded-[32px]">
        <div
          className="flex items-center justify-between gap-3 border-b-[4px] border-black px-4 py-3 sm:px-6"
          style={{ backgroundColor: card.accent }}
        >
          <span className="text-sm font-black uppercase tracking-[0.08em] text-black sm:text-[1.05rem]">
            {card.eyebrow}
          </span>

          <span className="text-sm font-black uppercase tracking-[0.08em] text-black sm:text-[1.05rem]">
            [{card.id}]
          </span>
        </div>

        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            <h3 className="max-w-[12ch] font-sans text-[2.15rem] font-black uppercase leading-[0.88] tracking-[-0.08em] text-[#14532D] sm:text-[3rem] lg:text-[4.2rem]">
              {card.title}
            </h3>

            <p className="mt-6 max-w-[34rem] text-lg font-semibold leading-8 text-black/90 sm:text-[1.45rem]">
              {card.subtitle}
            </p>

            <p className="mt-6 max-w-[42rem] text-base leading-8 text-black/78 sm:text-[1.04rem]">
              {card.description}
            </p>

            <div className="mt-8">
              <p className="text-[1rem] font-black uppercase tracking-[0.05em] text-black">
                What this means:
              </p>

              <ul className="mt-4 space-y-3">
                {card.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-[1rem] leading-7 text-black/82"
                  >
                    <span
                      className="mt-[0.45rem] inline-block h-3.5 w-3.5 shrink-0 rounded-full border-[2px] border-black"
                      style={{ backgroundColor: card.accent }}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t-[4px] border-black lg:border-l-[4px] lg:border-t-0">
            <div
              className="flex h-full min-h-[320px] items-center justify-center p-6 sm:min-h-[360px] sm:p-8 lg:min-h-[100%] lg:p-10"
              style={{ backgroundColor: card.panel }}
            >
              <div className="w-full rounded-[24px] border-[4px] border-black bg-[#F5F0E6] p-5 shadow-[0_6px_0_0_rgba(0,0,0,1)] sm:p-6">
                <div className="flex items-center justify-between border-b-[3px] border-black pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3.5 w-3.5 rounded-full border-[2px] border-black bg-white" />
                    <span className="h-3.5 w-3.5 rounded-full border-[2px] border-black bg-[#FFF4D6]" />
                    <span className="h-3.5 w-3.5 rounded-full border-[2px] border-black bg-[#D9FFF4]" />
                  </div>

                  <span className="text-[11px] font-black uppercase tracking-[0.16em] text-black/60">
                    Stay Playful
                  </span>
                </div>

                <div className="py-8 sm:py-10">
                  <div
                    className="mx-auto flex aspect-[5/4] max-w-[430px] items-center justify-center rounded-[26px] border-[4px] border-black text-center"
                    style={{ backgroundColor: card.accent }}
                  >
                    <div className="px-6 font-sans text-[2rem] font-black uppercase leading-[0.84] tracking-[-0.06em] text-[#14532D] sm:text-[2.5rem] lg:text-[3rem]">
                      <div>Stay</div>
                      <div>Playful</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t-[3px] border-black pt-4">
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-black/60">
                    Layer {card.id}
                  </span>

                  <span
                    className="inline-flex h-4 w-4 rounded-full border-[3px] border-black"
                    style={{ backgroundColor: card.accent }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}