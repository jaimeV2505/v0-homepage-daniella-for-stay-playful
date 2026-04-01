"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type FaqItem = {
  id: string
  question: string
  answer: string
  accent: string
}

const faqItems: FaqItem[] = [
  {
    id: "different",
    question: "Vem är det här till för?",
    answer: (
      <>
        <p>
          Traditionell kostrådgivning och personliga tränare förespråkar gym och
          kostscheman men adresserar i mindre utsträckning näringen, relationen till
          mat och beteendemönster kring “av och på”.
        </p>

        <p><strong>Stay Playful är till för dig som:</strong></p>

        <ul className="list-disc pl-5 space-y-1">
          <li>Har ett aktivt liv och/eller vill ha fler alternativ till aktivitet</li>
          <li>
            Nybörjare inom ämnet — vill ha kostrådgivning eller är redan rätt så
            välinformerad men känner dig fortfarande i obalans kring kost/mat
          </li>
          <li>Fast i “jag borde”-tänk</li>
          <li>
            Periodvis motiverad, men utan en hållbar strategi i nuläget
          </li>
        </ul>

        <p><strong>Jag skulle också säga att det är för:</strong></p>

        <ul className="list-disc pl-5 space-y-1">
          <li>Medvetna och reflekterande</li>
          <li>Högpresterande eller självkritiska</li>
          <li>Öppna för personlig utveckling</li>
        </ul>

        <p><em>Men jag kan ha fel?</em></p>
      </>
    ),
    accent: "bg-[#FF008E]",
  },
  {
    id: "who-for",
    question: "Hur kommer vi att jobba tillsammans?",
    answer:
      "Beroende på “problematiken” så kommer det generellt att se ut på följande sätt: Efter ett uppsatt mål så kommer du att få ett inlogg till en extern plattform där du registrerar din utveckling. Datan tittar vi på tillsammans och diskuterar, veckovis.  Jag tror även på nära kontakt så under veckan kommer jag finnas som stöd och tillgänglig vid frågor.",
    accent: "bg-[#FFABFF]",
  },
  {
    id: "diet",
    question: "Kommer man att kunna äta glass?",
    answer: (
      <>
        Lic. Kostrådgivare: från SAFE/the Academy,{" "}
        <a href="https://theacademy.se/" target="_blank" rel="noopener noreferrer">
          theacademy.se
        </a>
        <br />
        Vid föreläsning om självskade beteende och ätstörning till företag/större gruppen används faktan från{" "}
        <a href="http://shedo.se" target="_blank" rel="noopener noreferrer">
          SHEDO.se
        </a>
      </>
    ), 
    accent: "bg-[#00E2FF]",
  },
]

const topRibbon = [
  "FREQUENTLY ASKED QUESTIONS",
  "REAL SUPPORT",
  "SOFTER WELLBEING",
  "FREQUENTLY ASKED QUESTIONS",
  "REAL SUPPORT",
  "SOFTER WELLBEING",
]

export function Community() {
  const [openId, setOpenId] = useState<string>(faqItems[0].id)

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id))
  }

  return (
    <section className="relative overflow-hidden bg-[#F7EFE9] py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[14%] h-48 w-48 rounded-full bg-[#FFABFF]/10 blur-3xl" />
        <div className="absolute right-[10%] top-[20%] h-56 w-56 rounded-full bg-[#FF008E]/8 blur-3xl" />
        <div className="absolute bottom-[8%] left-[30%] h-64 w-64 rounded-full bg-[#FFBD17]/8 blur-3xl" />
        <div className="absolute inset-y-0 left-[4%] hidden w-px bg-[#2B1A16]/6 xl:block" />
        <div className="absolute inset-y-0 right-[4%] hidden w-px bg-[#2B1A16]/6 xl:block" />
      </div>

      {/* Top divider / ribbon */}
      <div className="pointer-events-none absolute inset-x-0 top-10 hidden h-24 lg:block">
        <div className="absolute left-[-6%] right-[-6%] top-4 rotate-[-2.5deg] border-y-2 border-[#2B1A16] bg-[#FFF8F2] py-3 shadow-[0_8px_18px_rgba(0,0,0,0.06)]">
          <div className="flex overflow-hidden whitespace-nowrap">
            <motion.div
              initial={{ x: "0%" }}
              animate={{ x: "-50%" }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="flex min-w-max items-center"
            >
              {[...topRibbon, ...topRibbon, ...topRibbon].map((item, index) => (
                <span
                  key={`${item}-${index}-top`}
                  className="mx-6 font-sans text-sm font-black uppercase tracking-[0.14em] text-[#2B1A16]"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#FF008E]">
            Before you book
          </p>

          <h2 className="font-serif text-[2.9rem] leading-[0.96] tracking-[-0.05em] text-[#2B1A16] sm:text-[4rem] lg:text-[5rem]">
            Booring men svar på blandade <span className="italic">frågor</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#2B1A16]/68">
            En mjukare version av vanliga frågor — så att du kan känna dig lugn,
            trygg och redo att ta nästa steg.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          {/* Left editorial block */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-[#FFBD17]/20 blur-[1px]" />

            <div className="relative overflow-hidden rounded-[2rem] border-[2.5px] border-[#2B1A16] bg-[#9C1B24] shadow-[10px_10px_0_0_rgba(0,0,0,0.12)]">
              <div className="border-b-[2.5px] border-[#2B1A16] px-5 py-3">
                <div className="inline-flex rounded-full border-[2px] border-[#2B1A16] bg-[#FFF8F2] px-5 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#2B1A16] shadow-[4px_4px_0_0_rgba(0,0,0,0.08)]">
                  4 questions answered
                </div>
              </div>

              <div className="grid md:grid-cols-[0.78fr_1fr]">
                <div className="relative min-h-[280px] border-b-[2.5px] border-[#2B1A16] md:border-b-0 md:border-r-[2.5px]">
                  <img
                    src="https://images.pexels.com/photos/7081150/pexels-photo-7081150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Editorial portrait"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
                </div>

                <div className="bg-[#FFF7EF] p-7 sm:p-9">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-[#9C1B24]">
                        Klarhet utan press
                      </p>

                      <h3 className="max-w-[14ch] font-sans text-[2rem] font-black uppercase leading-[0.92] tracking-[-0.05em] text-[#2B1A16] sm:text-[2.5rem]">
                        Ett mer hållbart sätt att må bra
                      </h3>

                      <p className="mt-5 text-[1rem] leading-7 text-[#2B1A16]/78 sm:text-[1.05rem]">
                        Här handlar det inte om perfektion eller kontroll. Det handlar om att hitta ett sätt
                        att leva som faktiskt fungerar i din vardag — med mer balans, frihet och tillit till dig själv.
                      </p>
                    </div>

                    <div className="mt-8 flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border-[2.5px] border-[#2B1A16] bg-[#DDF0D5] text-sm font-black text-[#2B1A16] shadow-[4px_4px_0_0_rgba(0,0,0,0.08)]">
                        x4
                      </div>

                      <p className="max-w-[18ch] text-sm leading-6 text-[#2B1A16]/68">
                        Perspektiv som hjälper dig förstå, känna dig trygg och ta nästa steg.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right accordion */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            className="space-y-4"
          >
            {faqItems.map((item, index) => {
              const isOpen = openId === item.id

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.06,
                  }}
                  className="group relative"
                >
                  <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-[1.8rem] bg-[#FFABFF]/18 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3" />

                  <div className="relative overflow-hidden rounded-[1.8rem] border-[2.5px] border-[#2B1A16] bg-[#FFFDF9] shadow-[0_12px_28px_rgba(0,0,0,0.04)]">
                    <button
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-8 sm:py-7"
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className={cn("mt-1 h-3 w-3 rounded-full", item.accent)}
                        />
                        <h3 className="font-serif text-[1.5rem] leading-[1.1] text-[#2B1A16] sm:text-[1.9rem]">
                          {item.question}
                        </h3>
                      </div>

                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#2B1A16]/18 bg-white text-[#2B1A16]">
                        {isOpen ? (
                          <Minus className="h-5 w-5" />
                        ) : (
                          <Plus className="h-5 w-5" />
                        )}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-[#2B1A16]/10 px-6 pb-6 pt-1 sm:px-8 sm:pb-8">
                            <p className="max-w-3xl text-[1rem] leading-8 text-[#2B1A16]/74 sm:text-[1.04rem]">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )
            })}

            {/* Mini CTA */}
            <div className="pt-4">
              <div className="rounded-[1.8rem] border-[2.5px] border-[#2B1A16] bg-[#FFF8F2] px-6 py-6 shadow-[6px_6px_0_0_rgba(0,0,0,0.06)] sm:px-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#FF008E]">
                      Fortfarande funderingar?
                    </p>
                    <p className="mt-2 text-[1.05rem] leading-7 text-[#2B1A16]/74">
                      Om du hellre vill prata igenom det än att läsa fler frågor, så går det lika bra.
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full border-[2.5px] border-[#2B1A16] bg-[#FF008E] px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[4px_4px_0_0_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E30081]"
                  >
                    Let’s talk
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom divider */}
        <div className="mt-16 flex justify-center">
          <div className="flex w-full max-w-5xl items-center gap-4">
            <div className="h-px flex-1 bg-[#2B1A16]/12" />
            <div className="rounded-full border border-[#2B1A16]/12 bg-white/70 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FF008E]">
              Stay Playful
            </div>
            <div className="h-px flex-1 bg-[#2B1A16]/12" />
          </div>
        </div>
      </div>
    </section>
  )
}