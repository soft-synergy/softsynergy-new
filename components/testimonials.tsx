"use client"

import { useRef } from "react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Robert M.",
      company: "TechStart Solutions",
      text: "Aplikacja mobilna od Soft Synergy zrewolucjonizowała nasz proces sprzedaży. ROI 300% w 3 miesiące.",
      rating: 5,
    },
    {
      name: "Katarzyna S.",
      company: "MedClinic Group",
      text: "System zarządzania pacjentami działa bezawaryjnie od 2 lat. Oszczędność czasu to 40% dziennie.",
      rating: 5,
    },
    {
      name: "Michał P.",
      company: "FinanceFlow",
      text: "Dashboard analityczny przewyższył nasze oczekiwania. Klienci chwalą intuicyjność interfejsu.",
      rating: 5,
    },
    {
      name: "Anna K.",
      company: "RetailPro",
      text: "E-commerce od Soft Synergy zwiększył nasze sprzedaże o 180%. Najlepsza inwestycja w historii firmy.",
      rating: 5,
    },
    {
      name: "Tomasz L.",
      company: "LogiFlow",
      text: "System logistyczny zoptymalizował nasze procesy. Redukcja kosztów o 35% w pierwszym roku.",
      rating: 5,
    },
  ]

  const scrollRef = useRef<HTMLDivElement>(null)

  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="hidden lg:block absolute bottom-8 right-8 z-20 max-w-sm">
      <div className="space-y-4">
        <h3 className="text-white font-semibold text-lg mb-4">Co mówią nasi klienci:</h3>
        <div className="h-96 overflow-hidden">
          <div
            ref={scrollRef}
            className="animate-scroll space-y-4"
            style={{
              animation: "scroll 40s linear infinite",
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 flex-shrink-0"
                style={{
                  filter: "url(#glass-effect)",
                }}
              >
                <div className="flex items-center mb-2">
                  <div className="flex text-orange-400 text-sm">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-white/90 text-base mb-3 leading-relaxed">"{testimonial.text}"</p>
                <div className="text-white/70 text-xs">
                  <span className="font-medium">{testimonial.name}</span>
                  <span className="text-white/50"> • {testimonial.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </section>
  )
}
