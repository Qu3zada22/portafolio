"use client"

import { useEffect, useRef } from "react"

export default function OceanBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      const documentHeight = document.body.scrollHeight
      const maxScroll = documentHeight - viewportHeight

      // Calcular porcentaje de scroll (0 a 1)
      const scrollPercentage = Math.min(scrollY / maxScroll, 1)

      // Cambiar color de fondo según la profundidad
      // Superficie: Azul claro -> Océano profundo: Azul oscuro
      const r = Math.floor(135 - scrollPercentage * 115)
      const g = Math.floor(206 - scrollPercentage * 156)
      const b = Math.floor(235 - scrollPercentage * 55)

      containerRef.current.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Inicializar

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full transition-colors duration-500 ease-in-out"
      style={{ backgroundColor: "rgb(135, 206, 235)" }}
    >
      {/* Rayos de luz de la superficie */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white/30 to-transparent opacity-70"></div>
    </div>
  )
}