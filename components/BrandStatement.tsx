"use client"

import Image from "next/image"

const tags = [
  { label: "Curiosity over control", bg: "#FFBD17", text: "#000000", rotate: "-rotate-3" },
  { label: "Joy is part of wellbeing", bg: "#00E2FF", text: "#000000", rotate: "rotate-2" },
  { label: "Balance, not extremes", bg: "#FF008E", text: "#FFFFFF", rotate: "-rotate-2" },
]

export function BrandStatement() {
  return (
    <section
      aria-labelledby="brand-statement-title"
      className="bg-[#E5E5E5] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Floating stickers - desktop only */}
          <div className="pointer-events-none absolute left-4 top-0 z-30 hidden xl:block">
            <Sticker
              label={tags[0].label}
              bg={tags[0].bg}
              text={tags[0].text}
              rotate={tags[0].rotate}
            />
          </div>

          <div className="pointer-events-none absolute right-12 top-10 z-30 hidden xl:block">
            <Sticker
              label={tags[1].label}
              bg={tags[1].bg}
              text={tags[1].text}
              rotate={tags[1].rotate}
            />
          </div>

          <div className="pointer-events-none absolute bottom-[-20px] left-[18%] z-30 hidden xl:block">
            <Sticker
              label={tags[2].label}
              bg={tags[2].bg}
              text={tags[2].text}
              rotate={tags[2].rotate}
            />
          </div>

          {/* Main editorial board */}
          <div className="relative overflow-visible rounded-[28px] border-[3px] border-black bg-white shadow-[10px_10px_0_0_rgba(0,0,0,1)]">
            <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
              {/* LEFT PANEL */}
              <div className="relative bg-[#F45A2A] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                <div className="max-w-md">
                  <p className="font-sans text-xs font-black uppercase tracking-[0.22em] text-white/95 sm:text-sm">
                    Here at Stay Playful
                  </p>

                  <h2
                    id="brand-statement-title"
                    className="mt-4 font-sans text-[2.8rem] font-black uppercase leading-[0.88] tracking-[-0.08em] text-white sm:text-[3.8rem] lg:text-[4.7rem] xl:text-[5.3rem]"
                  >
                    WE’VE GOT
                    <br />
                    THE TALK
                    <br />
                    ABOUT
                    <br />
                    STAY
                    <br />
                    PLAYFUL
                  </h2>

                  <div className="mt-6 max-w-md space-y-4 text-sm leading-7 text-white sm:text-[15px] sm:leading-7 lg:text-base">
                    <p>
                      A softer, more personal approach to wellbeing — rooted in
                      <strong> balance</strong>, <strong>self-trust</strong>, and
                      creating habits that actually fit your life.
                    </p>

                    <p>
                      No extremes. No guilt. No pressure to be perfect. Just
                      support that feels human, joyful, and sustainable.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {["Balance", "Joy", "Freedom"].map((item) => (
                      <span
                        key={item}
                        className="inline-flex border-[3px] border-black bg-[#FFABFF] px-4 py-2 font-sans text-[11px] font-black uppercase tracking-[0.1em] text-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] sm:text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mini editorial card */}
                <div className="mt-8 max-w-[180px] border-[3px] border-black bg-[#FFD9F6] p-3 shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:mt-10 sm:max-w-[210px]">
                  <div className="relative aspect-[3/4] overflow-hidden border-[3px] border-black bg-white">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-rdne-6923359-4Q5goPk3c5AoyUX2Is1D7zQZINzFDw.jpg"
                      alt="Stay Playful editorial portrait"
                      fill
                      sizes="220px"
                      className="object-cover"
                    />
                  </div>

                  <p className="mt-3 font-sans text-[10px] font-bold uppercase leading-4 tracking-[0.08em] text-black sm:text-[11px]">
                    wellbeing with personality, curiosity, and room for real life.
                  </p>
                </div>
              </div>

              {/* RIGHT PANEL */}
              <div className="relative bg-[#FFABFF] px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
                {/* Image frame */}
                <div className="relative mx-auto w-full max-w-[620px]">
                  <div className="relative aspect-[4/5] overflow-hidden border-[3px] border-black bg-black shadow-[10px_10px_0_0_rgba(0,0,0,1)] sm:shadow-[12px_12px_0_0_rgba(0,0,0,1)] [clip-path:polygon(14%_0%,100%_0%,100%_83%,86%_100%,0%_100%,0%_16%)]">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-rdne-6923359-4Q5goPk3c5AoyUX2Is1D7zQZINzFDw.jpg"
                      alt="Portrait representing the Stay Playful brand"
                      fill
                      priority={false}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Bottom label */}
                  <div className="mt-4 inline-flex border-[3px] border-black bg-[#FF65FF] px-4 py-2 shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:px-5">
                    <span className="font-sans text-xs font-black uppercase tracking-[0.12em] text-white sm:text-sm">
                      playful wellbeing
                    </span>
                  </div>
                </div>

                {/* Outside-style text block */}
                <div className="mt-8 lg:mt-10 lg:pl-4">
                  <p className="max-w-lg font-sans text-[1.8rem] font-black leading-[1] tracking-[-0.06em] text-black sm:text-[2.3rem] lg:text-[2.8rem] xl:text-[3.2rem]">
                    health should feel
                    <br />
                    personal, joyful,
                    <br />
                    and sustainable.
                  </p>

                  <p className="mt-4 max-w-md text-sm leading-7 text-black/80 sm:text-base">
                    The goal is not to control your life — it’s to support it in a
                    way that feels lighter, stronger, and more you.
                  </p>

                  <div className="mt-6">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center border-[3px] border-black bg-[#FFBD17] px-6 py-3 font-sans text-xs font-black uppercase tracking-[0.1em] text-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition duration-200 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-black/15 sm:text-sm"
                      aria-label="Get in touch with Stay Playful"
                    >
                      Get in touch
                    </a>
                  </div>
                </div>

                {/* Mobile stickers */}
                <div className="mt-6 flex flex-wrap gap-3 xl:hidden">
                  {tags.map((tag) => (
                    <span
                      key={tag.label}
                      className="inline-flex border-[3px] border-black px-4 py-2 font-sans text-[11px] font-black uppercase tracking-[0.08em] shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
                      style={{ backgroundColor: tag.bg, color: tag.text }}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Decorative note outside composition */}
          <div className="mt-8 flex justify-end lg:mt-10">
            <div className="max-w-[420px]">
              <p className="font-sans text-[1.5rem] font-black leading-[1.05] tracking-[-0.05em] text-black sm:text-[2rem] lg:text-[2.4rem]">
                the kind of “vibe”
                <br />
                that makes wellbeing
                <br />
                feel human again
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Sticker({
  label,
  bg,
  text,
  rotate,
}: {
  label: string
  bg: string
  text: string
  rotate?: string
}) {
  return (
    <div
      className={`inline-flex border-[3px] border-black px-5 py-3 shadow-[6px_6px_0_0_rgba(0,0,0,1)] ${rotate ?? ""}`}
      style={{ backgroundColor: bg, color: text }}
    >
      <span className="font-sans text-xs font-black uppercase tracking-[0.1em]">
        {label}
      </span>
    </div>
  )
}