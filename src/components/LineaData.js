import React, { Component } from "react";
import Recorridos from "../recorreguts.json";

class ParadaData extends Component {

 Load = () => {
    this.setState({
      tmb: Recorridos.features,
    });
  };
  componentDidMount() {
    this.Load();
  }
  render() {
    return (
      <div className="col-7">
       
 {this.props.match.params.lin}
      </div>
    );
  }
}
export default ParadaData;
