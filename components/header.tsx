"use client"

import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between p-4 sm:p-6">
      <Link href="/" className="flex items-center gap-2 sm:gap-3">
        <Image
          src="/images/soft-synergy-logo.png"
          alt="Soft Synergy Logo"
          width={32}
          height={32}
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
        <span className="text-white font-semibold text-base sm:text-lg">Soft Synergy</span>
      </Link>

      <nav className="hidden md:flex items-center space-x-2">
        <Link
          href="/"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Strona Główna
        </Link>
        <Link
          href="/portfolio"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Portfolio
        </Link>
      </nav>

      <div className="relative flex items-center group">
        <a
          href="https://cal.com/soft-synergy/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 sm:px-6 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center"
        >
          <span className="hidden sm:inline">Umów Spotkanie</span>
          <span className="sm:hidden">Kontakt</span>
        </a>
      </div>
    </header>
  )
}

export { Header }
