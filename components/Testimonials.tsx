import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "For the first time in my life, I actually enjoy eating without guilt. This program changed everything about how I see food and my body.",
    author: "Emma L.",
    role: "12-Week Program Graduate",
    badge: "Life-changing"
  },
  {
    quote: "The approach is so refreshing — no calorie counting, no restrictions. Just genuine support and practical guidance that fits my busy life.",
    author: "Marcus K.",
    role: "1:1 Coaching Client",
    badge: "Highly recommend"
  },
  {
    quote: "I've tried every diet out there. This is the first time something has actually stuck because it's not a diet — it's a whole new mindset.",
    author: "Sofia R.",
    role: "8-Week Program Graduate",
    badge: "Game-changer"
  }
]

export function Testimonials() {
  return (
    <section className="bg-sp-pastel-pink py-20 sm:py-28 relative overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute top-0 w-full h-full rotate-180"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,googol,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#F5F3F0"
            opacity="1"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sp-hot-pink font-semibold text-sm tracking-widest uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-sp-deep-brown text-balance">
            What clients{" "}
            <span className="italic">say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 relative"
            >
              {/* Badge */}
              <span className="absolute -top-3 right-6 bg-sp-hot-pink text-white text-xs font-bold px-4 py-1.5 rounded-full">
                {testimonial.badge}
              </span>

              {/* Quote Icon */}
              <Quote className="h-10 w-10 text-sp-hot-pink/20 mb-4" />

              {/* Quote */}
              <blockquote className="text-sp-deep-brown/80 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sp-lilac rounded-full flex items-center justify-center">
                  <span className="text-sp-deep-brown font-semibold text-sm">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sp-deep-brown">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-sp-deep-brown/60">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#F5F3F0"
            opacity="1"
          />
        </svg>
      </div>
    </section>
  )
}
