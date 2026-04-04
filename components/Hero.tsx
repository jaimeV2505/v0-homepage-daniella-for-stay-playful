"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section
      aria-label="Stay Playful Hero"
      className="relative w-full bg-[#cfa487] overflow-hidden"
    >
      {/* 1. NAVEGACIÓN SUPERIOR EDITORIAL */}
      <div className="absolute top-0 left-0 right-0 z-40 w-full pt-8 px-6 pointer-events-none">
        <div className="mx-auto flex max-w-[1800px] items-center justify-center gap-6">
          <div className="h-[1px] flex-1 bg-black/10" />
          <div className="rounded-full border border-black/20 bg-white/30 px-6 py-2 backdrop-blur-xl">
            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-black/80">
              Stay Playful
            </span>
          </div>
          <div className="h-[1px] flex-1 bg-black/10" />
        </div>
      </div>

      {/* 2. CONTENEDOR PRINCIPAL CON ZOOM DE IMPACTO */}
      <div className="relative w-full h-[85vh] min-h-[650px] lg:h-[95vh] lg:max-h-[1100px] overflow-hidden">

        {/* IMAGEN DE FONDO: Zoom In y posición estratégica */}
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/fullhero.png"
            alt="Daniella - Stay Playful"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-[45%_center]"
          />
        </motion.div>

        {/* 3. BLOQUE EDITORIAL UNIFICADO (Texto + Logo) */}
        <div className="relative z-30 h-full w-full flex flex-col justify-end">
          <div className="mx-auto w-full max-w-[1700px] px-8 pb-16 lg:pb-28">

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.2 } }
              }}
              className="flex flex-col items-start"
            >
              {/* TEXTO: Superpuesto sutilmente al área del brazo */}
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-black font-sans text-2xl sm:text-4xl lg:text-5xl font-black tracking-[-0.06em] uppercase leading-[0.85] mb-[-10px] lg:mb-[-20px] relative z-10"
              >
                Your life, <br />
                Your playground
              </motion.h2>

              {/* LOGO: Con sombra de alta gama y mayor tamaño */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 }
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

        {/* 4. GRADIENTE DE ACABADO PROFESIONAL */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#cfa487]/60 via-transparent to-transparent z-10 pointer-events-none" />
      </div>

      <style jsx>{`
        /* Ajuste de kerning para look editorial */
        h2 {
          text-shadow: 0 0 1px rgba(255,255,255,0.1);
        }
      `}</style>
    </section>
  )
}
