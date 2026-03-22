"use client"

import Image from "next/image"

export function BrandStatement() {
  return (
    <section className="bg-[#D9C7F4] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] border-[3px] border-sp-deep-brown bg-[#D9C7F4] px-6 py-10 shadow-[10px_10px_0_0_rgba(0,0,0,0.10)] sm:px-8 sm:py-12 lg:px-10 lg:py-14">
          {/* floating stickers */}
          <div className="pointer-events-none absolute left-[3%] top-[44%] z-20 hidden -rotate-[8deg] border-[3px] border-sp-deep-brown bg-white px-6 py-3 shadow-[6px_6px_0_0_rgba(0,0,0,0.14)] lg:block">
            <span className="font-sans text-xl font-black uppercase tracking-[-0.03em] text-black">
              Curiosity over control
            </span>
          </div>

          <div className="pointer-events-none absolute left-[28%] top-[6%] z-20 hidden rotate-[-4deg] border-[3px] border-sp-deep-brown bg-sp-hot-pink px-6 py-3 shadow-[6px_6px_0_0_rgba(0,0,0,0.14)] lg:block">
            <span className="font-sans text-lg font-black uppercase tracking-[-0.03em] text-white">
              Lifestyle • Nutrition • Balance
            </span>
          </div>

          <div className="pointer-events-none absolute bottom-[6%] left-[22%] z-20 hidden rotate-[-8deg] border-[3px] border-sp-deep-brown bg-[#FF7F00] px-6 py-3 shadow-[6px_6px_0_0_rgba(0,0,0,0.14)] lg:block">
            <span className="font-sans text-lg font-black uppercase tracking-[-0.03em] text-white">
              Joy is part of wellbeing
            </span>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
            {/* LEFT IMAGE */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden border-[3px] border-sp-deep-brown bg-white shadow-[8px_8px_0_0_rgba(0,0,0,0.12)]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-rdne-6923359-4Q5goPk3c5AoyUX2Is1D7zQZINzFDw.jpg"
                  alt="Stay Playful editorial portrait"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="relative z-10 text-sp-deep-brown">
              <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-[0.22em] text-white/90 sm:text-base">
                About Stay Playful
              </p>

              <h2 className="font-sans text-[3.6rem] font-black uppercase leading-[0.88] tracking-[-0.07em] text-white sm:text-[4.8rem] lg:text-[6rem] xl:text-[7rem]">
                THIS IS
                <br />
                NOT A
                <br />
                DIET
              </h2>

              <div className="mt-6 max-w-2xl space-y-6 text-base leading-8 text-white sm:text-lg lg:text-[1.15rem]">
                <p>
                  Stay Playful is a softer, more human way to approach
                  wellbeing — one that values <strong>balance over restriction</strong>,
                  <strong> curiosity over control</strong>, and long-term support over
                  quick fixes.
                </p>

                <p>
                  We help you understand your relationship with food, reduce
                  unhealthy fixation, and create space for joy, creativity,
                  and the parts of life that actually make you feel alive.
                </p>

                <p className="font-medium text-white">
                  Because health should not feel like punishment.
                  <br />
                  It should feel personal, sustainable, and playful.
                </p>
              </div>

              {/* keyword pills */}
              <div className="mt-8 flex flex-wrap gap-3">
                {["Curiosity", "Balance", "Joy", "Sustainability"].map(
                  (word) => (
                    <span
                      key={word}
                      className="border-[3px] border-sp-deep-brown bg-sp-cream px-5 py-2 font-sans text-xs font-black uppercase tracking-[0.14em] text-black shadow-[4px_4px_0_0_rgba(0,0,0,0.12)] sm:text-sm"
                    >
                      {word}
                    </span>
                  )
                )}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center border-[3px] border-sp-deep-brown bg-[#BFD9F2] px-6 py-3 font-sans text-sm font-black uppercase tracking-[0.08em] text-black shadow-[6px_6px_0_0_rgba(0,0,0,0.14)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Start Your Journey
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}