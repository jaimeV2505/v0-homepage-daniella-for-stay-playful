"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#FFFDF9] py-0 w-full">

      {/* 1. TICKER TURQUESA */}
      <div className="w-full border-y-[2px] sm:border-y-[3px] border-black bg-[#40E0D0] py-3 sm:py-5 shadow-[0_4px_0_0_rgba(0,0,0,1)] relative z-30">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[0, 1].map((i) => (
            <div key={i} className="flex shrink-0 items-center">
              <span className="mx-4 sm:mx-8 font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] text-black text-lg sm:text-2xl lg:text-3xl">
                Stöd som passar ditt liv ✦ Lekfullt ✦ i linje med dina värderingar ✦ STAY PLAYFUL ✦ MOTIVERANDE ✦ ENERGIGIVANDE
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 2. CONTENIDO EDITORIAL */}
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-12 py-12 sm:py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] items-center gap-10 sm:gap-16 lg:gap-24">

          {/* LADO IZQUIERDO: IMAGEN */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[30px] sm:rounded-[45px] border-[3px] sm:border-[4px] border-black bg-white shadow-[15px_15px_0_0_rgba(0,0,0,1)] sm:shadow-[25px_25px_0_0_rgba(0,0,0,1)] aspect-[4/5] lg:aspect-[3/4.2]">
              <Image
                src="/smile.JPG"
                alt="Stay Playful Editorial"
                fill
                priority
                className="object-cover object-center transition-transform duration-1000 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* LADO DERECHO: TEXTOS */}
          <div className="flex flex-col items-start lg:pl-10 order-1 lg:order-2">
            <div className="relative w-full">
              {/* Títulos dinámicos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-[3.5rem] sm:text-[5rem] lg:text-[7.5rem] xl:text-[10rem] font-black uppercase leading-[0.85] tracking-[-0.04em] text-black">
                  Your <br />
                  <span className="text-[#FF008E] italic">playground!</span>
                </h2>
              </motion.div>

              <div className="mt-8 sm:mt-14 space-y-8 sm:space-y-12 w-full">
                <p className="font-serif text-2xl sm:text-3xl lg:text-5xl italic text-black/90">
                  Mer info kommer snart!
                </p>
                {/* LA SECCIÓN DE TESTIMONIOS Y CONTROLES HA SIDO ELIMINADA */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marca de agua */}
      <div className="pointer-events-none absolute bottom-[-5%] sm:bottom-[-8%] left-0 z-0 select-none opacity-[0.02] sm:opacity-[0.03]">
        <span className="font-serif text-[30vw] sm:text-[25vw] font-black uppercase leading-none tracking-tighter">
          PLAYFUL
        </span>
      </div>
    </section>
  )
}