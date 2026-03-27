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
        <div className="absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-[54%] bg-[#E6B2C9] sm:h-[55%] lg:h-[56%]" />
          <div className="absolute inset-x-0 bottom-0 h-[46%] bg-[#FFFFED] sm:h-[45%] lg:h-[44%]" />
        </div>

        <motion.div
          style={{ y: heroY }}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="relative z-10 mx-auto max-w-[1600px] px-4 pb-10 pt-8 sm:px-6 sm:pb-12 sm:pt-10 lg:px-8 lg:pb-20 lg:pt-16"
        >
          {/* MOBILE / TABLET */}
          <div className="lg:hidden">
            <div className="relative mx-auto max-w-[440px]">
              {/* STAY behind */}
              <div className="pointer-events-none absolute left-1/2 top-2 z-10 -translate-x-1/2 sm:top-3">
                <div className="hero-top-mobile text-[#FFF4EA]/78">STAY</div>
              </div>

              {/* image */}
              <div className="relative z-20 mx-auto w-[72vw] max-w-[320px] pt-16 sm:w-[68vw] sm:max-w-[350px] sm:pt-20">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F05B4F] shadow-[0_16px_30px_rgba(0,0,0,0.10)] sm:shadow-[0_18px_36px_rgba(0,0,0,0.10)]">
                  <Image
                    src="/1pro.jpg"
                    alt="Editorial portrait for Stay Playful"
                    fill
                    priority
                    sizes="(max-width: 640px) 72vw, (max-width: 1024px) 68vw, 350px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* PLAYFUL front */}
              <div className="pointer-events-none relative z-30 mt-[-48px] text-center sm:mt-[-58px]">
                <div className="hero-front-mobile text-[#D8A51C]">PLAYFUL</div>
              </div>

              {/* statement */}
              <div className="mx-auto mt-3 max-w-[320px] px-2 text-center sm:mt-4 sm:max-w-[360px]">
                <p className="text-[1rem] leading-[1.45] tracking-[-0.02em] text-black/76 sm:text-[1.1rem]">
                  A softer, more personal approach to wellbeing.
                </p>
              </div>
            </div>
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:block">
            <div className="relative mx-auto min-h-[860px] max-w-[1450px] xl:min-h-[930px]">
              <div className="pointer-events-none absolute left-1/2 top-[-2%] z-10 -translate-x-1/2">
                <div className="hero-top-desktop text-[#FFF4EA]/78">STAY</div>
              </div>

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

              <div className="pointer-events-none absolute left-1/2 top-[58%] z-30 -translate-x-1/2">
                <div className="hero-front-desktop text-[#D8A51C]">PLAYFUL</div>
              </div>

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
          font-size: clamp(4.3rem, 15vw, 6.1rem);
          text-transform: uppercase;
        }

        .hero-front-mobile {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 600;
          line-height: 0.9;
          letter-spacing: -0.05em;
          font-size: clamp(3.4rem, 12.2vw, 5rem);
          text-transform: uppercase;
        }
      `}</style>
    </section>
  )
}