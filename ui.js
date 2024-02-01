class UI{

    static addToUI(film){
    
     const filmList = document.getElementById("films");
    
     filmList.innerHTML += `
        <tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Remove movie</a></td>
        </tr>
     `;
    }
    
    static clearInputs(title, director, url){
        title.value = "";
        director.value = "";
        url.value = "";
    }
    
    static displayMessage(message,type){
    
        const cardBody = document.querySelector(".card-body");
        const div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.textContent = message;
        cardBody.appendChild(div);
    
        setTimeout(function(){ //1 saniye ekranda durup gidiyor
            div.remove();
        },1000);
    }
    static loadAllFilms(films) {
    
        const filmList = document.getElementById("films");
    
        films.forEach(function(film) {
            filmList.innerHTML += `
        <tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
     `;
        });
    }
    
    static deleteFilmFromUI(element){
    
        element.parentElement.parentElement.remove();
    }
    
    static deleteAllFilmsFromUI(){
        const filmList = document.getElementById('films');
    
        while(filmList.firstElementChild !== null){
            filmList.firstElementChild.remove();
        }
    }
}
