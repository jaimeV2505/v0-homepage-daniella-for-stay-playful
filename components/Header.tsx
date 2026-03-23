"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Instagram, Sparkles, Menu } from "lucide-react"
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
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="relative z-[60] border-b-[3px] border-black bg-[#E3488B] px-4 py-3 text-white">
        <div className="mx-auto flex max-w-[1720px] items-center justify-center text-center text-sm font-semibold sm:text-[15px]">
          <span className="hidden sm:inline">
            Where your vision becomes something unforgettable
          </span>
          <span className="sm:hidden">Booking Spring 2026</span>

          <span className="mx-3 opacity-90">|</span>

          <Link
            href="#contact"
            className="underline underline-offset-4 transition-opacity hover:opacity-80"
          >
            Get in touch
          </Link>
        </div>
      </div>

      {/* MAIN HEADER */}
      <header
        className={`sticky top-0 z-50 border-b-[3px] border-black transition-all duration-300 ${isScrolled ? "bg-[#DDBAF0]/95 backdrop-blur-md" : "bg-[#DDBAF0]"
          }`}
      >
        <div className="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8">
          <div className="grid h-[88px] grid-cols-[1fr_auto_1fr] items-center gap-4 lg:h-[110px]">
            {/* LEFT NAV */}
            <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-black uppercase tracking-[0.06em] text-black transition-colors hover:text-[#FF008E]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CENTER BRAND */}
            <div className="flex items-center justify-center">
              <Link
                href="/"
                className="text-center font-serif text-[2.5rem] font-black uppercase leading-none tracking-[-0.06em] text-black transition-transform duration-200 hover:scale-[1.01] sm:text-[3rem] lg:text-[4.2rem]"
              >
                Stay Playful
              </Link>
            </div>

            {/* RIGHT ACTIONS */}
            <div className="hidden items-center justify-end gap-4 lg:flex xl:gap-5">
              <Link
                href="https://my.practicebetter.io/#/signin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-medium text-black/70 transition-colors hover:text-black"
              >
                Client Login
              </Link>

              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-black bg-[#F6F1E7] transition-transform duration-200 hover:-translate-y-0.5"
              >
                <Instagram className="h-5 w-5 text-black" />
              </Link>

              <Link
                href="#method"
                aria-label="Explore"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-black bg-[#F6F1E7] transition-transform duration-200 hover:-translate-y-0.5"
              >
                <Sparkles className="h-5 w-5 text-black" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border-[3px] border-black bg-[#E3488B] px-8 py-3 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[6px_6px_0_0_rgba(0,128,80,1)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Book a Call
              </Link>
            </div>

            {/* MOBILE TRIGGER */}
            <div className="flex justify-end lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 rounded-none border-[3px] border-black bg-[#F6F1E7] shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:bg-[#F6F1E7]"
                  >
                    <Menu className="h-5 w-5 text-black" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="w-full max-w-sm border-l-[4px] border-black bg-[#DDBAF0] p-0"
                >
                  <div className="flex h-full flex-col">
                    {/* MOBILE TOP */}
                    <div className="border-b-[3px] border-black bg-[#F6F1E7] px-6 py-6">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-black/70">
                        Stay Playful
                      </p>
                      <h2 className="mt-3 font-serif text-[2.5rem] font-black uppercase leading-[0.9] tracking-[-0.06em] text-black">
                        Menu
                      </h2>
                    </div>

                    {/* MOBILE LINKS */}
                    <div className="flex flex-1 flex-col justify-between px-6 py-8">
                      <nav className="flex flex-col gap-4">
                        {navItems.map((item, index) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`border-[3px] border-black bg-white px-5 py-4 text-[1.3rem] font-black uppercase leading-none tracking-[-0.03em] text-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-transform duration-200 hover:-translate-y-0.5 ${index % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"
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

                        <div className="flex gap-3">
                          <Link
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-12 w-12 items-center justify-center border-[3px] border-black bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
                            aria-label="Instagram"
                          >
                            <Instagram className="h-5 w-5 text-black" />
                          </Link>

                          <Link
                            href="#method"
                            onClick={() => setIsOpen(false)}
                            className="inline-flex h-12 w-12 items-center justify-center border-[3px] border-black bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
                            aria-label="Explore"
                          >
                            <Sparkles className="h-5 w-5 text-black" />
                          </Link>
                        </div>

                        <Link
                          href="#contact"
                          onClick={() => setIsOpen(false)}
                          className="inline-flex w-full items-center justify-center rounded-full border-[3px] border-black bg-[#E3488B] px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[8px_8px_0_0_rgba(0,128,80,1)]"
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