import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

const programs = [
  {
    title: "1:1 Coaching",
    subtitle: "Personal guidance",
    description: "Tailored support designed around your unique needs, lifestyle, and goals. Direct access to personalized nutrition and wellness coaching.",
    features: [
      "Weekly private sessions",
      "Custom meal planning",
      "Ongoing support & check-ins",
      "Flexible scheduling"
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-barcelos_fotos-1484908-2859616-RSXVYbKFUchOkoFjO2YWxJej7oPZdb.jpg",
    bgColor: "bg-sp-lilac",
    accent: "text-sp-hot-pink"
  },
  {
    title: "8-Week Program",
    subtitle: "Foundation builder",
    description: "A structured journey to establish healthy habits and transform your relationship with food. Perfect for those ready to commit to change.",
    features: [
      "Group learning sessions",
      "Community support",
      "Habit-building framework",
      "Resources & recipes"
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-ekaterina-bolovtsova-7658610-xFIqMehLfqF15tHKsUvCLPVQoeSLM1.jpg",
    bgColor: "bg-sp-sky-blue",
    accent: "text-sp-orange"
  },
  {
    title: "12-Week Program",
    subtitle: "Deep transformation",
    description: "The comprehensive experience for lasting change. Extended support, deeper work, and the time needed for true transformation.",
    features: [
      "Extended 1:1 sessions",
      "In-depth lifestyle analysis",
      "Long-term habit integration",
      "Full ongoing support"
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-rdne-6923559-HVCXeS7lPLpEuBsxMj64pIG1MVoSnW.jpg",
    bgColor: "bg-sp-pastel-pink",
    accent: "text-sp-hot-pink"
  }
]

export function Programs() {
  return (
    <section id="programs" className="bg-sp-cream py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-sp-hot-pink font-semibold text-xs tracking-widest uppercase mb-3 font-sans">
            Programs
          </p>
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-sp-deep-brown leading-[1.1] text-balance mb-6">
            Your path to{" "}
            <span className="italic text-sp-hot-pink">wellbeing</span>
          </h2>
          <p className="text-lg text-sp-deep-brown/70 max-w-3xl text-pretty">
            Every journey is unique. Choose the level of support that fits your life.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`${program.bgColor} rounded-3xl overflow-hidden group hover:shadow-xl transition-shadow duration-300`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <p className={`${program.accent} font-semibold text-sm tracking-wide uppercase mb-2`}>
                  {program.subtitle}
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl text-sp-deep-brown mb-3">
                  {program.title}
                </h3>
                <p className="text-sp-deep-brown/70 text-sm sm:text-base leading-relaxed mb-6">
                  {program.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-sp-deep-brown/80">
                      <Check className="h-4 w-4 text-sp-hot-pink shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  className="w-full bg-sp-deep-brown hover:bg-sp-deep-brown/90 text-white rounded-lg font-semibold py-3 border-2 border-sp-deep-brown shadow-md hover:shadow-lg transition-all"
                >
                  <Link href="#contact" className="flex items-center justify-center">
                    Book a Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
