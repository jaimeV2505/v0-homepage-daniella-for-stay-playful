"use client"

import { useState } from "react"
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
import { ArrowRight, Check, Mail, Calendar } from "lucide-react"

const interestOptions = [
  { value: "1-1-coaching", label: "1:1 Coaching" },
  { value: "8-week", label: "8-Week Program" },
  { value: "12-week", label: "12-Week Program" },
  { value: "general", label: "General Inquiry" },
  { value: "workshop", label: "Workshop / Event" },
]

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitted(true)
    setIsLoading(false)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="bg-sp-lilac py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute top-0 w-full h-full rotate-180"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#F5EBE0"
            opacity="1"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sp-hot-pink font-semibold text-xs tracking-widest uppercase mb-3 font-sans">
            Let's Connect
          </p>
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-sp-deep-brown leading-[1.1] text-balance mb-6">
            Ready to start your{" "}
            <span className="italic">journey?</span>
          </h2>
          <p className="text-lg text-sp-deep-brown/70 text-pretty max-w-2xl mx-auto">
            Send a message and let's explore how we can work together to build a healthier, more playful life.
          </p>
        </div>

        {/* Form */}
        {isSubmitted ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 text-center shadow-sm">
            <div className="w-20 h-20 bg-sp-soft-green rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-sp-hot-pink" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-sp-deep-brown mb-3">
              Message received!
            </h3>
            <p className="text-sp-deep-brown/70 text-lg mb-6">
              Thank you for reaching out. I'll be in touch within 24-48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-sp-deep-brown/60">
                <Mail className="h-5 w-5" />
                <span>Check your inbox</span>
              </div>
              <div className="flex items-center gap-2 text-sp-deep-brown/60">
                <Calendar className="h-5 w-5" />
                <span>Response within 48h</span>
              </div>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border-2 border-sp-deep-brown/10"
          >
            <FieldGroup className="space-y-6">
              {/* Name */}
              <Field>
                <FieldLabel htmlFor="name" className="text-sp-deep-brown font-medium mb-2">
                  Your name
                </FieldLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-14 rounded-lg bg-sp-cream border-sp-deep-brown/10 focus-visible:ring-sp-hot-pink text-sp-deep-brown placeholder:text-sp-deep-brown/40 text-base"
                />
              </Field>

              {/* Email */}
              <Field>
                <FieldLabel htmlFor="email" className="text-sp-deep-brown font-medium mb-2">
                  Email address
                </FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-14 rounded-lg bg-sp-cream border-sp-deep-brown/10 focus-visible:ring-sp-hot-pink text-sp-deep-brown placeholder:text-sp-deep-brown/40 text-base"
                />
              </Field>

              {/* Interest */}
              <Field>
                <FieldLabel className="text-sp-deep-brown font-medium mb-2">
                  I'm interested in...
                </FieldLabel>
                <Select
                  value={formData.interest}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, interest: value }))
                  }
                >
                  <SelectTrigger className="h-14 rounded-lg bg-sp-cream border-sp-deep-brown/10 focus:ring-sp-hot-pink text-sp-deep-brown text-base">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    {interestOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>

              {/* Message */}
              <Field>
                <FieldLabel htmlFor="message" className="text-sp-deep-brown font-medium mb-2">
                  Your message
                </FieldLabel>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me a bit about yourself and what you're looking for..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="rounded-lg bg-sp-cream border-sp-deep-brown/10 focus-visible:ring-sp-hot-pink text-sp-deep-brown placeholder:text-sp-deep-brown/40 resize-none text-base"
                />
              </Field>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-14 bg-sp-hot-pink hover:bg-sp-hot-pink/90 text-white rounded-lg font-bold text-base border-2 border-sp-hot-pink shadow-md hover:shadow-lg transition-all"
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </FieldGroup>

            <p className="text-center text-sm text-sp-deep-brown/50 mt-6">
              Your information is safe and will never be shared.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
