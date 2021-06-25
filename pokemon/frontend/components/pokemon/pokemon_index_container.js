
import {connect} from 'react-redux'
import PokemonIndex from './pokemon_index'
import {requestAllPokemon} from '../../actions/pokemon_actions'
import {selectAllPokemon} from '../../reducers/selectors'

const mSTP = (state) =>{
 return {
     pokemon: selectAllPokemon(state)
 }
}

const mDTP = (dispatch) =>({
    requestAllPokemon: () =>{
        return dispatch(requestAllPokemon())
    }
})


export default connect(mSTP, mDTP)(PokemonIndex)