"use client"

import { useState, useEffect } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-blue-900/80 backdrop-blur-md py-2" : "bg-transparent py-4"
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-white font-bold text-2xl">
          <span className="text-cyan-300">Ocean</span>Portfolio
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#inicio" className="text-white hover:text-cyan-300 transition-colors">Inicio</a>
          <a href="#sobre-mi" className="text-white hover:text-cyan-300 transition-colors">Sobre mí</a>
          <a href="#habilidades" className="text-white hover:text-cyan-300 transition-colors">Habilidades</a>
          <a href="#experiencia" className="text-white hover:text-cyan-300 transition-colors">Experiencia</a>
          <a href="#contacto" className="text-white hover:text-cyan-300 transition-colors">Contacto</a>
        </nav>
      </div>
    </header>
  )
}