import React, { Component } from 'react';

export default class App extends Component {
  render() {
    var cervezas = require('./cervezas.json')
   return (
     <div>
       <h1>Mi lista de cervezas</h1>
       {cervezas.map(cerveza => <div><h2>{cerveza.Nombre}</h2><p>{cerveza.Envase}</p></div>)}
     </div>
    );
  }
}
