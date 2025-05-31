import OceanBackground from "@/components/ocean-background"
import Header from "@/components/header"
import MarineCreatures from "@/components/marine-creatures"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"

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
              Hola, soy <span className="text-cyan-300">Anggie Quezada</span>
            </h1>
            <p className="text-xl text-white mb-8">
              Estudiante de Ingeniería en Ciencias de la Computación y Tecnologías de la Información
            </p>
            <div className="space-x-4">
              <a
                href="#proyectos"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-full transition-colors inline-block"
              >
                Ver mi trabajo
              </a>
              <a
                href="#contacto"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-3 px-6 rounded-full transition-colors inline-block"
              >
                Contactarme
              </a>
            </div>
          </div>
        </section>

        {/* Sección sobre mí */}
        <section id="sobre-mi" className="min-h-screen flex items-center">
          <div className="container mx-auto px-4 py-16">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl">
              <h2 className="text-4xl font-bold text-white mb-6">Un poco acerca de mí</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="rounded-full overflow-hidden border-4 border-cyan-300 w-48 h-48 mx-auto">
      
                    <img src="/images/mi-foto.jpg" alt="a" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-white text-lg mb-4">
                    Holii. Me llamo Anggie y soy un estudiante de Ingeniería en Ciencias de la Computación y Tecnologías
                    de la Información en la Universidad del Valle de Guatemala. Tengo una gusto grande hacia los
                    mamíferos, plantas y dinosaurios. Este portafolio representa la fusión de algunos de mis intereses:
                    la tecnología, los animales y el mar. Me gusta bastante la moda, la danza y poder ayudar a quien lo
                    necesite.
                  </p>
                  <p className="text-white text-lg mb-4">
                    Desde siempre me ha gustado resolver problemas, entender lo que hay detrás de cada cosita. La
                    ingeniería me permite hacer eso todos los días: pensar, crear y mejorar. Actualmente trabajo en
                    D-hive, donde he desarrollado habilidades en manufactura digital, trabajo en equipo y atención al
                    usuario.
                  </p>
                  <p className="text-white text-lg">
                    Cuando no estoy frente al computador, me gusta disfrutar de las cosas simples: salir con mi familia,
                    compartir momentos con mis amigos, reírnos hasta que nos duela la panza. Tengo un perrito que es
                    parte de todo. Me encantan las excursiones donde puedo aprender sobre animales o plantas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de habilidades */}
        <SkillsSection />

        {/* Sección de experiencia */}
        <ExperienceSection />

        {/* Sección de proyectos */}
        <ProjectsSection />

        {/* Sección de contacto */}
        <ContactSection />
      </div>
      <MarineCreatures />
    </main>
  )
}
