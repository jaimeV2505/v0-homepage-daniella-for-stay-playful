"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
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
      {/* TOP BAR */}
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
          <div className="grid h-[84px] grid-cols-[1fr_auto] items-center gap-4 lg:h-[112px] lg:grid-cols-[1fr_auto_1fr]">
            {/* LEFT DESKTOP */}
            <div className="hidden min-w-0 items-center gap-6 lg:flex xl:gap-8">
              <Link
                href="/"
                className="group flex shrink-0 items-center"
                aria-label="Stay Playful Home"
              >
                <div className="relative h-[80px] w-[140px] shrink-0 xl:h-[96px] xl:w-[160px]">
                  <Image
                    src="/logo1.png"
                    alt="Stay Playful logo"
                    fill
                    priority
                    className="object-contain object-left transition-transform duration-200 group-hover:scale-[1.03]"
                  />
                </div>
              </Link>

              <nav className="flex min-w-0 items-center gap-6 xl:gap-8">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-[15px] font-black uppercase tracking-[0.08em] transition-colors hover:text-[#FF008E] ${index === 0 ? "text-[#FF008E]" : "text-black"
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* CENTER BRAND */}
            <div className="flex min-w-0 items-center justify-center">
              {/* MOBILE BRAND */}
              <Link
                href="/"
                className="flex min-w-0 items-center gap-3 lg:hidden"
                aria-label="Stay Playful Home"
              >
                <div className="relative h-[54px] w-[54px] shrink-0">
                  <Image
                    src="/logo1.png"
                    alt="Stay Playful logo"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>

                <span className="block truncate font-serif text-[1.9rem] font-black uppercase leading-[0.9] tracking-[-0.06em] text-black sm:text-[2.2rem]">
                  Stay Playful
                </span>
              </Link>

              {/* DESKTOP WORDMARK */}
              <Link
                href="/"
                aria-label="Stay Playful Home"
                className="hidden text-center font-serif text-[3.5rem] font-black uppercase leading-[0.84] tracking-[-0.07em] text-black transition-transform duration-200 hover:scale-[1.01] lg:block xl:text-[4.1rem]"
              >
                STAY PLAYFUL
              </Link>
            </div>

            {/* RIGHT DESKTOP */}
            <div className="hidden items-center justify-end gap-4 lg:flex xl:gap-5">
              <Link
                href="https://my.practicebetter.io/#/signin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-medium leading-[1.2] text-black/75 transition-colors hover:text-black"
              >
                Client Login
              </Link>

              <Link
                href="#contact"
                className="inline-flex min-h-[60px] items-center justify-center rounded-full border-[3px] border-black bg-[#E3488B] px-8 text-[15px] font-black uppercase tracking-[0.08em] text-white shadow-[7px_7px_0_0_rgba(0,128,80,1)] transition-transform duration-200 hover:-translate-y-0.5 xl:px-10"
              >
                Book a Call
              </Link>
            </div>

            {/* MOBILE RIGHT */}
            <div className="flex items-center justify-end gap-3 lg:hidden">
              <Link
                href="#contact"
                className="hidden h-[46px] items-center justify-center rounded-full border-[3px] border-black bg-[#E3488B] px-5 text-[12px] font-black uppercase tracking-[0.08em] text-white shadow-[4px_4px_0_0_rgba(0,128,80,1)] sm:inline-flex"
              >
                Book
              </Link>

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 rounded-none border-[3px] border-black bg-[#F6F1E7] shadow-[4px_4px_0_0_rgba(227,72,139,1)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#F6F1E7]"
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
                    {/* MOBILE TOP */}
                    <div className="flex items-start justify-between border-b-[3px] border-black bg-[#F6F1E7] px-6 py-6">
                      <div className="flex items-start gap-3">
                        <div className="relative mt-1 h-[54px] w-[54px] shrink-0">
                          <Image
                            src="/logo1.png"
                            alt="Stay Playful logo"
                            fill
                            priority
                            className="object-contain"
                          />
                        </div>

                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.18em] text-black/70">
                            Stay Playful
                          </p>
                          <h2 className="mt-3 font-serif text-[2.4rem] font-black uppercase leading-[0.9] tracking-[-0.06em] text-black">
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

                    {/* MOBILE CONTENT */}
                    <div className="flex flex-1 flex-col justify-between px-6 py-8">
                      <nav className="flex flex-col gap-4">
                        {navItems.map((item, index) => (
                          <SheetClose asChild key={item.href}>
                            <Link
                              href={item.href}
                              className={`border-[3px] border-black bg-white px-5 py-4 text-[1.25rem] font-black uppercase leading-none tracking-[-0.03em] text-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-transform duration-200 hover:-translate-y-0.5 ${index % 2 === 0
                                ? "rotate-[-1deg]"
                                : "rotate-[1deg]"
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