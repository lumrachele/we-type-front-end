import React, { Component } from 'react';


class Login extends Component {
  state= {
    name: '',
    email: ''
  }
  handleName= (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleEmail= (event) => {
    this.setState({
      email: event.target.value
    })
  }
  handleSubmit= (event) => {
    event.preventDefault()
    this.props.submitLogin(this.state)
    this.setState({
      name: '',
      email: ''
    })
  }
  render() {
    return (
      <div className="Login">
      <h1> Login </h1>
        <form onSubmit= {this.handleSubmit}>
        <label> Name </label>
        <input type= 'text' onChange={this.handleName} value= {this.state.name}/>
        <label> Email </label>
        <input type= 'text' onChange={this.handleEmail} value= {this.state.email}/>
        <button> Submit </button>
        </form>
      </div>
    );
  }
}

export default Login;
