"use client"

import { useEffect, useRef } from "react"

type JellyfishProps = {
  position: { x: string; y: string }
}

export function Jellyfish({ position }: JellyfishProps) {
  const jellyfishRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const jellyfish = jellyfishRef.current
    if (!jellyfish) return

    let scale = 1
    let growing = false

    const animate = () => {
      if (!jellyfish) return

      // Animación de pulsación
      if (growing) {
        scale += 0.003
        if (scale >= 1.1) growing = false
      } else {
        scale -= 0.003
        if (scale <= 0.9) growing = true
      }

      jellyfish.style.transform = `scale(${scale})`

      // Movimiento lento hacia arriba
      const currentTop = parseFloat(jellyfish.style.top || position.y)
      jellyfish.style.top = `${currentTop - 0.02}%`

      // Reiniciar posición cuando sale de pantalla
      if (currentTop < -10) {
        jellyfish.style.top = "110%"
      }

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [position.y])

  return (
    <div
      ref={jellyfishRef}
      className="absolute w-16 h-20"
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      {/* Campana de la medusa */}
      <div className="w-full h-10 bg-purple-300 bg-opacity-70 rounded-full" />

      {/* Tentáculos de la medusa */}
      <div className="relative w-full">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-purple-200 bg-opacity-60 w-1 animate-wave"
            style={{
              height: `${Math.random() * 20 + 10}px`,
              left: `${i * 20}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}