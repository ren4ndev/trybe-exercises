import { Component } from "react";

class Pokemon extends Component {
	render() {
		return (
			<div className='card'>
				<ul className='card-list'>
					<li className='card-item'>Nome: {this.props.name}</li>
					<li className='card-item'>Tipo: {this.props.type}</li>
					<li className='card-item'>Peso: {this.props.weight}{this.props.unit}</li>
				</ul>
				<img className='card-img' src={this.props.url} />
			</div>
		);
	}
}

export default Pokemon;
