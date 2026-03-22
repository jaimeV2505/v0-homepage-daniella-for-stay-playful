"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Check } from "lucide-react"

export function Community() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsLoading(false)
  }

  return (
    <section className="bg-sp-warm-beige py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <p className="text-sp-hot-pink font-semibold text-sm tracking-widest uppercase mb-4">
          Stay Connected
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-sp-deep-brown text-balance mb-4">
          Join the{" "}
          <span className="italic">community</span>
        </h2>
        <p className="text-lg text-sp-deep-brown/70 text-pretty mb-8">
          Get weekly insights, recipes, and updates on upcoming workshops and events. 
          No spam, just good vibes.
        </p>

        {/* Newsletter Form */}
        {isSubmitted ? (
          <div className="bg-sp-soft-green rounded-2xl p-8 flex flex-col items-center">
            <div className="w-16 h-16 bg-sp-hot-pink rounded-full flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-serif text-2xl text-sp-deep-brown mb-2">
              Welcome to the community!
            </h3>
            <p className="text-sp-deep-brown/70">
              Check your inbox for a welcome message.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-14 rounded-full px-6 bg-white border-0 text-sp-deep-brown placeholder:text-sp-deep-brown/50 focus-visible:ring-sp-hot-pink"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="h-14 bg-sp-hot-pink hover:bg-sp-hot-pink/90 text-white rounded-full px-8 font-semibold shrink-0"
            >
              {isLoading ? (
                "Joining..."
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </form>
        )}

        {/* Trust Indicators */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-sp-deep-brown/60">
          <span>500+ subscribers</span>
          <span className="hidden sm:inline">|</span>
          <span>Weekly updates</span>
          <span className="hidden sm:inline">|</span>
          <span>Unsubscribe anytime</span>
        </div>
      </div>
    </section>
  )
}
