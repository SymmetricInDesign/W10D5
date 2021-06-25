import React from 'react';
import ReactDOM from 'react-dom';
import * as ApiUtil from './util/api_util';
import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
import configureStore from './store/store';
import {selectAllPokemon} from './reducers/selectors';


document.addEventListener('DOMContentLoaded',()=>{
    const root = document.getElementById('root');
    const store = configureStore();
    window.fetchAllPokemon = ApiUtil.fetchAllPokemon;
    window.receiveAllPokemon = receiveAllPokemon;
    window.getState = store.getState; 
    window.dispatch = store.dispatch;
    window.requestAllPokemon = requestAllPokemon;
    window.selectAllPokemon = selectAllPokemon;
     
    
    ReactDOM.render(<h1>Hello World</h1>, root)
    
});