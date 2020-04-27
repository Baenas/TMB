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
          <Route path="/:parada" exact component={ParadaData} />
             <Route path="/lin/:lin" exact component={LineaData} />
        </Router>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
