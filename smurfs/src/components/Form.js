import React, { Component } from 'react';
import { addSmurfs } from '../actions/actions.js';

import { connect } from 'react-redux'

class AddNewSmurf extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }


changeHandler = (info) => {
    this.setState({
        [info.target.name] : info.target.value
    })
 }

 handleSubmit = (info) => {
    info.preventDefault()
     this.props.addSmurfs(this.state)
     this.setState({
         name: '',
         age: '',
         height: ''
     })
 }

  render() {
    return (
      <>
          <form onSubmit={this.handleSubmit} >
            <input type="text" name="name" placeholder="name" value={this.state.name} onChange={(info) => this.changeHandler(info)}/>
            <input type="number" name="age" placeholder="age" value={this.state.age} onChange={(info) => this.changeHandler(info)}/>
            <input type="text" name="height" placeholder="height" value={this.state.height} onChange={(info) => this.changeHandler(info)}/>
            <button> Add a Smurf </button>
          </form>
      </>
    )
  }
}

export default connect(
        null,
        { addSmurfs }
     )(AddNewSmurf)
