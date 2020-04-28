import React, { Component } from "react";
import Recorridos from "../recorreguts.json";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
class ParadaData extends Component {
  state = {
    tmb: []

  }
  Load = () => {
    this.setState({
      tmb: Recorridos.features,
    });
  };
  componentDidMount() {
    this.Load();
  }



  render() {
    const { tmb } = this.state;
    return (
      <div className="col-7">


        {tmb.filter(
          (dat) => dat.properties.NOM_LINIA === this.props.match.params.lin && dat.properties.DESC_SENTIT === "Anada"

        ).map((paradeslist, index) => {
          console.log(paradeslist)
          return (<div key={index} >
            <Link to={"/paradas/linia/" + paradeslist.properties.CODI_LINIA}>
              <div className="box-lineas" >

                <div className="info-linea" >  {paradeslist.properties.NOM_LINIA}  </div>
                {paradeslist.properties.DESC_SENTIT}

                <div className="info-linea-soft">  {paradeslist.properties.DESC_LINIA}  </div>

              </div>


            </Link>
          </div>
          );
        })
        }

      </div >
    );
  }
}
export default ParadaData;
