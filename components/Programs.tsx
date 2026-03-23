"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { CalendarDays, MessageCircle, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    id: "01",
    eyebrow: "Personal Support",
    title: "1:1 Coaching",
    description:
      "Private guidance tailored to your lifestyle, goals, and relationship with food, body, and everyday wellbeing.",
    image:
      "https://images.pexels.com/photos/30773022/pexels-photo-30773022.jpeg?auto=compress&cs=tinysrgb&w=1200",
    accent: "bg-[#FFABFF]",
    chip: "Tailored support",
  },
  {
    id: "02",
    eyebrow: "Focused Reset",
    title: "Single Session",
    description:
      "A focused starting point to bring clarity, direction, and immediate support around one specific challenge or question.",
    image:
      "https://images.pexels.com/photos/7561675/pexels-photo-7561675.jpeg?auto=compress&cs=tinysrgb&w=1200",
    accent: "bg-[#00E2FF]",
    chip: "Quick clarity",
  },
  {
    id: "03",
    eyebrow: "Momentum Builder",
    title: "8-Week Program",
    description:
      "A structured experience designed to help you build supportive habits and create progress that feels realistic and steady.",
    image:
      "https://images.pexels.com/photos/5311550/pexels-photo-5311550.jpeg?auto=compress&cs=tinysrgb&w=1200",
    accent: "bg-[#FFBD17]",
    chip: "Build momentum",
  },
  {
    id: "04",
    eyebrow: "Deep Support",
    title: "12-Week Program",
    description:
      "Longer-term guidance for deeper shifts, more accountability, and the space to build lasting change with real support.",
    image:
      "https://images.pexels.com/photos/4498151/pexels-photo-4498151.jpeg?auto=compress&cs=tinysrgb&w=1200",
    accent: "bg-[#FFD6F4]",
    chip: "Long-term growth",
  },
]

export function Programs() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const desktopCardsY = useTransform(scrollYProgress, [0, 1], [0, -520])
  const leftY = useTransform(scrollYProgress, [0, 1], [0, -18])
  const bgWordY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const bgWordOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    [0.1, 0.14, 0.2]
  )

  return (
    <>
      {/* DESKTOP */}
      <section
        id="programs"
        ref={ref}
        className="relative hidden h-[220vh] overflow-hidden bg-[#F6F1E7] xl:block"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-[#F6F1E7]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#FFF9F0_0%,#F6F1E7_48%,#EFE7D8_100%)]" />

          <motion.div
            style={{ y: bgWordY, opacity: bgWordOpacity }}
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute left-[2%] top-[4%] font-sans text-[7rem] font-black uppercase leading-[0.84] tracking-[-0.08em] text-[#E8E0CF]">
              <div>STAY PLAYFUL STAY PLAYFUL</div>
              <div>STAY PLAYFUL STAY PLAYFUL</div>
              <div>STAY PLAYFUL STAY PLAYFUL</div>
            </div>
          </motion.div>

          <div className="absolute left-[4%] top-[14%] h-64 w-64 rounded-full bg-[#FFABFF]/16 blur-3xl" />
          <div className="absolute left-[22%] bottom-[10%] h-64 w-64 rounded-full bg-[#00E2FF]/10 blur-3xl" />
          <div className="absolute right-[10%] top-[18%] h-72 w-72 rounded-full bg-[#FFBD17]/12 blur-3xl" />

          <div className="mx-auto grid h-full max-w-[1580px] grid-cols-[0.9fr_1.05fr] items-center gap-12 px-8 py-20">
            {/* LEFT */}
            <motion.div
              style={{ y: leftY }}
              className="relative z-10 flex h-full flex-col justify-center"
            >
              <div className="max-w-[660px]">
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#FF008E]">
                  Services
                </p>

                <h2 className="mt-5 font-sans text-[4.6rem] font-black uppercase leading-[0.9] tracking-[-0.09em] text-black 2xl:text-[5rem]">
                  REWRITE
                  <br />
                  YOUR
                  <br />
                  SITUATION.
                  <br />
                  CREATE
                  <br />
                  A NEW ONE.
                </h2>

                <p className="mt-7 max-w-[580px] text-[1.22rem] leading-[1.7] text-black/72">
                  Four different ways to start — designed as strong foundations,
                  then shaped around you. Flexible, personal, and built to work
                  with real life.
                </p>
              </div>

              <div className="mt-10 max-w-[640px] space-y-5">
                <div className="inline-flex items-center gap-3 border-[3px] border-black bg-[#FFBD17] px-5 py-3 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
                  <span className="text-sm font-black uppercase tracking-[0.16em] text-black">
                    It’s simple:
                  </span>
                  <span className="text-sm font-black uppercase tracking-[0.12em] text-black/80">
                    4 core services • customized for you
                  </span>
                </div>

                <p className="max-w-[560px] text-[1rem] leading-8 text-black/68">
                  Start with the offer that fits best right now. We’ll adapt the
                  pace, structure, and support level so it actually fits your
                  needs.
                </p>

                <div className="flex items-center gap-5">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center border-[3px] border-black bg-[#FF008E] px-7 py-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-transform duration-200 hover:-translate-y-1"
                  >
                    Book your service
                  </a>

                  <PlayfulCTACluster />
                </div>

                <p className="text-sm font-black uppercase tracking-[0.14em] text-black/55">
                  Details are coming.
                </p>
              </div>
            </motion.div>

            {/* RIGHT */}
            <div className="relative flex h-full items-center justify-center">
              <div className="relative h-[72vh] w-full max-w-[760px] overflow-hidden rounded-[34px] border-[4px] border-black bg-white shadow-[14px_14px_0_0_rgba(0,0,0,1)]">
                <div className="flex items-center justify-between border-b-[4px] border-black bg-[#FFABFF] px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full border-[2px] border-black bg-white" />
                    <span className="h-4 w-4 rounded-full border-[2px] border-black bg-[#FFBD17]" />
                    <span className="h-4 w-4 rounded-full border-[2px] border-black bg-[#00E2FF]" />
                  </div>

                  <p className="text-xs font-black uppercase tracking-[0.18em] text-black">
                    Rolling offers
                  </p>
                </div>

                <motion.div
                  style={{ y: desktopCardsY }}
                  className="flex flex-col"
                >
                  {services.map((service) => (
                    <DesktopServiceCard key={service.id} service={service} />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE / TABLET */}
      <section className="bg-[#F6F1E7] px-4 py-16 xl:hidden">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#FF008E]">
            Services
          </p>

          <h2 className="mt-5 font-sans text-[3.1rem] font-black uppercase leading-[0.9] tracking-[-0.08em] text-black sm:text-[4.6rem]">
            REWRITE
            <br />
            YOUR
            <br />
            SITUATION.
            <br />
            CREATE
            <br />
            A NEW ONE.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/72">
            Four different ways to start — built as strong foundations, then
            customized around you, your pace, and the kind of support you need.
          </p>

          <div className="mt-6 inline-flex border-[3px] border-black bg-[#FFBD17] px-4 py-3 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
            <span className="text-sm font-black uppercase tracking-[0.12em] text-black">
              It’s simple: 4 core services, customized for you.
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center border-[3px] border-black bg-[#FF008E] px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[8px_8px_0_0_rgba(0,0,0,1)]"
            >
              Book your service
            </a>

            <div className="flex gap-3">
              <a
                href="#programs"
                className="inline-flex h-12 w-12 items-center justify-center border-[3px] border-black bg-[#FFBD17] shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
                aria-label="View offers"
              >
                <Sparkles className="h-5 w-5 text-black" />
              </a>

              <a
                href="#contact"
                className="inline-flex h-12 w-12 items-center justify-center border-[3px] border-black bg-[#FF7F00] shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
                aria-label="Book now"
              >
                <CalendarDays className="h-5 w-5 text-white" />
              </a>

              <a
                href="#contact"
                className="inline-flex h-12 w-12 items-center justify-center border-[3px] border-black bg-[#00E2FF] shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
                aria-label="Ask a question"
              >
                <MessageCircle className="h-5 w-5 text-black" />
              </a>
            </div>
          </div>

          <div className="mt-10 space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="overflow-hidden rounded-[28px] border-[4px] border-black bg-white shadow-[10px_10px_0_0_rgba(0,0,0,1)]"
              >
                <div className="relative h-[260px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>

                <div className={cn("p-6", service.accent)}>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#FF008E]">
                      {service.eyebrow}
                    </p>
                    <span className="text-lg font-black uppercase tracking-[0.08em] text-black/45">
                      {service.id}
                    </span>
                  </div>

                  <h3 className="mt-4 font-sans text-[2.1rem] font-black uppercase leading-[0.92] tracking-[-0.06em] text-black">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-black/76">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between gap-3">
                    <span className="border-[3px] border-black bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.15em] text-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                      {service.chip}
                    </span>

                    <a
                      href="#contact"
                      className="border-[3px] border-black bg-[#FF008E] px-5 py-3 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
                    >
                      Book now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-sm font-black uppercase tracking-[0.14em] text-black/55">
            Details are coming.
          </p>
        </div>
      </section>
    </>
  )
}

function DesktopServiceCard({
  service,
}: {
  service: (typeof services)[number]
}) {
  return (
    <article className="grid min-h-[72vh] grid-cols-[0.95fr_1.05fr] border-b-[4px] border-black last:border-b-0">
      <div className="relative min-h-full">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 1280px) 100vw, 40vw"
          className="object-cover"
        />
        <div className="absolute left-5 top-5 border-[3px] border-black bg-white px-4 py-2 shadow-[5px_5px_0_0_rgba(0,0,0,1)]">
          <span className="text-[11px] font-black uppercase tracking-[0.14em] text-black">
            {service.id}
          </span>
        </div>
      </div>

      <div className={cn("flex flex-col justify-between p-8 xl:p-9", service.accent)}>
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#FF008E]">
            {service.eyebrow}
          </p>

          <h3 className="mt-5 font-sans text-[3.4rem] font-black uppercase leading-[0.9] tracking-[-0.08em] text-black xl:text-[3.8rem]">
            {service.title}
          </h3>

          <p className="mt-6 max-w-[460px] text-[1.06rem] leading-8 text-black/78">
            {service.description}
          </p>
        </div>

        <div className="mt-8 flex items-end justify-between gap-6">
          <div className="space-y-4">
            <span className="inline-flex border-[3px] border-black bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-black shadow-[5px_5px_0_0_rgba(0,0,0,1)]">
              {service.chip}
            </span>

            <p className="max-w-[320px] text-sm leading-7 text-black/65">
              A flexible starting point that can be shaped around your needs.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center border-[3px] border-black bg-[#FF008E] px-7 py-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-transform duration-200 hover:-translate-y-1"
          >
            Book now
          </a>
        </div>
      </div>
    </article>
  )
}

function PlayfulCTACluster() {
  return (
    <div className="group relative hidden h-20 w-[13rem] items-center xl:flex">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[4.8rem] w-[4.8rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/5 blur-xl" />

      <a
        href="#programs"
        aria-label="View offers"
        className="absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 -rotate-[8deg] items-center justify-center border-[3px] border-black bg-[#FFBD17] shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all duration-300 group-hover:-translate-x-[175%] group-hover:-translate-y-1/2 group-hover:-rotate-[85deg] hover:scale-105"
      >
        <Sparkles className="h-6 w-6 text-black transition-transform duration-300 group-hover:rotate-12" />
      </a>

      <a
        href="#contact"
        aria-label="Book now"
        className="absolute left-1/2 top-1/2 z-30 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 rotate-[10deg] items-center justify-center border-[3px] border-black bg-[#FF7F00] shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all duration-300 group-hover:-translate-y-[58%] group-hover:rotate-0 hover:scale-105"
      >
        <CalendarDays className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110" />
      </a>

      <a
        href="#contact"
        aria-label="Ask a question"
        className="absolute left-1/2 top-1/2 z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 rotate-[8deg] items-center justify-center border-[3px] border-black bg-[#00E2FF] shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all duration-300 group-hover:translate-x-[75%] group-hover:-translate-y-1/2 group-hover:rotate-[85deg] hover:scale-105"
      >
        <MessageCircle className="h-6 w-6 text-black transition-transform duration-300 group-hover:scale-110" />
      </a>
    </div>
  )
}