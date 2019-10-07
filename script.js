// JSON format request
let randomGif = document.createElement("img");

function showGif() {
  fetch(
    "https://api.giphy.com/v1/gifs/random?api_key=d5zDq4TkNaD7R5u7HdNTbtOcEHXdHHXh"
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      let randomURL = result.data.image_url;
      randomGif.setAttribute("src", randomURL);
      document.getElementById("show-gif").append(randomGif);
    });
}

// AJAX format request
function showJoke() {
  $.ajax({
    url: "https://api.chucknorris.io/jokes/random",
    method: "GET",
    success: function(result) {
      let randomJoke = document.getElementById("show-joke");
      randomJoke.innerHTML = result.value;
      console.log(result.value);
    },
    error: function(error) {
      console.log(`Error: ${error}`);
    }
  });
}
