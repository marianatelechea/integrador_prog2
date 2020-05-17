window.onload = function() {


// API PARA LOS GENEROS //

  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=65eadee9d6749b2ab92f01099d10deeb")
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {

    for (var i = 0; i < data.genres.length; i++) {
       document.querySelector("#selectGenre").innerHTML += "<option value='"+data.genres[i].id+"'>" + data.genres[i].name + "</option>";

       document.querySelector("#excludeGenre").innerHTML += "<option value='"+data.genres[i].id+"'>" + data.genres[i].name + "</option>";
    }
  })


// API PARA TODO //

var withGenres = new URLSearchParams(location.search).get("buscados");
var notGenres = new URLSearchParams(location.search).get("excluidos");
var orden = new URLSearchParams(location.search).get("orden") ;
var year = new URLSearchParams(location.search).get("year");



  fetch("https://api.themoviedb.org/3/discover/tv?api_key=65eadee9d6749b2ab92f01099d10deeb&language=en-US&sort_by=" + orden + "&first_air_date_year=" + year + "&page=1&timezone=America%2FNew_York&with_genres=" + withGenres + "&without_genres=" + notGenres + "&include_null_first_air_dates=false")
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    console.log(data.results)
    var contenedorSeries = document.querySelector(".resultado");
    for (var i = 0; i < 10; i++) {
      contenedorSeries.innerHTML +=`
      <li>
      <a href="/series/descripcion?id=${data.results[i].id}">
        <img src='https://image.tmdb.org/t/p/original/${data.results[i].poster_path}' onError="this.src='Error404.png'">
        </a>
        </li>
        `

    }
  })

  var campoBuscar = document.querySelector(".buscar-campo");
  var generoBuscado = campoBuscar.options[campoBuscar.selectedIndex].value;
  console.log(campoBuscar);


  var campoExcluir = document.querySelector(".excluir");
  var generoExcluido = campoExcluir.options[campoExcluir.selectedIndex].value;
  console.log(generoExcluido);

  var campoOrden = document.querySelector(".orden");
  var generoOrden = campoOrden.options[campoOrden.selectedIndex].value;
  console.log(campoOrden);

  var campoAño = document.querySelector(".year");
  var generoAño = campoAño.options[campoAño.selectedIndex].value;
  console.log(campoAño);


  var botonEnviarBusqueda = document.querySelector("form.busc input[type='submit']");
botonEnviarBusqueda.onclick = function(event) {
if (contenedorSeries.length == 0 ) {
  event.preventDefault();
  alert("Hey! Hay que llenar aunque sea un campo")
} else {
  document.querySelector('form.busc').submit();
}
}



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
