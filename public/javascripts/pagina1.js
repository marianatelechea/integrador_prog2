window.onload = function() {


//EL PRINCIPAL//


  var api_key = "65eadee9d6749b2ab92f01099d10deeb"
  var urlPopulares = "https://api.themoviedb.org/3/tv/airing_today?api_key=" + api_key + "&language=en-US&page=1"

  fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=65eadee9d6749b2ab92f01099d10deeb&language=en-US&page=1")
    .then(function(response) {
      return response.json();
    })
    .then(function(popu) {
      console.log(popu.results);
      var contenedorCarousel = document.querySelector("#contenedor-carousel");
      for(var i = 0; i < popu.results.length; i++) {
       contenedorCarousel.innerHTML += "<a href='/series/descripcion?id=" + popu.results[i].id + "'><img src='https://image.tmdb.org/t/p/original" + popu.results[i].backdrop_path + "'></a>";

      }
    })


// TOP 5 //


    var api_key = "65eadee9d6749b2ab92f01099d10deeb"
    var urlPopulares = "https://api.themoviedb.org/3/tv/popular?api_key="+api_key+"&language=en-US&page=1"

    fetch("https://api.themoviedb.org/3/tv/popular?api_key=65eadee9d6749b2ab92f01099d10deeb&language=en-US&page=1")
      .then(function(response) {
        return response.json();
      })
      .then(function(popu) {
        console.log(popu.results);
        var losMejoresCinco = document.querySelector("#lostop5");

        for(var i = 0; i < 5; i++) {
          losMejoresCinco.innerHTML += "<a href='/series/descripcion?id=" + popu.results[i].id + "'><img src='https://image.tmdb.org/t/p/original" + popu.results[i].poster_path + "'></a>";

        }

      })

// TOP RATED //

      var api_key = "65eadee9d6749b2ab92f01099d10deeb"
      var urlPopulares = "https://api.themoviedb.org/3/tv/top_rated?api_key="+api_key+"&language=en-US&page=1"

      fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=65eadee9d6749b2ab92f01099d10deeb&language=en-US&page=1")
        .then(function(response) {
          return response.json();
        })
        .then(function(rated) {
        console.log(rated.results);
        var mejorRated = document.querySelector("#rated");
        for(var i = 0; i < 6; i++) {
          mejorRated.innerHTML += "<a href='/series/descripcion?id=" + rated.results[i].id + "'><img src='https://image.tmdb.org/t/p/original" + rated.results[i].poster_path + "'></a>";
        }

        })

// SECCION: WATCH NOW //

  var api_key = "65eadee9d6749b2ab92f01099d10deeb"
  var urlPopulares = "https://api.themoviedb.org/3/tv/airing_today?api_key=" + api_key + "&language=en-US&page=1"

  fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=65eadee9d6749b2ab92f01099d10deeb&language=en-US&page=1")
    .then(function(response) {
      return response.json();
    })
    .then(function(now) {
      console.log(now.results);
    var contenedorCarousel = document.querySelector("#slideToday");

    for(var i = 0; i < now.results.length; i++) {
      var laImagen = now.results[i].poster_path;
      console.log(laImagen)
      contenedorCarousel.innerHTML += "</series/descripcion?id=" + now.results[i].id + "'><img src='https://image.tmdb.org/t/p/original" + laImagen + "'></a>";
      }
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






}
