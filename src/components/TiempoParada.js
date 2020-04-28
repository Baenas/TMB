/* eslint-disable no-undef */
import React, { Component } from 'react'
import axios from 'axios'

class TiempoParada extends Component {
    state = {
        tiempo: []
    }

    componentDidMount() {
        axios.get(`https://api.tmb.cat/v1/ibus/lines/${this.props.linia}/stops/${this.props.parada}?app_id=80382dab&app_key=2e9a8d82bda099531e8ad309e5fbab38`)
            .then(res => {

                const tiempo = res.data.data.ibus[0];
                this.setState({ tiempo });

            })

    }

    render() {
        const { tiempo } = this.state

        console.log("TIEMPO ", tiempo)


        return (
            <div>
                {tiempo['text-ca']}
            </div>
        )

    }

}
export default TiempoParada