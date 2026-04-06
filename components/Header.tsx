"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
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

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 300)
  }

  return (
    <>
      {/* TOP BAR */}
      <div className="relative z-[70] border-b-[3px] border-black bg-[#E3488B] py-2 text-white overflow-x-hidden">
        <div className="mx-auto flex max-w-full items-center justify-center px-4 sm:px-6">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-center">
            {t("topBar")} | <button onClick={() => scrollToSection("contact")} className="underline">{t("getInTouch")}</button>
          </p>
        </div>
      </div>

      {/* HEADER PRINCIPAL */}
      <header
        className={`sticky top-0 z-[60] border-b-[3px] border-black transition-all duration-300 bg-[#DDBAF0] overflow-x-hidden ${
          isScrolled ? "h-[64px] sm:h-[80px]" : "h-[64px] sm:h-[100px]"
        }`}
      >
        <div className="mx-auto h-full w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
          {/* MOBILE layout: logo | spacer | switcher + hamburger */}
          <div className="flex h-full items-center justify-between lg:hidden">
            <Link href="/" className="shrink-0">
              <div className="relative w-[64px] h-[48px]">
                <Image
                  src="/logo1.png"
                  alt="Stay Playful"
                  fill
                  sizes="64px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button className="h-10 w-10 border-[3px] border-black bg-white shadow-[3px_3px_0_0_rgba(227,72,139,1)] hover:bg-white p-0">
                    <Menu className="h-5 w-5 text-black" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-[#DDBAF0] border-l-[6px] border-black w-full sm:w-96">
                  <VisuallyHidden>
                    <SheetTitle>Navigation Menu</SheetTitle>
                    <SheetDescription>Main navigation menu for mobile devices</SheetDescription>
                  </VisuallyHidden>
                  <div className="flex flex-col gap-6 py-8">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-black text-lg uppercase">Menu</h3>
                    </div>
                    <nav className="flex flex-col gap-4">
                      <button 
                        onClick={() => scrollToSection("programs")} 
                        className="text-sm font-black uppercase tracking-[0.15em] text-black hover:text-[#E3488B] transition-colors text-left"
                      >
                        {t("nav.programs")}
                      </button>
                      <button 
                        onClick={() => scrollToSection("method")} 
                        className="text-sm font-black uppercase tracking-[0.15em] text-black hover:text-[#E3488B] transition-colors text-left"
                      >
                        {t("nav.method")}
                      </button>
                      <button 
                        onClick={() => scrollToSection("contact")} 
                        className="text-sm font-black uppercase tracking-[0.15em] text-black hover:text-[#E3488B] transition-colors text-left"
                      >
                        {t("nav.contact")}
                      </button>
                    </nav>
                    <div className="pt-4 border-t-[2px] border-black flex flex-col gap-3">
                      <a
                        href={LOGIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-[50px] items-center justify-center border-[3px] border-black bg-white px-6 text-[11px] font-black uppercase tracking-widest shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
                      >
                        {t("nav.clientLogin")}
                      </a>
                      <button
                        onClick={() => scrollToSection("contact")}
                        className="flex h-[50px] items-center justify-center border-[3px] border-black bg-[#E3488B] text-white px-6 text-[11px] font-black uppercase tracking-widest shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
                      >
                        {t("nav.bookCall")}
                      </button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* DESKTOP layout: logo+nav | wordmark | buttons */}
          <div className="hidden lg:grid h-full grid-cols-[1fr_auto_1fr] items-center gap-4">
            {/* IZQUIERDA: Logo + Nav */}
            <div className="flex items-center gap-8">
              <Link href="/" className="shrink-0">
                <div className="relative w-[80px] h-[60px]">
                  <Image
                    src="/logo1.png"
                    alt="Stay Playful"
                    fill
                    sizes="80px"
                    className="object-contain object-left"
                  />
                </div>
              </Link>
              <nav className="flex items-center gap-6">
                <button 
                  onClick={() => scrollToSection("programs")} 
                  className="text-xs font-black uppercase tracking-[0.15em] text-black hover:text-[#E3488B] transition-colors"
                >
                  {t("nav.programs")}
                </button>
                <button 
                  onClick={() => scrollToSection("method")} 
                  className="text-xs font-black uppercase tracking-[0.15em] text-black hover:text-[#E3488B] transition-colors"
                >
                  {t("nav.method")}
                </button>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="text-xs font-black uppercase tracking-[0.15em] text-black hover:text-[#E3488B] transition-colors"
                >
                  {t("nav.contact")}
                </button>
              </nav>
            </div>

            {/* CENTRO: STAY PLAYFUL */}
            <div className="flex justify-center">
              <Link
                href="/"
                className={`font-serif font-black uppercase leading-[0.75] tracking-tight text-black transition-all duration-300 whitespace-nowrap ${
                  isScrolled ? "text-[2rem] sm:text-[2.5rem]" : "text-[2.5rem] sm:text-[3.5rem]"
                }`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                STAY<br />PLAYFUL
              </Link>
            </div>

            {/* DERECHA: Switcher + Botones */}
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
                onClick={() => scrollToSection("contact")}
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
