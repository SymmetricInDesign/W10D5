import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { selectAllPokemon } from './selectors';

export const pokemonReducer = (state = {}, action) =>{
    Object.freeze(state);
    debugger
    let nextState = {};
    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
            debugger
            Object.values(action.pokemon).forEach (pokemon=>{
                nextState[pokemon.id] =pokemon;
            });
            return nextState;
            
        default:
            return state;
    }
};