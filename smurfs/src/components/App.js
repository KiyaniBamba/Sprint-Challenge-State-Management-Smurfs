import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux'; 
import { fetchSmurfs } from "../actions/actions.js";
import AddNewSmurf from "./Form.js";


// connect our components

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs()
  }


  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Have fun!</div><br/>
        <AddNewSmurf />
      </div>
    );
  }
}

export default connect(null, { fetchSmurfs })(App) ;