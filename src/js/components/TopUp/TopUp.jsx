import axios from 'axios';
import React, { Component } from 'react';

export default class TopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      message: '',
      userId: '1',
    };
    this._handleAmountTopUp = this._handleAmountTopUp.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleAmountTopUp(event) {
    this.setState({
      amount: event.target.value,
    });
  }

  _handleSubmit() {
    const { amount, userId } = this.state;
    let valid = true;
    if (amount === '') {
      valid = false;
      this.setState({
        message: 'Amount Required',
      });
    }

    if (amount !== '' && Number(amount) <= 0) {
      valid = false;
      this.setState({
        message: 'Invalid Amount',
      });
    }

    if (valid) {
      axios.post(`http://localhost:3000/users/${userId}/wallets`, {
        amount: Number(amount),
      }).then((response) => {
        this.setState({
          message: 'Success',
        });
      }).catch((e) => {
        this.setState({
          message: e.response.data.message,
        });
      });
    }
  }

  render() {
    const { amount, message } = this.state;
    return (
        <div className={'container'}>
          <div className="card border-primary mb-3 align-content-lg-center">
            <div className="card-header">Top Up Wallet</div>
            <div className="card-body text-primary">
              <div className="row">
                <div className="col">
                  {message !== '' ? <p>{message}</p> : <p></p>}
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input type="number" id="amount" onChange={this._handleAmountTopUp}
                         placeholder="ex:50000"
                         value={amount} />
                </div>
              </div>
              <button type="submit" id="submit" className="submit" onClick={this._handleSubmit}>Top
                Up
              </button>
            </div>
          </div>
        </div>
    );
  }
}