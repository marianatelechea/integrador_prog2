window.onload = function() {
  console.log("works");
  var resultado = new URLSearchParams(location.search).get("buscador");

  fetch("https://api.themoviedb.org/3/search/tv?api_key=65eadee9d6749b2ab92f01099d10deeb&query=" + resultado + "&page=1")
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    console.log(data.results)
    var titulo = document.querySelector(".titulo-busqueda");
    titulo.innerText += resultado;
    var contenedorSeries = document.querySelector(".resultado-series");
    for(var i = 0; i < data.results.length; i++) {

      contenedorSeries.innerHTML +=`
      <li>
      <a href='/series/descripcion?id=${data.results[i].id}' >
        <img src='https://image.tmdb.org/t/p/original/${data.results[i].poster_path}' onError="this.src='/images/PAGINA4/Error404.png'">
        </a>
        </li>
        `
      }



// BOTON DE BÚSQUEDA //

document.querySelector(".buscador").onsubmit = function(e) {
 var buscadorInput = document.querySelector(".buscador-simple")
 if (buscadorInput.value.length < 3) {
   e.preventDefault()
   document.querySelector(".alert-light").style.display = "block"
   setTimeout(function() {
     document.querySelector(".alert-light").style.display = "none"
   },3000)


 }}


  })
  .catch(function(error) {
        console.log("Error: " + error);

  })


  // BOTON DE BÚSQUEDA //


  var recuperoStorage = localStorage.getItem(".resultado-series li");


  if (recuperoStorage == "") {

    document.querySelector(".error").innerHTML = "<img src='/images/PAGINA4/erorbusc.png'>"
    document.querySelector(".error").style.backgroundColor = "rgb(160, 152, 133)"
  }



  // API DE OS FAVORITOS //

  //Paso 1: Leo Storage

var recuperoStorage = localStorage.getItem("seriesFavoritas");

// Si todavía no tenía series favoritos
if (recuperoStorage == null) {
  // Creo una lista vacia
  seriesFavoritas = [];
} else {
  // Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
  seriesFavoritas = JSON.parse(recuperoStorage);
}

var datos = new URLSearchParams(location.search);
var idSerie = datos.get("id");

if (seriesFavoritas.includes(idSerie)) {
  document.querySelector("#favoritos").innerHTML = "Quitar de favoritos";
}


  document.querySelector("#favoritos").onclick = function() {


    //Paso 2: Modificar la informacion
    // Si la serie ya era favorito
    if (seriesFavoritas.includes(idSerie)) {
      // Lo quito
      var index = seriesFavoritas.indexOf(idSerie);
      seriesFavoritas.splice(index, 1);
      document.querySelector("#favoritos").innerHTML = "Agregar a favorito ♡";
    } else {
      //Lo agrego
      seriesFavoritas.push(idSerie);
      document.querySelector("#favoritos").innerHTML = "Quitar de favoritos";
    }


    //Paso 3: Escribir en storage
    var infoParaStorage = JSON.stringify(seriesFavoritas);
    localStorage.setItem("seriesFavoritas", infoParaStorage);
    console.log(localStorage);
  }


  // BOTON DE BÚSQUEDA //

      document.querySelector(".buscador").onsubmit = function(e) {
       var buscadorInput = document.querySelector(".buscador-simple")
       if (buscadorInput.value.length < 3) {
         e.preventDefault()
         document.querySelector(".alert-light").style.display = "block"
         setTimeout(function() {
           document.querySelector(".alert-light").style.display = "none"
         },3000)


       }}




}
