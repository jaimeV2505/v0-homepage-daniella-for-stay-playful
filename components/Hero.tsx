"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 18])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-visible bg-[#FFFFED]"
      aria-label="Stay Playful hero"
    >
      <div className="relative overflow-visible border-b-[3px] border-[#2B1A16] bg-[#FFFFED]">
        <motion.div
          style={{ y: heroY }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="relative z-10 mx-auto max-w-[1600px] px-4 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8 lg:pb-28 lg:pt-20"
        >
          {/* MOBILE */}
          <div className="lg:hidden">
            <div className="relative mx-auto max-w-[430px]">
              {/* top word */}
              <div className="pointer-events-none absolute left-1/2 top-0 z-10 w-full -translate-x-1/2 text-center">
                <div className="hero-top-mobile text-black/18">STAY</div>
              </div>

              {/* image */}
              <div className="relative z-20 mx-auto w-[72vw] max-w-[280px] pt-20">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F05B4F]">
                  <Image
                    src="/1pro.jpg"
                    alt="Editorial portrait for Stay Playful"
                    fill
                    priority
                    sizes="(max-width: 768px) 72vw, 280px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* symbol */}
              <div className="relative z-30 mt-[-46px] ml-[2%] w-[92px]">
                <Image
                  src="/logo2.png"
                  alt="Stay Playful symbol"
                  width={900}
                  height={900}
                  priority
                  className="h-auto w-full"
                />
              </div>

              {/* front word */}
              <div className="relative z-40 mt-[-18px] text-center">
                <div className="hero-front-mobile text-[#111111]">PLAYFUL</div>
              </div>
            </div>
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:block">
            <div className="relative mx-auto min-h-[820px] max-w-[1450px] xl:min-h-[880px]">
              {/* STAY behind */}
              <div className="pointer-events-none absolute left-1/2 top-[7%] z-10 -translate-x-1/2">
                <div className="hero-top-desktop text-black/16">STAY</div>
              </div>

              {/* image in the middle */}
              <div className="absolute left-1/2 top-[15%] z-20 -translate-x-1/2 translate-y-[34px]">
                <div className="relative w-[420px] xl:w-[470px]">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#F05B4F]">
                    <Image
                      src="/1pro.jpg"
                      alt="Editorial portrait for Stay Playful"
                      fill
                      priority
                      sizes="(max-width: 1536px) 420px, 470px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              {/* logo symbol */}
              <div className="absolute left-[10%] top-[44%] z-30 xl:left-[11%]">
                <div className="w-[170px] xl:w-[195px]">
                  <Image
                    src="/logo2.png"
                    alt="Stay Playful symbol"
                    width={1200}
                    height={1200}
                    priority
                    className="h-auto w-full"
                  />
                </div>
              </div>

              {/* PLAYFUL front */}
              <div className="pointer-events-none absolute left-1/2 top-[51%] z-40 -translate-x-1/2">
                <div className="hero-front-desktop text-[#D7AA22]">PLAYFUL</div>
              </div>

              {/* tiny editorial notes */}
              <div className="absolute left-[8%] top-[66%] z-40">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/70">
                  Real life
                  <br />
                  support
                </p>
              </div>

              <div className="absolute right-[9%] top-[66%] z-40 text-right">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/70">
                  Softer
                  <br />
                  wellbeing
                </p>
              </div>

              {/* mini brand statement */}
              <div className="absolute bottom-[5%] left-1/2 z-40 max-w-[700px] -translate-x-1/2 text-center">
                <p className="text-[2rem] leading-[1.12] tracking-[-0.04em] text-black/78 xl:text-[2.2rem]">
                  A softer, more personal approach to wellbeing.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero-top-desktop {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 600;
          line-height: 0.88;
          letter-spacing: -0.05em;
          font-size: clamp(9rem, 14vw, 15rem);
          text-transform: uppercase;
        }

        .hero-front-desktop {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 600;
          line-height: 0.88;
          letter-spacing: -0.05em;
          font-size: clamp(8rem, 13vw, 13rem);
          text-transform: uppercase;
        }

        .hero-top-mobile {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 600;
          line-height: 0.9;
          letter-spacing: -0.05em;
          font-size: clamp(4.6rem, 18vw, 6.8rem);
          text-transform: uppercase;
        }

        .hero-front-mobile {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 600;
          line-height: 0.9;
          letter-spacing: -0.05em;
          font-size: clamp(3.8rem, 14vw, 5.4rem);
          text-transform: uppercase;
          color: #d7aa22;
        }
      `}</style>
    </section>
  )
}