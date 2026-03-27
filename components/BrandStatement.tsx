"use client"

import Image from "next/image"

export function BrandStatement() {
  return (
    <section
      aria-labelledby="brand-statement-title"
      className="bg-[#DCDCDC] py-8 sm:py-12 lg:py-16"
    >
      <div className="mx-auto max-w-[1780px] px-0 sm:px-4 lg:px-6">
        <div className="overflow-hidden rounded-[34px] border-[4px] border-black bg-white shadow-[12px_12px_0_0_rgba(0,0,0,1)]">
          <div className="grid min-h-[680px] lg:grid-cols-[0.49fr_0.51fr] xl:min-h-[760px] 2xl:min-h-[820px]">

            {/* LEFT PANEL */}
            <div className="flex flex-col justify-between bg-[#FF7F00] px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12 xl:px-14 xl:py-14 2xl:px-16 2xl:py-16">
              <div className="max-w-[620px]">
                <p className="text-[11px] font-black uppercase tracking-[0.26em] text-white sm:text-sm">
                  Here at Stay Playful
                </p>

                <h2
                  id="brand-statement-title"
                  className="mt-5 max-w-[720px] text-[2.9rem] font-black uppercase leading-[0.88] tracking-[-0.09em] text-white sm:text-[4rem] lg:text-[5rem] xl:text-[5.8rem] 2xl:text-[6.3rem]"
                >
                  WE TALK
                  <br />
                  ABOUT
                  <br />
                  WELLBEING
                  <br />
                  DIFFERENTLY
                </h2>

                <div className="mt-8 max-w-[460px] space-y-4 text-base leading-8 text-white/95 sm:text-lg">
                  <p>
                    Stay Playful is rooted in balance, curiosity, and a more joyful
                    relationship with food, body, and everyday life.
                  </p>

                  <p>
                    A softer, more personal approach to wellbeing — one that makes
                    room for freedom, pleasure, and real life.
                  </p>
                </div>
              </div>

              {/* MINI EDITORIAL CARD */}
              <div className="mt-10 w-[200px] border-[4px] border-black bg-[#FFABFF] p-3 shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:w-[230px] lg:w-[248px] xl:w-[270px]">
                <div className="mb-2 text-[10px] font-black uppercase tracking-[0.16em] text-black sm:text-[11px]">
                  Playful note
                </div>

                <div className="border-[4px] border-black bg-[#FFD3F7] p-2">
                  <div className="relative aspect-[3/4] overflow-hidden border-[4px] border-black bg-white">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-rdne-6923359-4Q5goPk3c5AoyUX2Is1D7zQZINzFDw.jpg"
                      alt="Stay Playful editorial portrait"
                      fill
                      sizes="(max-width: 640px) 200px, (max-width: 1280px) 248px, 270px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <p className="mt-3 max-w-[210px] text-[10px] font-bold uppercase leading-4 tracking-[0.08em] text-black sm:text-[11px]">
                  wellbeing with more curiosity, less control, and room for joy
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="relative min-h-[520px] bg-[#FFABFF] px-5 py-5 sm:px-6 sm:py-6 lg:min-h-full lg:px-8 lg:py-8 xl:px-10 xl:py-10">
              <div className="absolute right-5 top-5 z-20 hidden rotate-[4deg] border-[4px] border-black bg-[#00E2FF] px-4 py-2 shadow-[5px_5px_0_0_rgba(0,0,0,1)] xl:block">
                <span className="text-[11px] font-black uppercase tracking-[0.14em] text-black">
                  Joy is part of wellbeing
                </span>
              </div>

              <div className="relative mx-auto flex h-full max-w-[760px] flex-col justify-end">
                <div className="relative aspect-[4/5] w-full overflow-hidden border-[4px] border-black bg-[#FF65FF] shadow-[8px_8px_0_0_rgba(0,0,0,1)] cloud-eight-shape">
                  <Image
                    src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1600&q=80"
                    alt="Editorial group portrait for Stay Playful"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 760px"
                    className="object-cover"
                  />
                </div>

                <div className="relative z-10 mx-auto -mt-2 w-[92%] border-[4px] border-black bg-white px-4 py-4 shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:mx-0 sm:w-[360px]">
                  <p className="text-[12px] font-black uppercase tracking-[0.16em] text-black">
                    Stay Playful
                  </p>
                  <p className="mt-2 text-sm leading-6 text-black sm:text-[15px]">
                    Health should feel personal, joyful, and sustainable — never
                    like punishment.
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 border-t-[4px] border-black bg-[#FFBD17] px-4 py-3 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-black uppercase tracking-[0.24em] text-black sm:text-base lg:text-lg">
                  STAY PLAYFUL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 NUEVO SHAPE */}
      <style jsx>{`
        .cloud-eight-shape {
          clip-path: polygon(
            18% 0%,
            34% 0%,
            40% 7%,
            50% 0%,
            60% 7%,
            66% 0%,
            82% 0%,
            100% 16%,
            100% 34%,
            92% 42%,
            100% 50%,
            100% 66%,
            92% 74%,
            100% 84%,
            82% 100%,
            66% 100%,
            60% 93%,
            50% 100%,
            40% 93%,
            34% 100%,
            18% 100%,
            0% 84%,
            0% 66%,
            8% 58%,
            0% 50%,
            0% 34%,
            8% 26%,
            0% 16%
          );
        }

        @media (max-width: 768px) {
          .cloud-eight-shape {
            clip-path: polygon(
              12% 0%,
              32% 0%,
              40% 8%,
              50% 0%,
              60% 8%,
              68% 0%,
              88% 0%,
              100% 12%,
              100% 30%,
              92% 40%,
              100% 50%,
              100% 70%,
              92% 80%,
              100% 88%,
              88% 100%,
              68% 100%,
              60% 92%,
              50% 100%,
              40% 92%,
              32% 100%,
              12% 100%,
              0% 88%,
              0% 70%,
              8% 60%,
              0% 50%,
              0% 30%,
              8% 20%,
              0% 12%
            );
          }
        }
      `}</style>
    </section>
  )
}