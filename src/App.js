import React, { Component } from 'react';

export default class App extends Component {
  render() {
    var comentarios= [
      {autor: 'Oliver Khan', frase: 'Ultimamente veo más los abdominales de Cristiano Ronaldo que los pechos de mi mujer'},
      {autor: 'Albert Einstein', frase: 'Dos cosas son infinitas: el universo y la estupidez humana; y yo no estoy seguro sobre el universo'}
    ]
    return (
      <div>
        {comentarios.map(comentario => <div><h1>{comentario.autor}</h1><p>{comentario.frase}</p></div>)}
      </div>
    );
  }
}
