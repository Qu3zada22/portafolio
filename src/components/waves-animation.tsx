"use client"

import { useEffect, useRef } from "react"

export function WavesAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let width = window.innerWidth
    const height = 200

    canvas.width = width
    canvas.height = height

    // Propiedades de las olas
    const waves = [
      { y: 0, amplitude: 20, frequency: 0.02, speed: 0.05, color: "rgba(255, 255, 255, 0.3)" },
      { y: 30, amplitude: 15, frequency: 0.03, speed: 0.07, color: "rgba(255, 255, 255, 0.2)" },
      { y: 60, amplitude: 10, frequency: 0.04, speed: 0.09, color: "rgba(255, 255, 255, 0.1)" },
    ]

    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Dibujar cada ola
      waves.forEach((wave) => {
        ctx.beginPath()
        ctx.moveTo(0, wave.y)

        for (let x = 0; x < width; x++) {
          const y = wave.y + Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude
          ctx.lineTo(x, y)
        }

        ctx.lineTo(width, height)
        ctx.lineTo(0, height)
        ctx.closePath()

        ctx.fillStyle = wave.color
        ctx.fill()
      })

      time += 0.1
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      width = window.innerWidth
      canvas.width = width
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full pointer-events-none" 
      style={{ height: "200px" }} 
    />
  )
}