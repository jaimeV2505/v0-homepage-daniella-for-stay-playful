"use client"

import { useLanguageSafe } from "@/lib/use-language"
import { motion } from "framer-motion"

const cardImages = ["/Daniella.jpg", "/stayhappy.JPG", "/stay.JPG"]
const cardAccents = ["#FFABFF", "#00E2FF", "#FFBD17"]
const cardPanels = ["#F6C8F4", "#D9F9FF", "#FFE7A0"]
const cardIds = ["01", "02", "03"] as const

export function Method() {
  const { t } = useLanguageSafe()

  return (
    <section id="method" className="relative w-full bg-[#F5F0E6]">

      {/* 1. CABECERA (DIVIDER + TÍTULOS) */}
      <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-24">
        {/* Línea divisoria */}
        <div className="flex items-center gap-6 mb-20">
          <div className="h-[1px] flex-1 bg-black/10" />
          <div className="flex gap-2">
            <div className="h-2 w-2 rounded-full bg-[#FFABFF]" />
            <div className="h-2 w-2 rounded-full bg-[#00E2FF]" />
            <div className="h-2 w-2 rounded-full bg-[#FFBD17]" />
          </div>
          <div className="h-[1px] flex-1 bg-black/10" />
        </div>

        {/* Título Principal con texto de fondo */}
        <div className="relative">
          {/* Texto de fondo: Usamos 'metod' o 'method' según el idioma */}

          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-black uppercase tracking-[0.4em] text-black/40 mb-6">
                {t("method.eyebrow")}
              </p>
              {/* LLAVE CORRECTA: method.heading */}
              <h2 className="font-sans text-black leading-[0.9] tracking-[-0.04em] font-black text-[clamp(3rem,8vw,6rem)]">
                {t("method.heading")}
              </h2>
            </div>

            {/* LLAVE CORRECTA: method.subheading */}
            <div className="max-w-[240px] border-l border-black/20 pl-4 py-2">
              <p className="text-sm font-medium leading-relaxed text-black/50 italic">
                {t("method.subheading")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CONTENEDOR STICKY DE LAS CARTAS */}
      <div className="relative">
        {cardIds.map((id, index) => (
          <div
            key={id}
            className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
            style={{ zIndex: index + 1 }}
          >
            <div className="w-full h-full max-w-[1440px] px-4 py-10 sm:px-10 sm:py-16">
              <article className="grid h-full w-full overflow-hidden rounded-[32px] border-[4px] border-black bg-white shadow-[20px_20px_0_0_rgba(0,0,0,1)] lg:grid-cols-[1.1fr_0.9fr]">

                {/* IZQUIERDA: CONTENIDO */}
                <div className="flex flex-col h-full border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-black">
                  <div
                    className="flex shrink-0 items-center justify-between border-b-[4px] border-black px-8 py-5"
                    style={{ backgroundColor: cardAccents[index] }}
                  >
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black">
                      {t(`method.cards.${id}.eyebrow`)}
                    </span>
                    <span className="font-mono text-xs font-bold text-black/30">[{id}]</span>
                  </div>

                  <div className="flex-1 overflow-y-auto p-8 sm:p-12 xl:p-16 bg-white scrollbar-hide">
                    <h3 className="font-sans text-[2.5rem] font-black leading-[0.95] tracking-tighter text-black sm:text-[3.2rem] lg:text-[4rem] italic mb-8">
                      {t(`method.cards.${id}.subtitle`)}
                    </h3>
                    <div className="space-y-6 text-lg lg:text-xl font-medium text-black/75">
                      <p>{t(`method.cards.${id}.p1`)}</p>
                      <p>{t(`method.cards.${id}.p2`)}</p>
                      <p className="font-black text-black text-2xl">
                        {t(`method.cards.${id}.p3`)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* DERECHA: IMAGEN */}
                <div
                  className="hidden lg:flex relative h-full items-center justify-center overflow-hidden"
                  style={{ backgroundColor: cardPanels[index] }}
                >
                  <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(black 1px, transparent 0)', backgroundSize: '32px 32px' }} />

                  <div className="relative z-10 w-full max-w-[400px] p-8">
                    <div className="rounded-[40px] border-[4px] border-black bg-white p-5 shadow-[15px_15px_0_0_rgba(0,0,0,1)]">
                      <div className="flex items-center justify-between mb-4 px-2">
                        <span className="text-[9px] font-black tracking-widest text-black/40 uppercase">
                          STAY PLAYFUL
                        </span>
                        <div className="flex gap-1.5">
                          <div className="h-2.5 w-2.5 rounded-full border-[2px] border-black bg-white" />
                          <div className="h-2.5 w-2.5 rounded-full border-[2px] border-black bg-white" />
                        </div>
                      </div>

                      <div className="aspect-[4/5] rounded-[24px] border-[3.5px] border-black overflow-hidden bg-gray-100">
                        <img src={cardImages[index]} alt="Founder visual" className="h-full w-full object-cover" />
                      </div>

                      <div className="flex items-center justify-between mt-5 px-2">
                        <span className="font-mono text-[11px] font-bold uppercase text-black/40">
                          {t("nav.method")}
                        </span>
                        <span className="font-mono text-[11px] font-black text-black">0{index + 1}/03</span>
                      </div>
                    </div>
                  </div>
                </div>

              </article>
            </div>
          </div>
        ))}
      </div>

      <div className="h-[10vh]" />
    </section>
  )
}