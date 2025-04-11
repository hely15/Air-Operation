import { flightCardHTML } from "./html.js";
import { flightRoute } from "./html.js";

// Se realiza la peticion al api para que devuelva los datos de la aeronave

export async function obtenerDatosAeronave(matricula) {
    const url = `https://aerodatabox.p.rapidapi.com/aircrafts/reg/${matricula}?withRegistrations=true&withImage=true`;


    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'b501620487msh33f8e117c2cc161p1268e2jsnc9f30942bb62',
            'x-rapidapi-host': 'aerodatabox.p.rapidapi.com'
        }
    }

    const response = await fetch(url, options);
    if (response.ok) {
        const result = await response.json();
        localStorage.setItem("ultimoVuelo", matricula)
        const searchBar = document.querySelector('.ultimoVuelo');
        searchBar.insertAdjacentHTML('afterend', flightCardHTML);
        return result;

    } else {
        console.log("hola")
    }
}


// Se realiza la peticion al api para que devuelva los datos del vuelo si el aeronave se encuentra en vuelo
export async function obtenerDatosDeVuelo(matriculaVuelo) {
    const url = `https://aerodatabox.p.rapidapi.com/flights/reg/${matriculaVuelo}?withAircraftImage=false&withLocation=true`;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'b501620487msh33f8e117c2cc161p1268e2jsnc9f30942bb62',
            'x-rapidapi-host': 'aerodatabox.p.rapidapi.com'
        }
    };
    const responseVuelo = await fetch(url, options);
    if (responseVuelo.ok) {
        const resultVuelo = await responseVuelo.json();
        console.log(resultVuelo);
        const flightCard = document.querySelector('.flight-card')

        flightCard.insertAdjacentHTML('afterend', flightRoute);
        return resultVuelo;
    }else {
        console.log("hola")
    }

}

// Se realiza la peticion al api para que devuelva los datos del aeropuerto 
export async function buscarAereopuertos(codigoIcao) {


    const url = `https://aerodatabox.p.rapidapi.com/airports/icao/${codigoIcao}?withTime=true&withRunways=true`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'b501620487msh33f8e117c2cc161p1268e2jsnc9f30942bb62',
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
