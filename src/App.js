import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Index from './views/Index'
import Contactar from './views/Contactar'
import Cervezas from './views/Cervezas'

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Index}/>
        <Route path="/cervezas" component={Cervezas}/>
        <Route path="/contactar" component={Contactar}/>
      </Router>
    )
  }
}