import React, { Component } from "react";
import ParadesJson from "../parades.json";
import TiempoParada from './TiempoParada'

class ParadaData extends Component {
  state = {
    parades: ParadesJson,
    error: null,
    parada: this.props.match.params.parada,
    lin: this.props.match.params.idlin
  };

  render() {
    const { parades, parada, lin } = this.state;
    return (
      <div className="col-7">

        {parades.features.filter(
          (dat) => dat.properties.CODI_PARADA == this.props.match.params.parada
        ).map(function (item, i) {
          return (


            <h4 key={i}> {/* ID:   {item.properties.CODI_PARADA} */}  <TiempoParada linia={lin} parada={parada} />  </h4>


          );
        })}
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>

              <td>Ubicacion</td>
              {parades.features.filter(
                (dat) => dat.properties.CODI_PARADA == this.props.match.params.parada
              ).map(function (item, ind) {
                return (

                  <td key={ind}>  {item.properties.DESC_PARADA}</td>


                );
              })}
            </tr>
            <tr>
              <td>Calle de la Parada</td>
              {parades.features.filter(
                (dat) => dat.properties.CODI_PARADA == this.props.match.params.parada
              ).map(function (item, i) {
                return (

                  <td key={i}>  {item.properties.NOM_VIA}</td>


                );
              })}
            </tr>

          </tbody>
        </table>
      </div>
    );
  }
}
export default ParadaData;
