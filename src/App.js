import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Paradas from "./components/Paradas";
import ParadaData from "./components/ParadaData";
import Lineas from './components/Lineas'
import ParadasID from './components/ParadasID'
import LineaData from './components/LineaData'
class App extends Component {
  render() {
    return (
      <Router>
        <div id="root">
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">
                tmbdata
              </a>
            </div>
          </nav>


          <Route path="/" exact component={Lineas} />

          <Route path="/paradas/linia/:idlin/:s" exact component={ParadasID} />
          <Route path="/:parada/:idlin" exact component={ParadaData} />
          <Route path="/linea/:lin" exact component={LineaData} />


        </div>
      </Router>

    );
  }
}

export default App;
