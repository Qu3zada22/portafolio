"use client"

import { useEffect, useState } from "react"
import { Fish } from "./creatures/fish"
import { Jellyfish } from "./creatures/jellyfish"

export default function MarineCreatures() {
  const [scrollDepth, setScrollDepth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      const documentHeight = document.body.scrollHeight
      const maxScroll = documentHeight - viewportHeight

      const scrollPercentage = Math.min(scrollY / maxScroll, 1)
      setScrollDepth(scrollPercentage)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Determinar qué criaturas mostrar según la profundidad del scroll
  const showSurfaceFish = scrollDepth < 0.4
  const showMidwaterCreatures = scrollDepth >= 0.2 && scrollDepth < 0.8
  const showDeepSeaCreatures = scrollDepth >= 0.6

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Criaturas de la superficie */}
      {showSurfaceFish && (
        <>
          <Fish type="tropical" position={{ x: "10%", y: "20%" }} direction="right" />
          <Fish type="tropical" position={{ x: "70%", y: "15%" }} direction="left" />
          <Fish type="tropical" position={{ x: "40%", y: "30%" }} direction="right" />
        </>
      )}

      {/* Criaturas de aguas medias */}
      {showMidwaterCreatures && (
        <>
          <Fish type="mid" position={{ x: "20%", y: "50%" }} direction="right" />
          <Fish type="mid" position={{ x: "65%", y: "45%" }} direction="left" />
          <Jellyfish position={{ x: "40%", y: "55%" }} />
          <Jellyfish position={{ x: "75%", y: "60%" }} />
        </>
      )}

      {/* Criaturas de aguas profundas */}
      {showDeepSeaCreatures && (
        <>
          <Fish type="deep" position={{ x: "30%", y: "75%" }} direction="right" />
          <Fish type="deep" position={{ x: "60%", y: "80%" }} direction="left" />
        </>
      )}
    </div>
  )
}