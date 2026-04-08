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

            className="object-cover object-[45%_-0%] lg:object-[45%_0%]"

          />

        </motion.div>



        {/* BLOQUE EDITORIAL - POSICIONAMIENTO QUIRÚRGICO */}

        <div className="absolute bottom-0 left-0 z-30 w-full px-8 pb-6 lg:pb-4">

          <motion.div

            initial="hidden"

            animate="visible"

            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}

            className="flex flex-col items-center lg:items-start max-w-[1700px] mx-auto"

          >

            {/* TÍTULO: leading normal en mobile para que no choquen las líneas, leading 0.5 en desktop */}

            <motion.h2

              variants={{

                hidden: { opacity: 0, y: 20 },

                visible: { opacity: 1, y: 0 },

              }}

              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}

              className="text-black font-sans text-2xl sm:text-4xl lg:text-5xl font-black tracking-[-0.06em] uppercase leading-tight lg:leading-[0.5] mb-4 lg:mb-[-22px] relative z-20 text-center lg:text-left"

            >

              {t("hero.title")}

            </motion.h2>



            {/* LOGO: Tamaño mobile ajustado y centrado */}

            <motion.div

              variants={{

                hidden: { opacity: 0, scale: 0.9 },

                visible: { opacity: 1, scale: 1 },

              }}

              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}

              className="w-[180px] sm:w-[280px] lg:w-[380px] filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] lg:translate-x-[-8px] relative z-10"

            >

              <img

                src="/logo1.png"

                alt="Stay Playful Logo"

                className="w-full h-auto object-contain block"

              />

            </motion.div>

          </motion.div>

        </div>



        {/* GRADIENTE */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#cfa487] via-transparent to-transparent z-10 pointer-events-none" />

      </div>

    </section>

  )

}

