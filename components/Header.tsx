"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { label: "Programs", href: "#programs" },
  { label: "Method", href: "#method" },
  { label: "Stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Announcement Bar */}
      <div className="relative overflow-hidden border-b-[3px] border-black bg-[#FF008E] px-4 py-2.5 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="whitespace-nowrap text-center text-[2rem] font-black uppercase tracking-[-0.06em]">
            STAY PLAYFUL STAY PLAYFUL STAY PLAYFUL STAY PLAYFUL
          </div>
        </div>

        <div className="relative mx-auto flex max-w-[1600px] items-center justify-center gap-2 text-center text-sm font-black uppercase tracking-[0.12em] sm:gap-3">
          <span className="hidden sm:inline">
            Where your vision becomes something unforgettable
          </span>
          <span className="sm:hidden">Booking Spring 2026</span>
          <span className="opacity-70">•</span>
          <Link
            href="#contact"
            className="underline underline-offset-4 transition-opacity hover:opacity-80"
          >
            Get in touch
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 border-b-[3px] border-black transition-all duration-300 ${isScrolled
            ? "bg-[#F6F1E7]/92 backdrop-blur-md shadow-[0_10px_0_0_rgba(0,0,0,0.04)]"
            : "bg-[#F6F1E7]"
          }`}
      >
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="grid h-[84px] grid-cols-[1fr_auto] items-center gap-4 sm:h-[96px] lg:h-[104px]">
            {/* Desktop Navigation */}
            <nav className="hidden items-center justify-center gap-8 md:flex lg:gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-black uppercase tracking-[0.14em] text-black transition-colors hover:text-[#FF008E]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden items-center justify-end gap-3 md:flex lg:gap-4">
              <Link
                href="https://my.practicebetter.io/#/signin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-[3px] border-black bg-white px-4 py-2.5 text-xs font-black uppercase tracking-[0.12em] text-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Client Login
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center border-[3px] border-black bg-[#FFBD17] px-5 py-2.5 text-xs font-black uppercase tracking-[0.12em] text-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Book a Call
              </Link>
            </div>

            {/* Mobile Trigger */}
            <div className="flex justify-end md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 rounded-none border-[3px] border-black bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:bg-white"
                  >
                    <Menu className="h-5 w-5 text-black" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="w-full max-w-sm border-l-[4px] border-black bg-[#F6F1E7] p-0"
                >
                  <div className="flex h-full flex-col">
                    {/* Top */}
                    <div className="border-b-[3px] border-black bg-[#FFABFF] px-6 py-6">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-black/70">
                        Stay Playful
                      </p>
                      <h2 className="mt-3 text-[2.6rem] font-black uppercase leading-[0.9] tracking-[-0.07em] text-black">
                        MENU
                      </h2>
                    </div>

                    {/* Links */}
                    <div className="flex flex-1 flex-col justify-between px-6 py-8">
                      <nav className="flex flex-col gap-4">
                        {navItems.map((item, index) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`border-[3px] border-black bg-white px-5 py-4 text-[1.35rem] font-black uppercase leading-none tracking-[-0.03em] text-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-transform duration-200 hover:-translate-y-0.5 ${index % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"
                              }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </nav>

                      <div className="mt-10 space-y-4 border-t-[3px] border-black pt-6">
                        <Link
                          href="https://my.practicebetter.io/#/signin"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full items-center justify-center border-[3px] border-black bg-white px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-black shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
                        >
                          Client Login
                        </Link>

                        <Link
                          href="#contact"
                          onClick={() => setIsOpen(false)}
                          className="inline-flex w-full items-center justify-center border-[3px] border-black bg-[#FF008E] px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[8px_8px_0_0_rgba(0,0,0,1)]"
                        >
                          Book a Call
                        </Link>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}