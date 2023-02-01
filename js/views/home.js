export const renderPokemons = (pokemons) => {
    const containerPokemons = document.querySelector('.container-pokemons')
    if (containerPokemons) {
        containerPokemons.innerHTML = ''

        pokemons.forEach(pokemon => {

            const div = document.createElement('div')

            div.classList.add('pokemon')

            div.innerHTML =
                `
            <img class="pokemon-image" src="${pokemon.image}" alt="${pokemon.name}">
            <div class="pokemon-details">
              <h3 class="pokemon-name">${pokemon.name}</h3>
              <p class="pokemon-type">${pokemon.type}</p>
              <button class="btn-pokemon-add" id="${pokemon.id}">Agregar</button>
            </div>
        `
            containerPokemons.append(div)
        })
    }
}