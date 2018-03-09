import React, { Component } from 'react';

export default class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this._handleInputUsername = this._handleInputUsername.bind(this);
    this._handleInputPassword = this._handleInputPassword.bind(this);
  }
  _handleInputUsername(event){
    this.setState({
      username: event.target.value
    });
  }
  _handleInputPassword(event){
    this.setState({
      password: event.target.value
    });
  }
  render(){
    const { username , password} = this.state;
    return(
        <section>
          <label htmlFor="username">username:</label>
          <input type="text" id="username" onChange={this._handleInputUsername} value={username}/>
          <label htmlFor="password">username:</label>
          <input type="text" id="password" onChange={this._handleInputPassword} value={password}/>
        </section>
    );
  }
}