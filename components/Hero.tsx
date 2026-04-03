"use client"

import Image from "next/image"

export function Hero() {
  return (
    <section
      aria-label="Stay Playful hero"
      className="relative overflow-hidden bg-[#d7ae91]"
    >
      {/* Container with aspect ratio to show full image */}
      <div className="relative w-full">
        {/* IMAGE - full width, natural aspect ratio */}
        <div className="relative w-full">
          <Image
            src="/StayPlay.JPG"
            alt="Stay Playful hero background"
            width={1920}
            height={1280}
            priority
            sizes="100vw"
            className="h-auto w-full object-contain"
          />
        </div>

        {/* overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(215,174,145,0.03)_0%,rgba(215,174,145,0.015)_24%,rgba(215,174,145,0)_50%)]" />

        {/* CONTENT - positioned absolutely over image */}
        <div className="absolute bottom-[12%] left-[4%] z-10 sm:bottom-[14%] lg:bottom-[16%]">
          <h1
            className="m-0 max-w-[280px] uppercase text-[#202020] sm:max-w-[360px] lg:max-w-[480px]"
            style={{
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: 700,
              lineHeight: "1.02",
              letterSpacing: "-0.04em",
            }}
          >
            YOUR LIFE, YOUR PLAYGROUND
          </h1>

          <div className="mt-3 sm:mt-4">
            <Image
              src="/logo1.png"
              alt="Stay Playful logo"
              width={2346}
              height={2346}
              priority
              className="h-auto w-[120px] sm:w-[150px] lg:w-[190px] xl:w-[220px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
