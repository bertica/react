import React, { Component } from 'react';
import Cerveza from './Cerveza'
export default class App extends Component {
  render() {
    var cervezas = require('./cervezas.json')
   return (
     <div>
       <h1>Mi lista</h1>
       {cervezas.map(cerveza => <Cerveza key={cerveza.Nombre} marca={cerveza.Nombre} envase={cerveza.Envase}/>)}
     </div>
    );
  }
}
