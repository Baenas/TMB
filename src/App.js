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
      <div id="root">

        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">
                tmbdata
              </a>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-5">
                <div className="list-group">
                  <Lineas />
                </div>
              </div>
              <Router>

                <Route path="/paradas/linia/:idlin" exact component={ParadasID} />
                <Route path="/:parada" exact component={ParadaData} />
                <Route path="/linea/:lin" exact component={LineaData} />
              </Router>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
