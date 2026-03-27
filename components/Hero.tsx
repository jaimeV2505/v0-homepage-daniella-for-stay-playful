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

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 20])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-visible bg-[#FFFFED]"
      aria-label="Stay Playful hero"
    >
      <div className="relative overflow-visible border-b-[3px] border-[#2B1A16] bg-[#FFFFED]">
        {/* COLOR BLOCKS */}
        <div className="absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-[58%] bg-[#F6B8D1]" />
          <div className="absolute inset-x-0 bottom-0 h-[42%] bg-[#FFFFED]" />
        </div>

        {/* SOFT FRAME */}
        <div className="pointer-events-none absolute inset-x-4 top-6 bottom-6 border border-black/8 sm:inset-x-6 lg:inset-x-8 lg:top-8 lg:bottom-8" />

        <motion.div
          style={{ y: heroY }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="relative z-10 mx-auto max-w-[1650px] px-4 pb-24 pt-12 sm:px-6 sm:pb-28 sm:pt-16 lg:px-8 lg:pb-32 lg:pt-20 xl:pb-36"
        >
          {/* MOBILE */}
          <div className="lg:hidden">
            <div className="relative mx-auto max-w-[430px]">
              {/* back word */}
              <div className="pointer-events-none absolute left-1/2 top-2 z-10 -translate-x-1/2">
                <div className="hero-top-mobile text-[#FFF3E8]/90">STAY</div>
              </div>

              {/* image */}
              <div className="relative z-20 mx-auto w-[76vw] max-w-[310px] pt-20">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F05B4F] shadow-[0_18px_36px_rgba(0,0,0,0.12)]">
                  <Image
                    src="/1pro.jpg"
                    alt="Editorial portrait for Stay Playful"
                    fill
                    priority
                    sizes="(max-width: 768px) 76vw, 310px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* symbol */}
              <div className="relative z-30 mt-[-34px] ml-[4%] w-[90px]">
                <Image
                  src="/logo2.png"
                  alt="Stay Playful symbol"
                  width={900}
                  height={900}
                  priority
                  className="h-auto w-full drop-shadow-[0_10px_18px_rgba(0,0,0,0.10)]"
                />
              </div>

              {/* front word */}
              <div className="relative z-40 mt-[-8px] text-center">
                <div className="hero-front-mobile text-[#D8A51C]">PLAYFUL</div>
              </div>

              {/* statement */}
              <div className="mx-auto mt-8 max-w-[340px] text-center">
                <p className="text-[1.05rem] leading-7 text-black/76">
                  A softer, more personal approach to wellbeing.
                </p>
              </div>
            </div>
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:block">
            <div className="relative mx-auto min-h-[930px] max-w-[1480px] xl:min-h-[1000px]">
              {/* top word */}
              <div className="pointer-events-none absolute left-1/2 top-[5%] z-10 -translate-x-1/2">
                <div className="hero-top-desktop text-[#FFF3E8]/88">STAY</div>
              </div>

              {/* image bigger and lower */}
              <div className="absolute left-1/2 top-[12%] z-20 -translate-x-1/2 translate-y-[70px]">
                <div className="relative w-[470px] xl:w-[540px]">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#F05B4F] shadow-[0_26px_56px_rgba(0,0,0,0.14)]">
                    <Image
                      src="/1pro.jpg"
                      alt="Editorial portrait for Stay Playful"
                      fill
                      priority
                      sizes="(max-width: 1536px) 470px, 540px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              {/* symbol better integrated */}
              <div className="absolute left-[14%] top-[43%] z-30 xl:left-[15%]">
                <div className="w-[170px] xl:w-[195px]">
                  <Image
                    src="/logo2.png"
                    alt="Stay Playful symbol"
                    width={1200}
                    height={1200}
                    priority
                    className="h-auto w-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.10)]"
                  />
                </div>
              </div>

              {/* front word */}
              <div className="pointer-events-none absolute left-1/2 top-[54%] z-40 -translate-x-1/2">
                <div className="hero-front-desktop text-[#D8A51C]">PLAYFUL</div>
              </div>

              {/* micro notes */}
              <div className="absolute left-[18%] top-[66.5%] z-40">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/70">
                  Real life
                  <br />
                  support
                </p>
              </div>

              <div className="absolute right-[18%] top-[66.5%] z-40 text-right">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/70">
                  Softer
                  <br />
                  wellbeing
                </p>
              </div>

              {/* centered statement */}
              <div className="absolute bottom-[6%] left-1/2 z-40 max-w-[720px] -translate-x-1/2 text-center">
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
          font-size: clamp(8.6rem, 14vw, 14rem);
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
          font-size: clamp(4rem, 14vw, 5.8rem);
          text-transform: uppercase;
        }
      `}</style>
    </section>
  )
}