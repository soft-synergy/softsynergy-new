"use client"

import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
// import PulsingCircle from "@/components/pulsing-circle"
import ShaderBackground from "@/components/shader-background"
import Testimonials from "@/components/testimonials"

export default function SoftSynergyHome() {
  return (
    <ShaderBackground>
      <Header />
      <HeroContent />
      <Testimonials />
      {/* <PulsingCircle /> */}
    </ShaderBackground>
  )
}
