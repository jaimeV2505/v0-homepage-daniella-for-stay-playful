"use client"

import Image from "next/image"

export function BrandStatement() {
  return (
    <section
      aria-labelledby="brand-statement-title"
      className="bg-[#dcdcdc] py-10 sm:py-14 lg:py-20"
    >
      <div className="mx-auto max-w-[1720px] px-0 sm:px-4 lg:px-6">
        <div className="overflow-hidden rounded-[34px] border-[4px] border-black bg-white shadow-[14px_14px_0_0_rgba(0,0,0,1)]">
          <div className="grid min-h-[720px] lg:grid-cols-[0.48fr_0.52fr] xl:min-h-[780px] 2xl:min-h-[840px]">
            {/* LEFT PANEL */}
            <div className="relative flex flex-col justify-between bg-[#FF7F00] px-7 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12 xl:px-14 xl:py-14 2xl:px-16 2xl:py-16">
              <div className="max-w-[560px]">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-white sm:text-sm">
                  Here at Stay Playful
                </p>

                <h2
                  id="brand-statement-title"
                  className="mt-5 max-w-[620px] text-[3rem] font-black uppercase leading-[0.9] tracking-[-0.09em] text-white sm:text-[4.25rem] lg:text-[5.2rem] xl:text-[5.8rem] 2xl:text-[6.4rem]"
                >
                  WE TALK
                  <br />
                  ABOUT
                  <br />
                  WELLBEING
                  <br />
                  DIFFERENTLY
                </h2>

                <p className="mt-8 max-w-[430px] text-base leading-8 text-white/95 sm:text-lg">
                  Stay Playful is rooted in balance, curiosity, and a more joyful
                  relationship with food, body, and everyday life.
                </p>
              </div>

              {/* MINI EDITORIAL CARD */}
              <div className="mt-10 w-[190px] border-[4px] border-black bg-[#FFABFF] p-3 shadow-[8px_8px_0_0_rgba(0,0,0,1)] sm:w-[230px] lg:w-[250px]">
                <div className="border-[4px] border-black bg-[#F9B07A] p-2">
                  <div className="relative aspect-[3/4] overflow-hidden border-[4px] border-black bg-white">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-rdne-6923359-4Q5goPk3c5AoyUX2Is1D7zQZINzFDw.jpg"
                      alt="Stay Playful editorial portrait"
                      fill
                      sizes="(max-width: 640px) 190px, 250px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="relative min-h-[420px] bg-[#FFABFF] lg:min-h-full">
              {/* full shape background */}
              <div className="absolute inset-0 bg-[#FFABFF]" />

              {/* image panel */}
              <div className="absolute inset-0">
                <div
                  className="absolute inset-0 overflow-hidden bg-[#F6A165]"
                  style={{
                    clipPath:
                      "polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 58%, 8% 52%, 16% 45%, 23% 37%, 29% 29%, 34% 20%)",
                  }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80"
                    alt="Fashion inspired editorial image for Stay Playful"
                    fill
                    priority={false}
                    sizes="(max-width: 1024px) 100vw, 52vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* top lilac editorial cut */}
              <div
                className="absolute left-0 top-0 hidden h-[56%] w-[42%] bg-[#D993E2] lg:block"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 22%, 84% 36%, 68% 50%, 52% 63%, 33% 76%, 0 92%)",
                }}
              />

              {/* bottom magazine label */}
              <div className="absolute bottom-0 left-0 right-0 border-t-[4px] border-black bg-[#FFBD17] px-4 py-3 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-black uppercase tracking-[0.22em] text-white sm:text-base lg:text-lg">
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