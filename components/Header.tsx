"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Sparkles, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { label: "Programs", href: "#programs" },
  { label: "Method", href: "#method" },
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
          <span>Där din vision blir något oförglömligt</span>
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
          <div className="grid h-[86px] grid-cols-[1fr_auto] items-center gap-4 lg:h-[110px] lg:grid-cols-[1.15fr_auto_1fr]">
            {/* LEFT SIDE DESKTOP */}
            <div className="hidden items-center gap-10 lg:flex xl:gap-12">
              <Link
                href="/"
                className="flex shrink-0 items-center gap-3 transition-transform duration-200 hover:scale-[1.01]"
                aria-label="Stay Playful Home"
              >
                <div className="relative h-[72px] w-[72px] shrink-0 xl:h-[90px] xl:w-[90px]">
                  <Image
                    src="/logo1.png"
                    alt="Stay Playful logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>

              <nav className="flex items-center gap-10 xl:gap-12">
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
            </div>

            {/* BRAND / MOBILE LEFT */}
            <div className="flex items-center justify-start gap-3 lg:justify-center">
              <Link
                href="/"
                className="flex items-center gap-3 lg:hidden"
                aria-label="Stay Playful Home"
              >
                <div className="relative h-[50px] w-[50px] shrink-0">
                  <Image
                    src="/logo1.png"
                    alt="Stay Playful logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>

              <Link
                href="/"
                className="text-left font-serif text-[2.6rem] font-black uppercase leading-[0.86] tracking-[-0.06em] text-black transition-transform duration-200 hover:scale-[1.01] sm:text-[3rem] lg:text-center lg:text-[4.2rem]"
              >
                Stay
                <br className="lg:hidden" />
                <span className="lg:ml-2">Playful</span>
              </Link>
            </div>

            {/* RIGHT ACTIONS DESKTOP */}
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
                    className="h-12 w-12 rounded-none border-[3px] border-black bg-[#F6F1E7] shadow-[4px_4px_0_0_rgba(227,72,139,1)] transition-transform duration-200 hover:bg-[#F6F1E7] hover:-translate-y-0.5"
                  >
                    <Menu className="h-5 w-5 text-black" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="w-full max-w-sm border-l-[4px] border-black bg-[#DDBAF0] p-0"
                >
                  <SheetHeader className="sr-only">
                    <SheetTitle>Mobile navigation</SheetTitle>
                  </SheetHeader>

                  <div className="flex h-full flex-col">
                    <div className="flex items-start justify-between border-b-[3px] border-black bg-[#F6F1E7] px-6 py-6">
                      <div className="flex items-start gap-3">
                        <div className="relative mt-1 h-[48px] w-[48px] shrink-0">
                          <Image
                            src="/logo1.png"
                            alt="Stay Playful logo"
                            fill
                            className="object-contain"
                            priority
                          />
                        </div>

                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.18em] text-black/70">
                            Stay Playful
                          </p>
                          <h2 className="mt-3 font-serif text-[2.5rem] font-black uppercase leading-[0.9] tracking-[-0.06em] text-black">
                            Menu
                          </h2>
                        </div>
                      </div>

                      <SheetClose asChild>
                        <button
                          type="button"
                          className="inline-flex h-12 w-12 items-center justify-center border-[3px] border-black bg-white shadow-[4px_4px_0_0_rgba(227,72,139,1)] transition-transform duration-200 hover:-translate-y-0.5"
                          aria-label="Close menu"
                        >
                          <X className="h-5 w-5 text-black" />
                        </button>
                      </SheetClose>
                    </div>

                    <div className="flex flex-1 flex-col justify-between px-6 py-8">
                      <nav className="flex flex-col gap-4">
                        {navItems.map((item, index) => (
                          <SheetClose asChild key={item.href}>
                            <Link
                              href={item.href}
                              className={`border-[3px] border-black bg-white px-5 py-4 text-[1.3rem] font-black uppercase leading-none tracking-[-0.03em] text-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-transform duration-200 hover:-translate-y-0.5 ${index % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"
                                }`}
                            >
                              {item.label}
                            </Link>
                          </SheetClose>
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

                          <SheetClose asChild>
                            <Link
                              href="#method"
                              className="inline-flex h-12 w-12 items-center justify-center border-[3px] border-black bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
                              aria-label="Explore"
                            >
                              <Sparkles className="h-5 w-5 text-black" />
                            </Link>
                          </SheetClose>
                        </div>

                        <SheetClose asChild>
                          <Link
                            href="#contact"
                            className="inline-flex w-full items-center justify-center rounded-full border-[3px] border-black bg-[#E3488B] px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[8px_8px_0_0_rgba(0,128,80,1)]"
                          >
                            Book a Call
                          </Link>
                        </SheetClose>
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