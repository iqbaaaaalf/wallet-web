import React, { Component } from 'react';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorUsername: '',
      errorPassword: '',
      errorInvalid: '',
    };
    this._handleInputUsername = this._handleInputUsername.bind(this);
    this._handleInputPassword = this._handleInputPassword.bind(this);
    this._handleInputOnSubmit = this._handleInputOnSubmit.bind(this);
  }

  _handleInputUsername(event) {
    this.setState({
      username: event.target.value,
    });
  }

  _handleInputPassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  _handleInputOnSubmit() {
    const { username, password } = this.state;
    const data = {
      username: username,
      password: password,
    };

    if (username === '') {
      this.setState({
        errorUsername: 'username require',
      });
    }

    if (password === '') {
      this.setState({
        errorPassword: 'password require',
      });
    }
    if(username === '' && password === ''){
      this.setState({
        errorInvalid: 'username and password is required'
      });
    }
    this.props.onSubmit(data);
  }

  render() {
    const { username, password } = this.state;
    return (
        <section>
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
             <form>
                   <div className="avatar"></div>
              <div className="row justify-content-md-center">
                <div className="form-group">
                  <label htmlFor="ErrorUsername"></label>
                  <input type="text" className="username" className="form-control" onChange={this._handleInputUsername}
                         value={username} placeholder= "Username"/>
                </div>
              </div>
              <div className="row justify-content-md-center">
                <div className="form-group">
                  <label htmlFor="ErrorPassword"></label>
                  <input type="text" className="password" className="form-control" onChange={this._handleInputPassword}
                         value={password} placeholder= "Password"/>
                </div>
              </div>
                <div className="row justify-content-md-center">
                   <button className="submit" className="btn btn-primary" onClick={this._handleInputOnSubmit}>Login</button>
                </div>
             </form>
            </div>
          </div>
        </section>
    );
  }
}