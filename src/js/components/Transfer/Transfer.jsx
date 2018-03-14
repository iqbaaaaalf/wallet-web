import axios from 'axios/index';
import React, { Component } from 'react';
import Payeelist from './Payeelist';

export default class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: {
        walletId: 1,
      },
      to: '',
      amount: '',
      description: '',
      errorAmount: '',
      errorDescription: '',
      payeeList: [],
    };
    this._handleAmount = this._handleAmount.bind(this);
    this._handleDescription = this._handleDescription.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleAmount(event) {
    this.setState({
      amount: event.target.value,
    });
  }

  _handleDescription(event) {
    this.setState({
      description: event.target.value,
    });
  }

  _callback(wallet) {
    this.setState({
      to: {
        walletId: wallet,
      },
    });
  }

  _handleSubmit(event) {
    event.preventDefault();
    const { from, to, amount, description } = this.state;
    if (amount === '') {
      this.setState({
        errorAmount: 'Amount is require',
      });
    }
    if (description === '') {
      this.setState({
        errorDescription: 'Description is require',
      });
    }

    if (to !== '') {
      axios.post(`http://localhost:3000/wallets/${from.walletId}/transactions`, {
        amount: amount,
        toWalletID: to.walletId,
        fromWalletID: from.walletId,
      }).then((response) => {
      }).catch((e) => {
      });
    }
  }

  _getPayee() {
    axios.get('http://localhost:3000/users/1/payees').then((response) => {
      this.setState({
        payeeList: response.data,
      });
    }).catch((e) => {
      console.log(e);
    });
  }

  componentDidMount() {
    this._getPayee();
  }

  render() {
    return (
        <div className="container">
          <form>
            <div className="card border-primary mb-3 align-content-lg-center">
              <div className="card-header">Transfer</div>
              <div className="card-body text-primary">
                <div className="row">
                  <div className="col">
                    <label htmlFor="from">From:</label>
                  </div>
                  <div className="col-8">
                    <span className="from">Budi</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="To">To:</label>
                </div>
                <div className="col-8">
                  <Payeelist payeelisting={this.state.payeeList}
                             callbackFunction={this._callback.bind(this)} />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="amount">Amount: </label>
                </div>
                <div className="col-8">
                  <input type="text" className="amount" onChange={this._handleAmount} />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="description">Description :</label>
                </div>
                <div className="col-8">
                  <textarea className="description" onChange={this._handleDescription} />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button type="submit" className="submit btn btn-secondary"
                          onClick={this._handleSubmit}> Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
    );
  }
}