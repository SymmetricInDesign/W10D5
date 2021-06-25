import React from 'react';
import ReactDOM from 'react-dom';
import * as ApiUtil from './util/api_util';
import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
import configureStore from './store/store';
import {selectAllPokemon} from './reducers/selectors';
import Root from './components/root'


document.addEventListener('DOMContentLoaded',()=>{
    const root = document.getElementById('root');
    const store = configureStore();
    window.store = store
    window.fetchAllPokemon = ApiUtil.fetchAllPokemon;
    window.receiveAllPokemon = receiveAllPokemon;
    window.getState = store.getState; 
    window.dispatch = store.dispatch;
    window.requestAllPokemon = requestAllPokemon;
    window.selectAllPokemon = selectAllPokemon;
     
    
    ReactDOM.render(<Root store={store}/>, root)
    
});