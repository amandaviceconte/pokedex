import React, { Component } from 'react';
import PokeSearch from './PokeSearch';
import DetailView from './DetailView';
import Pokemon from '../Pokemon';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeName: '',
      pokemon: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (pokemonName) => {
    this.setState({
      pokeName: pokemonName
    });
  }

  sucesso = () => {
    alert('papai');
  }

  // submit não recebe nada
  handleSubmit(ev) {
    ev.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.pokeName}/`)
      .then(response => response.json())
      .then(data => {
        const searchedPokemon = new Pokemon(data);

        this.setState({ pokemon: searchedPokemon });
      })
      .catch(error => console.log(error));
  }


  render() {
    return (
      <div onSubmit={this.handleSubmit} className="App">
        <PokeSearch handleChange={this.handleChange} sucesso={this.sucesso} />
        <DetailView pokemon={this.state.pokemon} />
      </div>
    );
  }
}


export default App;