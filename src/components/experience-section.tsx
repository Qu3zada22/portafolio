export default function ExperienceSection() {
  const experiences = [
    {
      title: "D-Hive",
      role: "Colaborador",
      period: "Actual",
      description:
        "Trabajo en equipo para brindar servicios de manufactura digital, incluyendo impresión 3D y corte láser. Desarrollo habilidades de comunicación, atención al usuario y mantenimiento de equipos.",
      skills: ["Trabajo en equipo", "Impresión 3D", "Corte láser", "Atención al usuario"],
    },
    {
      title: "Universidad",
      role: "Estudiante de Ingeniería en Computación de 3er año",
      period: "Actual",
      description:
        "Cursando materias como bases de datos, sistemas web, estructura de datos y programación en Python. Desarrollo de proyectos académicos y participación en actividades universitarias. También he podido colaborar en el Caes para ingresar datos, en especial en Excel.",
      skills: ["Bases de datos", "Sistemas web", "Estructura de datos", "Python"],
    },
  ]

  return (
    <section id="experiencia" className="min-h-screen flex items-center relative">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl">
          <h2 className="text-4xl font-bold text-white mb-10">Mi Experiencia</h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-cyan-400">
                <div className="absolute w-4 h-4 bg-cyan-400 rounded-full -left-[9px] top-0"></div>
                <div className="mb-1">
                  <span className="text-cyan-300 text-sm">{exp.period}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                <h4 className="text-xl text-cyan-200 mb-3">{exp.role}</h4>
                <p className="text-white mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="bg-blue-800/50 text-white text-sm px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}