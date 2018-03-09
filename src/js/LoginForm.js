import React, { Component } from 'react';

export default class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this._handleInputUsername = this._handleInputUsername.bind(this);

  }
  _handleInputUsername(event){
    this.setState({
      username: event.target.value
    });
  }

  render(){
    const { username , password} = this.state;
    return(
        <section>
          <label htmlFor="username">username:</label>
          <input type="text" id="username" onChange={this._handleInputUsername} value={username}/>
        </section>
    );
  }
}