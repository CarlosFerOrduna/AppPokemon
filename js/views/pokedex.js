export const renderItemsPokedex = () => {
    const itemsPokedex = JSON.parse(localStorage.getItem('pokedex'))

    const containerPokedexItems = document.querySelector('.pokedex-items')
    containerPokedexItems.innerHTML = ''

    itemsPokedex.forEach(pokemon => {

        const div = document.createElement('div')

        div.classList.add('pokedex-item')

        div.innerHTML =
            `
                    <img class="pokedex-item-image"
                         src="${pokemon.image}" alt="">
                    <div class="pokedex-item-name">
                        <small>Nombre</small>
                        <p>${pokemon.name}</p>
                    </div>
                    <div class="pokedex-item-type">
                        <small>Tipo</small>
                        <p>${pokemon.type}</p>
                    </div>
                    <div class="pokedex-item-count">
                        <small>Vistos</small>
                        <p>${pokemon.count}</p>
                    </div>
                    <button class="pokedex-item-delete" id="${pokemon.id}"><i class="bi bi-trash-fill"></i></button>
        `
        containerPokedexItems.append(div)
    })
}
