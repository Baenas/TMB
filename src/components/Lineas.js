import React, { Component } from "react";
import Linias from "../linies_bus.json";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
class Lineas extends Component {
  state = {
    tmb: [],
    value: "",
  };
  Load = () => {
    this.setState({
      tmb: Linias.features,
    });
  };
  componentDidMount() {
    this.Load();
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });




  };
  render() {
    const { tmb, value } = this.state;

    return (
      <div>
        <input
          onChange={this.handleChange}
          placeholder="Busca Linea de Autobus"
          className="list-group-item list-group-item-action"
        ></input>

        {tmb.filter(
          (dat) => dat.properties.NOM_LINIA.toLowerCase().indexOf(this.state.value.toLowerCase()) > -1
        ).map((paradeslist, index) => {
          return (
            <div key={index}>

              <a
                className="list-group-item list-group-item-action"
                href={`/linea/` + paradeslist.properties.NOM_LINIA} >
                {paradeslist.properties.NOM_LINIA}
              </a>



            </div>

          );
        })
        }
      </div >
    );
  }
}
export default Lineas;
