"use client"

import Image from "next/image"
import { useLanguageSafe } from "@/lib/use-language"

export function BrandStatement() {
  const { t } = useLanguageSafe()
  const brand = (key: string) => t(`brand.${key}`)

  return (
    <section
      aria-labelledby="brand-statement-title"
      className="bg-[#DCDCDC] py-8 sm:py-12 lg:py-16"
    >
      <div className="mx-auto max-w-[1780px] px-4 sm:px-4 lg:px-6">
        <div className="overflow-hidden rounded-[20px] sm:rounded-[34px] border-[3px] sm:border-[4px] border-black bg-white shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:shadow-[12px_12px_0_0_rgba(0,0,0,1)]">
          <div className="grid min-h-[680px] lg:grid-cols-[0.49fr_0.51fr] xl:min-h-[760px] 2xl:min-h-[820px]">

            <div className="flex flex-col justify-between bg-[#FF7F00] px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12 xl:px-14 xl:py-14 2xl:px-16 2xl:py-16">
              <div className="max-w-[620px]">
                <h2
                  id="brand-statement-title"
                  className="mt-5 max-w-[720px] text-[2.9rem] font-black uppercase leading-[0.88] tracking-[-0.09em] text-white sm:text-[4rem] lg:text-[5rem] xl:text-[5.8rem] 2xl:text-[6.3rem]"
                >
                  {brand("heading")}
                </h2>

                <div className="mt-8 max-w-[460px] space-y-4 text-base leading-8 text-white/95 sm:text-lg">
                  <p>{brand("body")}</p>
                </div>
              </div>
            </div>

            <div className="relative min-h-[640px] bg-[#FFABFF] px-5 py-5 sm:px-6 sm:py-6 lg:min-h-full lg:px-8 lg:py-8 xl:px-10 xl:py-10">

              <div className="pointer-events-none absolute left-0 top-0 h-[120px] w-full bg-gradient-to-b from-[#E89BE6] to-transparent z-10" />

              <div className="relative mx-auto h-[520px] w-full bubble-mask bg-[#FF65FF] shadow-[8px_8px_0_0_rgba(0,0,0,1)] sm:h-[620px] lg:h-[760px] xl:h-[860px] 2xl:h-[920px]">
                <Image
                  src="/Playful.JPG"
                  alt="Editorial"
                  fill
                  sizes="(max-width: 1024px) 100vw, 51vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="absolute left-0 bottom-[60px] z-20 w-[92%] border-[4px] border-black bg-white px-4 py-4 shadow-[6px_6px_0_0_rgba(0,0,0,1)] sm:w-[360px]">
                <p className="text-[12px] font-black uppercase tracking-[0.16em] text-black">
                  {brand("cardTag")}
                </p>
                <p className="mt-2 text-sm leading-6 text-black sm:text-[15px]">
                  {brand("cardBody")}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 border-t-[4px] border-black bg-[#FFBD17] px-4 py-3">
                <p className="text-center text-sm font-black uppercase tracking-[0.24em] text-black">
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
          -webkit-mask-position: center top;
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-size: cover;
          mask-image: url("https://cdn.shopify.com/s/files/1/0803/2016/8209/files/HOCB_Shapes_Bubbles_01_Black.svg?v=1691787724");
          mask-position: center top;
          mask-repeat: no-repeat;
          mask-size: cover;
        }
      `}</style>
    </section>
  )
}
