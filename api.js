import {flightCardHTML} from "./html.js";

// Se realiza la peticion al api para que devuelva los datos de la aeronave

export async function obtenerDatosAeronave(matricula) {
    const url = `https://aerodatabox.p.rapidapi.com/aircrafts/reg/${matricula}?withRegistrations=true&withImage=true`;


    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'adf56af1d5msh7651ecdbb937c21p19894fjsn1347a7d8066d',
            'x-rapidapi-host': 'aerodatabox.p.rapidapi.com'
        }
    }

    const response = await fetch(url, options);
    if (response.ok) { 
        console.log("La respuesta fue 200 OK o exitosa.");
        const result = await response.json();
        localStorage.setItem("ultimoVuelo", matricula)
        return result;
        
      } else {
        console.error(`Error en la petición: ${response.status}`);

        const eliminarEstilos = document.getElementById("flight-card")
        eliminarEstilos.remove()
      }
}


// Se realiza la peticion al api para que devuelva los datos del vuelo si el aeronave se encuentra en vuelo
export async function obtenerDatosDeVuelo(matriculaVuelo) {
    const url = `https://aerodatabox.p.rapidapi.com/flights/reg/${matriculaVuelo}?withAircraftImage=false&withLocation=true`;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'adf56af1d5msh7651ecdbb937c21p19894fjsn1347a7d8066d',
            'x-rapidapi-host': 'aerodatabox.p.rapidapi.com'
        }
    };
    const responseVuelo = await fetch(url, options);
    const resultVuelo = await responseVuelo.json();
    console.log(resultVuelo);
    return resultVuelo;

}

// Se realiza la peticion al api para que devuelva los datos del aeropuerto 
export async function buscarAereopuertos(codigoIcao) {


    const url = `https://aerodatabox.p.rapidapi.com/airports/icao/${codigoIcao}?withTime=true&withRunways=true`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'adf56af1d5msh7651ecdbb937c21p19894fjsn1347a7d8066d',
            'x-rapidapi-host': 'aerodatabox.p.rapidapi.com'
        }
    };
    const response = await fetch(url, options);
    if (response.ok) { 
        console.log("La respuesta fue 200 OK o exitosa.");
        const result = await response.json();
        localStorage.setItem("ultimoAereopuerto", matricula)
        return result;
        
      } else {
        console.error(`Error en la petición: ${response.status}`);
      }




}
