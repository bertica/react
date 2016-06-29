import React, {Component, PropTypes} from 'react'

export default class Cerveza extends Component {
	static propTypes = {
  		marca: PropTypes.string,
  		envase: PropTypes.string,
  		key: PropTypes.string
	}
	render() {
		return (
			<div id={this.props.key}>
          		<h1>Marca: {this.props.marca}</h1>
          		<p>Envasado: {this.props.envase}</p>
        	</div>
		)
	}
}
