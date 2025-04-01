
const estudiantes = [
{nombre: `Ana`, nota: 85},
{nombre: `Luis`, nota: 45},
{nombre: `Carla`, nota: 70}
]

const estudiantesGanadores = estudiantes.filter((estudiantes) => estudiantes.nota >= 60)

console.log(estudiantesGanadores)