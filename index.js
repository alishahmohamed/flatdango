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

         }
        }