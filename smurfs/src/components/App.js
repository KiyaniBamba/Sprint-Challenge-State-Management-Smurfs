import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux'; 
import { fetchSmurfs } from "../actions/actions.js";


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
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}

export default connect(null, { fetchSmurfs })(App) ;