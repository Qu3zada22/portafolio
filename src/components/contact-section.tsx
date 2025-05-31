export default function ContactSection() {
  return (
    <section id="contacto" className="min-h-screen flex items-center relative">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl">
          <h2 className="text-4xl font-bold text-white mb-10 text-center">Contáctame</h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Email */}
              <div className="text-center">
                <div className="text-cyan-400 text-6xl mb-4">📧</div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-cyan-200">anggiedaniella@gmail.com</p>
              </div>

              {/* Teléfono */}
              <div className="text-center">
                <div className="text-cyan-400 text-6xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-white mb-2">Teléfono</h3>
                <p className="text-cyan-200">+502 59400020</p>
              </div>

              {/* Ubicación */}
              <div className="text-center">
                <div className="text-cyan-400 text-6xl mb-4">📍</div>
                <h3 className="text-xl font-semibold text-white mb-2">Ubicación</h3>
                <p className="text-cyan-200">Guatemala</p>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-cyan-300 mb-6">Sígueme en mis redes</h3>
              <div className="flex justify-center space-x-8">
                {/* LinkedIn */}
                <a href="#" className="group flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-blue-700 transition-colors group-hover:scale-110 transform transition-transform">
                    <span className="text-2xl font-bold">in</span>
                  </div>
                  <span className="text-white mt-2 text-sm">LinkedIn</span>
                </a>

                {/* GitHub */}
                <a href="#" className="group flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-blue-700 transition-colors group-hover:scale-110 transform transition-transform">
                    <span className="text-xl font-bold">GH</span>
                  </div>
                  <span className="text-white mt-2 text-sm">GitHub</span>
                </a>

                {/* Instagram */}
                <a href="#" className="group flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-blue-700 transition-colors group-hover:scale-110 transform transition-transform">
                    <span className="text-xl font-bold">IG</span>
                  </div>
                  <span className="text-white mt-2 text-sm">Instagram</span>
                </a>
              </div>
            </div>

            {/* Mensaje adicional */}
            <div className="text-center mt-12">
              <div className="bg-blue-900/30 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-cyan-300 mb-3">¡Conectemos!</h4>
                <p className="text-white">
                  Siempre estoy abierta a nuevas oportunidades, colaboraciones y conversaciones interesantes. No dudes
                  en contactarme si quieres hablar sobre tecnología, proyectos o... ¡biología marina! Aún estoy aprendiendo jeje
                  es un largo camino que aún debo recorrer. 
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-white">
          <div className="border-t border-white/20 pt-8">
            <p>&copy; {new Date().getFullYear()} Anggie Quezada. Todos los derechos reservados.</p>

          </div>
        </footer>
      </div>
    </section>
  )
}
