import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Index from './views/Index'
import Contactar from './views/Contactar'
import Cervezas from './views/Cervezas'
import Template from './layout/Template'

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Template}>
          /*observa que definimos IndexRoute, que será la ruta por defecto*/
          /*Todas las rutas siguientes están anidadas dentro de template, es decir
          son hijas de la anterior y desde la template cargaremos la que corresponda*/
          <IndexRoute component={Index}/>
          <Route path='/cervezas' component={Cervezas}/>
          <Route path='/contactar' component={Contactar}/>
        </Route>
      </Router>
    )
  }
}