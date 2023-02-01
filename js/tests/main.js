import {savePokemons} from '../repository/PokemonRepository.js'
import {countPokedex, eventRenderPokemon, reloadBtnAddPokemon} from '../events/pokemon.js'

savePokemons()
eventRenderPokemon()
reloadBtnAddPokemon()
countPokedex()

