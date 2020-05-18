window.onload = function() {
  //Paso 1: Leo Storage

  var recuperoStorage = localStorage.getItem("seriesFavoritas");

  // Si todavía no tenía serie favoritos
  if (recuperoStorage == null) {
    // Creo una lista vacia
    seriesFavoritas = [];
  } else {
    // Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
    seriesFavoritas = JSON.parse(recuperoStorage);
  }

  for (var i = 0; i < seriesFavoritas.length; i++) {
    // BUSCAR ESE serie Y MOSTRARLO
    fetch("https://api.themoviedb.org/3/tv/" + seriesFavoritas[i] + "?api_key=65eadee9d6749b2ab92f01099d10deeb&language=en-US&page=1")
      .then(function(response) {
        return response.json();
      })
      .then(function(serie) {
        console.log(serie);
        document.querySelector(".listado-favoritas").innerHTML += `
            <li>
              <h3>
                <a href='/series/descripcion?id=${serie.id}'> ${serie.name}</a>
              </h3>
                <a href='/series/descripcion?id=${serie.id}' class="uk-animation-toggle" tabindex="0">
                  <img class="uk-card uk-card-default uk-card-body uk-animation-fade" src='https://image.tmdb.org/t/p/original/${serie.poster_path}' onError="this.src='/images/PAGINA7/.png'">
                </a>
            </a>
            </li>
            `
      })
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
