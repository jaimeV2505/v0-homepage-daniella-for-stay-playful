"use client"

import Image from "next/image"

export function Hero() {
  return (
    <section
      aria-label="Hero background"
      className="relative w-full overflow-hidden bg-[#cfa487]"
    >
      {/* TOP DIVIDER (menos espacio) */}
      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-4 pt-3 sm:px-6 lg:px-8 lg:pt-4">
        <div className="flex items-center justify-center">
          <div className="h-px flex-1 bg-black/20" />

          <div className="mx-3 rounded-full border border-black/15 bg-white/70 px-5 py-1.5 backdrop-blur-sm sm:px-6">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-pink-500 sm:text-xs">
              Stay Playful
            </span>
          </div>

          <div className="h-px flex-1 bg-black/20" />
        </div>
      </div>

      {/* HERO IMAGE (menos padding vertical) */}
      <div className="relative mx-auto w-full max-w-[1800px] px-4 pb-3 pt-3 sm:px-6 sm:pb-4 lg:px-8 lg:pb-6">
        <div className="relative h-[60vw] min-h-[360px] max-h-[820px] w-full">
          <Image
            src="/playground.png"
            alt="Stay Playful hero background"
            fill
            priority
            sizes="100vw"
            className="object-contain object-center"
          />
        </div>
      </div>
    </section>
  )
}