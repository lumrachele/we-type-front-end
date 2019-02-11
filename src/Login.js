import React, { Component } from 'react';


class Login extends Component {
  state= {
    name: '',
    email: '',
    signIn: false,
    createUser: false
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
  handleNewUserName= (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleNewUserEmail= (event) => {
    this.setState({
      email: event.target.value
    })
  }
  handleSubmitNewUser= (event) => {
    event.preventDefault()
    this.props.createNewUser(this.state)
    this.setState({
      name: '',
      email: ''
    })
  }
  handleLogin= () => {
    this.setState({
      signIn: !this.state.signIn
    })
  }
  handleNewUser= () => {
    this.setState({
      createUser: !this.state.createUser
    })
  }
  render() {
    return (
      <div className="Login">
        <h1> Login </h1>
        <button onClick= {this.handleLogin}>Login</button>
        <button onClick= {this.handleNewUser}>Create User</button>
        {this.state.signIn && <form onSubmit= {this.handleSubmit}>
        <label> Name </label>
        <input type= 'text' onChange={this.handleName} value= {this.state.name}/>
        <label> Email </label>
        <input type= 'text' onChange={this.handleEmail} value= {this.state.email}/>
        <button> Submit </button>
        </form>}
        {this.state.createUser && <form onSubmit= {this.handleSubmitNewUser}>
        <label> Name </label>
        <input type= 'text' onChange={this.handleNewUserName} value= {this.state.name}/>
        <label> Email </label>
        <input type= 'text' onChange={this.handleNewUserEmail} value= {this.state.email}/>
        <button> Submit </button>
        </form>}

      </div>
    );
  }
}

export default Login;
