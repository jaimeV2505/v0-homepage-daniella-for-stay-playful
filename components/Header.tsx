"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"
import { siteConfig } from "@/lib/config"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* TOP BAR */}
      <div className="relative z-[70] border-b-[3px] border-black bg-[#E3488B] py-2 text-white overflow-x-hidden">
        <div className="mx-auto flex max-w-full items-center justify-center px-4 sm:px-6">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-center">
            Där din vision blir något oförglömligt | <Link href={siteConfig.urls.contact} className="underline">Get in touch</Link>
          </p>
        </div>
      </div>

      {/* HEADER PRINCIPAL */}
      <header
        className={`sticky top-0 z-[60] border-b-[3px] border-black transition-all duration-500 ease-in-out overflow-x-hidden ${isScrolled ? "bg-[#DDBAF0]/95 backdrop-blur-md h-[80px] sm:h-[100px]" : "bg-[#DDBAF0] h-[120px] sm:h-[140px]"
          }`}
      >
        <div className="mx-auto h-full w-full max-w-full px-4 sm:px-6 lg:px-8">
          {/* Grid más responsivo */}
          <div className="grid h-full grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4 lg:grid-cols-[1.8fr_1fr_1.8fr]">

            {/* IZQUIERDA: LOGO Y NAV */}
            <div className="flex items-center gap-4 sm:gap-8 lg:gap-12 min-w-0">
              <Link href="/" className="group relative shrink-0">
                <div className={`relative transition-all duration-500 ${isScrolled ? "w-[160px] h-[50px] sm:w-[220px] sm:h-[60px]" : "w-[200px] h-[60px] sm:w-[300px] sm:h-[90px]"
                  }`}>
                  <Image
                    src="/logo1.png"
                    alt="Stay Playful"
                    fill
                    priority
                    className="object-contain object-left transition-transform group-hover:scale-105"
                  />
                </div>
              </Link>

              <nav className="hidden lg:flex items-center gap-4 lg:gap-6">
                {["PROGRAMS", "METHOD", "CONTACT"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-[11px] lg:text-[14px] font-black uppercase tracking-[0.15em] text-black hover:text-[#E3488B] transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            {/* CENTRO: WORDMARK (EL ANCLA) */}
            <div className="flex justify-center text-center">
              <Link
                href="/"
                className={`font-serif font-black uppercase leading-[0.8] tracking-[-0.04em] text-black transition-all duration-500 ${isScrolled ? "text-[2.2rem]" : "text-[3.5rem]"
                  }`}
              >
                STAY PLAYFUL
              </Link>
            </div>

            {/* DERECHA: BOTONES Y LANGUAGE SWITCHER */}
            <div className="flex items-center justify-end gap-2 sm:gap-3 lg:gap-6 min-w-0">
              <div className="hidden sm:flex">
                <LanguageSwitcher />
              </div>

              <Link
                href={siteConfig.urls.contact}
                className="hidden lg:inline-flex min-h-[48px] sm:min-h-[56px] items-center justify-center border-[3px] border-black bg-[#F6F1E7] px-4 sm:px-8 text-[10px] sm:text-[13px] font-black uppercase tracking-widest shadow-[4px_4px_0_0_rgba(0,0,0,1)] sm:shadow-[5px_5px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
              >
                Login
              </Link>

              <Link
                href={siteConfig.urls.contact}
                className={`hidden md:inline-flex items-center justify-center border-[3px] border-black bg-[#E3488B] text-white font-black uppercase tracking-widest shadow-[4px_4px_0_0_rgba(0,0,0,1)] sm:shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all ${isScrolled ? "min-h-[48px] sm:min-h-[56px] px-4 sm:px-8 text-[10px] sm:text-[13px]" : "min-h-[56px] sm:min-h-[64px] px-6 sm:px-12 text-[12px] sm:text-[14px]"
                  }`}
              >
                Book a Call
              </Link>

              {/* MOBILE MENU */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="md:hidden h-12 w-12 sm:h-14 sm:w-14 border-[3px] border-black bg-[#F6F1E7] shadow-[3px_3px_0_0_rgba(227,72,139,1)] hover:bg-[#F6F1E7] p-0">
                    <Menu className="h-6 w-6 sm:h-8 sm:w-8 text-black" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-[#DDBAF0] border-l-[6px] border-black w-full sm:w-96">
                  <div className="flex flex-col gap-6 py-8">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-black text-lg uppercase">Menu</h3>
                      <SheetClose />
                    </div>
                    <nav className="flex flex-col gap-4">
                      {["PROGRAMS", "METHOD", "CONTACT"].map((item) => (
                        <Link
                          key={item}
                          href={`#${item.toLowerCase()}`}
                          className="text-sm font-black uppercase tracking-[0.15em] text-black hover:text-[#E3488B] transition-colors"
                        >
                          {item}
                        </Link>
                      ))}
                    </nav>
                    <div className="pt-4 border-t-[2px] border-black">
                      <LanguageSwitcher />
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
