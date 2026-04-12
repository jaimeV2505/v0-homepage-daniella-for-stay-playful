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

        {/* BLOQUE EDITORIAL - POSICIONAMIENTO MÁXIMO ABAJO */}
        <div className="absolute bottom-0 left-0 z-30 w-full px-5 pb-2 sm:px-8 lg:pb-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            className="mx-auto flex max-w-[1700px] flex-col items-center lg:items-start lg:mb-[-10px]"
          >
            {/* TITULO */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-20 mb-1 whitespace-nowrap text-center font-sans text-[clamp(1.5rem,7vw,2.2rem)] font-[900] uppercase leading-[0.85] tracking-[-0.07em] text-black sm:text-4xl sm:leading-tight lg:mb-[-32px] lg:text-left lg:text-5xl lg:tracking-[-0.08em]"
            >
              {t("hero.title")}
            </motion.h2>

            {/* LOGO: Posición ajustada al límite inferior */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-[220px] filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.2)] sm:w-[320px] lg:w-[420px] lg:translate-x-[-12px]"
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
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#cfa487] via-[#cfa487]/30 to-transparent" />
      </div>
    </section>
  )
}