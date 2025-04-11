export function mostrarDatosAeronave(data) {
    const active = data?.active;
    const activoTrue = document.getElementById("activee");
    activoTrue.innerText = active === true ? "Activo" : "Inactivo";
  
    const regCont = document.getElementById("reg");
    regCont.innerText = data?.reg;
  
    const productionLineCont = document.getElementById("productionLine");
    productionLineCont.innerText = data?.productionLine;
  
    const airlineNameCont = document.getElementById("airlineName");
    airlineNameCont.innerText = data?.airlineName;
  
    const numEnginesCont = document.getElementById("numEngines");
    numEnginesCont.innerText = data?.numEngines;
  
    const engineTypeCont = document.getElementById("engineType");
    engineTypeCont.innerText = data?.engineType;
   
    const imgAvion = data?.image?.url;
    const imgAvionCont = document.getElementById("imgAvion");
    if (imgAvionCont) {
      imgAvionCont.src = imgAvion;
      imgAvionCont.style.width = "100%";
    }
  }
  
  export function mostrarError(mensaje) {
    const regCont = document.getElementById("reg");
    regCont.innerText = mensaje;
}

export function mostrarDatosVuelo(dataVuerlo) {
    const iataDepartCont = document.getElementById("iataDepart");
    iataDepartCont.innerText = dataVuerlo?.departure?.airport?.iata

    const municipalityNameDepartCont = document.getElementById("municipalityNameDepart")
    municipalityNameDepartCont.innerText = dataVuerlo?.departure?.airport?.municipalityName

    const nameDepartCont = document.getElementById("nameDepart")
    nameDepartCont.innerText = dataVuerlo?.departure?.airport?.name


    const dateTimeStr = dataVuerlo?.arrival?.scheduledTime?.local;
    const [fecha, hora] = dateTimeStr.split(" ");

    const localDateDepartCont = document.getElementById("localDateDepart")
    localDateDepartCont.innerText = fecha

    const localTimeDepartCont = document.getElementById("localTimeDepart")
    localTimeDepartCont.innerText = hora


    const dateTimeStrDepart = dataVuerlo?.departure?.scheduledTime?.local;
    const [fechaDepart, horaDepart] = dateTimeStrDepart.split(" ");

    const localDateArriveCont = document.getElementById("localDateArrive")
    localDateArriveCont.innerText = fechaDepart

    const localTimeArriveCont = document.getElementById("localTimeArrive")
    localTimeArriveCont.innerText = horaDepart



    const iataArrivalCont = document.getElementById("iataArrival");
    iataArrivalCont.innerText = dataVuerlo?.arrival?.airport?.iata

    const municipalityNameArrivalCont = document.getElementById("municipalityNameArrival")
    municipalityNameArrivalCont.innerText = dataVuerlo?.arrival?.airport?.municipalityName

    const nameArrivalCont = document.getElementById("nameArrival")
    nameArrivalCont.innerText = dataVuerlo?.arrival?.airport?.name


    const distance = document.getElementById("distance")
    distance.innerText = parseInt(dataVuerlo?.greatCircleDistance?.km)+"km"

}

