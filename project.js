const form = document.getElementById('film-form');
const titleElement = document.querySelector('#title');
const directorElement = document.querySelector('#director');
const urlElement = document.querySelector('#url');
const cardbody = document.querySelectorAll('.card-body')[1];
const clear = document.getElementById('clear-films');


//Tum eventleri yukleme
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });
    cardbody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",deleteAllFilms);
}
function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    

    if (title === "" || director === "" || url === ""){
        UI.displayMessage("Fill all the fields","danger");
    }
    else{
        //yeni film
        
        const newFilm = new Film(title, director, url);
        


        UI.addToUI(newFilm);
        Storage.addFilmToStorage(newFilm); 
        UI.displayMessage("movie has been added","success");

    }
    

    UI.clearInputs(titleElement, directorElement, urlElement); 
    e.preventDefault();
}

function deleteFilm(e){

    if(e.target.id === 'delete-film'){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmsFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessage("succesfully deleted", "success");
    }
}

function deleteAllFilms(){
    UI.deleteAllFilmsFromUI();
    Storage.deleteAllFilmsFromStorage();
}

