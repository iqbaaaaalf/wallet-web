import axios from 'axios/index';
import moment from 'moment';
import React, { Component } from 'react';
import store from 'simple-global-store';
import Payeelist from './Payeelist';

export default class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: {
        walletId: store.data.walletId,
      },
      to: '',
      amount: '',
      description: '',
      errorAmount: '',
      errorDescription: '',
      payeeList: [],
      message: '',
      name: store.data.name,
    };
    this._handleAmount = this._handleAmount.bind(this);
    this._handleDescription = this._handleDescription.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleAddPayee = this._handleAddPayee.bind(this);
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
    let valid = true;
    if (description === '') {
      valid = false;
      this.setState({
        errorDescription: 'Description is require',
      });
    }
    if (amount === '') {
      valid = false;
      this.setState({
        errorAmount: 'Amount is require',
      });
    }

    if (amount !== '' && Number(amount) <= 0) {
      valid = false;
      this.setState({
        errorDescription: 'Description is require',
      });
    }

    if (to !== '' && valid) {
      axios.post(`http://localhost:3000/wallets/${from.walletId}/transactions`, {
        date: moment().format(),
        amount: amount,
        toWalletID: to.walletId,
        fromWalletID: from.walletId,
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

  _getPayee() {
    axios.get(`http://localhost:3000/users/${store.data.userId}/payees`).then((response) => {
      this.setState({
        payeeList: response.data,
      });
    }).catch((e) => {
      this.setState({
        payeeList: [],
      });
    });
  }

  componentDidMount() {
    this._getPayee();
  }

  _handleAddPayee() {
    this.props.history.push('/addPayee');
  }

  render() {
    return (
        <div className="container">
          <form>
            <div className="card border-primary mb-3 align-content-lg-left">
              <div className="card-header">Transfer</div>
              {this.state.message !== '' ? <span>{this.state.message}</span> : null}
              <div className="row form-padding">
                <div className="col text-left space-left-title">
                  <label htmlFor="from">From:</label>
                </div>
                <div className="col-8 text-left space-left-title">
                  <span className="from">{this.state.name}</span>
                </div>
              </div>
              <div className="row form-padding">
                <div className="col text-left space-left-title">
                  <label htmlFor="To">To:</label>
                </div>
                <div className="col-8">
                  <Payeelist payeelisting={this.state.payeeList}
                             callbackFunction={this._callback.bind(this)} />
                </div>
              </div>
              <div className="row form-padding">
                <div className="col text-left space-left-title">
                  <label htmlFor="amount">Amount: </label>
                </div>
                <div className="col-8">
                  <input type="number" className="amount form-control "
                         onChange={this._handleAmount} />
                </div>
              </div>
              <div className="row form-padding">
                <div className="col text-left space-left-title">
                  <label htmlFor="description">Description :</label>
                </div>
                <div className="col-8">
                  <textarea className="description form-control"
                            onChange={this._handleDescription} />
                </div>
              </div>
              <div className="row form-padding">
                <div className="col-5 text-right">
                  <button type="submit" className="submit btn btn-secondary"
                          onClick={this._handleSubmit}> Send
                  </button>
                </div>
                <div className="col-md-3">
                  <button className={'submit-payee btn btn-secondary'}
                          onClick={this._handleAddPayee}>Add Payee
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
    );
  }
};