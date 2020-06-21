import React, { Component } from "react";
import Linias from "../linies_bus.json";
import axios from "axios";
import "../App.css";
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


        <div className=" list-group-item mitad box-lineas" >
          <Link to="/linea/110">
            <button className=" btn margin btn-primary ">110</button>
          </Link>
          <Link to="/linea/109">
            <button className=" btn  margin btn-primary ">109</button>
          </Link>
          <Link to="/linea/21">
            <button className=" btn margin  btn-primary ">21</button>
          </Link>

        </div>
        <div className=" list-group-item mitad box-lineas" >
          <Link to="/1980/110">
            <button className=" btn margin btn-primary ">Av. Carr - 110</button>
          </Link>


        </div>
        <div className="box-lineas">
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
      </div>
    );
  }
}
export default Lineas;
