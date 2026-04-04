"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { label: "Programs", href: "#programs" },
  { label: "Method", href: "#method" },
  { label: "Contact", href: "#contact" },
]

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
      <div className="relative z-[70] border-b-[3px] border-black bg-[#E3488B] py-2 text-white">
        <div className="mx-auto flex max-w-[1920px] items-center justify-center px-6">
          <p className="text-[11px] font-black uppercase tracking-[0.2em]">
            Där din vision blir något oförglömligt | <Link href="#contact" className="underline">Get in touch</Link>
          </p>
        </div>
      </div>

      {/* HEADER PRINCIPAL */}
      <header
        className={`sticky top-0 z-[60] border-b-[3px] border-black transition-all duration-500 ease-in-out ${isScrolled ? "bg-[#DDBAF0]/95 backdrop-blur-md h-[100px]" : "bg-[#DDBAF0] h-[140px]"
          }`}
      >
        <div className="mx-auto h-full max-w-[1920px] px-8 lg:px-12">
          {/* Usamos un Grid con columnas laterales muy amplias */}
          <div className="grid h-full grid-cols-[1.8fr_1fr_1.8fr] items-center gap-4">

            {/* IZQUIERDA: LOGO LANDSCAPE GIGANTE */}
            <div className="flex items-center gap-12">
              <Link href="/" className="group relative shrink-0">
                <div className={`relative transition-all duration-500 ${isScrolled ? "w-[220px] h-[60px]" : "w-[300px] h-[90px]"
                  }`}>
                  <Image
                    src="/logo1.png" // ASEGÚRATE QUE SEA LA VERSIÓN HORIZONTAL
                    alt="Stay Playful"
                    fill
                    priority
                    className="object-contain object-left transition-transform group-hover:scale-105"
                  />
                </div>
              </Link>

              <nav className="hidden xl:flex items-center gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[14px] font-black uppercase tracking-[0.15em] text-black hover:text-[#E3488B] transition-colors"
                  >
                    {item.label}
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

            {/* DERECHA: BOTONES DE IMPACTO */}
            <div className="flex items-center justify-end gap-6">
              <Link
                href="#"
                className="hidden xl:inline-flex min-h-[56px] items-center justify-center border-[3px] border-black bg-[#F6F1E7] px-8 text-[13px] font-black uppercase tracking-widest shadow-[5px_5px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
              >
                Client Login
              </Link>

              <Link
                href="#contact"
                className={`hidden lg:inline-flex items-center justify-center border-[3px] border-black bg-[#E3488B] text-white font-black uppercase tracking-widest shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all ${isScrolled ? "min-h-[56px] px-8" : "min-h-[64px] px-12"
                  }`}
              >
                Book a Call
              </Link>

              {/* MOBILE MENU */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="lg:hidden h-14 w-14 border-[3px] border-black bg-[#F6F1E7] shadow-[4px_4px_0_0_rgba(227,72,139,1)] hover:bg-[#F6F1E7]">
                    <Menu className="h-8 w-8 text-black" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-[#DDBAF0] border-l-[6px] border-black">
                  {/* Contenido del menú... */}
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}