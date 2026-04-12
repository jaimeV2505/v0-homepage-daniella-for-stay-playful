"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguageSafe } from "@/lib/use-language"

export function Hero() {
  const { t } = useLanguageSafe()

  return (
    <section
      aria-label="Stay Playful Hero"
      className="relative w-full overflow-hidden bg-[#cfa487]"
    >
      {/* CONTENEDOR PRINCIPAL */}
      <div className="relative h-[85vh] min-h-[650px] w-full overflow-hidden lg:h-[95vh] lg:max-h-[1100px]">

        {/* IMAGEN DE FONDO */}
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/herostayplay.png"
            alt="Daniella - Stay Playful"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-[45%_40%] lg:object-[45%_40%]"
          />
        </motion.div>

        {/* GRADIENTE */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#cfa487] via-[#cfa487]/30 to-transparent" />

        {/* BLOQUE EDITORIAL */}
        <div className="absolute bottom-0 left-0 z-30 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            className="
              flex flex-col
              items-center lg:items-start
              px-5 pb-8
              sm:px-8 sm:pb-10
              lg:px-10 lg:-mb-6
              xl:px-14 xl:-mb-8
              max-w-[1700px] mx-auto
            "
          >
            {/* TITULO */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="
                relative z-20
                font-sans font-[900] uppercase
                leading-[0.88] tracking-[-0.04em]
                text-black
                mb-0
                whitespace-nowrap
                text-center lg:text-left
                text-[clamp(1.3rem,5.2vw,2.6rem)]
                lg:text-[clamp(2rem,3.8vw,4.4rem)] lg:tracking-[-0.06em]
                xl:text-[clamp(2.4rem,3.4vw,5.2rem)]
                2xl:text-[clamp(2.8rem,3vw,6rem)]
              "
            >
              {t("hero.title")}
            </motion.h2>

            {/* LOGO */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="
                relative z-10
                filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)]
                lg:-ml-2
                -mt-3 lg:-mt-5
                w-[clamp(180px,52vw,280px)]
                sm:w-[clamp(240px,42vw,360px)]
                md:w-[clamp(280px,36vw,420px)]
                lg:w-[clamp(320px,28vw,500px)]
                xl:w-[clamp(380px,26vw,580px)]
                2xl:w-[clamp(440px,24vw,660px)]
              "
            >
              <img
                src="/logo1.png"
                alt="Stay Playful Logo"
                className="block h-auto w-full object-contain"
              />
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  )
}