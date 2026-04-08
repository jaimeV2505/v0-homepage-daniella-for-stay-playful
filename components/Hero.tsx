"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguageSafe } from "@/lib/use-language"

export function Hero() {
  const { t } = useLanguageSafe()

  return (
    <section
      aria-label="Stay Playful Hero"
      className="relative w-full bg-[#cfa487] overflow-hidden"
    >
      {/* CONTENEDOR PRINCIPAL */}
      <div className="relative w-full h-[85vh] min-h-[650px] lg:h-[95vh] lg:max-h-[1100px] overflow-hidden">

        {/* IMAGEN */}
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
            className="object-cover object-[45%_center]"
          />
        </motion.div>

        {/* BLOQUE EDITORIAL */}
        <div className="relative z-30 h-full w-full flex flex-col justify-end">
          <div className="mx-auto w-full max-w-[1700px] px-8 pb-16 lg:pb-28">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
              className="flex flex-col items-start"
            >
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-black font-sans text-2xl sm:text-4xl lg:text-5xl font-black tracking-[-0.06em] uppercase leading-[0.85] mb-[-10px] lg:mb-[-20px] relative z-10"
              >
                {t("hero.title")}
              </motion.h2>

              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-[260px] sm:w-[350px] lg:w-[480px] filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
              >
                <img
                  src="/logo1.png"
                  alt="Stay Playful Logo"
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* GRADIENTE */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#cfa487]/60 via-transparent to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  )
}
