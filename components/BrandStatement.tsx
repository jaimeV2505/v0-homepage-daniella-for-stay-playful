"use client"

import Image from "next/image"

function FlowerImageFrame({
  src,
  alt,
  bg = "#D9F05C",
}) {
  return (
    <div className="relative mx-auto w-full max-w-[620px] xl:max-w-[680px] 2xl:max-w-[720px]">
      <div
        className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px] border-[4px] border-black"
        style={{ backgroundColor: bg }}
      >
        <svg
          viewBox="0 0 1000 1200"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <clipPath id="flowerClip" clipPathUnits="objectBoundingBox">
              <path d="M0.5,0.08
                C0.58,0.08,0.62,0.16,0.62,0.23
                C0.70,0.18,0.83,0.10,0.91,0.17
                C0.99,0.24,0.94,0.39,0.85,0.50
                C0.96,0.50,1.02,0.58,0.99,0.68
                C0.96,0.79,0.86,0.80,0.79,0.80
                C0.86,0.91,0.86,1.02,0.75,1.02
                C0.65,1.02,0.58,0.92,0.55,0.84
                C0.53,0.94,0.47,1.03,0.36,1.01
                C0.25,0.99,0.22,0.90,0.24,0.80
                C0.15,0.84,0.03,0.82,0.02,0.68
                C0.01,0.55,0.08,0.48,0.18,0.48
                C0.10,0.37,0.03,0.22,0.10,0.15
                C0.18,0.08,0.31,0.15,0.40,0.23
                C0.39,0.15,0.42,0.08,0.5,0.08Z" />
            </clipPath>
          </defs>

          <foreignObject
            x="0"
            y="0"
            width="1000"
            height="1200"
            clipPath="url(#flowerClip)"
          >
            <div className="relative h-full w-full">
              <Image
                src={src}
                alt={alt}
                fill
                priority
                className="object-cover object-center scale-[1.03]"
              />
            </div>
          </foreignObject>
        </svg>
      </div>
    </div>
  )
}

export function BrandStatement() {
  return (
    <section className="bg-[#DCDCDC] py-6 sm:py-10 lg:py-14">
      <div className="mx-auto max-w-[1720px] px-3 sm:px-5 lg:px-6">
        <div className="relative overflow-hidden rounded-[36px] border-[4px] border-black bg-white shadow-[14px_14px_0_0_rgba(0,0,0,1)]">
          <div className="grid lg:min-h-[820px] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            {/* LEFT PANEL */}
            <div className="flex flex-col bg-[#EF8932] px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12 xl:px-14 xl:py-14">
              <div className="max-w-[640px]">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.32em] text-white/90 sm:text-[11px]">
                  Här hos Stay Playful
                </p>

                <h2
                  className="mt-5 font-black uppercase leading-[0.9] tracking-[-0.06em] text-white"
                  style={{
                    fontSize: "clamp(2.6rem, 5.2vw, 5.3rem)",
                  }}
                >
                  VARNING:
                  <br />
                  STAY PLAYFUL
                  <br />
                  KAN ORSAKA
                  <br />
                  FÖLJANDE
                  <br />
                  BIVERKNINGAR:
                </h2>

                <div className="mt-8 max-w-[46ch] space-y-5 text-[15px] leading-[1.9] text-white/95 sm:mt-10 sm:text-[16px] lg:mt-11 lg:text-[17px]">
                  <p>
                    Att du plötsligt tänker mindre på maten och att andra
                    härliga delar av livet börjar ta mer plats. Med rätt kost
                    för dig ser vi till att ge dig de bästa förutsättningar.
                  </p>
                  <p>
                    Med mindre ohälsosam fixering till kost, stärker vi andra
                    delar av livet, uppmuntrar nyfikenhet och skapar utrymme
                    för glädje.
                  </p>
                </div>
              </div>

              <div className="mt-10 sm:mt-12 lg:mt-auto lg:pt-8">
                <div className="w-fit border-[4px] border-black bg-[#E8AFED] p-3 sm:p-4 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                  <div className="mb-3 text-[10px] font-black uppercase tracking-[0.26em] text-black">
                    Playful note
                  </div>

                  <div className="border-[3px] border-black bg-white p-2">
                    <div className="relative aspect-[3/4] w-[145px] border-[3px] border-black sm:w-[175px] lg:w-[190px]">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-rdne-6923359-4Q5goPk3c5AoyUX2Is1D7zQZINzFDw.jpg"
                        alt="Portrait"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="relative flex items-center justify-center bg-[#E8AFED] px-5 py-10 sm:px-8 sm:py-12 lg:px-8 lg:py-14 xl:px-10 xl:py-16">
              <div className="absolute right-5 top-5 z-30 hidden rotate-[4deg] border-[4px] border-black bg-[#6CDDF1] px-5 py-2 shadow-[5px_5px_0_0_rgba(0,0,0,1)] xl:block">
                <span className="text-[10px] font-black uppercase tracking-[0.24em] text-black">
                  Joy is part of wellbeing
                </span>
              </div>

              <div className="relative flex w-full max-w-[760px] items-center justify-center pb-20 lg:pb-24">
                <FlowerImageFrame
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-rdne-6923359-4Q5goPk3c5AoyUX2Is1D7zQZINzFDw.jpg"
                  alt="Main Editorial"
                />

                <div className="absolute bottom-[30px] left-1/2 z-20 w-[86%] max-w-[360px] -translate-x-1/2 border-[4px] border-black bg-white p-5 shadow-[10px_10px_0_0_rgba(0,0,0,1)] sm:max-w-[380px] sm:p-6 lg:bottom-[42px] lg:left-[10%] lg:w-[320px] lg:translate-x-0 xl:left-[8%] xl:w-[340px]">
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-black">
                    Stay Playful
                  </p>
                  <p className="mt-3 text-[15px] font-medium leading-[1.65] text-black sm:text-[16px]">
                    Mindre kontroll,
                    <br />
                    mer nyfikenhet —
                    <br />
                    det är där verkligt
                    <br />
                    välmående börjar.
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 border-t-[4px] border-black bg-[#F5C75A] py-4 sm:py-5">
                <p className="text-center text-sm font-black uppercase tracking-[0.38em] text-black sm:text-base">
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