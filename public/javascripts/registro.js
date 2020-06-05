window.onload = function() {
fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=65eadee9d6749b2ab92f01099d10deeb")
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {

    for (var i = 0; i < data.genres.length; i++) {
       document.querySelector("#contenedor-genero").innerHTML += "<option value='"+data.genres[i].name+"'>" + data.genres[i].name + "</option>";
    }
  })
}