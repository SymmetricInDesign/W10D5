export const selectAllPokemon = (state) =>{
    return Object.keys(state).map(id=>state[id]);
     
};