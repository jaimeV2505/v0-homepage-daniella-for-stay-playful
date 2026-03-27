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
        {/* split background */}
        <div className="absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-[56%] bg-[#E6B2C9]" />
          <div className="absolute inset-x-0 bottom-0 h-[44%] bg-[#FFFFED]" />
        </div>

        <motion.div
          style={{ y: heroY }}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="relative z-10 mx-auto max-w-[1600px] px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8 lg:pb-20 lg:pt-16"
        >
          {/* MOBILE */}
          <div className="lg:hidden">
            <div className="relative mx-auto max-w-[430px]">
              <div className="pointer-events-none absolute left-1/2 top-0 z-10 -translate-x-1/2">
                <div className="hero-top-mobile text-[#FFF4EA]/90">STAY</div>
              </div>

              <div className="relative z-20 ml-auto mr-3 w-[74vw] max-w-[300px] pt-16">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F05B4F] shadow-[0_18px_36px_rgba(0,0,0,0.10)]">
                  <Image
                    src="/1pro.jpg"
                    alt="Editorial portrait for Stay Playful"
                    fill
                    priority
                    sizes="(max-width: 768px) 74vw, 300px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div className="pointer-events-none relative z-30 mt-[-70px] text-center">
                <div className="hero-front-mobile text-[#D8A51C]">PLAYFUL</div>
              </div>

              <div className="mx-auto mt-6 max-w-[330px] text-center">
                <p className="text-[1.02rem] leading-7 text-black/76">
                  A softer, more personal approach to wellbeing.
                </p>
              </div>
            </div>
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:block">
            <div className="relative mx-auto min-h-[860px] max-w-[1450px] xl:min-h-[930px]">
              {/* STAY behind */}
              <div className="pointer-events-none absolute left-1/2 top-[6%] z-10 -translate-x-1/2">
                <div className="hero-top-desktop text-[#FFF4EA]/90">STAY</div>
              </div>

              {/* image offset right */}
              <div className="absolute left-[52%] top-[13%] z-20 -translate-x-1/2">
                <div className="relative w-[470px] xl:w-[540px]">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#F05B4F] shadow-[0_24px_52px_rgba(0,0,0,0.12)]">
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

              {/* PLAYFUL front, lower so it doesn't cut face */}
              <div className="pointer-events-none absolute left-1/2 top-[58%] z-30 -translate-x-1/2">
                <div className="hero-front-desktop text-[#D8A51C]">PLAYFUL</div>
              </div>

              {/* statement */}
              <div className="absolute bottom-[7%] left-1/2 z-30 max-w-[780px] -translate-x-1/2 text-center">
                <p className="text-[2rem] leading-[1.12] tracking-[-0.035em] text-black/76 xl:text-[2.25rem]">
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
          font-size: clamp(8.4rem, 13.5vw, 13.6rem);
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