import { obtenerDatosAeronave } from './api.js';
import { mostrarDatosAeronave, mostrarError } from './ui.js';


import { obtenerDatosDeVuelo} from './api.js';
import { mostrarDatosVuelo } from './ui.js';

document.getElementById("buscar").addEventListener("click", async function () {
  const matricula = document.getElementById("regis").value;
  console.log(matricula);

  try {
    const result = await obtenerDatosAeronave(matricula);
    console.log(result);
    mostrarDatosAeronave(result);


    const resultadoVuelo = await obtenerDatosDeVuelo(matricula);
    console.log(resultadoVuelo);
    
    let vueloSeleccionado;
    if (resultadoVuelo.length > 1) {
      vueloSeleccionado = resultadoVuelo[resultadoVuelo.length - 1];
    } else {
      vueloSeleccionado = resultadoVuelo[0];
    }
    mostrarDatosVuelo(vueloSeleccionado);
    
    
  

    


  } catch (error) {
    mostrarError("No existe el registro");
  }
});



