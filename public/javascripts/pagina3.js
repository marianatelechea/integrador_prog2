window.addEventListener("load", function() {

  // guardo el objeto search
  var objeto_search = new URLSearchParams(window.location.search)

  var idSerie = objeto_search.get("id")
  var nombreDeGenero = objeto_search.get("nombreDeGenero")

  console.log(idSerie);
document.querySelector('.titulo').innerText = nombreDeGenero;




// POSTERS
  var imgPath = "https://image.tmdb.org/t/p/original"
  var idGenero = new URLSearchParams(location.search).get("id")


    fetch("https://api.themoviedb.org/3/discover/tv?api_key=65eadee9d6749b2ab92f01099d10deeb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + idGenero ) //
      .then(function(respuesta) {
        return respuesta.json()
          })
      .then(function(informacion) {
        console.log(informacion.results);
        var arrayDeSeries = informacion.results
        console.log(arrayDeSeries);

        for (var i = 0; i < informacion.results.length; i++) {

          var id = arrayDeSeries[i].id
          var imagenSerie= arrayDeSeries[i].poster_path
          var li = ''

          li += '<li class="uk-animation-toggle" tabindex="0" >'
          li += '<a href="/series/descripcion?id=' + id +'">'
          li += '<img class="uk-card uk-card-default uk-card-body uk-animation-fade" src=' + imgPath + imagenSerie + '>'
          li += '</a>'
          li += '</li>'

          var ul = document.querySelector("#series-genero").innerHTML += li


        }
      })
      .catch(function(error) {
        console.log("Error: " + error);
      })


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
             // Si el series ya era favorito
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





})
