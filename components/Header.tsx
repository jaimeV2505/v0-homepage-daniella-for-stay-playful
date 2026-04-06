"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription, SheetClose } from "@/components/ui/sheet"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"
import { useLanguageSafe } from "@/lib/use-language"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

const LOGIN_URL = "https://my.practicebetter.io/#/signin"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguageSafe()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScrollAndClose = (sectionId: string) => {
    setIsMenuOpen(false)

    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        const offset = 80
        const bodyRect = document.body.getBoundingClientRect().top
        const elementRect = element.getBoundingClientRect().top
        const elementPosition = elementRect - bodyRect
        const offsetPosition = elementPosition - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        })
      }
    }, 350)
  }

  return (
    <>
      {/* TOP BAR */}
      <div className="relative z-[70] border-b-[3px] border-black bg-[#E3488B] py-2 text-white overflow-x-hidden">
        <div className="mx-auto flex max-w-full items-center justify-center px-4 sm:px-6">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-center">
            {t("topBar")} | <button onClick={() => handleScrollAndClose("contact")} className="underline outline-none">{t("getInTouch")}</button>
          </p>
        </div>
      </div>

      {/* HEADER PRINCIPAL */}
      <header
        className={`sticky top-0 z-[60] border-b-[3px] border-black transition-all duration-300 bg-[#DDBAF0] overflow-x-hidden ${isScrolled ? "h-[64px] sm:h-[80px]" : "h-[64px] sm:h-[100px]"
          }`}
      >
        <div className="mx-auto h-full w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">

          {/* MOBILE layout */}
          <div className="flex h-full items-center justify-between lg:hidden">
            <Link href="/" className="shrink-0">
              <div className="relative w-[64px] h-[48px]">
                <Image src="/logo1.png" alt="Stay Playful" fill sizes="64px" className="object-contain object-left" />
              </div>
            </Link>

            <div className="flex items-center gap-2">
              {/* Switcher fuera del Sheet para asegurar que funcione siempre en el header mobile */}
              <LanguageSwitcher />

              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button className="h-10 w-10 border-[3px] border-black bg-white shadow-[3px_3px_0_0_rgba(227,72,139,1)] hover:bg-white p-0 active:translate-y-[2px] active:shadow-none transition-all">
                    <Menu className="h-5 w-5 text-black" />
                  </Button>
                </SheetTrigger>

                <SheetContent side="right" className="bg-[#DDBAF0] border-l-[6px] border-black w-full sm:w-96 p-0 flex flex-col z-[100]">
                  <VisuallyHidden>
                    <SheetTitle>Navigation Menu</SheetTitle>
                    <SheetDescription>Main navigation menu for mobile devices</SheetDescription>
                  </VisuallyHidden>

                  <div className="flex justify-between items-center px-6 py-5 border-b-[3px] border-black bg-white/10">
                    <span className="font-black text-xs uppercase tracking-widest text-black/60">Menu</span>
                    <SheetClose className="h-10 w-10 flex items-center justify-center border-[3px] border-black bg-[#E3488B] shadow-[3px_3px_0_0_rgba(0,0,0,1)] text-white outline-none">
                      <X className="h-6 w-6" />
                    </SheetClose>
                  </div>

                  <nav className="flex flex-col gap-2 p-8">
                    {["programs", "method", "contact"].map((section) => (
                      <button
                        key={section}
                        onClick={() => handleScrollAndClose(section)}
                        className="text-[2rem] font-black uppercase tracking-tighter text-black hover:text-[#E3488B] transition-colors text-left border-b border-black/10 py-4"
                      >
                        {t(`nav.${section}`)}
                      </button>
                    ))}
                  </nav>

                  <div className="mt-auto p-8 border-t-[3px] border-black bg-black/5 flex flex-col gap-4">
                    <a
                      href={LOGIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-[60px] items-center justify-center border-[3px] border-black bg-white px-6 text-[12px] font-black uppercase tracking-widest shadow-[5px_5px_0_0_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all"
                    >
                      {t("nav.clientLogin")}
                    </a>
                    <button
                      onClick={() => handleScrollAndClose("contact")}
                      className="flex h-[60px] items-center justify-center border-[3px] border-black bg-[#E3488B] text-white px-6 text-[12px] font-black uppercase tracking-widest shadow-[5px_5px_0_0_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all"
                    >
                      {t("nav.bookCall")}
                    </button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* DESKTOP layout */}
          <div className="hidden lg:grid h-full grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div className="flex items-center gap-8">
              <Link href="/" className="shrink-0">
                <div className="relative w-[80px] h-[60px]">
                  <Image src="/logo1.png" alt="Stay Playful" fill sizes="80px" className="object-contain object-left" />
                </div>
              </Link>
              <nav className="flex items-center gap-6">
                {["programs", "method", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => handleScrollAndClose(section)}
                    className="text-xs font-black uppercase tracking-[0.15em] text-black hover:text-[#E3488B] transition-colors outline-none"
                  >
                    {t(`nav.${section}`)}
                  </button>
                ))}
              </nav>
            </div>

            <div className="flex justify-center">
              <Link
                href="/"
                className={`font-serif font-black uppercase leading-[0.75] tracking-tight text-black transition-all duration-300 whitespace-nowrap text-center ${isScrolled ? "text-[1.8rem] sm:text-[2.2rem]" : "text-[2.5rem] sm:text-[3.2rem]"
                  }`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                STAY<br />PLAYFUL
              </Link>
            </div>

            <div className="flex items-center justify-end gap-3">
              <LanguageSwitcher />
              <a
                href={LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[50px] items-center justify-center border-[3px] border-black bg-white px-6 text-[11px] font-black uppercase tracking-widest shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
              >
                {t("nav.clientLogin")}
              </a>
              <button
                onClick={() => handleScrollAndClose("contact")}
                className="inline-flex h-[50px] items-center justify-center border-[3px] border-black bg-[#E3488B] text-white px-6 text-[11px] font-black uppercase tracking-widest shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
              >
                {t("nav.bookCall")}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}