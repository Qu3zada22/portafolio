export default function SkillsSection() {
  const technicalSkills = [
    { name: "HTML/CSS", level: 85 },
    { name: "JavaScript", level: 70 },
    { name: "Python", level: 75 },
    { name: "Bases de Datos", level: 65 },
    { name: "Sistemas Web", level: 60 },
    { name: "Estructura de Datos", level: 70 },
  ]

  const softSkills = [
    { name: "Responsabilidad", level: 95 },
    { name: "Disciplina", level: 90 },
    { name: "Comunicación", level: 90 },
    { name: "Trabajo en Equipo", level: 95 },
    { name: "Atención al Usuario", level: 95 },
    { name: "Resolución de Problemas", level: 85 },
  ]

  return (
    <section id="habilidades" className="min-h-screen flex items-center relative">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl">
          <h2 className="text-4xl font-bold text-white mb-10">Mis Habilidades</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-cyan-300 mb-6">Habilidades Técnicas</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-cyan-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-cyan-500 h-2.5 rounded-full transition-all duration-1000" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-cyan-300 mb-6">Habilidades Blandas</h3>
              <div className="space-y-6">
                {softSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-cyan-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-cyan-500 h-2.5 rounded-full transition-all duration-1000" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-cyan-300 mb-6">Habilidades Adicionales</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Impresión 3D",
                "Corte Láser", 
                "Mantenimiento de Máquinas",
                "Diseño 3D",
                "Atención al Cliente",
                "Gestión de Proyectos",
              ].map((skill) => (
                <span key={skill} className="bg-blue-800/50 text-white px-4 py-2 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}