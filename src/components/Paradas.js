import React, { Component } from "react";
import ParadesJson from '../parades.json'
class Paradas extends Component{
         state = {
 
    parades : ParadesJson ,
    error: null
  }
 
 
render() {
    const {parades} = this.state
    console.log(parades)
    return (
          parades.features.map(paradeslist => {
       return(<a  key={paradeslist.properties.ID_PARADA } className="list-group-item list-group-item-action" href={paradeslist.properties.CODI_PARADA}>{paradeslist.properties.CODI_PARADA} {paradeslist.properties.NOM_PARADA}   </a>)
        }
            
        
    )
    )
}

}
export default Paradas;