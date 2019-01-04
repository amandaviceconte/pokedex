import React, { Component } from 'react';

import './styles/PokeSearch.css';

class PokeSearch extends Component {
  
  render() {
    return (
      <form className="get-poke-name">
        <input
          type="text"
          name="name"
          placeholder="Pokemon Name"
          onChange={e => {
              this.props.handleChange(e.target.value);
              this.props.sucesso();
            }
          }
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default PokeSearch;