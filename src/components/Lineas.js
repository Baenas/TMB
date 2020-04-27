import React, { Component } from "react";
import Linias from "../linies_bus.json";
import axios from "axios";
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
      (dat) => dat.properties.NOM_LINIA.indexOf(this.state.value)   >-1
    ).map((paradeslist) => {
          return (
            <a
              key={paradeslist.properties.ID_LINIA}
              className="list-group-item list-group-item-action"
              href={`/lin/` + paradeslist.properties.NOM_LINIA }
            >
              {" "}
              <span className="list-linea">Linea </span>
              {paradeslist.properties.NOM_LINIA}{" "}
            </a>
          );
        })}
      </div>
    );
  }
}
export default Lineas;
