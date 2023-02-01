import {savePokemons} from '../repository/PokemonRepository.js'
import {countPokedex, eventRenderPokemon, reloadBtnAddPokemon, reloadRenderPokemons} from '../events/pokemon.js'
import {btnLogout} from '../events/user.js'

savePokemons()
btnLogout()
reloadRenderPokemons()
eventRenderPokemon()
reloadBtnAddPokemon()
countPokedex()
