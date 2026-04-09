"use client"

import Image from "next/image"
import { useLanguageSafe } from "@/lib/use-language"

export function BrandStatement() {
  const { t } = useLanguageSafe()
  const brand = (key: string) => t(`brand.${key}`)

  return (
    <section
      aria-labelledby="brand-statement-title"
      className="bg-[#DCDCDC] py-8 sm:py-12 lg:py-16 px-4"
    >
      <div className="mx-auto max-w-[1780px]">
        <div className="overflow-hidden rounded-[20px] sm:rounded-[34px] border-[3px] sm:border-[4px] border-black bg-white shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:shadow-[12px_12px_0_0_rgba(0,0,0,1)]">
          <div className="flex flex-col xl:flex-row">

            {/* IZQUIERDA: BLOQUE DE TEXTO - IMPACTO EDITORIAL */}
            <div className="w-full xl:w-[50%] flex flex-col justify-center bg-[#FF7F00] px-6 py-12 sm:px-10 lg:px-16 xl:px-20 border-b-[3px] xl:border-b-0 xl:border-r-[4px] border-black z-20">
              <div className="max-w-[700px] w-full mx-auto xl:mx-0">
                <h2
                  id="brand-statement-title"
                  className="text-[clamp(2.4rem,7.5vw,5.5rem)] font-black uppercase leading-[0.82] tracking-[-0.07em] text-white"
                >
                  {brand("heading")}
                </h2>

                <div className="mt-8 max-w-[540px] space-y-4 text-[clamp(1rem,1.4vw,1.18rem)] leading-relaxed text-white/95">
                  <p className="font-semibold tracking-tight">
                    {brand("body")}
                  </p>
                </div>
              </div>
            </div>

            {/* DERECHA: IMAGEN CON MÁSCARA ESTABILIZADA */}
            <div className="relative w-full xl:w-[50%] flex flex-col bg-[#FFABFF] min-h-[500px] sm:min-h-[650px] xl:min-h-[850px] p-6 sm:p-10 lg:p-14 overflow-hidden items-center justify-center">

              {/* Gradiente de profundidad */}
              <div className="pointer-events-none absolute left-0 top-0 h-[150px] w-full bg-gradient-to-b from-[#E89BE6]/60 to-transparent z-10" />

              {/* Contenedor de Máscara: Bloqueado a cuadrado para evitar que se rompa */}
              <div className="bubble-mask relative w-full h-full max-w-[650px] aspect-square bg-[#FF65FF] shadow-[8px_8px_0_0_rgba(0,0,0,1)] z-20">
                <Image
                  src="/Playful.JPG"
                  alt="Editorial"
                  fill
                  priority
                  sizes="(max-width: 1279px) 100vw, 50vw"
                  className="object-cover object-[center_20%]"
                />
              </div>

              {/* CARD BLANCA FLOTANTE: Ahora realmente responsive en posición */}
              <div className="absolute left-6 right-6 bottom-[88px] sm:left-10 sm:bottom-28 xl:left-10 xl:bottom-32 z-40 border-[4px] border-black bg-white p-5 shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:w-[350px]">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-black">
                  {brand("cardTag")}
                </p>
                <p className="mt-2 text-[14px] sm:text-[15px] leading-tight text-black font-bold">
                  {brand("cardBody")}
                </p>
              </div>

              {/* BARRA AMARILLA INFERIOR: Anclada */}
              <div className="absolute bottom-0 left-0 right-0 border-t-[4px] border-black bg-[#FFBD17] px-4 py-5 z-30">
                <p className="text-center text-sm font-black uppercase tracking-[0.3em] text-black">
                  {brand("bottomBar")}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .bubble-mask {
          overflow: hidden;
          -webkit-mask-image: url("https://cdn.shopify.com/s/files/1/0803/2016/8209/files/HOCB_Shapes_Bubbles_01_Black.svg?v=1691787724");
          mask-image: url("https://cdn.shopify.com/s/files/1/0803/2016/8209/files/HOCB_Shapes_Bubbles_01_Black.svg?v=1691787724");
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          
          /* 'contain' es el secreto quirúrgico: la flor nunca se corta */
          -webkit-mask-size: contain;
          mask-size: contain;
          -webkit-mask-position: center;
          mask-position: center;
        }

        @media (max-width: 1279px) {
          .bubble-mask {
            /* En móvil/tablet forzamos el escalado para llenar el espacio rosa */
            -webkit-mask-size: 100% 100%;
            mask-size: 100% 100%;
            transform: scale(1.02) translateY(-4%);
          }
        }
      `}</style>
    </section>
  )
}