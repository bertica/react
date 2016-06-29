import React, {Component, PropTypes} from 'react'

export default class Cerveza extends Component {
	static propTypes = {
  		marca: PropTypes.string.isRequired,
  		envase: PropTypes.string,
  		key: PropTypes.string,
    	desc: PropTypes.string
	}
	
	constructor(props) {
	   super(props)
	   this.handleClick = this.handleClick.bind(this)
	   this.state = {
	   	  mostrarDescripcion: false
	   }
	}

	handleClick(){
       this.setState({mostrarDescripcion: !this.state.mostrarDescripcion})
  	}

	render() {
		var {key, marca, envase, desc} = this.props
		var descripcion = this.state.mostrarDescripcion ? <textarea>{desc}</textarea> :''
		var textoBoton = this.state.mostrarDescripcion ? 'Quitar descripción': 'Mostrar descripción'
		return (
			<div id={key}>
          		<h1>Marca: {marca}</h1>
          		<p>Envasado: {envase}</p>
          		<button onClick={this.handleClick}>{textoBoton}</button>
          		{descripcion}
        	</div>
		)
	}
}
