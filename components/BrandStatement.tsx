"use client"

import Image from "next/image"
import { useLanguageSafe } from "@/lib/use-language"

export function BrandStatement() {
  const { t } = useLanguageSafe()
  const brand = (key: string) => t(`brand.${key}`)

  return (
    <section
      aria-labelledby="brand-statement-title"
      className="bg-[#DCDCDC] px-4 py-8 sm:py-12 lg:px-6 lg:py-16"
    >
      <div className="mx-auto max-w-[1780px]">
        {/* Main Container Card */}
        <div className="overflow-hidden rounded-[20px] border-[3px] border-black bg-white shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:rounded-[34px] sm:border-[4px] sm:shadow-[12px_12px_0_0_rgba(0,0,0,1)]">
          <div className="flex flex-col xl:flex-row">

            {/* --- SECCIÓN IZQUIERDA: TEXTO --- */}
            <div className="z-20 flex w-full flex-col justify-center border-b-[3px] border-black bg-[#FF7F00] px-6 py-12 sm:px-10 lg:px-16 xl:w-1/2 xl:border-b-0 xl:border-r-[4px] xl:px-20">
              <div className="mx-auto w-full max-w-[700px] text-center">
                {/* AJUSTE: Título más pequeño (bajado de 2.4rem a 2.1rem y de 5.2rem a 4.5rem) */}
                <h2
                  id="brand-statement-title"
                  className="mx-auto max-w-[11ch] break-words text-[clamp(2.1rem,6vw,4.5rem)] font-black uppercase leading-[0.88] tracking-[-0.05em] text-white"
                >
                  {brand("heading")}
                </h2>

                <div className="mt-8 mx-auto max-w-[540px]">
                  <p className="text-[clamp(1.1rem,1.8vw,1.45rem)] font-semibold leading-relaxed tracking-tight text-white/95">
                    {brand("body")}
                  </p>
                </div>
              </div>
            </div>

            {/* --- SECCIÓN DERECHA: IMAGEN --- */}
            <div className="relative flex w-full items-center justify-center overflow-hidden bg-[#FFABFF] px-6 pb-28 pt-6 sm:min-h-[650px] sm:px-10 sm:pb-32 sm:pt-10 lg:px-14 xl:min-h-[850px] xl:w-1/2 xl:pb-36">

              <div className="pointer-events-none absolute left-0 top-0 z-10 h-[150px] w-full bg-gradient-to-b from-[#E89BE6]/60 to-transparent" />

              <div className="bubble-mask relative z-20 aspect-square w-full max-w-[750px] bg-[#FF65FF] shadow-[8px_8px_0_0_rgba(0,0,0,1)] xl:scale-110">
                <Image
                  src="/Playful.JPG"
                  alt="Editorial"
                  fill
                  priority
                  sizes="(max-width: 1279px) 100vw, 50vw"
                  className="object-cover object-[center_20%]"
                />
              </div>

              {/* Card Flotante */}
              <div className="absolute bottom-[84px] left-6 right-6 z-40 border-[4px] border-black bg-white p-5 shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:bottom-[96px] sm:left-10 sm:right-auto sm:w-[350px] xl:bottom-[110px] xl:left-10">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-black">
                  {brand("cardTag")}
                </p>
                <p className="mt-2 text-[14px] font-bold leading-tight text-black sm:text-[15px]">
                  {brand("cardBody")}
                </p>
              </div>

              {/* Barra Inferior */}
              <div className="absolute bottom-0 left-0 right-0 z-30 border-t-[4px] border-black bg-[#FFBD17] px-4 py-5">
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
          -webkit-mask-size: contain;
          mask-size: contain;
          -webkit-mask-position: center;
          mask-position: center;
        }

        @media (max-width: 1279px) {
          .bubble-mask {
            -webkit-mask-size: 100% 100%;
            mask-size: 100% 100%;
            transform: scale(1.15); 
            transform-origin: center;
          }
        }
      `}</style>
    </section>
  )
}