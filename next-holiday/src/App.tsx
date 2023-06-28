const Feriados = [
  {
    fecha: new Date("2023-01-01"),
    nombre: "Año Nuevo"
  },
  {
    fecha: new Date("2023-02-27"),
    nombre: "Carnaval"
  },
  {
    fecha: new Date("2023-02-28"),
    nombre: "Carnaval"
  },
  {
    fecha: new Date("2023-03-24"),
    nombre: "Día Nacional de la Memoria por la Verdad y la Justicia"
  },
  {
    fecha: new Date("2023-04-02"),
    nombre: "Día del Veterano y de los Caídos en la Guerra de Malvinas"
  },
  {
    fecha: new Date("2023-04-07"),
    nombre: "Viernes Santo"
  },
  {
    fecha: new Date("2023-05-01"),
    nombre: "Día del Trabajador"
  },
  {
    fecha: new Date("2023-05-25"),
    nombre: "Día de la Revolución de Mayo"
  },
  {
    fecha: new Date("2023-06-20"),
    nombre: "Día de la Bandera"
  },
]

const Hoy = new Date()
const siguienteFeriado = Feriados.find((feriado) => feriado.fecha > Hoy) || {...Feriados[0], fecha: new Date( 
  Feriados[0].fecha.getFullYear() + 1,
  Feriados[0].fecha.getMonth(),
  Feriados[0].fecha.getDate() + 1
  )
}

const msDiff = siguienteFeriado.fecha.getTime() - Hoy.getTime()
const dayDiff = Math.round(msDiff / 86400000)

const rtf = new Intl.RelativeTimeFormat('es-AR', {numeric: "auto"})

console.log(siguienteFeriado)
console.log(`La diferencia entre el día actual y el siguiente día feriado es de ${dayDiff} días`)

function App() {
  return (
    <main>
      <h1>El próximo feriado ({siguienteFeriado.nombre}) es {rtf.format(dayDiff, "day")}.</h1>
    </main>
  );
}

export default App;
