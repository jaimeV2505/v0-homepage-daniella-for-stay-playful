"use client"

import Image from "next/image"
import { useLanguageSafe } from "@/lib/use-language"

export function BrandStatement() {
  const { t } = useLanguageSafe()
  const brand = (key: string) => t(`brand.${key}`)

  return (
    <section
      aria-labelledby="brand-statement-title"
      className="bg-[#DCDCDC] px-4 py-8 sm:py-12 lg:py-16"
    >
      <div className="mx-auto max-w-[1780px]">
        <div className="overflow-hidden rounded-[20px] border-[3px] border-black bg-white shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:rounded-[34px] sm:border-[4px] sm:shadow-[12px_12px_0_0_rgba(0,0,0,1)]">
          <div className="flex flex-col xl:flex-row">

            {/* IZQUIERDA */}
            <div className="z-20 flex w-full flex-col justify-center overflow-hidden border-b-[3px] border-black bg-[#FF7F00] px-6 py-12 sm:px-10 lg:px-16 xl:w-[52%] xl:border-b-0 xl:border-r-[4px] xl:px-14 2xl:w-[50%] 2xl:px-20">

              <div className="mx-auto w-full max-w-[760px] text-center xl:text-left">

                <h2
                  id="brand-statement-title"
                  className="mx-auto xl:mx-0 max-w-[13ch] text-[clamp(2.4rem,6.2vw,5.2rem)] font-black uppercase leading-[0.88] tracking-[-0.055em] text-white text-balance xl:max-w-[12ch] xl:text-[clamp(3.4rem,4.8vw,5.2rem)] 2xl:text-[clamp(4rem,5.2vw,5.8rem)]"
                >
                  {brand("heading")}
                </h2>

                <div className="mt-8 mx-auto xl:mx-0 max-w-[580px] space-y-4 text-[clamp(1.05rem,1.25vw,1.2rem)] leading-[1.7] text-white/95">
                  <p className="font-semibold tracking-tight">
                    {brand("body")}
                  </p>
                </div>

              </div>
            </div>

            {/* DERECHA */}
            <div className="relative flex min-h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-[#FFABFF] p-6 sm:min-h-[650px] sm:p-10 lg:p-14 xl:min-h-[850px] xl:w-[48%] 2xl:w-[50%]">

              <div className="pointer-events-none absolute left-0 top-0 z-10 h-[150px] w-full bg-gradient-to-b from-[#E89BE6]/60 to-transparent" />

              <div className="bubble-mask relative z-20 aspect-square h-full w-full max-w-[650px] bg-[#FF65FF] shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                <Image
                  src="/Playful.JPG"
                  alt="Editorial"
                  fill
                  priority
                  sizes="(max-width: 1279px) 100vw, 50vw"
                  className="object-cover object-[center_20%]"
                />
              </div>

              {/* CARD */}
              <div className="absolute bottom-[88px] left-6 right-6 z-40 border-[4px] border-black bg-white p-5 shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:bottom-28 sm:left-10 sm:w-[350px] xl:bottom-32 xl:left-10">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-black">
                  {brand("cardTag")}
                </p>
                <p className="mt-2 text-[14px] font-bold leading-tight text-black sm:text-[15px]">
                  {brand("cardBody")}
                </p>
              </div>

              {/* BARRA */}
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
            transform: scale(1.05) translateY(-6%);
          }
        }
      `}</style>
    </section>
  )
}
