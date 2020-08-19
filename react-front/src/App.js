import React, { Component } from 'react'
import axios from 'axios';
export default class App extends Component {
  state = {
    departements : []
  }

  async componentDidMount(){
    const result = await axios.get("http://localhost:8888/getDepartements");
    console.log(result);
    this.setState({departements : result.data})
  }
  render() {
    return (
      <div>
          {
            this.state.departements.map(v => {
              return <p className="departement">{v.departement_code} - {v.departement_nom}</p>;
            })
          }
      </div>
    )
  }
}
