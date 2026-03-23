"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

const programs = [
  {
    id: "coaching",
    step: "01",
    eyebrow: "Personal Guidance",
    title: "1:1 Coaching",
    description:
      "Tailored support designed around your unique needs, lifestyle, and goals. Direct access to personalized nutrition and wellness coaching.",
    image: "/vercel/share/v0-project/public/1pro.jpg",
    accent: "bg-[#E7DDF6]",
    chip: "Tailored support",
    bgWord: "GUIDE",
  },
  {
    id: "program-8",
    step: "02",
    eyebrow: "Foundation Builder",
    title: "8-Week Program",
    description:
      "A structured journey to establish healthy habits and transform your relationship with food. Perfect for those ready to commit to change.",
    image:
      "https://images.pexels.com/photos/7561675/pexels-photo-7561675.jpeg?auto=compress&cs=tinysrgb&w=1200",
    accent: "bg-[#D8EDF6]",
    chip: "Build momentum",
    bgWord: "BUILD",
  },
  {
    id: "program-12",
    step: "03",
    eyebrow: "Deep Transformation",
    title: "12-Week Program",
    description:
      "The comprehensive experience for lasting change. Extended support, deeper work, and the time needed for true transformation.",
    image:
      "https://images.pexels.com/photos/5311550/pexels-photo-5311550.jpeg?auto=compress&cs=tinysrgb&w=1200",
    accent: "bg-[#F7E1EA]",
    chip: "Lasting change",
    bgWord: "TRANSFORM",
  },
]

export function Programs() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  // Scenes
  const scene1Opacity = useTransform(scrollYProgress, [0, 0.16, 0.28], [1, 1, 0])
  const scene1Y = useTransform(scrollYProgress, [0, 0.28], [0, -36])
  const scene1Scale = useTransform(scrollYProgress, [0, 0.28], [1, 0.975])

  const scene2Opacity = useTransform(
    scrollYProgress,
    [0.22, 0.38, 0.56, 0.7],
    [0, 1, 1, 0]
  )
  const scene2Y = useTransform(scrollYProgress, [0.22, 0.7], [36, -34])
  const scene2Scale = useTransform(scrollYProgress, [0.22, 0.7], [0.975, 1])

  const scene3Opacity = useTransform(scrollYProgress, [0.64, 0.8, 1], [0, 1, 1])
  const scene3Y = useTransform(scrollYProgress, [0.64, 1], [42, 0])
  const scene3Scale = useTransform(scrollYProgress, [0.64, 1], [0.97, 1])

  // Left-side motion
  const leftBlockY = useTransform(scrollYProgress, [0, 1], [0, -18])
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, -12])
  const badgeRotate = useTransform(scrollYProgress, [0, 1], [0, 8])

  // Background words
  const word1Opacity = useTransform(scrollYProgress, [0, 0.18, 0.28], [0.11, 0.11, 0])
  const word2Opacity = useTransform(scrollYProgress, [0.22, 0.42, 0.58, 0.7], [0, 0.11, 0.11, 0])
  const word3Opacity = useTransform(scrollYProgress, [0.64, 0.82, 1], [0, 0.11, 0.11])

  return (
    <>
      {/* DESKTOP */}
      <section
        id="programs"
        ref={ref}
        className="relative hidden h-[260vh] bg-sp-cream xl:block"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-sp-cream" />

          {/* Soft editorial glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-6%] top-[20%] h-64 w-64 rounded-full bg-[#FFABFF]/18 blur-3xl" />
            <div className="absolute left-[20%] bottom-[12%] h-72 w-72 rounded-full bg-[#DDF0D5]/24 blur-3xl" />
            <div className="absolute right-[10%] top-[16%] h-64 w-64 rounded-full bg-[#D8EDF6]/20 blur-3xl" />
            <div className="absolute right-[16%] bottom-[18%] h-56 w-56 rounded-full bg-[#F7E1EA]/22 blur-3xl" />
          </div>

          {/* Huge changing words */}
          <motion.div
            style={{ opacity: word1Opacity }}
            className="pointer-events-none absolute left-[4%] top-[8%] font-sans text-[10rem] font-black uppercase tracking-[-0.08em] text-sp-deep-brown"
          >
            GUIDE
          </motion.div>

          <motion.div
            style={{ opacity: word2Opacity }}
            className="pointer-events-none absolute left-[4%] top-[8%] font-sans text-[9.5rem] font-black uppercase tracking-[-0.08em] text-sp-deep-brown"
          >
            BUILD
          </motion.div>

          <motion.div
            style={{ opacity: word3Opacity }}
            className="pointer-events-none absolute left-[3%] top-[8%] font-sans text-[8.6rem] font-black uppercase tracking-[-0.08em] text-sp-deep-brown"
          >
            TRANSFORM
          </motion.div>

          {/* Header offset space so fixed nav doesn't visually crush it */}
          <div className="mx-auto grid h-full max-w-7xl grid-cols-[0.88fr_1.12fr] gap-10 px-8 pb-10 pt-28">
            {/* LEFT SIDE */}
            <motion.div
              style={{ y: leftBlockY }}
              className="relative z-10 flex min-h-full flex-col justify-between"
            >
              <div>
                <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-sp-hot-pink">
                  Programs
                </p>

                <h2 className="max-w-[650px] font-serif text-[5.5rem] leading-[0.92] tracking-[-0.06em] text-sp-deep-brown">
                  Your path to
                  <span className="mt-3 block w-fit bg-[#DDF0D5] px-4 py-1 italic text-sp-hot-pink">
                    wellbeing
                  </span>
                </h2>

                <p className="mt-6 max-w-[600px] text-[1.55rem] leading-[1.65] text-sp-deep-brown/72">
                  Every journey is unique. Choose the level of support that fits
                  your life. Scroll to explore each pathway.
                </p>
              </div>

              {/* FILL THE WHITE SPACE */}
              <div className="space-y-6 pb-2">
                <div className="flex items-center gap-4">
                  <div className="inline-flex items-center gap-3 rounded-full border-2 border-sp-deep-brown/15 bg-white/75 px-5 py-3 text-sm font-black uppercase tracking-[0.2em] text-sp-deep-brown">
                    <span>Scroll</span>
                    <span className="h-2.5 w-2.5 rounded-full bg-sp-hot-pink" />
                    <span>Reveal</span>
                  </div>

                  <motion.div
                    style={{ y: badgeY, rotate: badgeRotate }}
                    className="flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-sp-deep-brown bg-[#FFBD17] font-serif text-xl italic text-sp-deep-brown shadow-[6px_6px_0_0_rgba(0,0,0,0.10)]"
                  >
                    3
                  </motion.div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {programs.map((program) => (
                    <div
                      key={program.id}
                      className={cn(
                        "rounded-[1.4rem] border-2 border-sp-deep-brown/10 p-4 shadow-[0_6px_20px_rgba(0,0,0,0.03)]",
                        program.accent
                      )}
                    >
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-sp-hot-pink">
                        {program.step}
                      </p>
                      <p className="mt-2 font-serif text-[1.2rem] leading-tight text-sp-deep-brown">
                        {program.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE SCENE */}
            <div className="relative flex min-h-full items-center justify-center">
              {/* faint stack behind active card */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="absolute h-[75%] w-[84%] rounded-[2.2rem] border-2 border-sp-deep-brown/7 bg-white/20 backdrop-blur-[1px]" />
                <div className="absolute translate-x-5 translate-y-5 h-[74%] w-[83%] rounded-[2.2rem] border-2 border-sp-deep-brown/5 bg-white/12" />
              </div>

              {/* scene 1 */}
              <motion.div
                style={{ opacity: scene1Opacity, y: scene1Y, scale: scene1Scale }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <ProgramCard program={programs[0]} />
              </motion.div>

              {/* scene 2 */}
              <motion.div
                style={{ opacity: scene2Opacity, y: scene2Y, scale: scene2Scale }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <ProgramCard program={programs[1]} />
              </motion.div>

              {/* scene 3 */}
              <motion.div
                style={{ opacity: scene3Opacity, y: scene3Y, scale: scene3Scale }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <ProgramCard program={programs[2]} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE / TABLET */}
      <section className="bg-sp-cream px-4 py-16 xl:hidden">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-sp-hot-pink">
            Programs
          </p>

          <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.05em] text-sp-deep-brown sm:text-6xl">
            Your path to
            <span className="mt-3 block w-fit bg-[#DDF0D5] px-3 py-1 italic text-sp-hot-pink">
              wellbeing
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-sp-deep-brown/72">
            Every journey is unique. Choose the level of support that fits your
            life.
          </p>

          <div className="mt-10 space-y-6">
            {programs.map((program) => (
              <div
                key={program.id}
                className="overflow-hidden rounded-[2rem] border-[3px] border-sp-deep-brown bg-white shadow-[8px_8px_0_0_rgba(0,0,0,0.1)]"
              >
                <div className="relative h-[260px]">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>

                <div className={cn("p-6", program.accent)}>
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-sp-hot-pink">
                      {program.eyebrow}
                    </p>
                    <span className="font-serif text-xl text-sp-deep-brown/40">
                      {program.step}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl text-sp-deep-brown">
                    {program.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-sp-deep-brown/75">
                    {program.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between gap-3">
                    <span className="rounded-full border-2 border-sp-deep-brown bg-white/75 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-sp-deep-brown">
                      {program.chip}
                    </span>

                    <a
                      href="#contact"
                      className="rounded-full bg-sp-hot-pink px-5 py-3 text-sm font-black uppercase tracking-[0.08em] text-white"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function ProgramCard({ program }: { program: (typeof programs)[number] }) {
  return (
    <div className="grid w-full max-w-[980px] overflow-hidden rounded-[2.2rem] border-[3px] border-sp-deep-brown bg-white shadow-[12px_12px_0_0_rgba(0,0,0,0.12)] xl:grid-cols-[1fr_0.92fr]">
      <div className="relative min-h-[420px] xl:min-h-[620px]">
        <Image
          src={program.image}
          alt={program.title}
          fill
          sizes="(max-width: 1280px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/8 via-transparent to-transparent" />
      </div>

      <div className={cn("flex flex-col justify-between p-8 xl:p-10", program.accent)}>
        <div>
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sp-hot-pink">
              {program.eyebrow}
            </p>

            <span className="font-serif text-2xl text-sp-deep-brown/40">
              {program.step}
            </span>
          </div>

          <h3 className="font-serif text-5xl leading-[0.96] tracking-[-0.05em] text-sp-deep-brown">
            {program.title}
          </h3>

          <p className="mt-6 text-xl leading-9 text-sp-deep-brown/78">
            {program.description}
          </p>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4">
          <span className="inline-flex rounded-full border-2 border-sp-deep-brown bg-white/75 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-sp-deep-brown">
            {program.chip}
          </span>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-sp-hot-pink px-7 py-3 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[0_8px_24px_rgba(255,0,142,0.22)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  )
}
