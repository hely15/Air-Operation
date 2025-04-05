document.getElementById("buscar").addEventListener("click", async function () {
  const matricula = document.getElementById("regis").value;
  console.log(matricula)
  const url = `https://aerodatabox.p.rapidapi.com/aircrafts/reg/${matricula}/all?withImage=true`
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'adf56af1d5msh7651ecdbb937c21p19894fjsn1347a7d8066d',
      'x-rapidapi-host': 'aerodatabox.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options)
    const result = await response.json()
    console.log(result)


    const active = result[0]?.active
  
    if (active === true) {
      const activo = "Activo"
      const activoTrue = document.getElementById("activee");
      activoTrue.innerText = activo
    } else {
      const inactivo = "Inactivo"
      const activoFalse = document.getElementById("activee");
      activoFalse.innerText = inactivo
    }
  
    const regi = result[0]?.reg
    const regCont = document.getElementById("reg");
    regCont.innerText = regi
  
    const productionLine = result[0]?.productionLine
    const productionLineCont = document.getElementById("productionLine");
    productionLineCont.innerText = productionLine
  
    const airlineName = result[0]?.airlineName
    const airlineNameCont = document.getElementById("airlineName");
    airlineNameCont.innerText = airlineName
  
    const numEngines = result[0]?.numEngines
    const numEnginesCont = document.getElementById("numEngines");
    numEnginesCont.innerText = numEngines
  
    const engineType = result[0]?.engineType
    const engineTypeCont = document.getElementById("engineType");
    engineTypeCont.innerText = engineType
  
    const imgAvion = result[0]?.image.url
    const imgAvionCont = document.getElementById("imgAvion");
    if (imgAvionCont) {
      imgAvionCont.src = imgAvion;
      imgAvionCont.style.width = "100%";
      imgAvionCont.style.height = "200px";
    }
  } catch (error) {



    const noExiste = "No existe el registro"

    reg.innerText = noExiste









  }

})

