import axios from 'axios';
import React, { Component } from 'react';

export default class AddPayee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payee: '',
      errorInvalid: '',
      username: '',
    };
    this._onChangeText = this._onChangeText.bind(this);
    this._onClickButtonSearch = this._onClickButtonSearch.bind(this);
    this._handleInputOnPayee = this._handleInputOnPayee.bind(this);
  }

  _onChangeText(event) {
    this.setState({
      username: event.target.value,
      errorInvalid: '',
    });
  }

  _onClickButtonSearch() {
    this.setState({
      payee: '',
      errorInvalid: '',
    });
    const { username } = this.state;
    axios.get(`http://localhost:3000/users?username=${username}`).then((response) => {
      this.setState({
        payee: response.data,
      });
    }).catch((e) => {
      this.setState({
        errorInvalid: e.response.data.message,
      });
    });
  }

  _handleInputOnPayee() {
  };

  render() {
    const { payee, username, errorInvalid } = this.state;
    return (
        <section>
          <div className="card border-primary mb-3 col-4 align-content-lg-center">
            <div className="card-header">ADD Payee</div>
            <div className="card-body text-primary">
              <p>{errorInvalid}</p>
              <input type="text" id="username" onChange={this._onChangeText}
                     value={username} />
              <button type="submit" id="searchPayee" className="submit btn-primary"
                      onClick={this._onClickButtonSearch}> Search
              </button>
              {payee !== '' ? <div>
                <p className="payee">{payee.name}</p>
                <button type="submit" className="payeeExist"
                        onClick={this._handleInputOnPayee}>Add
                </button>
              </div> : null
              }
            </div>
          </div>
        </section>
    );
  }

}