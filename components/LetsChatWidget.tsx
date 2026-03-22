"use client"

import { useState, useEffect } from "react"

export function LetsChatWidget() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show after a short delay
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isVisible) return null

  return (
    <button
      onClick={handleClick}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex items-center justify-center w-20 h-20 bg-sp-pastel-pink border-2 border-sp-deep-brown rounded-lg shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      aria-label="Let's Chat - Contact Us"
    >
      <span className="font-serif text-sm font-bold text-sp-deep-brown writing-vertical rotate-180 inline-block">
        LET'S<br />CHAT
      </span>
    </button>
  )
}
