"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion"
import { ArrowRight, Check, Mail, Clock3 } from "lucide-react"
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
import { useLanguageSafe } from "@/lib/use-language"

type FormState = {
  name: string
  email: string
  interest: string
  message: string
}

const initialState: FormState = { name: "", email: "", interest: "", message: "" }

export function ContactForm() {
  const { t } = useLanguageSafe()

  const rawProgress = useMotionValue(0)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    return scrollYProgress.on("change", (v) => rawProgress.set(v))
  }, [scrollYProgress, rawProgress])

  const bgY = useTransform(rawProgress, [0, 1], [0, -38])
  const leftY = useTransform(rawProgress, [0, 1], [24, -14])
  const stickerRotate = useTransform(rawProgress, [0, 1], [-8, -3])
  const paperY = useTransform(rawProgress, [0, 1], [0, -24])

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, setFormData] = useState<FormState>(initialState)

  const interestOptions = t("contact.interestOptions") as unknown as { value: string; label: string }[]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const resetForm = () => { setFormData(initialState); setErrorMessage(""); setIsSubmitted(false) }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage("")
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage(t("contact.errorRequired") as string)
      return
    }
    try {
      setIsLoading(true)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok || !data.success) throw new Error(data.error || "error")
      setIsSubmitted(true)
      setFormData(initialState)
    } catch {
      setErrorMessage(t("contact.errorSend") as string)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" style={{ position: "relative" }} className="overflow-hidden bg-[#F7EFE9]">
      <div className="h-8 bg-[#F4E7F7]" />
      <div className="h-[3px] bg-[#2B1A16]" />

      <div className="relative overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/imagedaniella.png')" }} />
          <div className="absolute inset-0 bg-[#120B0A]/58" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,11,10,0.22),rgba(18,11,10,0.72))]" />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-[1.03fr_0.97fr] lg:gap-14">

            {/* Columna Izquierda: Textos */}
            <motion.div
              style={{ y: leftY }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative flex flex-col justify-between"
            >
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/82 sm:text-sm">{t("contact.eyebrow")}</p>
                <h2 className="max-w-[900px] font-sans text-[2.4rem] font-black uppercase leading-[0.9] tracking-[-0.06em] text-white sm:text-[4.3rem] lg:text-[5.2rem] xl:text-[5.8rem]">
                  {t("contact.heading")}
                </h2>
                <div className="mt-6 mt-8 max-w-xl space-y-6 text-[1rem] leading-[1.6] text-white/92 sm:text-[1.14rem] sm:leading-[1.75]">
                  <p>{t("contact.body1")}</p>
                  <p>{t("contact.body2")}</p>
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
                  <p className="font-sans text-[1.8rem] font-black uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-[3rem] lg:text-[3.5rem]">
                    {t("contact.responseTitle")}
                  </p>
                  <p className="mt-1 font-serif text-[1.5rem] italic leading-none text-[#FFF2E8] sm:text-[2.25rem] lg:text-[2.55rem]">
                    {t("contact.responseSubtitle")}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                    <Mail className="h-4 w-4" />hello@stayplayful.com
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
                  {t("contact.basedIn")}
                </div>
              </motion.div>
            </motion.div>

            {/* Columna Derecha: Formulario */}
            <motion.div
              style={{ y: paperY }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: "easeOut", delay: 0.08 }}
              className="relative w-full"
            >
              <div className="absolute inset-0 translate-x-1 translate-y-1 sm:translate-x-3 sm:translate-y-3 rounded-[1.5rem] sm:rounded-[2rem] bg-[#FF008E]/16 blur-[1px]" />
              <div className="relative rounded-[1.5rem] sm:rounded-[2rem] border-[3px] border-[#2B1A16] bg-[#FDF7F0] p-5 shadow-[4px_4px_0_0_rgba(0,0,0,0.16)] sm:p-8 sm:shadow-[10px_10px_0_0_rgba(0,0,0,0.16)] lg:p-9">
                {isSubmitted ? (
                  <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="flex min-h-[400px] sm:min-h-[560px] flex-col items-center justify-center text-center">
                    <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border-[3px] border-[#2B1A16] bg-[#DDF0D5] shadow-[6px_6px_0_0_rgba(0,0,0,0.12)]">
                      <Check className="h-8 w-8 sm:h-10 sm:w-10 text-[#FF008E]" />
                    </div>
                    <h3 className="mt-6 sm:mt-8 font-serif text-2xl text-[#2B1A16] sm:text-4xl">{t("contact.successTitle")}</h3>
                    <p className="mt-4 max-w-md text-base sm:text-lg leading-relaxed text-[#2B1A16]/72">{t("contact.successBody")}</p>
                    <div className="mt-6 flex flex-col gap-3 text-xs font-medium text-[#2B1A16]/70 sm:mt-8 sm:text-sm sm:flex-row sm:gap-6">
                      <div className="flex items-center justify-center gap-2"><Mail className="h-4 w-4" />{t("contact.checkInbox")}</div>
                      <div className="flex items-center justify-center gap-2"><Clock3 className="h-4 w-4" />{t("contact.replyIn")}</div>
                    </div>
                    <Button onClick={resetForm} className="mt-8 w-full sm:w-auto rounded-full border-[3px] border-[#2B1A16] bg-[#FF008E] px-8 py-6 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[6px_6px_0_0_rgba(0,0,0,0.14)] hover:bg-[#E30081]">
                      {t("contact.sendAnother")}
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.22em] text-[#FF008E]">{t("contact.formTitle")}</p>
                        <h3 className="mt-1 sm:mt-2 font-serif text-xl leading-tight text-[#2B1A16] sm:text-3xl">{t("contact.formSubheading")}</h3>
                      </div>
                      <div className="hidden rounded-full border-[3px] border-[#2B1A16] bg-[#FFABFF] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2B1A16] sm:block">Stay Playful</div>
                    </div>

                    <form onSubmit={handleSubmit} noValidate>
                      <FieldGroup className="space-y-4 sm:space-y-5">
                        <Field>
                          <FieldLabel htmlFor="name" className="mb-1 sm:mb-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-[#2B1A16]/72">{t("contact.labelName")}</FieldLabel>
                          <Input id="name" name="name" type="text" placeholder={t("contact.placeholderName") as string} value={formData.name} onChange={handleChange} required className="h-12 sm:h-14 rounded-[0.8rem] sm:rounded-[1rem] border-[2px] border-[#2B1A16]/18 bg-[#FFFDF9] px-4 sm:px-5 text-base text-[#2B1A16] placeholder:text-[#2B1A16]/40 focus-visible:ring-2 focus-visible:ring-[#FF008E]" />
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="email" className="mb-1 sm:mb-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-[#2B1A16]/72">{t("contact.labelEmail")}</FieldLabel>
                          <Input id="email" name="email" type="email" placeholder="din@email.com" value={formData.email} onChange={handleChange} required className="h-12 sm:h-14 rounded-[0.8rem] sm:rounded-[1rem] border-[2px] border-[#2B1A16]/18 bg-[#FFFDF9] px-4 sm:px-5 text-base text-[#2B1A16] placeholder:text-[#2B1A16]/40 focus-visible:ring-2 focus-visible:ring-[#FF008E]" />
                        </Field>
                        <Field>
                          <FieldLabel className="mb-1 sm:mb-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-[#2B1A16]/72">{t("contact.labelInterest")}</FieldLabel>
                          <Select value={formData.interest} onValueChange={(value) => setFormData((prev) => ({ ...prev, interest: value }))}>
                            <SelectTrigger className="h-12 sm:h-14 rounded-[0.8rem] sm:rounded-[1rem] border-[2px] border-[#2B1A16]/18 bg-[#FFFDF9] px-4 sm:px-5 text-left text-base text-[#2B1A16] focus:ring-2 focus:ring-[#FF008E]">
                              <SelectValue placeholder={t("contact.placeholderInterest") as string} />
                            </SelectTrigger>
                            <SelectContent>
                              {interestOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="message" className="mb-1 sm:mb-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-[#2B1A16]/72">{t("contact.labelMessage")}</FieldLabel>
                          <Textarea id="message" name="message" placeholder={t("contact.placeholderMessage") as string} value={formData.message} onChange={handleChange} required rows={4} className="min-h-[120px] sm:min-h-[170px] resize-none rounded-[1rem] sm:rounded-[1.2rem] border-[2px] border-[#2B1A16]/18 bg-[#FFFDF9] px-4 sm:px-5 py-3 sm:py-4 text-base text-[#2B1A16] placeholder:text-[#2B1A16]/40 focus-visible:ring-2 focus-visible:ring-[#FF008E]" />
                        </Field>
                        {errorMessage && <p className="text-xs font-medium text-[#B42318]">{errorMessage}</p>}
                        <div className="pt-2">
                          <Button type="submit" disabled={isLoading} className="group h-12 sm:h-14 w-full rounded-[0.8rem] sm:rounded-[1rem] border-[3px] border-[#2B1A16] bg-[#BFD9F2] text-sm font-black uppercase tracking-[0.08em] text-[#2B1A16] shadow-[4px_4px_0_0_rgba(0,0,0,0.14)] transition-all duration-200 hover:bg-[#FF008E] hover:text-white">
                            {isLoading ? t("contact.sending") : (
                              <>{t("contact.submit")}<ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" /></>
                            )}
                          </Button>
                        </div>
                      </FieldGroup>
                    </form>

                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#2B1A16]/12 pt-5">
                      <p className="text-center sm:text-left text-[11px] sm:text-sm leading-relaxed text-[#2B1A16]/58">{t("contact.privacyNote")}</p>
                      <div className="hidden min-h-[96px] min-w-[132px] items-center justify-center rounded-[2rem] bg-[#DDF0D5] px-6 py-4 text-center sm:flex">
                        <span className="text-[0.95rem] font-black uppercase leading-[1.35] tracking-[0.16em] text-[#2B1A16]">{t("contact.responseIn")}</span>
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