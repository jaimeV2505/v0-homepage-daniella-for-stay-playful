"use client"

import Link from "next/link"
import { Instagram, Mail } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const footerLinks = [
  { label: "Program", href: "#programs" },
  { label: "Metod", href: "#method" },
  { label: "Berättelser", href: "#stories" },
  { label: "Kontakt", href: "#contact" },
]

export function Footer() {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -18])
  const stayY = useTransform(scrollYProgress, [0, 1], [0, -8])
  const playfulY = useTransform(scrollYProgress, [0, 1], [0, -18])
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -6])
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.16, 0.32])

  return (
    <footer
      ref={ref}
      className="relative mb-0 overflow-hidden border-t-[3px] border-sp-deep-brown bg-[#CFA6E2] pb-0"
    >
      {/* BACKGROUND */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-[linear-gradient(180deg,#DDB8EB_0%,#CFA6E2_52%,#C89DDD_100%)]"
      />

      {/* GLOWS / ATMOSPHERE */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-12 top-10 h-40 w-40 rounded-full bg-[#FF008E] blur-3xl opacity-20" />
        <div className="absolute right-[10%] top-[8%] h-52 w-52 rounded-full bg-[#FFBD17] blur-3xl opacity-15" />
        <div className="absolute bottom-0 left-[30%] h-40 w-40 rounded-full bg-[#00E2FF] blur-3xl opacity-15" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-[1700px] px-4 pt-6 sm:px-6 lg:px-8 lg:pt-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr_330px] lg:items-start">
          {/* LEFT NAV */}
          <div className="order-2 lg:order-1">
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block font-sans text-[1.55rem] font-black uppercase leading-none tracking-[-0.03em] text-[#FFF6EE] transition-all duration-200 hover:translate-x-1 hover:opacity-80 sm:text-[1.85rem]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CENTER WORDMARK */}
          <div className="order-1 flex min-h-[180px] items-end justify-center overflow-hidden lg:order-2 lg:min-h-[250px]">
            <div className="w-full text-center leading-none">
              <motion.h2
                style={{ y: stayY }}
                className="font-serif text-[4rem] tracking-[-0.055em] text-[#FFF4EA] sm:text-[5.5rem] md:text-[6.25rem] lg:text-[6.5rem] xl:text-[7.2rem]"
              >
                STAY
              </motion.h2>

              <motion.h2
                style={{ y: playfulY }}
                className="font-serif text-[5rem] tracking-[-0.07em] text-[#FFF4EA] sm:text-[7rem] md:text-[8rem] lg:text-[8.75rem] xl:text-[9.8rem] -mt-2 sm:-mt-3 lg:-mt-4"
              >
                PLAYFUL
              </motion.h2>
            </div>
          </div>

          {/* RIGHT CONTACT CARD */}
          <motion.div
            style={{ y: cardY }}
            className="order-3 justify-self-start lg:justify-self-end"
          >
            <div className="rounded-[28px] border-[3px] border-sp-deep-brown bg-[#FDF3EA] px-5 py-4 shadow-[8px_8px_0_0_rgba(0,0,0,0.14)] transition-transform duration-300 hover:-translate-y-1">
              <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-sp-hot-pink">
                Håll kontakten
              </p>

              <p className="text-base font-medium text-sp-deep-brown">
                hello@stayplayful.com
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  href="https://instagram.com"
                  aria-label="Instagram"
                  className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-sp-deep-brown bg-[#FFABFF] text-sp-deep-brown transition-transform duration-200 hover:-translate-y-0.5 hover:scale-[1.03]"
                >
                  <Instagram className="h-5 w-5" />
                </a>

                <a
                  href="mailto:hello@stayplayful.com"
                  aria-label="E-post"
                  className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-sp-deep-brown bg-[#FFABFF] text-sp-deep-brown transition-transform duration-200 hover:-translate-y-0.5 hover:scale-[1.03]"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 border-t border-[#FFF4EA]/30">
        <div className="mx-auto flex max-w-[1700px] flex-col items-center justify-between gap-3 px-4 py-4 text-center sm:px-6 md:flex-row lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.06em] text-[#FFF4EA]/90">
            © {new Date().getFullYear()} Stay Playful
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold uppercase tracking-[0.08em] text-[#FFF4EA]/90">
            <a href="#contact" className="transition-opacity hover:opacity-70">
              Låt oss prata
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}