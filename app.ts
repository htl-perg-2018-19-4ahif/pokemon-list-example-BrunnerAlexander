(async function(){
    const pokemonList = await $.get("https://pokeapi.co/api/v2/pokemon/");

    let html = "";
    for(const pokemon of pokemonList.results){
        html += `<li><a>${pokemon.name}</a><button type="button" onclick="location.href='details.html?id=${pokemon.name}'">Details</button></li>`
    }
    $('#pokemons')[0].innerHTML = html;
})();