   "use client"

import Image from "next/image"

export function Hero() {
  return (
    <section
      aria-label="Stay Playful hero"
      className="relative overflow-hidden bg-[#d7ae91]"
    >
      <div className="relative h-[72vw] min-h-[520px] max-h-[980px] w-full sm:min-h-[620px] lg:min-h-[760px] xl:min-h-[860px]">

        {/* =========================
            IMAGE (CONTROL REAL)
           ========================= */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="
              absolute inset-0
              scale-[1.08]
              -translate-y-[12%]
              sm:-translate-y-[-4%]
              lg:-translate-y-[-4%]
            "
          >
            <Image
              src="/StayPlay.JPG"
              alt="Stay Playful hero background"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Overlay muy suave */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(215,174,145,0.03)_0%,rgba(215,174,145,0.015)_24%,rgba(215,174,145,0)_50%)]" />

        {/* =========================
            CONTENT
           ========================= */}
        <div className="relative z-10 h-full w-full">
          <div
            className="absolute -translate-y-1/2"
            style={{
              left: "4.2%",
              top: "66%",
            }}
          >
            {/* TEXTO */}
            <h1
              className="m-0 max-w-[320px] uppercase text-[#202020] sm:max-w-[360px] lg:max-w-[720px]"
              style={{
                fontFamily: "Helvetica, Arial, sans-serif",
                fontSize: "27px",
                fontWeight: 700,
                lineHeight: "1.02",
                letterSpacing: "-0.04em",
              }}
            >
              YOUR LIFE, YOUR PLAYGROUND
            </h1>

            {/* LOGO */}
            <div className="mt-4">
              <Image
                src="/logo1.png"
                alt="Stay Playful logo"
                width={2346}
                height={2346}
                priority
                className="h-auto w-[140px] sm:w-[165px] lg:w-[210px] xl:w-[230px]"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
