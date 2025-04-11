import { obtenerDatosAeronave } from "./api.js"
import { mostrarDatosAeronave, mostrarError } from "./ui.js"

import { obtenerDatosDeVuelo } from "./api.js"
import { mostrarDatosVuelo } from "./ui.js"

document.addEventListener("DOMContentLoaded", () => {
  const ultimoVuelo = localStorage.getItem("ultimoVuelo")
  const contenedor = document.getElementById("vuelo")
  contenedor.innerHTML = ultimoVuelo
})

document.getElementById("buscar").addEventListener("click", async () => {
  const matricula = document.getElementById("regis").value
  console.log(matricula)
  try {
    const result = await obtenerDatosAeronave(matricula)
    console.log(result)
    mostrarDatosAeronave(result)

    const resultadoVuelo = await obtenerDatosDeVuelo(matricula)
    console.log(resultadoVuelo)

    let vueloSeleccionado
    if (resultadoVuelo.length > 1) {
      vueloSeleccionado = resultadoVuelo[resultadoVuelo.length - 1]
    } else {
      vueloSeleccionado = resultadoVuelo[0]
    }
    mostrarDatosVuelo(vueloSeleccionado)
  } catch (error) {
    console.error("Error en la búsqueda:", error)
    mostrarError("No existe el registro")

    // En lugar de eliminar los elementos, verificamos si existen y los ocultamos
    const flightCard = document.getElementById("flight-card")
    if (flightCard) {
      flightCard.style.display = "none"
    }

    const flightRoute = document.getElementById("flight-Route")
    if (flightRoute) {
      flightRoute.style.display = "none"
    }
  }
})

document.getElementById("ultimoVuelo").addEventListener("click", async () => {
  const ultimoVueloReg = localStorage.getItem("ultimoVuelo")
  if (!ultimoVueloReg) {
    console.error("No hay vuelo guardado en localStorage")
    return
  }

  try {
    const result = await obtenerDatosAeronave(ultimoVueloReg)
    console.log(result)
    mostrarDatosAeronave(result)

    const resultadoVuelo = await obtenerDatosDeVuelo(ultimoVueloReg)
    console.log(resultadoVuelo)

    let vueloSeleccionado
    if (resultadoVuelo.length > 1) {
      vueloSeleccionado = resultadoVuelo[resultadoVuelo.length - 1]
    } else {
      vueloSeleccionado = resultadoVuelo[0]
    }
    mostrarDatosVuelo(vueloSeleccionado)
  } catch (error) {
    console.error("Error al obtener datos del último vuelo:", error)
  }
})

document.getElementById("limpiarHistorial").addEventListener("click", () => {
  const flightCard = document.getElementById("flight-card")
  if (flightCard) {
    flightCard.style.display = "none"
  }

  const flightRoute = document.getElementById("flight-Route")
  if (flightRoute) {
    flightRoute.style.display = "none"
  }
})
