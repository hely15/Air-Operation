import { flightCardHTML } from "./html.js"
import { flightRoute } from "./html.js"

// Se realiza la peticion al api para que devuelva los datos de la aeronave

export async function obtenerDatosAeronave(matricula) {
  const url = `https://aerodatabox.p.rapidapi.com/aircrafts/reg/${matricula}?withRegistrations=true&withImage=true`

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "b501620487msh33f8e117c2cc161p1268e2jsnc9f30942bb62",
      "x-rapidapi-host": "aerodatabox.p.rapidapi.com",
    },
  }

  try {
    const response = await fetch(url, options)
    if (response.ok) {
      const result = await response.json()
      localStorage.setItem("ultimoVuelo", matricula)

      // Verificar si el elemento flight-card ya existe
      const existingCard = document.getElementById("flight-card")
      if (!existingCard) {
        // Si no existe, lo creamos
        const searchBar = document.querySelector(".ultimoVuelo")
        searchBar.insertAdjacentHTML("afterend", flightCardHTML)
      } else {
        // Si existe, nos aseguramos de que sea visible
        existingCard.style.display = "block"
      }

      return result
    } else {
      throw new Error(`Error en la petición: ${response.status}`)
    }
  } catch (error) {
    console.error("Error al obtener datos de la aeronave:", error)
    throw error
  }
}

// Se realiza la peticion al api para que devuelva los datos del vuelo si el aeronave se encuentra en vuelo
export async function obtenerDatosDeVuelo(matriculaVuelo) {
  const url = `https://aerodatabox.p.rapidapi.com/flights/reg/${matriculaVuelo}?withAircraftImage=false&withLocation=true`

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "b501620487msh33f8e117c2cc161p1268e2jsnc9f30942bb62",
      "x-rapidapi-host": "aerodatabox.p.rapidapi.com",
    },
  }

  try {
    const responseVuelo = await fetch(url, options)
    if (responseVuelo.ok) {
      const resultVuelo = await responseVuelo.json()
      console.log(resultVuelo)

      // Verificar si el elemento flight-Route ya existe
      const existingRoute = document.getElementById("flight-Route")
      if (!existingRoute) {
        // Si no existe, lo creamos
        const flightCard = document.querySelector(".flight-card")
        if (flightCard) {
          flightCard.insertAdjacentHTML("afterend", flightRoute)
        }
      } else {
        // Si existe, nos aseguramos de que sea visible
        existingRoute.style.display = "block"
      }

      return resultVuelo
    } else {
      throw new Error(`Error en la petición de vuelo: ${responseVuelo.status}`)
    }
  } catch (error) {
    console.error("Error al obtener datos del vuelo:", error)
    throw error
  }
}

// Se realiza la peticion al api para que devuelva los datos del aeropuerto
export async function buscarAereopuertos(codigoIcao) {
  const url = `https://aerodatabox.p.rapidapi.com/airports/icao/${codigoIcao}?withTime=true&withRunways=true`
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "b501620487msh33f8e117c2cc161p1268e2jsnc9f30942bb62",
      "x-rapidapi-host": "aerodatabox.p.rapidapi.com",
    },
  }
  const response = await fetch(url, options)
  if (response.ok) {
    console.log("La respuesta fue 200 OK o exitosa.")
    const result = await response.json()
    localStorage.setItem("ultimoAereopuerto", codigoIcao)
    return result
  } else {
    console.error(`Error en la petición: ${response.status}`)
  }
}
