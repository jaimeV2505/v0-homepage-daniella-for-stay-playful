"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { MessageCircleHeart } from "lucide-react"
import { useLanguageSafe } from "@/lib/use-language"

export function LetsChatWidget() {
  const [isVisible, setIsVisible] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const { t } = useLanguageSafe()

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    const contactSection = document.getElementById("contact")
    if (!contactSection) return
    const y = contactSection.getBoundingClientRect().top + window.scrollY - 24
    window.scrollTo({ top: y, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={handleClick}
          aria-label={t("widget.label")}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 30, scale: 0.96 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0, scale: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 30, scale: 0.96 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="group fixed right-0 top-1/2 z-50 hidden -translate-y-1/2 lg:flex items-center justify-center h-[138px] w-[64px] rounded-l-[1.35rem] rounded-r-none border-[3px] border-[#2B1A16] border-r-0 bg-[#F7EAF6] shadow-[0_10px_25px_rgba(0,0,0,0.14)] transition-all duration-300 hover:w-[72px] hover:bg-[#FDEFF8] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FF008E]/20"
        >
          <span aria-hidden="true" className="absolute inset-0 -z-10 translate-x-0 translate-y-[6px] rounded-l-[1.35rem] border-[3px] border-[#2B1A16] border-r-0 bg-[#FFABFF]/35 transition-transform duration-300 group-hover:translate-y-[8px]" />
          <span aria-hidden="true" className="absolute -left-6 top-1/2 -z-20 h-24 w-24 -translate-y-1/2 rounded-full bg-[#FF008E]/12 blur-2xl opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
          <span aria-hidden="true" className="absolute -left-3 top-4 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#2B1A16] bg-[#FF008E] shadow-[3px_3px_0_rgba(0,0,0,0.14)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
            <MessageCircleHeart className="h-3.5 w-3.5 text-white" />
          </span>
          <span className="inline-flex select-none flex-col items-center justify-center font-serif text-[0.95rem] font-bold uppercase leading-none tracking-[0.08em] text-[#2B1A16] [writing-mode:vertical-rl] rotate-180">
            {t("widget.label")}
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
  const [isVisible, setIsVisible] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    const contactSection = document.getElementById("contact")
    if (!contactSection) return

    const y =
      contactSection.getBoundingClientRect().top + window.scrollY - 24

    window.scrollTo({
      top: y,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={handleClick}
          aria-label="Let's Chat - Go to contact section"
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, x: 30, scale: 0.96 }
          }
          animate={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 1, x: 0, scale: 1 }
          }
          exit={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, x: 30, scale: 0.96 }
          }
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="
            group fixed right-0 top-1/2 z-50 hidden -translate-y-1/2 lg:flex
            items-center justify-center
            h-[138px] w-[64px]
            rounded-l-[1.35rem] rounded-r-none
            border-[3px] border-[#2B1A16] border-r-0
            bg-[#F7EAF6]
            shadow-[0_10px_25px_rgba(0,0,0,0.14)]
            transition-all duration-300
            hover:w-[72px] hover:bg-[#FDEFF8]
            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FF008E]/20
          "
        >
          {/* Back plate / depth */}
          <span
            aria-hidden="true"
            className="
              absolute inset-0 -z-10 translate-x-0 translate-y-[6px]
              rounded-l-[1.35rem] border-[3px] border-[#2B1A16] border-r-0
              bg-[#FFABFF]/35
              transition-transform duration-300
              group-hover:translate-y-[8px]
            "
          />

          {/* Soft glow */}
          <span
            aria-hidden="true"
            className="
              absolute -left-6 top-1/2 -z-20 h-24 w-24 -translate-y-1/2
              rounded-full bg-[#FF008E]/12 blur-2xl
              opacity-80 transition-opacity duration-300
              group-hover:opacity-100
            "
          />

          {/* Small floating accent */}
          <span
            aria-hidden="true"
            className="
              absolute -left-3 top-4 flex h-6 w-6 items-center justify-center
              rounded-full border-2 border-[#2B1A16]
              bg-[#FF008E]
              shadow-[3px_3px_0_rgba(0,0,0,0.14)]
              transition-transform duration-300
              group-hover:-translate-y-0.5 group-hover:scale-105
            "
          >
            <MessageCircleHeart className="h-3.5 w-3.5 text-white" />
          </span>

          {/* Text */}
          <span
            className="
              inline-flex select-none flex-col items-center justify-center
              font-serif text-[0.95rem] font-bold uppercase leading-none
              tracking-[0.08em] text-[#2B1A16]
              [writing-mode:vertical-rl]
              rotate-180
            "
          >
            SKA VI CHATTA?


          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
