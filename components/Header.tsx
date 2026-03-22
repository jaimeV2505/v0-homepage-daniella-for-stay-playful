"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-sp-hot-pink text-white text-center py-2 px-4 text-sm font-medium">
        <span className="hidden sm:inline">Where your vision becomes something unforgettable </span>
        <span className="sm:hidden">Booking Spring 2026 </span>
        <span className="opacity-80">|</span>
        <Link href="#contact" className="ml-2 underline underline-offset-2 hover:opacity-80 transition-opacity">
          Get in touch
        </Link>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-sp-cream/95 backdrop-blur-md shadow-sm"
            : "bg-sp-cream"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-28">
            {/* Logo - Large and Bold */}
            <Link href="/" className="flex items-center gap-2 shrink-0 group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo1-JcaoSTEJKw2rySZFIaOZpeEs1Hjq3O.png"
                alt="Stay Playful"
                width={200}
                height={80}
                className="h-16 sm:h-24 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                style={{ width: 'auto', height: 'auto', maxHeight: '6rem' }}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sp-deep-brown font-medium hover:text-sp-hot-pink transition-colors text-sm tracking-wide"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="https://my.practicebetter.io/#/signin"
                className="text-sm text-muted-foreground hover:text-sp-deep-brown transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Client Login
              </Link>
              <Button
                asChild
                className="bg-sp-hot-pink hover:bg-sp-hot-pink/90 text-white rounded-full px-6 font-semibold"
              >
                <Link href="#contact">Book a Call</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="shrink-0">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm bg-sp-cream">
                <div className="flex flex-col gap-8 mt-8">
                  <nav className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-serif text-sp-deep-brown hover:text-sp-hot-pink transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="flex flex-col gap-4 pt-4 border-t border-border">
                    <Link
                      href="https://my.practicebetter.io/#/signin"
                      className="text-muted-foreground hover:text-sp-deep-brown transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Client Login
                    </Link>
                    <Button
                      asChild
                      className="bg-sp-hot-pink hover:bg-sp-hot-pink/90 text-white rounded-full font-semibold w-full"
                    >
                      <Link href="#contact" onClick={() => setIsOpen(false)}>
                        Book a Call
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}
