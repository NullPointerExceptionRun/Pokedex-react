import React, { Component } from 'react';
import PokemonCard from './PokemonCard';

export default class PokemonList extends Component {
    state={
        url: "https://pokeapi.com/api/v2/pokemon",
        pokemon: null
    };

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
