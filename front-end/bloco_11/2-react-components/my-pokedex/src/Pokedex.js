import { Component } from 'react';
import Pokemon from './Pokemon';
class Pokedex extends Component {
	render() {
		const pokemons = this.props.pokelist;
		return (
			<div className='pokedex'>
				{pokemons.map((pokemon, index) => {
					return	<Pokemon name={pokemon.name} 
					type={pokemon.type} 
					weight={pokemon.averageWeight.value} 
					unit={pokemon.averageWeight.measurementUnit} 
					url={pokemon.image}
					key={index}/>
				})}
			</div>
		);
	}
}

export default Pokedex;
