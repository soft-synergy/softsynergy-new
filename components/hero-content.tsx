"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function HeroContent() {
  const [showExitPopup, setShowExitPopup] = useState(false)
  const [hasShownPopup, setHasShownPopup] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownPopup) {
        setTimeout(() => {
          setShowExitPopup(true)
          setHasShownPopup(true)
        }, 1000)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [hasShownPopup])

  return (
    <>
      <main className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 lg:right-96 sm:right-8 z-20 max-w-3xl">
        <div className="text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight font-light text-white mb-3 sm:mb-4">
            <span className="font-bold text-transparent bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text">
              Budujemy Software...
            </span>
            <br />
            <span className="font-light tracking-tight text-white">Efektywnie</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-4 sm:mb-6 max-w-xl">
            Tworzymy strony internetowe i aplikacje, które faktycznie sprzedają.
            <br />
            <span className="text-orange-400 font-medium">Od pomysłu do realizacji w 2-4 tygodnie.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <a
              href="https://cal.com/soft-synergy/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-sm transition-all duration-200 hover:from-orange-600 hover:to-orange-700 cursor-pointer shadow-lg hover:shadow-orange-500/25 transform hover:scale-105 text-center"
            >
              Umów Spotkanie
            </a>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-transparent border-2 border-blue-400/50 text-blue-400 font-medium text-sm transition-all duration-200 hover:bg-blue-400/10 hover:border-blue-400 cursor-pointer text-center"
            >
              Zobacz Portfolio
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 text-xs text-white/70 mb-3 sm:mb-4 flex-wrap">
            <span>250+ projektów</span>
            <span>•</span>
            <span>98% pozytywnych opinii</span>
            <span>•</span>
            <span>2-4 tygodnie</span>
          </div>

          <div className="pt-3 sm:pt-4 border-t border-white/10">
            <div className="flex flex-col gap-1 sm:gap-2 text-xs text-white/70">
              <a
                href="mailto:jakub.czajka@soft-synergy.com"
                className="hover:text-white/90 transition-colors break-all"
              >
                jakub.czajka@soft-synergy.com
              </a>
              <a href="tel:+48793868886" className="hover:text-white/90 transition-colors">
                +48 793 868 886
              </a>
              <a
                href="https://github.com/soft-synergy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/90 transition-colors"
              >
                github.com/soft-synergy
              </a>
            </div>
          </div>
        </div>
      </main>

      {showExitPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-2xl p-4 sm:p-6 max-w-xs sm:max-w-sm w-full relative animate-in fade-in-0 zoom-in-95 duration-300">
            <button
              onClick={() => setShowExitPopup(false)}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-white/60 hover:text-white text-xl"
            >
              ×
            </button>

            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Zostań na chwilę!</h3>
              <p className="text-white/80 mb-3 sm:mb-4 text-xs sm:text-sm">
                Bezpłatna konsultacja może być kluczem do sukcesu Twojego projektu.
              </p>

              <a
                href="https://cal.com/soft-synergy/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-xs sm:text-sm mb-2 sm:mb-3"
                onClick={() => setShowExitPopup(false)}
              >
                Umów Spotkanie
              </a>
              <button
                onClick={() => setShowExitPopup(false)}
                className="text-white/60 text-xs sm:text-sm hover:text-white/80"
              >
                Może później
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
