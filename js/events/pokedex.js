import {renderItemsPokedex} from '../views/pokedex.js'

export const eventRenderPokedex = () => {
    const itemsPokedex = JSON.parse(localStorage.getItem('pokedex'))

    const containerPokedexVoid = document.querySelector('.empty-pokedex')
    const containerPokedexItems = document.querySelector('.pokedex-items')
    const containerPokedexActions = document.querySelector('.pokedex-actions')
    const containerPokedexSend = document.querySelector('.pokedex-send')

    reloadBtnRemovePokemon()
    if (itemsPokedex.length > 0) {

        containerPokedexVoid.classList.add('disabled')
        containerPokedexItems.classList.remove('disabled')
        containerPokedexActions.classList.remove('disabled')
        containerPokedexSend.classList.add('disabled')

        renderItemsPokedex()
        totalPokedex()
    } else {
        containerPokedexVoid.classList.remove('disabled')
        containerPokedexItems.classList.add('disabled')
        containerPokedexActions.classList.add('disabled')
        containerPokedexSend.classList.add('disabled')
    }
}

const removePokemonPokedex = (e) => {
    const pokemonsInPokedex = JSON.parse(localStorage.getItem('pokedex'))
    const idBtn = parseInt(e.currentTarget.id)

    const index = pokemonsInPokedex.findIndex(pokemon => pokemon.id === idBtn)
    pokemonsInPokedex.splice(index, 1)

    localStorage.setItem('pokedex', JSON.stringify(pokemonsInPokedex))
    eventRenderPokedex()
}

export const reloadBtnRemovePokemon = () => {
    setTimeout(() => {
        let btnRemovePokemon = document.querySelectorAll('.pokedex-item-delete')
        if (!btnRemovePokemon) {
            return reloadBtnRemovePokemon()
        } else {
            btnRemovePokemon.forEach(btn => btn.addEventListener('click', removePokemonPokedex))
            return btnRemovePokemon
        }
    }, 1000)
}

const clearPokedex = () => {
    const pokemonsInPokedex = JSON.parse(localStorage.getItem('pokedex'))

    pokemonsInPokedex.length = 0

    localStorage.setItem('pokedex', JSON.stringify(pokemonsInPokedex))
    eventRenderPokedex()
}

export const reloadBtnclearPokedex = () => {
    setTimeout(() => {
        let btnClearPokedex = document.querySelectorAll('.pokedex-action-clear')
        if (!btnClearPokedex) {
            return reloadBtnclearPokedex()
        } else {
            btnClearPokedex.forEach(btn => btn.addEventListener('click', clearPokedex))
            return btnClearPokedex
        }
    }, 1000)
}

const totalPokedex = () => {
    const totalPokedex = document.querySelector('#total')
    const pokemonsInPokedex = JSON.parse(localStorage.getItem('pokedex'))

    totalPokedex.innerText = pokemonsInPokedex.reduce((acc, pokemon) => acc + pokemon.count, 0)
}

const sendPokedex = () => {
    const pokemonsInPokedex = JSON.parse(localStorage.getItem('pokedex'))
    const containerPokedexVoid = document.querySelector('.empty-pokedex')
    const containerPokedexItems = document.querySelector('.pokedex-items')
    const containerPokedexActions = document.querySelector('.pokedex-actions')
    const containerPokedexSend = document.querySelector('.pokedex-send')


    pokemonsInPokedex.length = 0

    localStorage.setItem('pokedex', JSON.stringify(pokemonsInPokedex))

    containerPokedexVoid.classList.add('disabled')
    containerPokedexItems.classList.add('disabled')
    containerPokedexActions.classList.add('disabled')
    containerPokedexSend.classList.remove('disabled')
}

export const reloadBtnSendPokedex = () => {
    setTimeout(() => {
        let btnSendPokedex = document.querySelectorAll('.pokedex-action-send')
        if (!btnSendPokedex) {
            return reloadBtnSendPokedex()
        } else {
            btnSendPokedex.forEach(btn => btn.addEventListener('click', sendPokedex))
            return btnSendPokedex
        }
    }, 1000)
}

