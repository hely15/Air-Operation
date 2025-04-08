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
      imgAvionCont.style.height = "200px";
    }
  }
  
  export function mostrarError(mensaje) {
    const regCont = document.getElementById("reg");
    regCont.innerText = mensaje;
}

export function mostrarDatosVuelo(dataVuerlo) {
    const iataArrivalCont = document.getElementById("iataArrival");
    iataArrivalCont.innerText = dataVuerlo?.arrival?.airport?.iata

    const municipalityNameArrivalCont = document.getElementById("municipalityNameArrival")
    municipalityNameArrivalCont.innerText = dataVuerlo?.arrival?.airport?.municipalityName

    const nameArrivalCont = document.getElementById("nameArrival")
    nameArrivalCont.innerText = dataVuerlo?.arrival?.airport?.name


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






    const iataDepartureCont = document.getElementById("iataDeparture");
    iataDepartureCont.innerText = dataVuerlo?.departure?.airport?.iata

    const municipalityNameDepartureCont = document.getElementById("municipalityNameDeparture")
    municipalityNameDepartureCont.innerText = dataVuerlo?.departure?.airport?.municipalityName

    const nameDepartureCont = document.getElementById("nameDeparture")
    nameDepartureCont.innerText = dataVuerlo?.departure?.airport?.name



}