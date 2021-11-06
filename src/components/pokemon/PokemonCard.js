import React, { Component } from "react";

export default class PokemonCard extends Component {
  state = {
    name: '',
    imageUrl: '',
    pokemonIndex: '',
  };

  componentDidMount() {
    const {name, url} = this.props;
    const pokemonIndex = url.split('/')[url.split('/').length - 2];
  }

    render() {
    return  (
      <div className="col-md-3 col-sm-6 mb-5">
        {/* Cards pokemon */}
        <div className="card">
          <div className="card-header">
            
            <h1>{this.state.name}</h1>
          </div>
        </div>
      </div>
    );
  }
}
