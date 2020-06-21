import React, { Component } from 'react'
import axios from 'axios'
import TienpoParada from './TiempoParada'
import TiempoParada from './TiempoParada'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
} from "react-router-dom";
class ParadasId extends Component {

    state = {
        paradas: [],
        sentido: this.props.match.params.s
    }

    componentDidMount() {
        axios.get(`https://api.tmb.cat/v1/transit/linies/bus/${this.props.match.params.idlin}/parades?app_id=80382dab&app_key=2e9a8d82bda099531e8ad309e5fbab38`)
            .then(res => {
                const paradas = res.data.features;
                this.setState({ paradas });
            })
    }
    render() {
        const { paradas, sentido } = this.state
        return (
            <div>

                {paradas.filter(
                    (dat) => dat.properties.DESC_SENTIT === sentido).sort((a, b) => a.properties.ORDRE - b.properties.ORDRE).map((paradeslist, index) => {

                        return (

                            <div key={index} className="box-lineas" >
                                <TiempoParada linia={paradeslist.properties.NOM_LINIA} parada={paradeslist.properties.CODI_PARADA} />

                                <div className="info-linea" key={index}>  {paradeslist.properties.NOM_LINIA} {paradeslist.properties.NOM_PARADA} </div>
                                {paradeslist.properties.DESC_SENTIT}

                                <div className="info-linea-soft">  {paradeslist.properties.DESC_LINIA}  {paradeslist.properties.CODI_PARADA} </div>
                                <Link to={"/" + paradeslist.properties.CODI_PARADA + "/" + paradeslist.properties.NOM_LINIA}><button className="btn btn-success">Ver Parada</button> </Link>
                            </div>


                        );
                    })
                }
            </div >

        )
    }
}

export default ParadasId