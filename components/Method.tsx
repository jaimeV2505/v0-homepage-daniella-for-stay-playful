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

      {/* 1. CABECERA */}
      <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-16 md:pb-24">
        <div className="flex items-center gap-6 mb-12 md:mb-20">
          <div className="h-[1px] flex-1 bg-black/10" />
          <div className="flex gap-2">
            <div className="h-2 w-2 rounded-full bg-[#FFABFF]" />
            <div className="h-2 w-2 rounded-full bg-[#00E2FF]" />
            <div className="h-2 w-2 rounded-full bg-[#FFBD17]" />
          </div>
          <div className="h-[1px] flex-1 bg-black/10" />
        </div>

        <div className="relative z-10 flex flex-col md:items-start justify-between gap-8">
          <div className="max-w-4xl">
            <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-black/40 mb-4 md:mb-6">
              {t("method.eyebrow")}
            </p>
            <h2 className="font-sans text-black leading-[0.9] tracking-[-0.04em] font-black text-[clamp(2.5rem,7vw,6rem)] mb-6 md:mb-10">
              {t("method.heading")}
            </h2>
          </div>

          {/* AJUSTE: Texto movido a la izquierda y con ancho máximo para desktop */}
          <div className="max-w-[450px] border-l-2 md:border-l-4 border-[#FF008E] pl-6 py-2">
            <p className="text-sm md:text-lg font-bold leading-relaxed text-black/50 italic">
              {t("method.subheading")}
            </p>
          </div>
        </div>
      </div>

      {/* 2. CONTENEDOR STICKY */}
      <div className="relative">
        {cardIds.map((id, index) => (
          <div
            key={id}
            className="sticky top-0 h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-10"
            style={{ zIndex: index + 1 }}
          >
            <div className="w-full h-[85vh] md:h-full max-w-[1440px] flex items-center justify-center">
              <article className="relative grid h-full w-full overflow-hidden rounded-[24px] md:rounded-[32px] border-[3px] md:border-[4px] border-black bg-white shadow-[10px_10px_0_0_rgba(0,0,0,1)] md:shadow-[20px_20px_0_0_rgba(0,0,0,1)] lg:grid-cols-[1.1fr_0.9fr]">

                {/* IZQUIERDA: CONTENIDO CON SCROLL INTERNO */}
                <div className="flex flex-col h-full min-h-0 border-b-[3px] lg:border-b-0 lg:border-r-[4px] border-black bg-white">
                  {/* Header de la Card */}
                  <div
                    className="flex shrink-0 items-center justify-between border-b-[3px] md:border-b-[4px] border-black px-6 py-4 md:px-8 md:py-5"
                    style={{ backgroundColor: cardAccents[index] }}
                  >
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-black">
                      {t(`method.cards.${id}.eyebrow`)}
                    </span>
                    <span className="font-mono text-[10px] md:text-xs font-bold text-black/30">[{id}]</span>
                  </div>

                  {/* Área de Texto */}
                  <div className="flex-1 overflow-y-auto p-6 sm:p-10 md:p-12 xl:p-16 scrollbar-hide">
                    <div className="max-w-prose">
                      <h3 className="font-sans text-[2rem] sm:text-[2.5rem] md:text-[3.2rem] lg:text-[3.8rem] font-[900] leading-[0.95] tracking-tighter text-black italic mb-6 md:mb-8 uppercase">
                        {t(`method.cards.${id}.subtitle`)}
                      </h3>
                      <div className="space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl font-medium text-black/80 leading-relaxed">
                        <p>{t(`method.cards.${id}.p1`)}</p>
                        <p>{t(`method.cards.${id}.p2`)}</p>
                        <div className="h-4 md:hidden" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* DERECHA: IMAGEN */}
                <div
                  className="hidden lg:flex relative h-full items-center justify-center overflow-hidden"
                  style={{ backgroundColor: cardPanels[index] }}
                >
                  <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{ backgroundImage: 'radial-gradient(black 1.5px, transparent 0)', backgroundSize: '24px 24px' }}
                  />

                  <div className="relative z-10 w-full max-w-[380px] p-6">
                    <div className="rounded-[32px] md:rounded-[40px] border-[4px] border-black bg-white p-4 md:p-5 shadow-[12px_12px_0_0_rgba(0,0,0,1)] md:shadow-[15px_15px_0_0_rgba(0,0,0,1)]">
                      <div className="flex items-center justify-between mb-4 px-2">
                        <span className="text-[8px] md:text-[9px] font-black tracking-widest text-black/40 uppercase">
                          STAY PLAYFUL
                        </span>
                        <div className="flex gap-1.5">
                          <div className="h-2 w-2 rounded-full border-[2px] border-black bg-white" />
                          <div className="h-2 w-2 rounded-full border-[2px] border-black bg-white" />
                        </div>
                      </div>

                      <div className="aspect-[4/5] rounded-[20px] md:rounded-[24px] border-[3px] border-black overflow-hidden bg-gray-100">
                        <img
                          src={cardImages[index]}
                          alt="Method visual"
                          className="h-full w-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                        />
                      </div>

                      <div className="flex items-center justify-between mt-4 md:mt-5 px-2">
                        <span className="font-mono text-[9px] md:text-[10px] font-bold uppercase text-black/40">
                          {t("nav.method")}
                        </span>
                        <span className="font-mono text-[9px] md:text-[10px] font-black text-black">
                          0{index + 1}/03
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </article>
            </div>
          </div>
        ))}
      </div>

      <div className="h-[20vh] md:h-[10vh]" />
    </section>
  )
}