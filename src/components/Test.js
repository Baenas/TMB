import React, { Component } from "react";

class Test extends Component {
     state = {
 
    tmb : [],
    error: null
  }


  fetchUsers= () => {
    // Where we're fetching data from
    fetch(`https://api.tmb.cat/v1/ibus/stops/2775?app_id=80382dab&app_key=2e9a8d82bda099531e8ad309e5fbab38`)
      // We get the API response and receive data in JSON format...
      .then((response) => response.json())
      // ...then we update the users state
      .then((data) =>
        this.setState({
          tmb: data.data.ibus,
        
        })
      )
      // Catch any errors we hit and update the app
      .catch((error) => this.setState({ error }));
  }
  componentDidMount() {
    this.fetchUsers();
  }
  
  render() {
 const { tmb } = this.state;
 console.log(tmb)
   return (
        
        tmb.map(info => {
       return(<li> {info.line} </li>)
        }
          ) 
          
   )}
        }
export default Test;