export function mostrarDatosAeronave(data) {
  const active = data?.active
  const activoTrue = document.getElementById("activee")
  activoTrue.innerText = active === true ? "Activo" : "Inactivo"

  const regCont = document.getElementById("reg")
  regCont.innerText = data?.reg

  const productionLineCont = document.getElementById("productionLine")
  productionLineCont.innerText = data?.productionLine

  const airlineNameCont = document.getElementById("airlineName")
  airlineNameCont.innerText = data?.airlineName

  const numEnginesCont = document.getElementById("numEngines")
  numEnginesCont.innerText = data?.numEngines

  const engineTypeCont = document.getElementById("engineType")
  engineTypeCont.innerText = data?.engineType

  const imgAvion = data?.image?.url
  const imgAvionCont = document.getElementById("imgAvion")
  if (imgAvionCont) {
    imgAvionCont.src = imgAvion
    imgAvionCont.style.width = "100%"
  }
}

// Mejorar la función mostrarError para que sea más informativa
export function mostrarError(mensaje) {
  console.error("Error mostrado al usuario:", mensaje)

  // Verificar si el flight-card existe, si no, crearlo
  let flightCard = document.getElementById("flight-card")
  const flightCardHTML = `
    <div id="flight-card">
        <p>Registration: <span id="reg"></span></p>
        <p>Status: <span id="activee"></span></p>
        <p>Production Line: <span id="productionLine"></span></p>
        <p>Airline Name: <span id="airlineName"></span></p>
        <p>Number of Engines: <span id="numEngines"></span></p>
        <p>Engine Type: <span id="engineType"></span></p>
        <img id="imgAvion" src="/placeholder.svg" alt="Aircraft Image">
    </div>
`
  if (!flightCard) {
    const searchBar = document.querySelector(".ultimoVuelo")
    searchBar.insertAdjacentHTML("afterend", flightCardHTML)
    flightCard = document.getElementById("flight-card")
  }

  // Mostrar el mensaje de error en varios campos para que sea visible
  const regCont = document.getElementById("reg")
  if (regCont) regCont.innerText = mensaje

  const activoTrue = document.getElementById("activee")
  if (activoTrue) activoTrue.innerText = "No disponible"

  const productionLineCont = document.getElementById("productionLine")
  if (productionLineCont) productionLineCont.innerText = "No disponible"

  const airlineNameCont = document.getElementById("airlineName")
  if (airlineNameCont) airlineNameCont.innerText = "No disponible"

  const numEnginesCont = document.getElementById("numEngines")
  if (numEnginesCont) numEnginesCont.innerText = "No disponible"

  const engineTypeCont = document.getElementById("engineType")
  if (engineTypeCont) engineTypeCont.innerText = "No disponible"

  // Mostrar una imagen de placeholder para el avión
  const imgAvionCont = document.getElementById("imgAvion")
  if (imgAvionCont) {
    imgAvionCont.src = "storage/img/plane.svg"
    imgAvionCont.style.width = "100%"
  }
}

export function mostrarDatosVuelo(dataVuerlo) {
  const iataDepartCont = document.getElementById("iataDepart")
  iataDepartCont.innerText = dataVuerlo?.departure?.airport?.iata

  const municipalityNameDepartCont = document.getElementById("municipalityNameDepart")
  municipalityNameDepartCont.innerText = dataVuerlo?.departure?.airport?.municipalityName

  const nameDepartCont = document.getElementById("nameDepart")
  nameDepartCont.innerText = dataVuerlo?.departure?.airport?.name

  const dateTimeStr = dataVuerlo?.arrival?.scheduledTime?.local
  const [fecha, hora] = dateTimeStr.split(" ")

  const localDateDepartCont = document.getElementById("localDateDepart")
  localDateDepartCont.innerText = fecha

  const localTimeDepartCont = document.getElementById("localTimeDepart")
  localTimeDepartCont.innerText = hora

  const dateTimeStrDepart = dataVuerlo?.departure?.scheduledTime?.local
  const [fechaDepart, horaDepart] = dateTimeStrDepart.split(" ")

  const localDateArriveCont = document.getElementById("localDateArrive")
  localDateArriveCont.innerText = fechaDepart

  const localTimeArriveCont = document.getElementById("localTimeArrive")
  localTimeArriveCont.innerText = horaDepart

  const iataArrivalCont = document.getElementById("iataArrival")
  iataArrivalCont.innerText = dataVuerlo?.arrival?.airport?.iata

  const municipalityNameArrivalCont = document.getElementById("municipalityNameArrival")
  municipalityNameArrivalCont.innerText = dataVuerlo?.arrival?.airport?.municipalityName

  const nameArrivalCont = document.getElementById("nameArrival")
  nameArrivalCont.innerText = dataVuerlo?.arrival?.airport?.name

  const distance = document.getElementById("distance")
  distance.innerText = Number.parseInt(dataVuerlo?.greatCircleDistance?.km) + "km"
}
