import axios from 'axios';
import md5 from 'md5';
import React, { Component } from 'react';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMessage: {
        ifUsernameEmpty: '',
        ifPasswordEmpty: '',
        ifCredentialWrong: '',
      },
    };
    this._handleInputUsername = this._handleInputUsername.bind(this);
    this._handleInputPassword = this._handleInputPassword.bind(this);
    this._handleInputOnSubmit = this._handleInputOnSubmit.bind(this);
  }

  _handleInputUsername(event) {
    this.setState({
      username: event.target.value,
      errorMessage: {
        ifUsernameEmpty: '',
      },
    });
  }

  _handleInputPassword(event) {
    this.setState({
      password: event.target.value,
      errorMessage: {
        ifPasswordEmpty: '',
      },
    });

  }

  async _handleInputOnSubmit() {
    const { username, password } = this.state;

    if (username === '') {
      this.setState(prevState => ({
        errorMessage: {
          ...prevState.errorMessage,
          ifUsernameEmpty: 'username is require',
        },
      }));
    }

    if (password === '') {
      this.setState(prevState => ({
        errorMessage: {
          ...prevState.errorMessage,
          ifPasswordEmpty: 'password is require',
        },
      }));
    }

    if (username !== '' || password !== '') {
      axios({
        method: 'POST',
        url: 'http://localhost:3001/login',
        data: {
          username: username,
          password: md5(password),
        },
      }).then(() => {
        this.props.onSubmit();
      }).catch(() => {
        this.setState(prevState => ({
          errorMessage: {
            ...prevState.errorMessage,
            ifCredentialWrong: 'invalid username or password',
          },
        }));
      });
    }

  }

  render() {
    const { username, password, errorMessage } = this.state;
    return (
        <section>
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <div className="avatar"></div>
              <div className="row justify-content-md-center">
                <label htmlFor="ErrorCredential">{errorMessage.ifUsernameEmpty}</label>
                <div className="form-group">
                  <label htmlFor="ErrorUsername">{errorMessage.ifUsernameEmpty}</label>
                  <input type="text" className="username form-control"
                         onChange={this._handleInputUsername}
                         value={username} placeholder="Username"/>
                </div>
              </div>
              <div className="row justify-content-md-center">
                <div className="form-group">
                  <label htmlFor="ErrorPassword">{errorMessage.ifPasswordEmpty}</label>
                  <input type="text" className="password form-control"
                         onChange={this._handleInputPassword}
                         value={password} placeholder="Password"/>
                </div>
              </div>
              <div className="row justify-content-md-center">
                <button className="submit btn btn-primary"
                        onClick={this._handleInputOnSubmit}>Login
                </button>
              </div>
            </div>
          </div>
        </section>
    );
  }
}