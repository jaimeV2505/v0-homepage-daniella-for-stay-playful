"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const featuredTestimonial = {
  quote:
    "For the first time in my life, I actually enjoy eating without guilt. This completely changed how I relate to food, my body, and my day-to-day life.",
  author: "Emma L.",
  role: "12-Week Program Graduate",
  badge: "Life-changing",
  initial: "E",
}

const testimonials = [
  {
    quote:
      "The approach is so refreshing — no calorie counting, no restrictions. Just genuine support and practical guidance that fits my busy life.",
    author: "Marcus K.",
    role: "1:1 Coaching Client",
    badge: "Highly recommend",
    initial: "M",
  },
  {
    quote:
      "I've tried every diet out there. This is the first time something has actually stuck because it's not a diet — it's a whole new mindset.",
    author: "Sofia R.",
    role: "8-Week Program Graduate",
    badge: "Game-changer",
    initial: "S",
  },
  {
    quote:
      "I finally feel like I can trust myself again. The support felt personal, calm, and realistic — never overwhelming.",
    author: "Nora B.",
    role: "Private Coaching Client",
    badge: "So supportive",
    initial: "N",
  },
]

const tapeItems = [
  "TESTIMONIALS",
  "REAL STORIES",
  "CLIENT LOVE",
  "STAY PLAYFUL",
  "SOFTER WELLBEING",
  "TESTIMONIALS",
  "REAL STORIES",
  "CLIENT LOVE",
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#F7EAF2] py-20 sm:py-24 lg:py-28"
    >
      {/* soft top divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-[linear-gradient(180deg,rgba(255,255,255,0.28),rgba(255,255,255,0))]" />

      {/* background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[8%] h-48 w-48 rounded-full bg-[#FFABFF]/18 blur-3xl" />
        <div className="absolute right-[10%] top-[22%] h-56 w-56 rounded-full bg-[#FF008E]/10 blur-3xl" />
        <div className="absolute bottom-[10%] left-[28%] h-64 w-64 rounded-full bg-white/25 blur-3xl" />
      </div>

      {/* decorative tape */}
      <div className="pointer-events-none absolute inset-x-0 top-16 hidden h-32 lg:block">
        <div className="absolute left-[-8%] right-[-8%] top-6 rotate-[-4deg] border-y-2 border-[#2B1A16] bg-[#E7A9D3] py-3">
          <div className="flex overflow-hidden whitespace-nowrap">
            <motion.div
              initial={{ x: "0%" }}
              animate={{ x: "-50%" }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="flex min-w-max items-center"
            >
              {[...tapeItems, ...tapeItems, ...tapeItems].map((item, index) => (
                <span
                  key={`${item}-${index}-top`}
                  className="mx-5 font-serif text-[2.5rem] leading-none tracking-[-0.04em] text-[#2B1A16]"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="absolute left-[-10%] right-[-10%] top-16 rotate-[3deg] border-y-2 border-[#2B1A16] bg-[#F4DCE9] py-3 opacity-90">
          <div className="flex overflow-hidden whitespace-nowrap">
            <motion.div
              initial={{ x: "-50%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex min-w-max items-center"
            >
              {[...tapeItems, ...tapeItems, ...tapeItems].map((item, index) => (
                <span
                  key={`${item}-${index}-bottom`}
                  className="mx-5 font-serif text-[2.15rem] leading-none tracking-[-0.04em] text-[#2B1A16]"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-4xl pt-8 text-center lg:pt-28"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#FF008E]">
            Testimonials
          </p>

          <h2 className="font-serif text-[2.9rem] leading-[0.95] tracking-[-0.05em] text-[#2B1A16] sm:text-[4rem] lg:text-[5.2rem]">
            What clients <span className="italic">say</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#2B1A16]/70">
            Real words from people who wanted a gentler, more sustainable
            relationship with health — and found a way of doing it that actually
            fits real life.
          </p>
        </motion.div>

        {/* main featured card */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
          className="relative mx-auto mt-14 max-w-5xl"
        >
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-[#FF008E]/10 blur-[1px]" />

          <div className="relative overflow-hidden rounded-[2rem] border-[2.5px] border-[#2B1A16] bg-[#FFFDF9]/86 shadow-[10px_10px_0_0_rgba(0,0,0,0.08)] backdrop-blur-sm">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              {/* left quote block */}
              <div className="flex flex-col items-center justify-center border-b-[2.5px] border-[#2B1A16] px-8 py-12 text-center lg:border-b-0 lg:border-r-[2.5px] lg:px-12 lg:py-16">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-[2px] border-[#2B1A16] bg-[#F4E7F7] text-2xl font-bold text-[#2B1A16] shadow-[4px_4px_0_0_rgba(0,0,0,0.06)]">
                  {featuredTestimonial.initial}
                </div>

                <blockquote className="max-w-[18ch] font-serif text-[2rem] leading-[1.02] tracking-[-0.05em] text-[#2B1A16] sm:text-[2.5rem] lg:text-[3.1rem]">
                  “The best investment in my wellbeing I’ve ever made.”
                </blockquote>

                <span className="mt-5 inline-flex rounded-full border-[2px] border-[#2B1A16] bg-[#FFBD17] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2B1A16] shadow-[4px_4px_0_0_rgba(0,0,0,0.06)]">
                  {featuredTestimonial.badge}
                </span>
              </div>

              {/* right detailed quote */}
              <div className="flex flex-col justify-center px-8 py-12 lg:px-12 lg:py-16">
                <Quote className="mb-6 h-10 w-10 text-[#FF008E]/25" />

                <p className="max-w-2xl text-lg leading-9 text-[#2B1A16]/78">
                  {featuredTestimonial.quote}
                </p>

                <div className="mt-8">
                  <p className="font-serif text-[1.9rem] leading-none text-[#2B1A16]">
                    {featuredTestimonial.author}
                  </p>
                  <p className="mt-2 text-base text-[#2B1A16]/62">
                    {featuredTestimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* smooth divider */}
        <div className="my-12 flex items-center justify-center">
          <div className="h-px w-full max-w-5xl bg-[#2B1A16]/12" />
        </div>

        {/* secondary cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.author}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.65,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              className="group relative"
            >
              <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-[2rem] bg-[#FFABFF]/22 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3" />

              <div className="relative h-full rounded-[2rem] border-[2.5px] border-[#2B1A16] bg-[#FFFDF9]/88 p-7 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-transform duration-300 group-hover:-translate-y-1">
                <div className="absolute -top-3 right-5 rounded-full border-[2px] border-[#2B1A16] bg-[#FF008E] px-4 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-white shadow-[3px_3px_0_0_rgba(0,0,0,0.06)]">
                  {testimonial.badge}
                </div>

                <Quote className="mb-5 h-9 w-9 text-[#E7A9D3]" />

                <blockquote className="text-[1.08rem] leading-9 text-[#2B1A16]/78">
                  “{testimonial.quote}”
                </blockquote>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-[2px] border-[#2B1A16] bg-[#F4E7F7] text-sm font-bold text-[#2B1A16]">
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-[#2B1A16]">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-[#2B1A16]/58">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* bottom soft divider */}
        <div className="mt-14 flex justify-center">
          <div className="h-[2px] w-32 rounded-full bg-[#FF008E]/24" />
        </div>
      </div>
    </section>
  )
}