import OceanBackground from "@/components/ocean-background"
import Header from "@/components/header"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <OceanBackground />
      <div className="relative z-10">
        <Header />
        
        {/* Sección de inicio */}
        <section id="inicio" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-6">
              Hola, soy <span className="text-cyan-300">Tu Nombre</span>
            </h1>
            <p className="text-xl text-white mb-8">
              Estudiante de Ingeniería en Computación con pasión por el océano
            </p>
            <div className="space-x-4">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-full transition-colors">
                Ver mi trabajo
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-3 px-6 rounded-full transition-colors">
                Contactarme
              </button>
            </div>
          </div>
        </section>

        {/* Sección sobre mí */}
        <section id="sobre-mi" className="min-h-screen flex items-center">
          <div className="container mx-auto px-4 py-16">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl">
              <h2 className="text-4xl font-bold text-white mb-6">Sobre mí</h2>
              <p className="text-white text-lg mb-4">
                ¡Hola! Soy un estudiante de Ingeniería en Computación con una pasión secreta por la biología marina.
                Este portafolio representa la fusión de mis dos grandes intereses: la tecnología y el océano.
              </p>
              <p className="text-white text-lg">
                Actualmente trabajo en D-hive, donde he desarrollado habilidades en manufactura digital,
                trabajo en equipo y atención al usuario.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}