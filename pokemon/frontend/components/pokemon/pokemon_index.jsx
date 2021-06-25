import React from 'react'


class PokemonIndex extends React.Component{

    componentDidMount(){
        this.props.requestAllPokemon()
    }

    render(){

        let pokemonLis = this.props.pokemon.map(pokemon=> <li key={pokemon.id}>{pokemon.name}: <img src={pokemon.imageUrl} alt={pokemon.name} width="100" height='100'/></li> ) 
        return (
            <ul>
                {pokemonLis}
            </ul>
        )
    }

}




export default PokemonIndex