"use client"

import Image from "next/image"

export function BrandStatement() {
  return (
    <section
      aria-labelledby="brand-statement-title"
      className="bg-[#E7E7E7] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] border-[4px] border-black bg-white shadow-[10px_10px_0_0_rgba(0,0,0,1)]">
          <div className="grid lg:grid-cols-2">
            {/* LEFT PANEL */}
            <div className="flex flex-col justify-between bg-[#FF7F00] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <div className="max-w-[360px]">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white sm:text-sm">
                  Here at Stay Playful
                </p>

                <h2
                  id="brand-statement-title"
                  className="mt-4 text-[2.6rem] font-black uppercase leading-[0.88] tracking-[-0.08em] text-white sm:text-[3.4rem] lg:text-[4.4rem] xl:text-[5rem]"
                >
                  WE TALK
                  <br />
                  ABOUT
                  <br />
                  WELLBEING
                  <br />
                  DIFFERENTLY
                </h2>

                <p className="mt-6 max-w-[290px] text-sm leading-7 text-white/95 sm:text-[15px]">
                  Stay Playful is rooted in balance, curiosity, and a more
                  joyful relationship with food, body, and everyday life.
                </p>
              </div>

              {/* MINI EDITORIAL CARD */}
              <div className="mt-10 w-[180px] border-[3px] border-black bg-[#FFD8F5] p-3 shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:w-[210px]">
                <div className="relative aspect-[3/4] overflow-hidden border-[3px] border-black bg-white">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-rdne-6923359-4Q5goPk3c5AoyUX2Is1D7zQZINzFDw.jpg"
                    alt="Stay Playful portrait"
                    fill
                    sizes="210px"
                    className="object-cover"
                  />
                </div>

                <p className="mt-3 text-[10px] font-bold uppercase leading-4 tracking-[0.06em] text-black sm:text-[11px]">
                  a softer, more playful way to support your wellbeing
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="relative flex flex-col justify-between bg-[#FFABFF]">
              <div className="relative min-h-[360px] sm:min-h-[460px] lg:min-h-[620px]">
                {/* organic image cutout area */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-[#FFABFF]" />

                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{
                      clipPath:
                        "polygon(34% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 56%, 15% 44%, 27% 32%, 33% 22%)",
                    }}
                  >
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-rdne-6923359-4Q5goPk3c5AoyUX2Is1D7zQZINzFDw.jpg"
                      alt="Stay Playful editorial image"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* BOTTOM LABEL */}
              <div className="border-t-[3px] border-black bg-[#FFBD17] px-4 py-3 sm:px-6">
                <p className="text-center text-sm font-black uppercase tracking-[0.18em] text-black sm:text-base">
                  STAY PLAYFUL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}