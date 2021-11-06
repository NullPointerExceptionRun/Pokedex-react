import React, { Component } from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";
import reactDom from "react-dom";

export default class PokemonList extends Component {
  state = {
    url: "https://pokeapi.com/api/v2/pokemon",
    pokemon: null,
  };
  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data["results"] });
  }
  render() {
    return (
        <React.Fragment>
        {this.state.pokemon ? (<div className="row">
        {this.state.pokemon.map(pokemon => 
        (<PokemonCard/>
        ))}
      </div>) : (<h1>Loading Pokemon</h1>)}
      </React.Fragment>
    );
  }
}
