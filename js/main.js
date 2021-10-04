let elPokimons = document.createElement('div');
let body = document.body
elPokimons.classList.add('pokimons')
var serlavha = document.createElement('h1')
serlavha.textContent = 'Pokemons'
serlavha.classList.add('sarlavha')
body.appendChild(serlavha)
for(var i=0; i < pokemons.length; i++){
    var elPokimonDiv = document.createElement('div');
    elPokimonDiv.classList.add('pokimon');
    var elPokimonId = document.createElement('span');
    elPokimonId.classList.add('id');
    var elPokimonImg = document.createElement('img');
    elPokimonImg.src = pokemons[i].img;
    elPokimonImg.alt = pokemons[i].name;
    var elPokimonName = document.createElement('div');
    elPokimonName.classList.add('name');
    elPokimonName.textContent = pokemons[i].name;
    elPokimonId.textContent = pokemons[i].id;
    elPokimonImg.classList.add('pic')
    elPokimons.appendChild(elPokimonDiv);
    elPokimonDiv.appendChild(elPokimonId);
    elPokimonDiv.appendChild(elPokimonImg);
    elPokimonDiv.appendChild(elPokimonName);
    body.appendChild(elPokimons); 
}
