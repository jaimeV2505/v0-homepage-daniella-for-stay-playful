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

        {/* BLOQUE EDITORIAL - POSICIONAMIENTO QUIRURGICO */}
        <div className="absolute bottom-0 left-0 z-30 w-full px-5 pb-6 sm:px-8 lg:pb-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            className="mx-auto flex max-w-[1700px] flex-col items-center lg:items-start"
          >
            {/* TITULO */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-20 mb-4 whitespace-nowrap text-center font-sans text-[clamp(1.3rem,6vw,2rem)] font-black uppercase leading-none tracking-[-0.05em] text-black sm:text-4xl sm:leading-tight lg:mb-[-22px] lg:text-left lg:text-5xl lg:leading-[0.5] lg:tracking-[-0.06em]"
            >
              {t("hero.title")}
            </motion.h2>

            {/* LOGO: Tamano mobile ajustado y centrado */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-[150px] filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] sm:w-[280px] lg:w-[380px] lg:translate-x-[-8px]"
            >
              <img
                src="/logo1.png"
                alt="Stay Playful Logo"
                className="block h-auto w-full object-contain"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* GRADIENTE */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#cfa487] via-transparent to-transparent" />
      </div>
    </section>
  )
}