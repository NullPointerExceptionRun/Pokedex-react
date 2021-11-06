import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import axios from 'axios';

export default class PokemonList extends Component {
    state={
        url: "https://pokeapi.com/api/v2/pokemon",
        pokemon: null
    };
componentDidMount(){
        const res = axios.get(this.state.url);
}
    render() {
        return (
            <div className="row">
                <PokemonCard  />
                <PokemonCard  />
                <PokemonCard  />
                <PokemonCard  />
                <PokemonCard  />
                <PokemonCard  />
            </div>
        )
    }
}
