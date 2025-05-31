"use client"

import { useEffect, useRef } from "react"

type FishProps = {
  type: "tropical" | "mid" | "deep"
  position: { x: string; y: string }
  direction: "left" | "right"
}

export function Fish({ type, position, direction }: FishProps) {
  const fishRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fish = fishRef.current
    if (!fish) return

    let posX = parseFloat(position.x)
    const speed = type === "tropical" ? 0.05 : type === "mid" ? 0.03 : 0.02
    const directionMultiplier = direction === "right" ? 1 : -1

    const animate = () => {
      if (!fish) return

      posX += speed * directionMultiplier

      // Hacer que el pez vuelva al otro lado cuando sale de pantalla
      if (direction === "right" && posX > 110) {
        posX = -10
      } else if (direction === "left" && posX < -10) {
        posX = 110
      }

      fish.style.left = `${posX}%`
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [position.x, direction, type])

  // Diferentes estilos según el tipo de pez
  const getFishStyle = () => {
    switch (type) {
      case "tropical":
        return "bg-yellow-400 shadow-lg"
      case "mid":
        return "bg-blue-400"
      case "deep":
        return "bg-indigo-800"
      default:
        return "bg-blue-400"
    }
  }

  const getFishSize = () => {
    switch (type) {
      case "tropical":
        return "w-12 h-6"
      case "mid":
        return "w-16 h-8"
      case "deep":
        return "w-20 h-10"
      default:
        return "w-12 h-6"
    }
  }

  return (
    <div
      ref={fishRef}
      className={`absolute ${getFishSize()} ${getFishStyle()} rounded-full transition-all duration-300`}
      style={{
        left: position.x,
        top: position.y,
        transform: direction === "left" ? "scaleX(-1)" : "",
      }}
    >
      {/* Cola del pez */}
      <div
        className={`absolute ${getFishStyle()} h-full w-1/3 rounded-full`}
        style={{
          right: direction === "right" ? "-20%" : "auto",
          left: direction === "left" ? "-20%" : "auto",
          clipPath: direction === "right" ? "polygon(0 0, 0% 100%, 100% 50%)" : "polygon(100% 0, 100% 100%, 0% 50%)",
        }}
      />

      {/* Ojo del pez */}
      <div
        className="absolute bg-white rounded-full w-2 h-2 top-1"
        style={{
          right: direction === "right" ? "25%" : "auto",
          left: direction === "left" ? "25%" : "auto",
        }}
      >
        <div className="absolute bg-black rounded-full w-1 h-1 top-0.5 left-0.5" />
      </div>
    </div>
  )
}