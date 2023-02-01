import {renderPokemons} from '../views/home.js'

export const eventRenderPokemon = () => {
    const pokemon = JSON.parse(localStorage.getItem('pokemons'))
    const btnCategory = document.querySelectorAll('.btn-category')
    const principalTitle = document.querySelector('.principal-title')
    renderPokemons(pokemon)

    btnCategory.forEach(btn => {
        btn.addEventListener('click', (e) => {
            btnCategory.forEach(btn => btn.classList.remove('active'))
            e.currentTarget.classList.add('active')

            reloadBtnAddPokemon()

            if (e.currentTarget.id !== 'all-pokemon') {
                principalTitle.innerText = e.currentTarget.id.toUpperCase()

                const btnPokemon = pokemon.filter(pokemon => pokemon.type.includes(e.currentTarget.id))

                renderPokemons(btnPokemon)
            } else {
                principalTitle.innerText = 'TODOS LOS POKEMONS'
                renderPokemons(pokemon)
            }
        })
    })
}

const addPokemonPokedex = (e) => {
    const pokemonsInPokedex = JSON.parse(localStorage.getItem('pokedex')) || []
    const allPokemons = JSON.parse(localStorage.getItem('pokemons'))
    const idBtn = parseInt(e.currentTarget.id)

    const addPokemon = allPokemons.find(pokemon => parseInt(pokemon.id) === idBtn)

    if (pokemonsInPokedex.some(pokemon => parseInt(pokemon.id) === idBtn)) {
        const index = pokemonsInPokedex.findIndex(pokemon => pokemon.id === idBtn)

        pokemonsInPokedex[index].count++

        localStorage.setItem('pokedex', JSON.stringify(pokemonsInPokedex))
    countPokedex()
    } else {
        addPokemon.count = 1

        pokemonsInPokedex.push(addPokemon)

        localStorage.setItem('pokedex', JSON.stringify(pokemonsInPokedex))
    countPokedex()
    }
}

export const reloadBtnAddPokemon = () => {
    setTimeout(() => {
        let btnAddPokemon = document.querySelectorAll('.btn-pokemon-add')
        if (!btnAddPokemon) {
            return reloadBtnAddPokemon()
        } else {
            btnAddPokemon.forEach(btn => btn.addEventListener('click', addPokemonPokedex))
            return btnAddPokemon
        }
    }, 1000)
}

export const countPokedex = () => {
    const countPokemons = document.querySelector('.count')
    const pokemonsInPokedex = JSON.parse(localStorage.getItem('pokedex'))

    if (countPokemons && pokemonsInPokedex) {
        countPokemons.innerText = pokemonsInPokedex.reduce((acc, pokemon) => acc + pokemon.count, 0)
    }
}
