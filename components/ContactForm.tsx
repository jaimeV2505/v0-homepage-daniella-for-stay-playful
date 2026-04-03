"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Check, Mail, Clock3, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"

const interestOptions = [
  { value: "1-1-coaching", label: "1:1 Coaching" },
  { value: "8-week", label: "8-veckorsprogram" },
  { value: "12-week", label: "12-veckorsprogram" },
  { value: "general", label: "Allmän fråga" },
  { value: "workshop", label: "Workshop / Föreläsning" },
]

type FormState = {
  name: string
  email: string
  interest: string
  message: string
}

const initialState: FormState = {
  name: "",
  email: "",
  interest: "",
  message: "",
}

export function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -38])
  const leftY = useTransform(scrollYProgress, [0, 1], [24, -14])
  const stickerRotate = useTransform(scrollYProgress, [0, 1], [-8, -3])
  const paperY = useTransform(scrollYProgress, [0, 1], [0, -24])

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, setFormData] = useState<FormState>(initialState)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const resetForm = () => {
    setFormData(initialState)
    setErrorMessage("")
    setIsSubmitted(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage("")

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Fyll i de obligatoriska fälten innan du skickar.")
      return
    }

    try {
      setIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 1400))
      setIsSubmitted(true)
      setFormData(initialState)
    } catch {
      setErrorMessage("Det gick inte att skicka ditt meddelande just nu.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F7EFE9]"
    >
      <div className="h-8 bg-[#F4E7F7]" />
      <div className="h-[3px] bg-[#2B1A16]" />

      <div className="relative overflow-hidden">
        {/* BACKGROUND IMAGE LAYER */}
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/slite.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-[#120B0A]/58" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,11,10,0.22),rgba(18,11,10,0.72))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,0,142,0.14),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(255,171,255,0.14),transparent_28%),radial-gradient(circle_at_64%_82%,rgba(255,127,0,0.10),transparent_22%),radial-gradient(circle_at_34%_78%,rgba(0,226,255,0.10),transparent_24%)]" />
        </motion.div>

        <div className="pointer-events-none absolute inset-y-0 left-[5%] hidden w-px bg-white/10 xl:block" />
        <div className="pointer-events-none absolute inset-y-0 right-[5%] hidden w-px bg-white/10 xl:block" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid items-start gap-10 lg:grid-cols-[1.03fr_0.97fr] lg:gap-14">
            {/* LEFT CONTENT */}
            <motion.div
              style={{ y: leftY }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative flex flex-col justify-between"
            >
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/82">
                  Kontakt
                </p>

                <h2 className="max-w-[900px] font-sans text-[2.9rem] font-black uppercase leading-[0.87] tracking-[-0.06em] text-white sm:text-[4.3rem] lg:text-[5.2rem] xl:text-[5.8rem]">
                  Är du redo att
                  <br />
                  skapa din egen
                  <br />
                  Playground?
                </h2>

                <div className="mt-8 max-w-xl space-y-6 text-[1.02rem] leading-[1.75] text-white/92 sm:text-[1.14rem]">
                  <p>
                    Nyfiken på vad det här kan leda till? Eller vill du bara känna efter om det här är rätt plats för dig? Skicka ett meddelande så börjar vi där.

                    Stay Playful handlar om stöd som ska kännas genomtänkt för dig, och en livsstil som blir en del av dig -  inte stelt, pressat eller ett annat måste i vardagen.

                  </p>

                  <p>
                    Stay Playful handlar om stöd som känns tryggt, genomtänkt,
                    hållbart och mänskligt — inte stelt, pressat eller
                    överväldigande.
                  </p>


                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.18, duration: 0.65 }}
                className="mt-10"
              >
                <div className="max-w-[720px]">
                  <p className="font-sans text-[2.2rem] font-black uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-[3rem] lg:text-[3.5rem]">

                    du får svar inom 48 timmar
                    <br />

                  </p>
                  <p className="mt-1 font-serif text-[1.9rem] italic leading-none text-[#FFF2E8] sm:text-[2.25rem] lg:text-[2.55rem]">
                    om jag inte är mitt i en lek
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                    <Mail className="h-4 w-4" />
                    hello@stayplayful.com
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                    <MapPin className="h-4 w-4" />
                    Stockholm, Sverige
                  </div>
                </div>
              </motion.div>

              <motion.div
                style={{ rotate: stickerRotate }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.65 }}
                className="absolute -top-3 left-0 hidden xl:block"
              >
                <div className="rounded-full border-[3px] border-[#2B1A16] bg-[#FFBD17] px-8 py-3 text-sm font-black uppercase tracking-[0.14em] text-[#2B1A16] shadow-[8px_8px_0_0_rgba(0,0,0,0.18)]">
                  Baserad i Stockholm
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT FORM */}
            <motion.div
              style={{ y: paperY }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: "easeOut", delay: 0.08 }}
              className="relative"
            >
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-[#FF008E]/16 blur-[1px]" />

              <div className="relative rounded-[2rem] border-[3px] border-[#2B1A16] bg-[#FDF7F0] p-6 shadow-[10px_10px_0_0_rgba(0,0,0,0.16)] sm:p-8 lg:p-9">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex min-h-[560px] flex-col items-center justify-center text-center"
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-[#2B1A16] bg-[#DDF0D5] shadow-[6px_6px_0_0_rgba(0,0,0,0.12)]">
                      <Check className="h-10 w-10 text-[#FF008E]" />
                    </div>

                    <h3 className="mt-8 font-serif text-3xl text-[#2B1A16] sm:text-4xl">
                      Meddelandet är skickat
                    </h3>

                    <p className="mt-4 max-w-md text-lg leading-8 text-[#2B1A16]/72">
                      Tack för att du hörde av dig. Jag återkommer inom 24–48
                      timmar med nästa steg.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 text-sm font-medium text-[#2B1A16]/70 sm:flex-row sm:gap-6">
                      <div className="flex items-center justify-center gap-2">
                        <Mail className="h-4 w-4" />
                        Håll koll på din inkorg
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Clock3 className="h-4 w-4" />
                        Svar inom 48h
                      </div>
                    </div>

                    <Button
                      onClick={resetForm}
                      className="mt-8 rounded-full border-[3px] border-[#2B1A16] bg-[#FF008E] px-8 py-6 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[6px_6px_0_0_rgba(0,0,0,0.14)] hover:bg-[#E30081]"
                    >
                      Skicka ett nytt meddelande
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#FF008E]">
                          Låt oss börja här
                        </p>
                        <h3 className="mt-2 font-serif text-2xl leading-tight text-[#2B1A16] sm:text-3xl">
                          Berätta vad som fick dig att höra av dig
                        </h3>
                      </div>

                      <div className="hidden rounded-full border-[3px] border-[#2B1A16] bg-[#FFABFF] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2B1A16] sm:block">
                        Stay Playful
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} noValidate>
                      <FieldGroup className="space-y-5">
                        <Field>
                          <FieldLabel
                            htmlFor="name"
                            className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[#2B1A16]/72"
                          >
                            Ditt namn*
                          </FieldLabel>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            placeholder="Vad vill du att jag kallar dig?"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="h-14 rounded-[1rem] border-[2px] border-[#2B1A16]/18 bg-[#FFFDF9] px-5 text-base text-[#2B1A16] placeholder:text-[#2B1A16]/40 focus-visible:ring-2 focus-visible:ring-[#FF008E]"
                          />
                        </Field>

                        <Field>
                          <FieldLabel
                            htmlFor="email"
                            className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[#2B1A16]/72"
                          >
                            E-post*
                          </FieldLabel>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="din@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="h-14 rounded-[1rem] border-[2px] border-[#2B1A16]/18 bg-[#FFFDF9] px-5 text-base text-[#2B1A16] placeholder:text-[#2B1A16]/40 focus-visible:ring-2 focus-visible:ring-[#FF008E]"
                          />
                        </Field>

                        <Field>
                          <FieldLabel className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[#2B1A16]/72">
                            Vad gäller det?
                          </FieldLabel>
                          <Select
                            value={formData.interest}
                            onValueChange={(value) =>
                              setFormData((prev) => ({
                                ...prev,
                                interest: value,
                              }))
                            }
                          >
                            <SelectTrigger className="h-14 rounded-[1rem] border-[2px] border-[#2B1A16]/18 bg-[#FFFDF9] px-5 text-left text-base text-[#2B1A16] focus:ring-2 focus:ring-[#FF008E]">
                              <SelectValue placeholder="Välj ett alternativ" />
                            </SelectTrigger>
                            <SelectContent>
                              {interestOptions.map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </Field>

                        <Field>
                          <FieldLabel
                            htmlFor="message"
                            className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[#2B1A16]/72"
                          >
                            Meddelande*
                          </FieldLabel>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Berätta gärna lite om vad du söker, funderar på eller vill ha hjälp med..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="min-h-[170px] resize-none rounded-[1.2rem] border-[2px] border-[#2B1A16]/18 bg-[#FFFDF9] px-5 py-4 text-base text-[#2B1A16] placeholder:text-[#2B1A16]/40 focus-visible:ring-2 focus-visible:ring-[#FF008E]"
                          />
                        </Field>

                        {errorMessage ? (
                          <p className="text-sm font-medium text-[#B42318]">
                            {errorMessage}
                          </p>
                        ) : null}

                        <div className="pt-2">
                          <Button
                            type="submit"
                            disabled={isLoading}
                            className="group h-14 w-full rounded-[1rem] border-[3px] border-[#2B1A16] bg-[#BFD9F2] text-sm font-black uppercase tracking-[0.08em] text-[#2B1A16] shadow-[6px_6px_0_0_rgba(0,0,0,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FF008E] hover:text-white"
                          >
                            {isLoading ? (
                              "Skickar..."
                            ) : (
                              <>
                                Skicka meddelande
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                              </>
                            )}
                          </Button>
                        </div>
                      </FieldGroup>
                    </form>

                    <div className="mt-6 flex items-center justify-between gap-4 border-t border-[#2B1A16]/12 pt-5">
                      <p className="max-w-[28rem] text-sm leading-6 text-[#2B1A16]/58">
                        Din information stannar här och används bara för att kunna
                        svara på ditt meddelande.
                      </p>

                      <div className="hidden min-h-[96px] min-w-[132px] items-center justify-center rounded-[2rem] bg-[#DDF0D5] px-6 py-4 text-center sm:flex">
                        <span className="text-[0.95rem] font-black uppercase leading-[1.35] tracking-[0.16em] text-[#2B1A16]">
                          Svar inomn
                          <br />
                          48h
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative z-10 h-[3px] bg-[#2B1A16]" />
      </div>
    </section>
  )
}