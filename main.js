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
      // Hay varios elementos: tomar el último
      vueloSeleccionado = resultadoVuelo[resultadoVuelo.length - 1];
    } else {
      // Solo hay un elemento: tomar el primero (o único)
      vueloSeleccionado = resultadoVuelo[0];
    }
    // Mostrar los datos del vuelo seleccionado
    mostrarDatosVuelo(vueloSeleccionado);
    


  } catch (error) {
    mostrarError("No existe el registro");
  }
});



