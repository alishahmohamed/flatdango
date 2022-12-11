const baseUrl ="http://localhost:3000/films";
function fetchMovies(){
    fetch(baseUrl)
         .then((response) => response.json())
         .then(data) =>{
            let li = document.createElement("li");
                li.textContent = films.title;
                li.addEventListener("click",
                (e)=>{
                  let buttonContent =
                  document.querySelector("button#buy-ticket")
                  buttonContent.textContent = "Buy Tickets"
                    let title =
                 document.getElementById("movie-title");
                    title.textContent =
                films.title;
                let img =
                
                  

         }
        }