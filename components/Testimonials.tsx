"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useLanguageSafe } from "@/lib/use-language"

export function Testimonials() {
  const { t } = useLanguageSafe()

  const { scrollYProgress } = useScroll()

  // Movimientos sutiles para dar profundidad sin desordenar
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])
  const floatingElementY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#FFFDF9] w-full"
    >
      {/* 1. TICKER (CINTA SUPERIOR) - ESPACIADO FIJO */}
      <div className="w-full border-b-[3px] border-black bg-[#40E0D0] py-4 lg:py-6 shadow-[0_4px_0_0_rgba(0,0,0,1)] relative z-50">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[0, 1].map((i) => (
            <div key={i} className="flex shrink-0 items-center">
              <span className="mx-8 font-black uppercase tracking-[0.15em] text-black text-2xl lg:text-4xl">
                {t("testimonials.ticker")} ★ {t("testimonials.ticker")} ★
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 2. CONTENEDOR PRINCIPAL - ORGANIZACIÓN DE ESPACIOS */}
      <div className="mx-auto max-w-[1700px] px-6 sm:px-12 lg:px-20 py-16 lg:py-32">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">

          {/* BLOQUE DE TEXTO (COLUMNAS 1-7) */}
          <div className="lg:col-span-7 z-30 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-[15vw] lg:text-[11vw] font-black uppercase leading-[0.8] tracking-[-0.05em] text-black">
                {t("testimonials.heading")}
                <br />
                <span className="text-[#FF008E] italic inline-block mt-4 lg:ml-12 drop-shadow-[6px_6px_0px_#000]">
                  {t("testimonials.headingAccent")}
                </span>
              </h2>

              {/* Espaciador controlado entre Título e Info */}
              <div className="mt-16 lg:mt-24 space-y-8">
                <p className="font-serif text-3xl lg:text-5xl italic text-black/80 leading-tight">
                  {t("testimonials.comingSoon")}
                </p>
              </div>


            </motion.div>
          </div>

          {/* BLOQUE DE IMAGEN (COLUMNAS 7-12 con OVERLAP) */}
          <div className="lg:col-span-5 lg:-ml-20 relative order-first lg:order-last">
            <motion.div
              style={{ y: imageY }}
              className="relative z-20"
            >
              {/* Contenedor de la foto con sombra brutalista desplazada */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5.5] overflow-hidden rounded-[30px] lg:rounded-[50px] border-[4px] lg:border-[6px] border-black bg-white shadow-[20px_20px_0_0_rgba(0,0,0,1)] lg:shadow-[35px_35px_0_0_rgba(255,0,142,1)] transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/smile.JPG"
                  alt="Editorial Highlight"
                  fill
                  priority
                  className="object-cover object-top scale-105 transition-transform duration-1000 hover:scale-110"
                />
              </div>

              {/* Elemento Decorativo Flotante (Tag Editorial) */}
              <motion.div
                style={{ y: floatingElementY }}
                className="absolute -top-10 -right-5 lg:-right-12 z-30 bg-black text-[#40E0D0] px-6 py-4 rounded-2xl border-2 border-black rotate-12 shadow-xl"
              >
                <span className="font-black text-xl lg:text-3xl uppercase tracking-tighter">NEW ERA</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div >

      {/* 3. ESPACIO DE FONDO (WATERMARK) - PARA RELLENAR VACÍOS */}
      < div className="absolute bottom-10 left-10 pointer-events-none z-0 select-none opacity-[0.03]" >
        <span className="font-serif text-[25vw] font-black uppercase leading-none">
          STAY PLAYFUL
        </span>
      </div >

      {/* Relleno decorativo inferior para asegurar el cierre de sección */}
      < div className="h-20 lg:h-40 w-full" />
    </section >
  )
}
