import React, { Component } from 'react';
import Cerveza from './Cerveza'
export default class App extends Component {

  getCervezas() {
    var cervezas = require('./cervezas.json')
    return cervezas.map(cerveza =><Cerveza key={cerveza.Nombre} 
    								marca={cerveza.Nombre} 
    								envase={cerveza.Envase}
    								desc={cerveza.Descripción}/>)
  }

  render() {
   let cervezas = this.getCervezas()
    return (
      <main>
        <h1>Mi lista de cervezas</h1>
        {cervezas}
      </main>
    );
  }
}
