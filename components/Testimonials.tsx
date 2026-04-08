"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useLanguageSafe } from "@/lib/use-language"

export function Testimonials() {
  const { t } = useLanguageSafe()
  const { scrollYProgress } = useScroll()

  // Movimientos sutiles para profundidad
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])
  const floatingElementY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#FFFDF9] w-full"
    >
      {/* 1. CINTAS CRUZADAS (TICKER) */}
      <div className="relative h-40 lg:h-64 w-full overflow-hidden border-b-[3px] border-black">
        {/* Tira 1 */}
        <div className="absolute top-1/2 left-[-5%] w-[110%] border-y-[3px] border-black bg-[#40E0D0] py-3 lg:py-5 -rotate-2 z-10 shadow-lg -translate-y-1/2">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} className="mx-6 font-black uppercase tracking-widest text-black text-lg lg:text-3xl shrink-0">
                {t("testimonials.ticker")} ★ {t("testimonials.ticker")} ★
              </span>
            ))}
          </motion.div>
        </div>

        {/* Tira 2 */}
        <div className="absolute top-1/2 left-[-5%] w-[110%] border-y-[3px] border-black bg-[#40E0D0] py-3 lg:py-5 rotate-3 z-20 shadow-2xl -translate-y-1/2">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} className="mx-6 font-black uppercase tracking-widest text-black text-lg lg:text-3xl shrink-0">
                {t("testimonials.ticker")} ★ {t("testimonials.ticker")} ★
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 2. CONTENEDOR PRINCIPAL */}
      <div className="mx-auto max-w-[1700px] px-6 sm:px-12 lg:px-20 py-16 lg:py-32">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">

          {/* BLOQUE DE TEXTO */}
          <div className="lg:col-span-7 z-30 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* TÍTULO PRINCIPAL USANDO TUS NUEVAS LLAVES */}
              <h2 className="font-serif text-[15vw] lg:text-[11vw] font-black uppercase leading-[0.8] tracking-[-0.05em] text-black">
                {t("testimonials.heading")}
                <br />
                <span className="text-[#FF008E] italic inline-block mt-4 lg:ml-12 drop-shadow-[4px_4px_0px_#000] lg:drop-shadow-[6px_6px_0px_#000]">
                  {t("testimonials.headingAccent")}
                </span>
              </h2>

              {/* LISTADO DE PUNTOS CON TRADUCCIÓN */}
              <ul className="mt-12 lg:mt-16 space-y-4 lg:space-y-6">
                <li className="flex items-center gap-4 lg:gap-6">
                  <span className="h-4 w-4 lg:h-5 lg:w-5 bg-[#FF008E] rounded-full border-[3px] border-black shrink-0" />
                  <p className="font-sans text-xl lg:text-4xl font-black uppercase tracking-tight text-black">
                    {t("testimonials.point1")}
                  </p>
                </li>
                <li className="flex items-center gap-4 lg:gap-6">
                  <span className="h-4 w-4 lg:h-5 lg:w-5 bg-[#FF008E] rounded-full border-[3px] border-black shrink-0" />
                  <p className="font-sans text-xl lg:text-4xl font-black uppercase tracking-tight text-black">
                    {t("testimonials.point2")}
                  </p>
                </li>
                <li className="flex items-center gap-4 lg:gap-6">
                  <span className="h-4 w-4 lg:h-5 lg:w-5 bg-[#FF008E] rounded-full border-[3px] border-black shrink-0" />
                  <p className="font-sans text-xl lg:text-4xl font-black uppercase tracking-tight text-black">
                    {t("testimonials.point3")}
                  </p>
                </li>
              </ul>

              {/* SECCIÓN "UNDER UTVECKLING" */}
              <div className="mt-16 lg:mt-24 pt-10 border-t-[4px] border-black inline-block">
                <p className="font-serif text-3xl lg:text-6xl italic text-black leading-tight">
                  {t("testimonials.underDevelopment")}
                </p>
                <p className="font-serif text-2xl lg:text-4xl italic text-black/60 mt-2">
                  {t("testimonials.comingSoon")}
                </p>
              </div>
            </motion.div>
          </div>

          {/* BLOQUE DE IMAGEN */}
          <div className="lg:col-span-5 lg:-ml-20 relative order-first lg:order-last">
            <motion.div style={{ y: imageY }} className="relative z-20">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5.5] overflow-hidden rounded-[30px] lg:rounded-[50px] border-[4px] lg:border-[6px] border-black bg-white shadow-[15px_15px_0_0_rgba(0,0,0,1)] lg:shadow-[35px_35px_0_0_rgba(255,0,142,1)]">
                <Image
                  src="/smile.JPG"
                  alt="Playground Visual"
                  fill
                  priority
                  className="object-cover object-top scale-105"
                />
              </div>

              {/* TAG FLOTANTE */}
              <motion.div
                style={{ y: floatingElementY }}
                className="absolute -top-10 -right-5 lg:-right-12 z-30 bg-black text-[#40E0D0] px-6 py-4 rounded-2xl border-2 border-black rotate-12 shadow-xl"
              >
                <span className="font-black text-xl lg:text-3xl uppercase tracking-tighter text-[#40E0D0]">
                  {t("testimonials.tag")}
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div >

      {/* 3. WATERMARK */}
      <div className="absolute bottom-10 left-10 pointer-events-none z-0 select-none opacity-[0.03]" >
        <span className="font-serif text-[25vw] font-black uppercase leading-none">
          STAY PLAYFUL
        </span>
      </div >
    </section >
  )
}