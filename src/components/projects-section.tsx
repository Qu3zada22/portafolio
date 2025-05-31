export default function ProjectsSection() {
  const projects = [
    {
      title: "Proyecto de Base de Datos",
      description: "Sistema de gestión de datos para una aplicación web utilizando SQL y Python.",
      tags: ["SQL", "Python", "Backend"],
    },
    {
      title: "Aplicación Web",
      description: "Desarrollo de una aplicación web con HTML, CSS y JavaScript.",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Algoritmos de Estructura de Datos",
      description: "Implementación de algoritmos de búsqueda y ordenamiento en Python.",
      tags: ["Python", "Algoritmos", "Estructura de Datos"],
    },
  ]

  return (
    <section id="proyectos" className="min-h-screen flex items-center relative">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl">
          <h2 className="text-4xl font-bold text-white mb-10">Mis Proyectos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-blue-900/50 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-600 flex items-center justify-center">
                  <span className="text-4xl text-white opacity-50">#{index + 1}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-cyan-100 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-blue-700/50 text-cyan-200 text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-white text-lg">
              Estos son algunos de mis proyectos académicos. ¡Estoy trabajando en más!
            </p>
            
          </div>
        </div>
      </div>
    </section>
  )
}
