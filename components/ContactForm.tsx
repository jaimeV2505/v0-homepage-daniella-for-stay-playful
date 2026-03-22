"use client"

import Link from "next/link"
import { Instagram, Mail, MapPin } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const footerLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Method", href: "#method" },
  { label: "Stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
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
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -10])
  const stickerRotate = useTransform(scrollYProgress, [0, 1], [-4, 3])

  return (
    <footer
      ref={ref}
      className="relative isolate mt-0 overflow-hidden border-t-[3px] border-[#2B1A16] bg-[#FFABFF]"
      style={{ marginTop: 0 }}
    >
      {/* BACKGROUND */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[#D9A3E7]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,0,142,0.12),transparent_26%),radial-gradient(circle_at_78%_14%,rgba(255,189,23,0.13),transparent_22%),radial-gradient(circle_at_50%_75%,rgba(0,226,255,0.11),transparent_22%),radial-gradient(circle_at_62%_42%,rgba(255,101,255,0.10),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(43,26,22,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(43,26,22,0.18)_1px,transparent_1px)] [background-size:64px_64px]" />
      </motion.div>

      {/* TOP HAIRLINE */}
      <div className="relative z-10 h-10 border-b-[3px] border-[#2B1A16] bg-[#EEDCFA]" />

      {/* MAIN AREA */}
      <div className="relative z-10 mx-auto max-w-[1720px] px-4 pb-0 pt-8 sm:px-6 lg:px-8 lg:pt-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr_310px] lg:items-start">
          {/* LEFT NAV */}
          <div className="order-2 lg:order-1">
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block font-sans text-[1.55rem] font-black uppercase leading-none tracking-[-0.03em] text-[#FFF8F0] transition-all duration-200 hover:translate-x-1 hover:text-[#FFBD17]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* CENTER WORDMARK */}
          <div className="order-1 flex min-h-[230px] items-end justify-center overflow-hidden lg:order-2 lg:min-h-[320px]">
            <div className="pointer-events-none w-full text-center leading-none">
              <motion.h2
                style={{ y: stayY }}
                className="font-serif text-[4.2rem] tracking-[-0.065em] text-[#FFF6EA] sm:text-[5.6rem] md:text-[6.4rem] lg:text-[7rem] xl:text-[7.8rem]"
              >
                STAY
              </motion.h2>

              <motion.h2
                style={{ y: playfulY }}
                className="-mt-2 font-serif text-[5.9rem] tracking-[-0.085em] text-[#FFF6EA] sm:-mt-3 sm:text-[7.7rem] md:text-[9rem] lg:-mt-4 lg:text-[10rem] xl:text-[10.8rem]"
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
            <div className="rounded-[30px] border-[3px] border-[#2B1A16] bg-[#FFF7EE] px-6 py-5 shadow-[10px_10px_0_0_rgba(43,26,22,0.16)]">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-[#FF008E]">
                Stay Connected
              </p>

              <div className="space-y-3 text-[#2B1A16]">
                <a
                  href="mailto:hello@stayplayful.com"
                  className="flex items-center gap-3 text-[1.05rem] font-medium transition-opacity hover:opacity-75"
                >
                  <Mail className="h-4 w-4" />
                  hello@stayplayful.com
                </a>

                <div className="flex items-center gap-3 text-[1.05rem] font-medium">
                  <MapPin className="h-4 w-4" />
                  Stockholm, Sweden
                </div>
              </div>

              <div className="mt-5 flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-[#2B1A16] bg-[#FFABFF] text-[#2B1A16] shadow-[4px_4px_0_0_rgba(43,26,22,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FF65FF]"
                >
                  <Instagram className="h-6 w-6" />
                </a>

                <a
                  href="mailto:hello@stayplayful.com"
                  aria-label="Email"
                  className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-[#2B1A16] bg-[#FFABFF] text-[#2B1A16] shadow-[4px_4px_0_0_rgba(43,26,22,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FF65FF]"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 mt-2 border-t border-[#FFF6EA]/35">
        <div className="mx-auto flex max-w-[1720px] flex-col items-center justify-between gap-3 px-4 py-4 sm:px-6 md:flex-row lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.08em] text-[#FFF6EA]/92">
            © {new Date().getFullYear()} Stay Playful
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-black uppercase tracking-[0.08em] text-[#FFF6EA]/92">
            <Link href="#" className="transition-opacity hover:opacity-70">
              Privacy
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link href="#" className="transition-opacity hover:opacity-70">
              Terms
            </Link>
            <span className="hidden sm:inline">|</span>
            <a href="#contact" className="transition-opacity hover:opacity-70">
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>

      {/* FLOATING CHAT TAG */}
      <motion.a
        href="#contact"
        style={{ rotate: stickerRotate }}
        className="fixed right-3 top-1/2 z-[60] hidden -translate-y-1/2 rounded-[18px] border-[3px] border-[#2B1A16] bg-[#F8E9F1] px-5 py-8 text-center shadow-[6px_6px_0_0_rgba(43,26,22,0.14)] xl:flex"
      >
        <span className="writing-mode-vertical rotate-180 text-sm font-black uppercase tracking-[0.18em] text-[#2B1A16] [writing-mode:vertical-rl]">
          Let&apos;s Chat
        </span>
      </motion.a>
    </footer>
  )
}